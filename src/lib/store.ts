"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Aptitude, Characteristic } from "@/lib/types";

// ---------------------------------------------------------------------------
// Estado de criação de Regimento
// ---------------------------------------------------------------------------

export interface RegimentState {
  mode: "example" | "custom" | null;
  exampleRegimentId: string | null;

  homeworldId: string | null;
  homeworldCharacteristicChoice: Characteristic[]; // quais das opções foram escolhidas
  homeworldTalentChoices: Record<number, string>; // índice da escolha -> talento escolhido

  officerPersonalityId: string | null;

  doctrineIds: string[]; // inclui exatamente 1 "Tipo de Regimento"
  doctrineTalentChoices: Record<string, string>; // doctrineId -> talento escolhido
  doctrineNamedChoices: Record<string, string>; // doctrineId -> texto livre (ex.: terreno, inimigo)

  additionalKitSelections: { itemId: string; label: string; cost: number }[];

  regimentName: string;
  regimentNumber: string;
}

const emptyRegiment: RegimentState = {
  mode: null,
  exampleRegimentId: null,
  homeworldId: null,
  homeworldCharacteristicChoice: [],
  homeworldTalentChoices: {},
  officerPersonalityId: null,
  doctrineIds: [],
  doctrineTalentChoices: {},
  doctrineNamedChoices: {},
  additionalKitSelections: [],
  regimentName: "",
  regimentNumber: "",
};

// ---------------------------------------------------------------------------
// Estado de criação de Personagem
// ---------------------------------------------------------------------------

export type GenerationMethod = "dados" | "pontos";

export interface XPPurchase {
  id: string; // chave única (ex.: "char:HA:simples", "skill:atencao:treinado", "talent:arrancada")
  type: "characteristic" | "skill" | "talent" | "comradeAdvance" | "psychicPower" | "psyRating";
  refId: string; // id da característica/perícia/talento/poder
  label: string;
  tier?: string | number;
  cost: number;
  specialization?: string; // para perícias/talentos especialistas
}

export interface EquipmentSelection {
  id: string;
  name: string;
  source: "kit" | "arsenal";
  qty: number;
}

export interface CharacterState {
  name: string;
  gender: string;
  age: string;
  handedness: "Destro" | "Canhoto";
  behaviorId: string | null;
  ambition: string;
  sacrifice: string;
  hatred: string;

  generationMethod: GenerationMethod;
  baseCharacteristics: Record<Characteristic, number>;
  rerolledCharacteristic: Characteristic | null;
  pointBuyAllocations: Record<Characteristic, number>;

  specialtyId: string | null;
  specialtyCharacteristicChoice: Characteristic | null; // quando a especialidade dá "+5 HB ou +5 HA"
  specialtyTalentChoices: Record<number, string>;
  specialtySkillChoices: Record<number, string>;

  woundsRoll: number | null; // resultado do 1d5 rolado
  fatePointsRoll: number | null; // resultado do 1d10 rolado
  fatePoints: number | null; // valor final (1-3) após consultar a Tabela 3-13

  xpPurchases: XPPurchase[];

  equipment: EquipmentSelection[];

  comradeName: string;
  comradeBehaviorId: string | null;
}

const emptyCharacteristics: Record<Characteristic, number> = {
  HA: 0,
  HB: 0,
  F: 0,
  D: 0,
  Ag: 0,
  Int: 0,
  Per: 0,
  Von: 0,
  Cam: 0,
};

const emptyCharacter: CharacterState = {
  name: "",
  gender: "",
  age: "",
  handedness: "Destro",
  behaviorId: null,
  ambition: "",
  sacrifice: "",
  hatred: "",
  generationMethod: "dados",
  baseCharacteristics: { ...emptyCharacteristics },
  rerolledCharacteristic: null,
  pointBuyAllocations: { ...emptyCharacteristics },
  specialtyId: null,
  specialtyCharacteristicChoice: null,
  specialtyTalentChoices: {},
  specialtySkillChoices: {},
  woundsRoll: null,
  fatePointsRoll: null,
  fatePoints: null,
  xpPurchases: [],
  equipment: [],
  comradeName: "",
  comradeBehaviorId: null,
};

// ---------------------------------------------------------------------------
// Store combinado
// ---------------------------------------------------------------------------

interface AppState {
  step: number;
  regiment: RegimentState;
  character: CharacterState;

  setStep: (step: number) => void;
  updateRegiment: (patch: Partial<RegimentState>) => void;
  updateCharacter: (patch: Partial<CharacterState>) => void;
  addXpPurchase: (purchase: XPPurchase) => void;
  removeXpPurchase: (id: string) => void;
  addEquipment: (item: EquipmentSelection) => void;
  removeEquipment: (id: string) => void;
  resetAll: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      step: 0,
      regiment: emptyRegiment,
      character: emptyCharacter,

      setStep: (step) => set({ step }),
      updateRegiment: (patch) =>
        set((s) => ({ regiment: { ...s.regiment, ...patch } })),
      updateCharacter: (patch) =>
        set((s) => ({ character: { ...s.character, ...patch } })),
      addXpPurchase: (purchase) =>
        set((s) => ({
          character: {
            ...s.character,
            xpPurchases: [...s.character.xpPurchases.filter((p) => p.id !== purchase.id), purchase],
          },
        })),
      removeXpPurchase: (id) =>
        set((s) => ({
          character: {
            ...s.character,
            xpPurchases: s.character.xpPurchases.filter((p) => p.id !== id),
          },
        })),
      addEquipment: (item) =>
        set((s) => ({ character: { ...s.character, equipment: [...s.character.equipment, item] } })),
      removeEquipment: (id) =>
        set((s) => ({
          character: { ...s.character, equipment: s.character.equipment.filter((e) => e.id !== id) },
        })),
      resetAll: () => set({ step: 0, regiment: emptyRegiment, character: emptyCharacter }),
    }),
    { name: "only-war-character-creator" }
  )
);

export type { Aptitude };
