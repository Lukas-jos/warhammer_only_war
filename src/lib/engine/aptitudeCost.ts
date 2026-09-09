import {
  Aptitude,
  AptitudeMatchLevel,
  CHARACTERISTIC_ADVANCE_COST,
  CHARACTERISTIC_APTITUDE_PAIR,
  CHARACTERISTIC_NAMES,
  Characteristic,
  SKILL_ADVANCE_COST,
  TALENT_COST,
} from "@/lib/types";

/**
 * A Aptidão "de Característica" tem o mesmo nome por extenso da Característica
 * (ex.: Característica "HA" -> Aptidão "Habilidade com Arma"). Como
 * Characteristic usa siglas e Aptitude usa nomes por extenso, convertemos aqui.
 */
export function characteristicAsAptitude(characteristic: Characteristic): Aptitude {
  return CHARACTERISTIC_NAMES[characteristic] as Aptitude;
}

/**
 * Todo personagem em Only War conta como se tivesse a Aptidão "Geral".
 */
export function characterAptitudes(explicit: Aptitude[]): Set<Aptitude> {
  const set = new Set(explicit);
  set.add("Geral");
  return set;
}

/**
 * Compara as aptidões do personagem com as duas aptidões associadas a um
 * Avanço (Característica, Perícia ou Talento) e retorna quantas batem
 * ("duas", "uma" ou "zero"), que determina o custo em XP na Tabela 3-14/3-16/3-18.
 */
export function aptitudeMatchLevel(
  charAptitudes: Set<Aptitude>,
  advanceAptitudes: [Aptitude, Aptitude]
): AptitudeMatchLevel {
  const [a, b] = advanceAptitudes;
  const matches = (a === b ? (charAptitudes.has(a) ? 1 : 0) : (charAptitudes.has(a) ? 1 : 0) + (charAptitudes.has(b) ? 1 : 0));
  if (matches >= 2) return "duas";
  if (matches === 1) return "uma";
  return "zero";
}

export function characteristicAdvanceAptitudes(characteristic: Characteristic): [Aptitude, Aptitude] {
  return [characteristicAsAptitude(characteristic), CHARACTERISTIC_APTITUDE_PAIR[characteristic]];
}

export type CharacteristicAdvanceTier = "simples" | "intermediario" | "treinado" | "especialista";
export type SkillAdvanceTier = "conhecido" | "treinado" | "experiente" | "veterano";
export type TalentTier = 1 | 2 | 3;

export function characteristicAdvanceCost(
  charAptitudes: Set<Aptitude>,
  characteristic: Characteristic,
  tier: CharacteristicAdvanceTier
): number {
  const level = aptitudeMatchLevel(charAptitudes, characteristicAdvanceAptitudes(characteristic));
  return CHARACTERISTIC_ADVANCE_COST[level][tier];
}

export function skillAdvanceCost(
  charAptitudes: Set<Aptitude>,
  skillAptitudes: [Aptitude, Aptitude],
  tier: SkillAdvanceTier
): number {
  const level = aptitudeMatchLevel(charAptitudes, skillAptitudes);
  return SKILL_ADVANCE_COST[level][tier];
}

export function talentCost(
  charAptitudes: Set<Aptitude>,
  talentAptitudes: [Aptitude, Aptitude],
  tier: TalentTier
): number {
  const level = aptitudeMatchLevel(charAptitudes, talentAptitudes);
  return TALENT_COST[level][tier];
}

/** Dígito da dezena do valor da Característica (ex.: 42 -> 4). */
export function characteristicBonus(value: number): number {
  return Math.max(0, Math.floor(value / 10));
}

export const CHARACTERISTIC_ADVANCE_TIER_ORDER: CharacteristicAdvanceTier[] = [
  "simples",
  "intermediario",
  "treinado",
  "especialista",
];

export const SKILL_ADVANCE_TIER_ORDER: SkillAdvanceTier[] = [
  "conhecido",
  "treinado",
  "experiente",
  "veterano",
];

export const SKILL_ADVANCE_BONUS: Record<SkillAdvanceTier, number> = {
  conhecido: 0,
  treinado: 10,
  experiente: 20,
  veterano: 30,
};

export const CHARACTERISTIC_ADVANCE_AMOUNT = 5;
