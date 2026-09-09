"use client";

import { useMemo } from "react";
import { useAppStore } from "@/lib/store";
import { SelectableCard } from "@/components/ui/SelectableCard";
import { EXAMPLE_REGIMENTS } from "@/lib/data/exampleRegiments";
import { HOMEWORLDS } from "@/lib/data/homeworlds";
import { OFFICER_PERSONALITIES } from "@/lib/data/officerPersonalities";
import { REGIMENT_DOCTRINES } from "@/lib/data/regimentDoctrines";
import { Characteristic, CHARACTERISTIC_NAMES } from "@/lib/types";

const REGIMENT_BUDGET = 12;

export function RegimentStep() {
  const regiment = useAppStore((s) => s.regiment);
  const updateRegiment = useAppStore((s) => s.updateRegiment);

  const selectedDoctrines = useMemo(
    () => regiment.doctrineIds.map((id) => REGIMENT_DOCTRINES.find((d) => d.id === id)).filter(Boolean),
    [regiment.doctrineIds]
  );

  const homeworld = HOMEWORLDS.find((h) => h.id === regiment.homeworldId);
  const spent =
    (homeworld?.cost ?? 0) +
    (OFFICER_PERSONALITIES.find((o) => o.id === regiment.officerPersonalityId)?.cost ?? 0) +
    selectedDoctrines.reduce((sum, d) => sum + (d?.cost ?? 0), 0);

  const typeCount = selectedDoctrines.filter((d) => d?.list === "Tipo de Regimento").length;

  function toggleDoctrine(id: string, list: string) {
    const already = regiment.doctrineIds.includes(id);
    if (already) {
      updateRegiment({ doctrineIds: regiment.doctrineIds.filter((d) => d !== id) });
      return;
    }
    if (list === "Tipo de Regimento" && typeCount >= 1) {
      // substitui o tipo de regimento anterior
      const withoutTypes = regiment.doctrineIds.filter(
        (d) => REGIMENT_DOCTRINES.find((rd) => rd.id === d)?.list !== "Tipo de Regimento"
      );
      updateRegiment({ doctrineIds: [...withoutTypes, id] });
      return;
    }
    if (regiment.doctrineIds.length >= 3) return; // máx. 3 doutrinas totais
    updateRegiment({ doctrineIds: [...regiment.doctrineIds, id] });
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-3">
        <button
          className="card-option flex-1 p-4"
          data-selected={regiment.mode === "example"}
          onClick={() => updateRegiment({ mode: "example" })}
        >
          <p className="font-semibold">Usar Regimento Pronto</p>
          <p className="text-sm text-muted mt-1">
            Escolha um dos 8 regimentos de exemplo do livro (Catachanos, Krieg, Cadianos, etc.),
            já balanceados e prontos para jogar.
          </p>
        </button>
        <button
          className="card-option flex-1 p-4"
          data-selected={regiment.mode === "custom"}
          onClick={() => updateRegiment({ mode: "custom" })}
        >
          <p className="font-semibold">Forjar Seu Próprio Regimento</p>
          <p className="text-sm text-muted mt-1">
            Monte do zero: escolha Mundo Natal, Oficial Comandante e até 3 Doutrinas dentro de um
            orçamento de 12 pontos.
          </p>
        </button>
      </div>

      {regiment.mode === "example" && (
        <section className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg">Escolha um Regimento</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {EXAMPLE_REGIMENTS.map((r) => (
              <SelectableCard
                key={r.id}
                title={r.name}
                description={r.description}
                selected={regiment.exampleRegimentId === r.id}
                onClick={() =>
                  updateRegiment({ exampleRegimentId: r.id, regimentName: regiment.regimentName || r.name })
                }
              />
            ))}
          </div>
        </section>
      )}

      {regiment.mode === "custom" && (
        <>
          <div className="text-sm text-muted">
            Pontos usados na Criação de Regimento:{" "}
            <span className={spent > REGIMENT_BUDGET ? "text-accent-2 font-bold" : "font-bold text-accent"}>
              {spent}
            </span>{" "}
            / {REGIMENT_BUDGET}
          </div>

          <section className="flex flex-col gap-3">
            <h2 className="font-semibold text-lg">1. Mundo Natal ou Origem</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {HOMEWORLDS.map((h) => (
                <SelectableCard
                  key={h.id}
                  title={h.name}
                  right={`${h.cost} pts`}
                  description={h.specialRules[0]?.effect}
                  selected={regiment.homeworldId === h.id}
                  onClick={() => updateRegiment({ homeworldId: h.id, homeworldCharacteristicChoice: [] })}
                />
              ))}
            </div>

            {homeworld && (
              <div className="card p-4 flex flex-col gap-3">
                <p className="font-semibold text-sm">Modificadores de {homeworld.name}</p>
                {homeworld.characteristicMods.map((mod, i) =>
                  mod.kind === "fixed" ? (
                    <p key={i} className="text-sm text-muted">
                      +{mod.amount} {CHARACTERISTIC_NAMES[mod.characteristic]} (fixo)
                    </p>
                  ) : (
                    <CharacteristicChoicePicker
                      key={i}
                      amount={mod.amount}
                      chooseCount={mod.chooseCount}
                      options={mod.options.length ? mod.options : ([...Object.keys(CHARACTERISTIC_NAMES)] as Characteristic[])}
                      selected={regiment.homeworldCharacteristicChoice}
                      onChange={(sel) => updateRegiment({ homeworldCharacteristicChoice: sel })}
                    />
                  )
                )}
                <div className="text-sm text-muted">
                  Ferimentos iniciais: {homeworld.woundsModifier >= 0 ? "+" : ""}
                  {homeworld.woundsModifier}
                </div>
                <ul className="text-sm text-muted list-disc list-inside">
                  {homeworld.specialRules.map((r) => (
                    <li key={r.name}>
                      <span className="text-foreground">{r.name}:</span> {r.effect}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-semibold text-lg">2. Oficial Comandante</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {OFFICER_PERSONALITIES.map((o) => (
                <SelectableCard
                  key={o.id}
                  title={o.name}
                  right={`${o.cost} pts`}
                  description={o.description}
                  selected={regiment.officerPersonalityId === o.id}
                  onClick={() => updateRegiment({ officerPersonalityId: o.id })}
                />
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-semibold text-lg">
              3. Doutrinas <span className="text-muted text-sm font-normal">(1 Tipo de Regimento obrigatório + até 2 outras)</span>
            </h2>
            {(["Tipo de Regimento", "Doutrina de Treinamento", "Doutrina de Equipamento Especial"] as const).map(
              (list) => (
                <div key={list} className="flex flex-col gap-2">
                  <h3 className="text-sm font-semibold text-muted">{list}</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {REGIMENT_DOCTRINES.filter((d) => d.list === list).map((d) => (
                      <SelectableCard
                        key={d.id}
                        title={d.name}
                        right={`${d.cost} pts`}
                        description={d.specialRules?.map((r) => r.effect).join(" ")}
                        selected={regiment.doctrineIds.includes(d.id)}
                        onClick={() => toggleDoctrine(d.id, d.list)}
                      />
                    ))}
                  </div>
                </div>
              )
            )}
          </section>

          <section className="flex flex-col gap-2">
            <label className="text-sm font-semibold" htmlFor="regiment-name">
              Nome do Regimento
            </label>
            <input
              id="regiment-name"
              className="bg-surface border border-border rounded-md px-3 py-2"
              placeholder='ex.: "42º Infantaria de Linha Valhalla"'
              value={regiment.regimentName}
              onChange={(e) => updateRegiment({ regimentName: e.target.value })}
            />
          </section>
        </>
      )}
    </div>
  );
}

function CharacteristicChoicePicker({
  amount,
  chooseCount,
  options,
  selected,
  onChange,
}: {
  amount: number;
  chooseCount: number;
  options: Characteristic[];
  selected: Characteristic[];
  onChange: (sel: Characteristic[]) => void;
}) {
  function toggle(c: Characteristic) {
    if (selected.includes(c)) {
      onChange(selected.filter((s) => s !== c));
    } else if (selected.length < chooseCount) {
      onChange([...selected, c]);
    }
  }
  return (
    <div className="text-sm">
      <p className="text-muted mb-1">
        Escolha {chooseCount} ({selected.length}/{chooseCount}) para +{amount}:
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => toggle(c)}
            className={
              "px-2 py-1 rounded border text-xs " +
              (selected.includes(c) ? "border-accent bg-surface-2 text-accent" : "border-border text-muted")
            }
          >
            {CHARACTERISTIC_NAMES[c]}
          </button>
        ))}
      </div>
    </div>
  );
}
