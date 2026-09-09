import { XPPurchase } from "@/lib/store";
import {
  CHARACTERISTIC_ADVANCE_TIER_ORDER,
  SKILL_ADVANCE_TIER_ORDER,
  CharacteristicAdvanceTier,
  SkillAdvanceTier,
} from "@/lib/engine/aptitudeCost";

export function characteristicTierIndex(purchases: XPPurchase[], characteristic: string): number {
  let max = -1;
  for (const p of purchases) {
    if (p.type === "characteristic" && p.refId === characteristic) {
      const idx = CHARACTERISTIC_ADVANCE_TIER_ORDER.indexOf(p.tier as CharacteristicAdvanceTier);
      if (idx > max) max = idx;
    }
  }
  return max; // -1 = nenhum avanço comprado ainda
}

export function skillTierIndex(purchases: XPPurchase[], skillId: string, specialization?: string): number {
  let max = -1;
  for (const p of purchases) {
    if (p.type === "skill" && p.refId === skillId && (p.specialization ?? "") === (specialization ?? "")) {
      const idx = SKILL_ADVANCE_TIER_ORDER.indexOf(p.tier as SkillAdvanceTier);
      if (idx > max) max = idx;
    }
  }
  return max;
}

export function hasTalent(purchases: XPPurchase[], talentId: string, specialization?: string): boolean {
  return purchases.some(
    (p) => p.type === "talent" && p.refId === talentId && (p.specialization ?? "") === (specialization ?? "")
  );
}

export function talentPurchaseCount(purchases: XPPurchase[], talentId: string): number {
  return purchases.filter((p) => p.type === "talent" && p.refId === talentId).length;
}

export function hasPsychicPower(purchases: XPPurchase[], powerId: string): boolean {
  return purchases.some((p) => p.type === "psychicPower" && p.refId === powerId);
}

export function currentPsyRating(purchases: XPPurchase[], startingRating: number): number {
  const bumps = purchases.filter((p) => p.type === "psyRating").length;
  return startingRating + bumps;
}

/** Custo total em pe já gasto. */
export function totalSpent(purchases: XPPurchase[]): number {
  return purchases.reduce((sum, p) => sum + p.cost, 0);
}
