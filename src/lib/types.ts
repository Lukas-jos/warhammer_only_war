// ============================================================================
// Tipos centrais do modelo de dados do Only War Character Creator.
// Toda a extração de regras em /home/condo-401/warhammer/rules/*.md deve ser
// convertida para objetos que respeitem estas interfaces.
// ============================================================================

export const CHARACTERISTICS = [
  "HA", // Habilidade com Arma
  "HB", // Habilidade Balística
  "F", // Força
  "D", // Dureza
  "Ag", // Agilidade
  "Int", // Inteligência
  "Per", // Percepção
  "Von", // Vontade
  "Cam", // Camaradagem
] as const;

export type Characteristic = (typeof CHARACTERISTICS)[number];

export const CHARACTERISTIC_NAMES: Record<Characteristic, string> = {
  HA: "Habilidade com Arma",
  HB: "Habilidade Balística",
  F: "Força",
  D: "Dureza",
  Ag: "Agilidade",
  Int: "Inteligência",
  Per: "Percepção",
  Von: "Vontade",
  Cam: "Camaradagem",
};

// 9 aptidões de característica + 9 especiais + Geral = 19
export const APTITUDES = [
  "Habilidade com Arma",
  "Habilidade Balística",
  "Força",
  "Dureza",
  "Agilidade",
  "Inteligência",
  "Percepção",
  "Vontade",
  "Camaradagem",
  "Ofensa",
  "Destreza",
  "Defesa",
  "Psyker",
  "Tecnologia",
  "Conhecimento",
  "Liderança",
  "Técnicas de Campo",
  "Social",
  "Geral",
] as const;

export type Aptitude = (typeof APTITUDES)[number];

export interface Skill {
  id: string;
  name: string; // ex.: "Ofício", "Atenção"
  characteristic: Characteristic;
  aptitudes: [Aptitude, Aptitude];
  type: "padrao" | "especialista";
  specializations?: string[]; // apenas se type === "especialista"
  description: string; // explicação breve para o usuário
  page?: number;
}

export interface Talent {
  id: string;
  name: string;
  tier: 1 | 2 | 3;
  prerequisites: string; // texto livre (ex.: "Agilidade 30")
  aptitudes: [Aptitude, Aptitude];
  effect: string;
  isSpecialist?: boolean; // ex.: Treinamento com Arma, Ódio, Resistência...
  specializationOptions?: string[];
  maxPurchases?: number;
}

export interface Trait {
  id: string;
  name: string;
  effect: string;
}

export type WeaponClass =
  | "Corporal"
  | "Arremesso"
  | "Pistola"
  | "Básica"
  | "Pesada"
  | "Veículo";

export type Availability =
  | "Omnipresente"
  | "Abundante"
  | "Copiosa"
  | "Comum"
  | "Mediana"
  | "Escassa"
  | "Rara"
  | "Muito Rara"
  | "Extremamente Rara"
  | "Quase Única"
  | "Única";

export interface Weapon {
  id: string;
  name: string;
  category: string; // ex.: "Laser", "Projétil Sólido", "Bolt", "Corporal - Serra"...
  class: WeaponClass;
  range: string; // "30m", "FBx3", "—"
  rof: string; // "U/2/-"
  damage: string; // "1d10+2 E"
  penetration: string;
  clip: string;
  reload: string;
  special: string[]; // ids/nomes de Qualidades Especiais de Arma
  weight: string;
  availability: Availability | string;
  quality?: "Ruim" | "Comum" | "Boa" | "Excelente";
  notes?: string;
}

export interface WeaponQuality {
  id: string;
  name: string;
  effect: string;
}

export interface Armor {
  id: string;
  name: string;
  category: "Primitiva" | "Flak" | "Carapaça" | "Outra";
  locations: string[]; // "Braços" | "Corpo" | "Pernas" | "Cabeça" | "Todas"
  armorPoints: number;
  weight: number;
  availability: Availability | string;
}

export interface GearItem {
  id: string;
  name: string;
  category:
    | "Roupas e Vestimenta"
    | "Drogas e Consumíveis"
    | "Ferramentas"
    | "Cibernético"
    | "Campo de Força"
    | "Munição"
    | "Munição Incomum"
    | "Outro";
  weight?: string;
  availability: Availability | string;
  description: string;
}

export interface PsychicPower {
  id: string;
  discipline: "Adivinhação" | "Biomancia" | "Piromancia" | "Telepatia" | "Telequinesia";
  name: string;
  cost: number; // pe
  prerequisites: string;
  action: string;
  sustained: string;
  range: string;
  effect: string;
}

// ---------------------------------------------------------------------------
// Criação de Regimento
// ---------------------------------------------------------------------------

// Uma entrada de modificador de característica: fixa (sempre aplicada) ou
// uma escolha entre opções (o jogador escolhe `chooseCount` delas).
// `options` vazio em uma entrada "choice" com chooseCount=1 representa
// "qualquer Característica à escolha do jogador" (ex.: Mundo Imperial).
export type CharacteristicModEntry =
  | { kind: "fixed"; characteristic: Characteristic; amount: number }
  | { kind: "choice"; chooseCount: number; amount: number; options: Characteristic[] };

export interface GrantedTalentChoice {
  // Talentos "iniciais" às vezes são "escolha 1 de N"
  chooseCount: number;
  options: string[]; // nomes de talentos (ou "Treinamento com Arma (Laser)")
}

export interface Homeworld {
  id: string;
  name: string;
  cost: number;
  characteristicMods: CharacteristicModEntry[];
  initialSkills: string[];
  initialTalentChoices: GrantedTalentChoice[];
  initialAptitudes?: Aptitude[];
  specialRules: { name: string; effect: string }[];
  woundsModifier: number; // +2, -1, 0 etc.
  notes?: string;
}

export interface OfficerPersonality {
  id: string;
  name: string;
  cost: number;
  description: string;
  grantedSkills?: string[];
  grantedTalents?: string[];
}

export interface RegimentDoctrine {
  id: string;
  name: string;
  list: "Tipo de Regimento" | "Doutrina de Treinamento" | "Doutrina de Equipamento Especial";
  cost: number;
  characteristicMods?: CharacteristicModEntry[];
  initialAptitudes?: Aptitude[];
  initialSkills?: string[];
  initialTalentChoices?: GrantedTalentChoice[];
  kit?: string[];
  specialRules?: { name: string; effect: string }[];
  requiresChoice?: boolean; // ex.: Sobreviventes exige nomear terreno; Inimigo Favorito exige nomear inimigo
}

export interface ExampleRegiment {
  id: string;
  name: string;
  homeworldId: string;
  homeworldOverride?: { name: string; replacedTrait?: string; newTrait?: { name: string; effect: string } };
  officerPersonalityId: string;
  doctrineIds: string[]; // inclui o Tipo de Regimento
  totalCost: number;
  kit: string[];
  favoriteWeapons: { basic?: string; heavy?: string };
  description: string;
}

// ---------------------------------------------------------------------------
// Criação de Personagem — Especialidades
// ---------------------------------------------------------------------------

export interface ComradeAdvance {
  name: string;
  type: "Passivo" | "Ordem" | "Ordem Global";
  action?: string; // "Ação Livre" | "Meia Ação" | "Ação Completa"
  cost: number;
  effect: string;
}

export interface Specialty {
  id: string;
  name: string;
  group: "Guarda" | "Apoio";
  characteristicBonus: string; // texto (pode ter "ou"): "+5 Dureza"
  characteristicBonusChoices?: { amount: number; options: Characteristic[] }[];
  initialAptitudes: Aptitude[]; // 6
  initialSkills: string[];
  initialSkillChoices?: GrantedTalentChoice[];
  initialTalentChoices: GrantedTalentChoice[];
  initialTraits?: string[];
  gear: string[];
  woundsFormula: string; // ex.: "10+1d5"
  xpStart: number; // 600 ou 300
  hasComrade: boolean;
  comradeReplacement?: string; // ex.: "Servidor" para Tecnopadre
  comradeAdvances: ComradeAdvance[];
  specialRules?: { name: string; effect: string }[];
  recommendedAdvancesNote?: string;
}

// ---------------------------------------------------------------------------
// Tabelas de custo em XP
// ---------------------------------------------------------------------------

export type AptitudeMatchLevel = "duas" | "uma" | "zero";

export const CHARACTERISTIC_ADVANCE_COST: Record<
  AptitudeMatchLevel,
  { simples: number; intermediario: number; treinado: number; especialista: number }
> = {
  duas: { simples: 100, intermediario: 250, treinado: 500, especialista: 750 },
  uma: { simples: 250, intermediario: 500, treinado: 750, especialista: 1000 },
  zero: { simples: 500, intermediario: 750, treinado: 1000, especialista: 2500 },
};

export const SKILL_ADVANCE_COST: Record<
  AptitudeMatchLevel,
  { conhecido: number; treinado: number; experiente: number; veterano: number }
> = {
  duas: { conhecido: 100, treinado: 200, experiente: 300, veterano: 400 },
  uma: { conhecido: 200, treinado: 400, experiente: 600, veterano: 800 },
  zero: { conhecido: 300, treinado: 600, experiente: 900, veterano: 1200 },
};

export const TALENT_COST: Record<AptitudeMatchLevel, { 1: number; 2: number; 3: number }> = {
  duas: { 1: 200, 2: 300, 3: 400 },
  uma: { 1: 300, 2: 450, 3: 600 },
  zero: { 1: 600, 2: 900, 3: 1200 },
};

// Tabela 3-15: Característica -> segunda Aptidão associada
export const CHARACTERISTIC_APTITUDE_PAIR: Record<Characteristic, Aptitude> = {
  HA: "Ofensa",
  HB: "Destreza",
  F: "Ofensa",
  D: "Defesa",
  Ag: "Destreza",
  Int: "Conhecimento",
  Per: "Técnicas de Campo",
  Von: "Psyker",
  Cam: "Social",
};
