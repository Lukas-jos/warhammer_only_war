// Tabelas e fórmulas derivadas do Capítulo I (Jogando o Jogo) e Capítulo III
// (Criação de Personagem) — movimento, carga, ferimentos, pontos de destino.

/** Tabela 1-4: Movimento em Tempo Estruturado (metros/rodada), indexado pelo Bônus de Agilidade. */
export interface MovementRow {
  halfMove: number;
  fullMove: number;
  charge: number;
  run: number;
}

const MOVEMENT_TABLE: MovementRow[] = [
  { halfMove: 0.5, fullMove: 1, charge: 2, run: 3 },
  { halfMove: 1, fullMove: 2, charge: 3, run: 6 },
  { halfMove: 2, fullMove: 4, charge: 6, run: 12 },
  { halfMove: 3, fullMove: 6, charge: 9, run: 18 },
  { halfMove: 4, fullMove: 8, charge: 12, run: 24 },
  { halfMove: 5, fullMove: 10, charge: 15, run: 30 },
  { halfMove: 6, fullMove: 12, charge: 18, run: 36 },
  { halfMove: 7, fullMove: 14, charge: 21, run: 42 },
  { halfMove: 8, fullMove: 16, charge: 24, run: 48 },
  { halfMove: 9, fullMove: 18, charge: 27, run: 54 },
  { halfMove: 10, fullMove: 20, charge: 30, run: 60 },
];

export function movementForAgilityBonus(agilityBonus: number): MovementRow {
  const idx = Math.max(0, Math.min(MOVEMENT_TABLE.length - 1, agilityBonus));
  return MOVEMENT_TABLE[idx];
}

/** Tabela 1-7: Carregando, Levantando e Empurrando (kg), indexado por FB+DB. */
const CARRY_TABLE: { carry: number; lift: number; push: number }[] = [
  { carry: 0.9, lift: 2.25, push: 4.5 },
  { carry: 2.25, lift: 4.5, push: 9 },
  { carry: 4.5, lift: 9, push: 18 },
  { carry: 9, lift: 18, push: 36 },
  { carry: 18, lift: 36, push: 72 },
  { carry: 27, lift: 54, push: 108 },
  { carry: 36, lift: 72, push: 144 },
  { carry: 45, lift: 90, push: 180 },
  { carry: 56, lift: 112, push: 224 },
  { carry: 67, lift: 134, push: 268 },
  { carry: 78, lift: 156, push: 312 },
  { carry: 90, lift: 180, push: 360 },
  { carry: 112, lift: 224, push: 448 },
  { carry: 225, lift: 450, push: 900 },
  { carry: 337, lift: 674, push: 1348 },
  { carry: 450, lift: 900, push: 1800 },
  { carry: 675, lift: 1350, push: 2700 },
  { carry: 900, lift: 1800, push: 3600 },
  { carry: 1350, lift: 2700, push: 5400 },
  { carry: 1800, lift: 3600, push: 7200 },
  { carry: 2250, lift: 4500, push: 9000 },
];

export function carryCapacity(strengthBonus: number, toughnessBonus: number) {
  const idx = Math.max(0, Math.min(CARRY_TABLE.length - 1, strengthBonus + toughnessBonus));
  return CARRY_TABLE[idx];
}

/** Dígito da dezena de uma Característica (Bônus de Característica). */
export function bonusFor(value: number): number {
  return Math.max(0, Math.floor(value / 10));
}

/**
 * Tabela 3-13: Pontos de Destino Iniciais (rola 1d10).
 */
export function initialFatePoints(d10roll: number): number {
  if (d10roll >= 10) return 3;
  if (d10roll >= 8) return 2;
  return 1;
}

/**
 * Avalia uma fórmula de dado simples do tipo "10+1d5", "2d10+20", "1d5" etc,
 * dado um gerador de números aleatórios (ou valores fixos para simulação).
 * Suporta apenas o formato NdM(+K) ou uma constante.
 */
export function parseDiceFormula(formula: string): { count: number; sides: number; modifier: number } {
  const cleaned = formula.replace(/\s+/g, "");
  const match = cleaned.match(/^(\d*)d(\d+)([+-]\d+)?$/i);
  if (match) {
    const count = match[1] ? parseInt(match[1], 10) : 1;
    const sides = parseInt(match[2], 10);
    const modifier = match[3] ? parseInt(match[3], 10) : 0;
    return { count, sides, modifier };
  }
  // Formatos compostos "10+1d5" — extrai a constante e a parte de dado.
  const composite = cleaned.match(/^(-?\d+)\+(\d*)d(\d+)$/i);
  if (composite) {
    const base = parseInt(composite[1], 10);
    const count = composite[2] ? parseInt(composite[2], 10) : 1;
    const sides = parseInt(composite[3], 10);
    return { count, sides, modifier: base };
  }
  const constant = cleaned.match(/^-?\d+$/);
  if (constant) {
    return { count: 0, sides: 0, modifier: parseInt(cleaned, 10) };
  }
  throw new Error(`Fórmula de dado não reconhecida: ${formula}`);
}

export function rollFormula(formula: string, rng: () => number = Math.random): number {
  const { count, sides, modifier } = parseDiceFormula(formula);
  let total = modifier;
  for (let i = 0; i < count; i++) {
    total += Math.floor(rng() * sides) + 1;
  }
  return total;
}

export function maxOfFormula(formula: string): number {
  const { count, sides, modifier } = parseDiceFormula(formula);
  return modifier + count * sides;
}

export function minOfFormula(formula: string): number {
  const { count, sides, modifier } = parseDiceFormula(formula);
  return modifier + count * (count > 0 ? 1 : 0);
}
