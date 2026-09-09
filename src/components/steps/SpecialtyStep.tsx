"use client";

import { useAppStore } from "@/lib/store";
import { SelectableCard } from "@/components/ui/SelectableCard";
import { SPECIALTIES } from "@/lib/data/specialties";
import { CHARACTERISTIC_NAMES, Characteristic, CHARACTERISTICS } from "@/lib/types";

export function SpecialtyStep() {
  const character = useAppStore((s) => s.character);
  const updateCharacter = useAppStore((s) => s.updateCharacter);

  const specialty = SPECIALTIES.find((s) => s.id === character.specialtyId);
  const hasChoice = specialty ? /\bou\b/i.test(specialty.characteristicBonus) : false;
  const choiceOptions: Characteristic[] = specialty
    ? CHARACTERISTICS.filter((c) => specialty.characteristicBonus.includes(CHARACTERISTIC_NAMES[c]))
    : [];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-lg">Guardas (infantaria comum)</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {SPECIALTIES.filter((s) => s.group === "Guarda").map((s) => (
            <SelectableCard
              key={s.id}
              title={s.name}
              subtitle={s.characteristicBonus}
              right={`${s.xpStart} pe`}
              description={s.gear[0]}
              selected={character.specialtyId === s.id}
              onClick={() =>
                updateCharacter({
                  specialtyId: s.id,
                  specialtyCharacteristicChoice: null,
                  specialtyTalentChoices: {},
                  specialtySkillChoices: {},
                })
              }
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-semibold text-lg">Especialistas de Apoio</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {SPECIALTIES.filter((s) => s.group === "Apoio").map((s) => (
            <SelectableCard
              key={s.id}
              title={s.name}
              subtitle={s.characteristicBonus}
              right={`${s.xpStart} pe`}
              description={s.gear[0]}
              selected={character.specialtyId === s.id}
              onClick={() =>
                updateCharacter({
                  specialtyId: s.id,
                  specialtyCharacteristicChoice: null,
                  specialtyTalentChoices: {},
                  specialtySkillChoices: {},
                })
              }
            />
          ))}
        </div>
      </div>

      {specialty && (
        <div className="card p-4 flex flex-col gap-3">
          <h3 className="font-semibold">{specialty.name}</h3>
          <p className="text-sm text-muted">
            Aptidões: {specialty.initialAptitudes.join(", ")}
          </p>
          <p className="text-sm text-muted">Perícias iniciais: {specialty.initialSkills.join(", ")}</p>
          <p className="text-sm text-muted">
            Ferimentos: {specialty.woundsFormula} · XP inicial: {specialty.xpStart} pe
          </p>
          {specialty.specialRules && specialty.specialRules.length > 0 && (
            <ul className="text-sm text-muted list-disc list-inside">
              {specialty.specialRules.map((r) => (
                <li key={r.name}>
                  <span className="text-foreground">{r.name}:</span> {r.effect}
                </li>
              ))}
            </ul>
          )}

          {hasChoice && choiceOptions.length > 0 && (
            <div>
              <p className="text-sm font-semibold mb-1">Escolha o bônus de característica:</p>
              <div className="flex gap-2">
                {choiceOptions.map((c) => (
                  <button
                    key={c}
                    className={
                      "px-3 py-1 rounded border text-sm " +
                      (character.specialtyCharacteristicChoice === c
                        ? "border-accent bg-surface-2 text-accent"
                        : "border-border text-muted")
                    }
                    onClick={() => updateCharacter({ specialtyCharacteristicChoice: c })}
                  >
                    {CHARACTERISTIC_NAMES[c]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
