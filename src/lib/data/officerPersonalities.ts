import { OfficerPersonality } from "@/lib/types";

export const OFFICER_PERSONALITIES: OfficerPersonality[] = [
  {
    id: "bilioso",
    name: "Bilioso",
    cost: 2,
    description:
      "Temperamento ruim, paranoico, eternamente suspeito de traição; encoraja suspeita e cautela entre seus homens.",
    grantedTalents: ["Paranoia"],
  },
  {
    id: "circunspecto",
    name: "Circunspecto",
    cost: 2,
    description:
      "Equilibrado, cuidadoso na tomada de decisão, às vezes excessivamente cauteloso; encoraja os homens a considerarem as ações antes de atacar.",
    grantedTalents: ["Presciência"],
  },
  {
    id: "colerico",
    name: "Colérico",
    cost: 2,
    description:
      "Decisivo, lidera pela frente, toma controle das situações pessoalmente; pode se enfurecer e induzir a ações tolas. Seus homens estão sempre prontos para ação, familiarizados com os rigores da batalha.",
    grantedTalents: ["Reação Rápida"],
  },
  {
    id: "dissidente",
    name: "Dissidente",
    cost: 2,
    description:
      "Como um rebelde, indisciplinado e imprevisível, mas amado por seus homens, que o veem como um deles. Contanto que lidere, seguirão para qualquer lugar.",
    grantedTalents: ["Resistência (Medo)"],
  },
  {
    id: "fixado",
    name: "Fixado",
    cost: 1,
    description:
      "Decisivo e inflexível; raramente muda de ideia — inestimável em muitas ações, mas deixa suas forças inflexíveis diante de campos de batalha mutantes.",
    grantedSkills: ["Comando"],
  },
  {
    id: "flematico",
    name: "Fleumático",
    cost: 1,
    description:
      "Quieto e contemplador, homem de poucas palavras; comanda lealdade através de competência silenciosa; homens aprendem a confiar em sua habilidade e depender da cadeia de comando.",
    grantedSkills: ["Conhecimento Comum (Guarda Imperial)", "Conhecimento Comum (Guerra)"],
  },
  {
    id: "inerte",
    name: "Inerte",
    cost: 1,
    description:
      "Devoto e leal ao Imperium, mas com pouca iniciativa própria; serve como pouco mais que um porta-voz. Sem comando verdadeiro, os homens devem ter fé para sobreviver à fúria da guerra.",
    grantedSkills: ["Conhecimento Comum (Credo Imperial)", "Conhecimento Comum (Ecclesiocracia)"],
  },
  {
    id: "melancolico",
    name: "Melancólico",
    cost: 2,
    description:
      "Cuidadoso e introspectivo, mas sua liderança é sabotada por hesitação e pessimismo; seus guerreiros são frequentemente forçados a depender mais de sua própria iniciativa em batalha.",
    grantedTalents: ["Ar de Autoridade"],
  },
  {
    id: "sanguineo",
    name: "Sanguíneo",
    cost: 2,
    description:
      "Confiante e otimista, inspira seus homens com discursos grandiosos e heroísmo, mas suas ambições os colocam contra obstáculos impossíveis, e devem lutar duro para sobreviver.",
    grantedTalents: ["Duros de Matar"],
  },
];
