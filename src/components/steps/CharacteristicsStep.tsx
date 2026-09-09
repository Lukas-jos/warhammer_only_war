"use client";

import { useState } from "react";
import { useAppStore } from "@/lib/store";
import { CHARACTERISTICS, CHARACTERISTIC_NAMES, Characteristic } from "@/lib/types";
import { rollFormula, bonusFor } from "@/lib/engine/derivedStats";

const POINT_BUY_BASE = 20;
const POINT_BUY_TOTAL = 100;
const POINT_BUY_MAX_PER = 20;

export function CharacteristicsStep() {
  const character = useAppStore((s) => s.character);
  const updateCharacter = useAppStore((s) => s.updateCharacter);
  const [rolledOnce, setRolledOnce] = useState(
    CHARACTERISTICS.some((c) => character.baseCharacteristics[c] > 0)
  );

  function rollAll() {
    const next = { ...character.baseCharacteristics };
    for (const c of CHARACTERISTICS) next[c] = rollFormula("2d10+20");
    updateCharacter({ baseCharacteristics: next, rerolledCharacteristic: null });
    setRolledOnce(true);
  }

  function reroll(c: Characteristic) {
    if (character.rerolledCharacteristic && character.rerolledCharacteristic !== c) return;
    const next = { ...character.baseCharacteristics, [c]: rollFormula("2d10+20") };
    updateCharacter({ baseCharacteristics: next, rerolledCharacteristic: c });
  }

  const pointBuySpent = CHARACTERISTICS.reduce(
    (sum, c) => sum + (character.pointBuyAllocations[c] ?? 0),
    0
  );

  function setPointBuy(c: Characteristic, value: number) {
    const clamped = Math.max(0, Math.min(POINT_BUY_MAX_PER, value));
    const others = pointBuySpent - (character.pointBuyAllocations[c] ?? 0);
    if (others + clamped > POINT_BUY_TOTAL) return;
    updateCharacter({
      pointBuyAllocations: { ...character.pointBuyAllocations, [c]: clamped },
      baseCharacteristics: {
        ...character.baseCharacteristics,
        [c]: POINT_BUY_BASE + clamped,
      },
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3">
        <button
          className="card-option flex-1 p-4"
          data-selected={character.generationMethod === "dados"}
          onClick={() => updateCharacter({ generationMethod: "dados" })}
        >
          <p className="font-semibold">Rolar Dados</p>
          <p className="text-sm text-muted mt-1">
            2d10+20 para cada Característica. Você pode refazer a rolagem de UMA Característica à
            sua escolha (deve aceitar o novo resultado, mesmo se pior).
          </p>
        </button>
        <button
          className="card-option flex-1 p-4"
          data-selected={character.generationMethod === "pontos"}
          onClick={() => updateCharacter({ generationMethod: "pontos" })}
        >
          <p className="font-semibold">Alocar Pontos</p>
          <p className="text-sm text-muted mt-1">
            Base 20 em cada Característica + 100 pontos para distribuir livremente (máx. +20 por
            Característica). Método alternativo, sem sorte envolvida.
          </p>
        </button>
      </div>

      {character.generationMethod === "dados" && (
        <div className="flex flex-col gap-3">
          <button onClick={rollAll} className="btn-primary self-start px-5 py-2 rounded-md">
            {rolledOnce ? "Rolar Novamente Todas" : "Rolar Características (2d10+20)"}
          </button>
          <div className="grid sm:grid-cols-3 gap-3">
            {CHARACTERISTICS.map((c) => (
              <div key={c} className="card p-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted">{CHARACTERISTIC_NAMES[c]}</p>
                  <p className="text-xl font-bold font-mono">
                    {character.baseCharacteristics[c] || "—"}
                    {character.baseCharacteristics[c] > 0 && (
                      <span className="text-xs text-muted font-normal ml-1">
                        (Bônus {bonusFor(character.baseCharacteristics[c])})
                      </span>
                    )}
                  </p>
                </div>
                <button
                  className="text-xs btn-secondary px-2 py-1 rounded disabled:opacity-30"
                  disabled={
                    !rolledOnce ||
                    (!!character.rerolledCharacteristic && character.rerolledCharacteristic !== c)
                  }
                  onClick={() => reroll(c)}
                >
                  Refazer
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {character.generationMethod === "pontos" && (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-muted">
            Pontos restantes:{" "}
            <span className="font-bold text-accent">{POINT_BUY_TOTAL - pointBuySpent}</span> /{" "}
            {POINT_BUY_TOTAL}
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            {CHARACTERISTICS.map((c) => (
              <div key={c} className="card p-3 flex flex-col gap-2">
                <p className="text-xs text-muted">{CHARACTERISTIC_NAMES[c]}</p>
                <div className="flex items-center gap-2">
                  <button
                    className="btn-secondary w-7 h-7 rounded"
                    onClick={() => setPointBuy(c, (character.pointBuyAllocations[c] ?? 0) - 1)}
                  >
                    −
                  </button>
                  <p className="text-xl font-bold font-mono flex-1 text-center">
                    {POINT_BUY_BASE + (character.pointBuyAllocations[c] ?? 0)}
                  </p>
                  <button
                    className="btn-secondary w-7 h-7 rounded"
                    onClick={() => setPointBuy(c, (character.pointBuyAllocations[c] ?? 0) + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
