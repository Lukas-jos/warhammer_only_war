"use client";

import { useRouter } from "next/navigation";
import { useAppStore } from "@/lib/store";
import { StepShell } from "@/components/StepShell";
import { RegimentStep } from "@/components/steps/RegimentStep";
import { CharacteristicsStep } from "@/components/steps/CharacteristicsStep";
import { SpecialtyStep } from "@/components/steps/SpecialtyStep";
import { AdvancesStep } from "@/components/steps/AdvancesStep";
import { EquipmentStep } from "@/components/steps/EquipmentStep";
import { BackgroundStep } from "@/components/steps/BackgroundStep";
import { CHARACTERISTICS } from "@/lib/types";
import { rollFormula } from "@/lib/engine/derivedStats";

const TITLES = [
  { title: "Criação de Regimento", description: "Monte o regimento de onde sua Esquadra virá — mundo natal, oficial comandante e doutrinas de treinamento e equipamento." },
  { title: "Gerando Características", description: "Role ou distribua pontos entre as 9 Características do seu Guarda." },
  { title: "Escolha sua Especialidade", description: "A Especialidade define aptidões, perícias, talentos, equipamento e ferimentos iniciais do personagem." },
  { title: "Avanços de Experiência", description: "Gaste sua Experiência inicial em avanços de Característica, Perícia, Talento e (se Psyker) Poderes Psíquicos." },
  { title: "Equipamento", description: "Revise o kit do seu regimento e especialidade, e adicione itens extras do Arsenal." },
  { title: "Antecedentes", description: "Dê vida ao seu personagem: nome, comportamento, motivações e Camarada." },
];

export default function CriarPage() {
  const router = useRouter();
  const step = useAppStore((s) => s.step);
  const setStep = useAppStore((s) => s.setStep);
  const character = useAppStore((s) => s.character);
  const regiment = useAppStore((s) => s.regiment);
  const updateCharacter = useAppStore((s) => s.updateCharacter);

  const { title, description } = TITLES[step];

  function goNext() {
    if (step === 1) {
      // Ao sair da etapa de Características, rola Ferimentos e Pontos de Destino iniciais
      // caso ainda não tenham sido rolados (dependem da Especialidade, então também
      // são re-verificados ao sair da etapa de Especialidade).
    }
    if (step === 2 && character.woundsRoll === null) {
      const woundsRoll = rollFormula("1d5");
      const fatePointsRoll = rollFormula("1d10");
      const fatePoints = fatePointsRoll >= 10 ? 3 : fatePointsRoll >= 8 ? 2 : 1;
      updateCharacter({ woundsRoll, fatePointsRoll, fatePoints });
    }
    if (step < TITLES.length - 1) setStep(step + 1);
    else router.push("/ficha");
  }

  function goBack() {
    if (step > 0) setStep(step - 1);
  }

  const nextDisabled =
    (step === 0 &&
      ((regiment.mode === "example" && !regiment.exampleRegimentId) ||
        (regiment.mode === "custom" && (!regiment.homeworldId || !regiment.officerPersonalityId)) ||
        !regiment.mode)) ||
    (step === 1 && CHARACTERISTICS.some((c) => character.baseCharacteristics[c] === 0)) ||
    (step === 2 && !character.specialtyId);

  return (
    <StepShell
      stepIndex={step}
      title={title}
      description={description}
      onBack={step > 0 ? goBack : undefined}
      onNext={goNext}
      nextLabel={step === TITLES.length - 1 ? "Ver Ficha Final" : "Continuar"}
      nextDisabled={nextDisabled}
    >
      {step === 0 && <RegimentStep />}
      {step === 1 && <CharacteristicsStep />}
      {step === 2 && <SpecialtyStep />}
      {step === 3 && <AdvancesStep />}
      {step === 4 && <EquipmentStep />}
      {step === 5 && <BackgroundStep />}
    </StepShell>
  );
}
