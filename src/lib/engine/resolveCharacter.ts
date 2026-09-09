import { CHARACTERISTICS, Characteristic, Aptitude } from "@/lib/types";
import { HOMEWORLDS } from "@/lib/data/homeworlds";
import { OFFICER_PERSONALITIES } from "@/lib/data/officerPersonalities";
import { REGIMENT_DOCTRINES } from "@/lib/data/regimentDoctrines";
import { EXAMPLE_REGIMENTS } from "@/lib/data/exampleRegiments";
import { SPECIALTIES } from "@/lib/data/specialties";
import { SKILLS } from "@/lib/data/skills";
import { TALENTS } from "@/lib/data/talents";
import { bonusFor } from "@/lib/engine/derivedStats";
import { characterAptitudes, CHARACTERISTIC_ADVANCE_AMOUNT } from "@/lib/engine/aptitudeCost";
import { characteristicTierIndex } from "@/lib/engine/purchases";
import type { CharacterState, RegimentState } from "@/lib/store";

export interface ResolvedRegiment {
  homeworldId: string;
  homeworld: (typeof HOMEWORLDS)[number] | undefined;
  officer: (typeof OFFICER_PERSONALITIES)[number] | undefined;
  doctrines: (typeof REGIMENT_DOCTRINES)[number][];
  characteristicMods: Partial<Record<Characteristic, number>>;
  grantedAptitudes: Aptitude[];
  grantedSkillNames: string[];
  grantedTalentNames: string[]; // já resolvidos (sem "escolha 1 de N" pendente)
  kit: string[];
  woundsModifier: number;
  specialRules: { name: string; effect: string }[];
  displayName: string;
}

/** Resolve o regimento (pronto ou customizado) em um conjunto simples de bônus. */
export function resolveRegiment(regiment: RegimentState): ResolvedRegiment {
  const characteristicMods: Partial<Record<Characteristic, number>> = {};
  const grantedAptitudes: Aptitude[] = [];
  const grantedSkillNames: string[] = [];
  const grantedTalentNames: string[] = [];
  const kit: string[] = [];
  const specialRules: { name: string; effect: string }[] = [];
  let woundsModifier = 0;
  let homeworldId = regiment.homeworldId ?? "";
  let displayName = regiment.regimentName || "Regimento Sem Nome";

  const applyMod = (characteristic: Characteristic, amount: number) => {
    characteristicMods[characteristic] = (characteristicMods[characteristic] ?? 0) + amount;
  };

  if (regiment.mode === "example" && regiment.exampleRegimentId) {
    const ex = EXAMPLE_REGIMENTS.find((r) => r.id === regiment.exampleRegimentId);
    if (ex) {
      homeworldId = ex.homeworldId;
      displayName = regiment.regimentName || ex.name;
      kit.push(...ex.kit);
      const officer = OFFICER_PERSONALITIES.find((o) => o.id === ex.officerPersonalityId);
      const doctrines = ex.doctrineIds
        .map((id) => REGIMENT_DOCTRINES.find((d) => d.id === id))
        .filter((d): d is (typeof REGIMENT_DOCTRINES)[number] => !!d);
      const homeworld = HOMEWORLDS.find((h) => h.id === homeworldId);

      for (const entry of homeworld?.characteristicMods ?? []) {
        if (entry.kind === "fixed") applyMod(entry.characteristic, entry.amount);
      }
      grantedSkillNames.push(...(homeworld?.initialSkills ?? []));
      grantedAptitudes.push(...(homeworld?.initialAptitudes ?? []));
      specialRules.push(...(homeworld?.specialRules ?? []));
      woundsModifier += homeworld?.woundsModifier ?? 0;
      if (ex.homeworldOverride?.newTrait) {
        specialRules.push(ex.homeworldOverride.newTrait);
      }

      grantedSkillNames.push(...(officer?.grantedSkills ?? []));
      grantedTalentNames.push(...(officer?.grantedTalents ?? []));

      for (const doc of doctrines) {
        for (const entry of doc.characteristicMods ?? []) {
          if (entry.kind === "fixed") applyMod(entry.characteristic, entry.amount);
        }
        grantedAptitudes.push(...(doc.initialAptitudes ?? []));
        grantedSkillNames.push(...(doc.initialSkills ?? []));
        kit.push(...(doc.kit ?? []));
        specialRules.push(...(doc.specialRules ?? []));
      }

      return {
        homeworldId,
        homeworld,
        officer,
        doctrines,
        characteristicMods,
        grantedAptitudes,
        grantedSkillNames,
        grantedTalentNames,
        kit,
        woundsModifier,
        specialRules,
        displayName,
      };
    }
  }

  // Modo customizado
  const homeworld = HOMEWORLDS.find((h) => h.id === regiment.homeworldId);
  const officer = OFFICER_PERSONALITIES.find((o) => o.id === regiment.officerPersonalityId);
  const doctrines = regiment.doctrineIds
    .map((id) => REGIMENT_DOCTRINES.find((d) => d.id === id))
    .filter((d): d is (typeof REGIMENT_DOCTRINES)[number] => !!d);

  for (const entry of homeworld?.characteristicMods ?? []) {
    if (entry.kind === "fixed") {
      applyMod(entry.characteristic, entry.amount);
    } else if (entry.kind === "choice") {
      for (const c of regiment.homeworldCharacteristicChoice) {
        if (entry.options.length === 0 || entry.options.includes(c)) applyMod(c, entry.amount);
      }
    }
  }
  grantedSkillNames.push(...(homeworld?.initialSkills ?? []));
  grantedAptitudes.push(...(homeworld?.initialAptitudes ?? []));
  specialRules.push(...(homeworld?.specialRules ?? []));
  woundsModifier += homeworld?.woundsModifier ?? 0;
  grantedTalentNames.push(...Object.values(regiment.homeworldTalentChoices));

  grantedSkillNames.push(...(officer?.grantedSkills ?? []));
  grantedTalentNames.push(...(officer?.grantedTalents ?? []));

  for (const doc of doctrines) {
    for (const entry of doc.characteristicMods ?? []) {
      if (entry.kind === "fixed") applyMod(entry.characteristic, entry.amount);
    }
    grantedAptitudes.push(...(doc.initialAptitudes ?? []));
    grantedSkillNames.push(...(doc.initialSkills ?? []));
    kit.push(...(doc.kit ?? []));
    specialRules.push(...(doc.specialRules ?? []));
    if (regiment.doctrineTalentChoices[doc.id]) grantedTalentNames.push(regiment.doctrineTalentChoices[doc.id]);
  }

  for (const sel of regiment.additionalKitSelections) kit.push(sel.label);

  return {
    homeworldId,
    homeworld,
    officer,
    doctrines,
    characteristicMods,
    grantedAptitudes,
    grantedSkillNames,
    grantedTalentNames,
    kit,
    woundsModifier,
    specialRules,
    displayName,
  };
}

export interface ResolvedCharacteristic {
  base: number;
  mods: number;
  total: number;
  bonus: number;
}

export interface ResolvedCharacter {
  characteristics: Record<Characteristic, ResolvedCharacteristic>;
  aptitudes: Set<Aptitude>;
  skillNames: Set<string>;
  talentNames: Set<string>;
  wounds: number;
  fatePoints: number;
  xpStart: number;
  xpSpent: number;
  xpRemaining: number;
  regiment: ResolvedRegiment;
  specialty: (typeof SPECIALTIES)[number] | undefined;
}

/** Resolve o personagem inteiro combinando Regimento + Especialidade + Compras de XP. */
export function resolveCharacter(regiment: RegimentState, character: CharacterState): ResolvedCharacter {
  const resolvedRegiment = resolveRegiment(regiment);
  const specialty = SPECIALTIES.find((s) => s.id === character.specialtyId);

  const characteristics = {} as Record<Characteristic, ResolvedCharacteristic>;
  for (const c of CHARACTERISTICS) {
    const base = character.baseCharacteristics[c] ?? 0;
    let mods = resolvedRegiment.characteristicMods[c] ?? 0;
    characteristics[c] = { base, mods, total: base + mods, bonus: 0 };
  }

  // Bônus de característica da Especialidade (pode ter "ou" resolvido em specialtyCharacteristicChoice)
  if (specialty) {
    const bonusMatches = specialty.characteristicBonus.match(/([+-]\d+)\s*([A-ZÀ-Úa-zà-ú]+)/g) ?? [];
    // Se a especialidade tiver múltiplas opções separadas por "ou", isso é resolvido fora
    // (via specialtyCharacteristicChoice) — aqui aplicamos apenas modificadores fixos
    // detectados diretamente no texto que não contenham a palavra "ou" ambígua.
    if (!/\bou\b/i.test(specialty.characteristicBonus)) {
      for (const m of bonusMatches) {
        const [, signAmount, rest] = m.match(/([+-]\d+)\s*(.+)/) ?? [];
        if (!signAmount) continue;
        const amount = parseInt(signAmount, 10);
        const characteristic = matchCharacteristicName(rest);
        if (characteristic) characteristics[characteristic].mods += amount;
      }
    } else if (character.specialtyCharacteristicChoice) {
      const amountMatch = specialty.characteristicBonus.match(/([+-]\d+)/);
      const amount = amountMatch ? parseInt(amountMatch[1], 10) : 5;
      characteristics[character.specialtyCharacteristicChoice].mods += amount;
    }
  }

  // Avanços de Característica comprados com XP (+5 por nível, Simples->Especialista).
  for (const c of CHARACTERISTICS) {
    const tierIdx = characteristicTierIndex(character.xpPurchases, c);
    if (tierIdx >= 0) characteristics[c].mods += (tierIdx + 1) * CHARACTERISTIC_ADVANCE_AMOUNT;
  }

  for (const c of CHARACTERISTICS) {
    characteristics[c].total = characteristics[c].base + characteristics[c].mods;
    characteristics[c].bonus = bonusFor(characteristics[c].total);
  }

  const aptitudes = characterAptitudes([
    ...resolvedRegiment.grantedAptitudes,
    ...(specialty?.initialAptitudes ?? []),
  ]);

  const skillNames = new Set<string>([...resolvedRegiment.grantedSkillNames, ...(specialty?.initialSkills ?? [])]);
  const talentNames = new Set<string>([
    ...resolvedRegiment.grantedTalentNames,
    ...Object.values(character.specialtyTalentChoices),
  ]);

  const woundsBase = specialty ? parseWoundsFormula(specialty.woundsFormula, character.woundsRoll ?? 0) : 0;
  const wounds = woundsBase + resolvedRegiment.woundsModifier;

  const xpStart = specialty?.xpStart ?? 0;
  const xpSpent = character.xpPurchases.reduce((sum, p) => sum + p.cost, 0);

  return {
    characteristics,
    aptitudes,
    skillNames,
    talentNames,
    wounds,
    fatePoints: character.fatePoints ?? 1,
    xpStart,
    xpSpent,
    xpRemaining: xpStart - xpSpent,
    regiment: resolvedRegiment,
    specialty,
  };
}

function matchCharacteristicName(text: string): Characteristic | null {
  const map: Record<string, Characteristic> = {
    "Habilidade com Arma": "HA",
    "Habilidade Balística": "HB",
    Força: "F",
    Dureza: "D",
    Agilidade: "Ag",
    Inteligência: "Int",
    Percepção: "Per",
    Vontade: "Von",
    Camaradagem: "Cam",
  };
  const clean = text.trim();
  for (const key of Object.keys(map)) {
    if (clean.startsWith(key)) return map[key];
  }
  return null;
}

function parseWoundsFormula(formula: string, diceRoll: number): number {
  // formato "10+1d5" -> base 10 + rolagem já feita (diceRoll)
  const match = formula.match(/^(\d+)\+/);
  const base = match ? parseInt(match[1], 10) : 0;
  return base + diceRoll;
}

export { SKILLS, TALENTS };
