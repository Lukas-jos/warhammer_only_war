"use client";

import { useMemo, useState } from "react";
import { useAppStore } from "@/lib/store";
import { resolveCharacter } from "@/lib/engine/resolveCharacter";
import { WEAPONS } from "@/lib/data/weapons";
import { ARMORS } from "@/lib/data/armor";
import { GEAR_ITEMS } from "@/lib/data/gear";

type ArsenalTab = "armas" | "armaduras" | "equipamento";

export function EquipmentStep() {
  const regiment = useAppStore((s) => s.regiment);
  const character = useAppStore((s) => s.character);
  const addEquipment = useAppStore((s) => s.addEquipment);
  const removeEquipment = useAppStore((s) => s.removeEquipment);

  const resolved = useMemo(() => resolveCharacter(regiment, character), [regiment, character]);
  const [tab, setTab] = useState<ArsenalTab>("armas");
  const [query, setQuery] = useState("");

  function add(id: string, name: string) {
    const existing = character.equipment.find((e) => e.id === id);
    if (existing) {
      removeEquipment(id);
      addEquipment({ ...existing, qty: existing.qty + 1 });
    } else {
      addEquipment({ id, name, source: "arsenal", qty: 1 });
    }
  }

  function decrement(id: string) {
    const existing = character.equipment.find((e) => e.id === id);
    if (!existing) return;
    if (existing.qty <= 1) removeEquipment(id);
    else {
      removeEquipment(id);
      addEquipment({ ...existing, qty: existing.qty - 1 });
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <section className="card p-4 flex flex-col gap-2">
        <h2 className="font-semibold">Kit do Regimento</h2>
        <ul className="text-sm text-muted list-disc list-inside">
          {resolved.regiment.kit.length ? (
            resolved.regiment.kit.map((k, i) => <li key={i}>{k}</li>)
          ) : (
            <li>Nenhum kit definido ainda — volte à etapa de Regimento.</li>
          )}
        </ul>
      </section>

      {resolved.specialty && (
        <section className="card p-4 flex flex-col gap-2">
          <h2 className="font-semibold">Equipamento Especialista ({resolved.specialty.name})</h2>
          <ul className="text-sm text-muted list-disc list-inside">
            {resolved.specialty.gear.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="font-semibold text-lg">Arsenal — Equipamento Adicional</h2>
          <div className="flex gap-2 text-xs">
            {(
              [
                ["armas", "Armas"],
                ["armaduras", "Armaduras"],
                ["equipamento", "Equipamento Geral"],
              ] as [ArsenalTab, string][]
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
        <input
          placeholder="Buscar item..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-surface border border-border rounded-md px-3 py-2 text-sm"
        />

        {tab === "armas" && (
          <div className="grid sm:grid-cols-2 gap-3">
            {WEAPONS.filter((w) => w.name.toLowerCase().includes(query.toLowerCase())).map((w) => (
              <div key={w.id} className="card p-3 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm">{w.name}</p>
                  <span className="text-xs text-muted">{w.availability}</span>
                </div>
                <p className="text-xs text-muted font-mono">
                  Alc {w.range} · CdD {w.rof} · Dano {w.damage} · Pen {w.penetration} · Cap {w.clip} · Rec{" "}
                  {w.reload}
                </p>
                {w.special.length > 0 && (
                  <p className="text-xs text-muted">Qualidades: {w.special.join(", ")}</p>
                )}
                <button className="btn-secondary text-xs py-1.5 rounded mt-1" onClick={() => add(w.id, w.name)}>
                  Adicionar
                </button>
              </div>
            ))}
          </div>
        )}

        {tab === "armaduras" && (
          <div className="grid sm:grid-cols-2 gap-3">
            {ARMORS.filter((a) => a.name.toLowerCase().includes(query.toLowerCase())).map((a) => (
              <div key={a.id} className="card p-3 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm">{a.name}</p>
                  <span className="text-xs text-muted">{a.availability}</span>
                </div>
                <p className="text-xs text-muted">
                  Local: {a.locations.join(", ")} · PA {a.armorPoints} · Peso {a.weight}kg
                </p>
                <button className="btn-secondary text-xs py-1.5 rounded mt-1" onClick={() => add(a.id, a.name)}>
                  Adicionar
                </button>
              </div>
            ))}
          </div>
        )}

        {tab === "equipamento" && (
          <div className="grid sm:grid-cols-2 gap-3">
            {GEAR_ITEMS.filter((g) => g.name.toLowerCase().includes(query.toLowerCase())).map((g) => (
              <div key={g.id} className="card p-3 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm">{g.name}</p>
                  <span className="text-xs text-muted">{g.availability}</span>
                </div>
                <p className="text-xs text-muted">{g.description}</p>
                <button className="btn-secondary text-xs py-1.5 rounded mt-1" onClick={() => add(g.id, g.name)}>
                  Adicionar
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="card p-4 flex flex-col gap-2">
        <h2 className="font-semibold">Equipamento Selecionado do Arsenal</h2>
        {character.equipment.length === 0 && <p className="text-sm text-muted">Nenhum item adicional ainda.</p>}
        <ul className="flex flex-col gap-1">
          {character.equipment.map((e) => (
            <li key={e.id} className="flex items-center justify-between text-sm">
              <span>
                {e.name} {e.qty > 1 && <span className="text-muted">×{e.qty}</span>}
              </span>
              <button className="text-xs text-accent-2 underline" onClick={() => decrement(e.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
