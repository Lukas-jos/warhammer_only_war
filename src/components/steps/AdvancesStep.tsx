"use client";

import { useMemo, useState } from "react";
import { useAppStore, XPPurchase } from "@/lib/store";
import { resolveCharacter } from "@/lib/engine/resolveCharacter";
import {
  CHARACTERISTIC_ADVANCE_TIER_ORDER,
  SKILL_ADVANCE_TIER_ORDER,
  characteristicAdvanceCost,
  skillAdvanceCost,
  talentCost,
  CharacteristicAdvanceTier,
  SkillAdvanceTier,
  TalentTier,
} from "@/lib/engine/aptitudeCost";
import { characteristicTierIndex, skillTierIndex, hasTalent, currentPsyRating } from "@/lib/engine/purchases";
import { CHARACTERISTICS, CHARACTERISTIC_NAMES, Characteristic } from "@/lib/types";
import { SKILLS } from "@/lib/data/skills";
import { TALENTS } from "@/lib/data/talents";
import { PSYCHIC_POWERS } from "@/lib/data/psychicPowers";

const TIER_LABELS_CHAR: Record<CharacteristicAdvanceTier, string> = {
  simples: "Simples",
  intermediario: "Intermediário",
  treinado: "Treinado",
  especialista: "Especialista",
};

const TIER_LABELS_SKILL: Record<SkillAdvanceTier, string> = {
  conhecido: "Conhecido",
  treinado: "Treinado",
  experiente: "Experiente",
  veterano: "Veterano",
};

type Tab = "caracteristicas" | "pericias" | "talentos" | "psiquicos";

export function AdvancesStep() {
  const regiment = useAppStore((s) => s.regiment);
  const character = useAppStore((s) => s.character);
  const addXpPurchase = useAppStore((s) => s.addXpPurchase);
  const removeXpPurchase = useAppStore((s) => s.removeXpPurchase);

  const resolved = useMemo(() => resolveCharacter(regiment, character), [regiment, character]);
  const isPsyker = resolved.specialty?.id === "psyker-sancionado";

  const [tab, setTab] = useState<Tab>("caracteristicas");

  return (
    <div className="flex flex-col gap-4">
      <div className="card p-3 flex flex-wrap gap-4 justify-between items-center sticky top-0 z-10">
        <div className="text-sm">
          <span className="text-muted">Experiência: </span>
          <span className="font-bold text-accent">{resolved.xpRemaining}</span>
          <span className="text-muted"> / {resolved.xpStart} pe restantes</span>
        </div>
        <div className="flex gap-2 text-xs">
          {(
            [
              ["caracteristicas", "Características"],
              ["pericias", "Perícias"],
              ["talentos", "Talentos"],
              ...(isPsyker ? [["psiquicos", "Poderes Psíquicos"] as [Tab, string]] : []),
            ] as [Tab, string][]
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={
                "px-3 py-1.5 rounded " + (tab === key ? "bg-accent text-accent-fg font-semibold" : "btn-secondary")
              }
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {tab === "caracteristicas" && (
        <CharacteristicsTab
          purchases={character.xpPurchases}
          aptitudes={resolved.aptitudes}
          xpRemaining={resolved.xpRemaining}
          onBuy={addXpPurchase}
          onUndo={removeXpPurchase}
          characteristics={resolved.characteristics}
        />
      )}
      {tab === "pericias" && (
        <SkillsTab
          purchases={character.xpPurchases}
          aptitudes={resolved.aptitudes}
          xpRemaining={resolved.xpRemaining}
          onBuy={addXpPurchase}
          onUndo={removeXpPurchase}
        />
      )}
      {tab === "talentos" && (
        <TalentsTab
          purchases={character.xpPurchases}
          aptitudes={resolved.aptitudes}
          xpRemaining={resolved.xpRemaining}
          onBuy={addXpPurchase}
          onUndo={removeXpPurchase}
        />
      )}
      {tab === "psiquicos" && isPsyker && (
        <PsychicPowersTab
          purchases={character.xpPurchases}
          xpRemaining={resolved.xpRemaining}
          onBuy={addXpPurchase}
          onUndo={removeXpPurchase}
          startingRating={2}
        />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------

function CharacteristicsTab({
  purchases,
  aptitudes,
  xpRemaining,
  onBuy,
  onUndo,
  characteristics,
}: {
  purchases: XPPurchase[];
  aptitudes: Set<string>;
  xpRemaining: number;
  onBuy: (p: XPPurchase) => void;
  onUndo: (id: string) => void;
  characteristics: ReturnType<typeof resolveCharacter>["characteristics"];
}) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {CHARACTERISTICS.map((c) => {
        const tierIdx = characteristicTierIndex(purchases, c);
        const nextTier = CHARACTERISTIC_ADVANCE_TIER_ORDER[tierIdx + 1];
        const cost = nextTier
          ? characteristicAdvanceCost(aptitudes as Set<import("@/lib/types").Aptitude>, c, nextTier)
          : null;
        return (
          <div key={c} className="card p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-sm">{CHARACTERISTIC_NAMES[c]}</p>
              <p className="font-mono text-lg">
                {characteristics[c].total}{" "}
                <span className="text-xs text-muted">(B{characteristics[c].bonus})</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-1 text-xs">
              {CHARACTERISTIC_ADVANCE_TIER_ORDER.map((t, i) => (
                <span
                  key={t}
                  className={"px-1.5 py-0.5 rounded " + (i <= tierIdx ? "bg-surface-2 text-accent" : "text-muted")}
                >
                  {TIER_LABELS_CHAR[t]}
                </span>
              ))}
            </div>
            {nextTier && cost !== null ? (
              <button
                className="btn-secondary text-xs py-1.5 rounded disabled:opacity-30"
                disabled={cost > xpRemaining}
                onClick={() =>
                  onBuy({
                    id: `char:${c}:${nextTier}`,
                    type: "characteristic",
                    refId: c,
                    label: `${CHARACTERISTIC_NAMES[c]} — ${TIER_LABELS_CHAR[nextTier]}`,
                    tier: nextTier,
                    cost,
                  })
                }
              >
                Comprar {TIER_LABELS_CHAR[nextTier]} — {cost} pe
              </button>
            ) : (
              <p className="text-xs text-muted">Máximo atingido</p>
            )}
            {tierIdx >= 0 && (
              <button
                className="text-xs text-accent-2 underline self-start"
                onClick={() => onUndo(`char:${c}:${CHARACTERISTIC_ADVANCE_TIER_ORDER[tierIdx]}`)}
              >
                Desfazer último avanço
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ---------------------------------------------------------------------------

function SkillsTab({
  purchases,
  aptitudes,
  xpRemaining,
  onBuy,
  onUndo,
}: {
  purchases: XPPurchase[];
  aptitudes: Set<string>;
  xpRemaining: number;
  onBuy: (p: XPPurchase) => void;
  onUndo: (id: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [specInputs, setSpecInputs] = useState<Record<string, string>>({});

  const filtered = SKILLS.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex flex-col gap-3">
      <input
        placeholder="Buscar perícia..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-surface border border-border rounded-md px-3 py-2 text-sm"
      />
      <div className="grid sm:grid-cols-2 gap-3">
        {filtered.map((skill) => {
          const needsSpec = skill.type === "especialista";
          const spec = specInputs[skill.id] ?? "";
          const tierIdx = skillTierIndex(purchases, skill.id, needsSpec ? spec : undefined);
          const nextTier = SKILL_ADVANCE_TIER_ORDER[tierIdx + 1];
          const cost = nextTier
            ? skillAdvanceCost(aptitudes as Set<import("@/lib/types").Aptitude>, skill.aptitudes, nextTier)
            : null;
          const canBuy = nextTier && cost !== null && (!needsSpec || spec.trim().length > 0);

          return (
            <div key={skill.id} className="card p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">{skill.name}</p>
                <span className="text-xs text-muted">{skill.characteristic}</span>
              </div>
              <p className="text-xs text-muted">{skill.description}</p>
              {needsSpec && (
                <input
                  placeholder="Especialização (ex.: Armeiro)"
                  value={spec}
                  onChange={(e) => setSpecInputs({ ...specInputs, [skill.id]: e.target.value })}
                  className="bg-surface-2 border border-border rounded px-2 py-1 text-xs"
                />
              )}
              <div className="flex flex-wrap gap-1 text-xs">
                {SKILL_ADVANCE_TIER_ORDER.map((t, i) => (
                  <span
                    key={t}
                    className={"px-1.5 py-0.5 rounded " + (i <= tierIdx ? "bg-surface-2 text-accent" : "text-muted")}
                  >
                    {TIER_LABELS_SKILL[t]}
                  </span>
                ))}
              </div>
              {nextTier && cost !== null ? (
                <button
                  className="btn-secondary text-xs py-1.5 rounded disabled:opacity-30"
                  disabled={!canBuy || cost > xpRemaining}
                  onClick={() =>
                    onBuy({
                      id: `skill:${skill.id}:${spec}:${nextTier}`,
                      type: "skill",
                      refId: skill.id,
                      label: `${skill.name}${spec ? ` (${spec})` : ""} — ${TIER_LABELS_SKILL[nextTier]}`,
                      tier: nextTier,
                      cost,
                      specialization: needsSpec ? spec : undefined,
                    })
                  }
                >
                  Comprar {TIER_LABELS_SKILL[nextTier]} — {cost} pe
                </button>
              ) : (
                <p className="text-xs text-muted">Máximo atingido</p>
              )}
              {tierIdx >= 0 && (
                <button
                  className="text-xs text-accent-2 underline self-start"
                  onClick={() =>
                    onUndo(`skill:${skill.id}:${spec}:${SKILL_ADVANCE_TIER_ORDER[tierIdx]}`)
                  }
                >
                  Desfazer último avanço
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------

function TalentsTab({
  purchases,
  aptitudes,
  xpRemaining,
  onBuy,
  onUndo,
}: {
  purchases: XPPurchase[];
  aptitudes: Set<string>;
  xpRemaining: number;
  onBuy: (p: XPPurchase) => void;
  onUndo: (id: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [specInputs, setSpecInputs] = useState<Record<string, string>>({});

  const filtered = TALENTS.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex flex-col gap-3">
      <input
        placeholder="Buscar talento..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-surface border border-border rounded-md px-3 py-2 text-sm"
      />
      <div className="grid sm:grid-cols-2 gap-3">
        {filtered.map((talent) => {
          const cost = talentCost(
            aptitudes as Set<import("@/lib/types").Aptitude>,
            talent.aptitudes,
            talent.tier as TalentTier
          );
          const spec = specInputs[talent.id] ?? "";
          const owned = hasTalent(purchases, talent.id, talent.isSpecialist ? spec : undefined);
          const purchaseId = `talent:${talent.id}:${talent.isSpecialist ? spec : ""}`;
          const canBuy = !owned && (!talent.isSpecialist || spec.trim().length > 0) && cost <= xpRemaining;

          return (
            <div key={talent.id} className="card p-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">{talent.name}</p>
                <span className="text-xs text-muted">Nível {talent.tier}</span>
              </div>
              <p className="text-xs text-muted">{talent.effect}</p>
              {talent.prerequisites && talent.prerequisites !== "Nenhum" && (
                <p className="text-xs text-accent">Pré-requisito: {talent.prerequisites}</p>
              )}
              {talent.isSpecialist && (
                <input
                  placeholder={
                    talent.specializationOptions?.length
                      ? `Especialização (ex.: ${talent.specializationOptions[0]})`
                      : "Especialização"
                  }
                  value={spec}
                  onChange={(e) => setSpecInputs({ ...specInputs, [talent.id]: e.target.value })}
                  className="bg-surface-2 border border-border rounded px-2 py-1 text-xs"
                />
              )}
              <button
                className="btn-secondary text-xs py-1.5 rounded disabled:opacity-30"
                disabled={owned || !canBuy}
                onClick={() =>
                  onBuy({
                    id: purchaseId,
                    type: "talent",
                    refId: talent.id,
                    label: `${talent.name}${spec ? ` (${spec})` : ""}`,
                    tier: talent.tier,
                    cost,
                    specialization: talent.isSpecialist ? spec : undefined,
                  })
                }
              >
                {owned ? "Adquirido" : `Comprar — ${cost} pe`}
              </button>
              {owned && (
                <button className="text-xs text-accent-2 underline self-start" onClick={() => onUndo(purchaseId)}>
                  Remover
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------

function PsychicPowersTab({
  purchases,
  xpRemaining,
  onBuy,
  onUndo,
  startingRating,
}: {
  purchases: XPPurchase[];
  xpRemaining: number;
  onBuy: (p: XPPurchase) => void;
  onUndo: (id: string) => void;
  startingRating: number;
}) {
  const rating = currentPsyRating(purchases, startingRating);
  const nextRatingCost = (rating + 1) * 200;
  const disciplines = Array.from(new Set(PSYCHIC_POWERS.map((p) => p.discipline)));

  return (
    <div className="flex flex-col gap-4">
      <div className="card p-3 flex items-center justify-between">
        <div>
          <p className="font-semibold">Classificação Psy: {rating}</p>
          <p className="text-xs text-muted">Custo para CP {rating + 1}: {nextRatingCost} pe (200 × CP alvo)</p>
        </div>
        <button
          className="btn-secondary text-xs px-3 py-1.5 rounded disabled:opacity-30"
          disabled={rating >= 10 || nextRatingCost > xpRemaining}
          onClick={() =>
            onBuy({
              id: `psyRating:${rating + 1}`,
              type: "psyRating",
              refId: "psy-rating",
              label: `Classificação Psy ${rating + 1}`,
              cost: nextRatingCost,
            })
          }
        >
          Aumentar Classificação Psy
        </button>
      </div>

      {disciplines.map((discipline) => (
        <div key={discipline} className="flex flex-col gap-2">
          <h3 className="font-semibold">{discipline}</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {PSYCHIC_POWERS.filter((p) => p.discipline === discipline).map((power) => {
              const owned = purchases.some((p) => p.type === "psychicPower" && p.refId === power.id);
              return (
                <div key={power.id} className="card p-3 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">{power.name}</p>
                    <span className="text-xs text-muted">{power.cost} pe</span>
                  </div>
                  <p className="text-xs text-muted">{power.effect}</p>
                  <p className="text-xs text-muted">
                    Ação: {power.action} · Alcance: {power.range}
                  </p>
                  <button
                    className="btn-secondary text-xs py-1.5 rounded disabled:opacity-30 mt-1"
                    disabled={owned || power.cost > xpRemaining}
                    onClick={() =>
                      onBuy({
                        id: `power:${power.id}`,
                        type: "psychicPower",
                        refId: power.id,
                        label: power.name,
                        cost: power.cost,
                      })
                    }
                  >
                    {owned ? "Adquirido" : "Aprender"}
                  </button>
                  {owned && (
                    <button
                      className="text-xs text-accent-2 underline self-start"
                      onClick={() => onUndo(`power:${power.id}`)}
                    >
                      Remover
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
