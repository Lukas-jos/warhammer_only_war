"use client";

import { useMemo } from "react";
import { useAppStore } from "@/lib/store";
import { BEHAVIORS } from "@/lib/data/behaviors";
import { resolveCharacter } from "@/lib/engine/resolveCharacter";

function randomBehaviorId(): string {
  const roll = Math.floor(Math.random() * 100) + 1;
  const b = BEHAVIORS.find((b) => roll >= b.rollRange[0] && roll <= b.rollRange[1]);
  return b?.id ?? BEHAVIORS[0].id;
}

export function BackgroundStep() {
  const regiment = useAppStore((s) => s.regiment);
  const character = useAppStore((s) => s.character);
  const updateCharacter = useAppStore((s) => s.updateCharacter);

  const resolved = useMemo(() => resolveCharacter(regiment, character), [regiment, character]);

  return (
    <div className="flex flex-col gap-6">
      <section className="grid sm:grid-cols-2 gap-4">
        <Field label="Nome do Personagem">
          <input
            className="bg-surface border border-border rounded-md px-3 py-2"
            value={character.name}
            onChange={(e) => updateCharacter({ name: e.target.value })}
          />
        </Field>
        <Field label="Gênero">
          <input
            className="bg-surface border border-border rounded-md px-3 py-2"
            value={character.gender}
            onChange={(e) => updateCharacter({ gender: e.target.value })}
          />
        </Field>
        <Field label="Idade">
          <input
            className="bg-surface border border-border rounded-md px-3 py-2"
            value={character.age}
            onChange={(e) => updateCharacter({ age: e.target.value })}
          />
        </Field>
        <Field label="Mão Dominante">
          <div className="flex gap-2">
            {(["Destro", "Canhoto"] as const).map((h) => (
              <button
                key={h}
                onClick={() => updateCharacter({ handedness: h })}
                className={
                  "px-3 py-2 rounded border text-sm flex-1 " +
                  (character.handedness === h ? "border-accent bg-surface-2 text-accent" : "border-border text-muted")
                }
              >
                {h}
              </button>
            ))}
          </div>
        </Field>
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg">Comportamento</h2>
          <button
            className="btn-secondary text-xs px-3 py-1.5 rounded"
            onClick={() => updateCharacter({ behaviorId: randomBehaviorId() })}
          >
            Sortear (1d100)
          </button>
        </div>
        <select
          className="bg-surface border border-border rounded-md px-3 py-2"
          value={character.behaviorId ?? ""}
          onChange={(e) => updateCharacter({ behaviorId: e.target.value || null })}
        >
          <option value="">Selecione um comportamento...</option>
          {BEHAVIORS.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
        {character.behaviorId && (
          <p className="text-sm text-muted">
            {BEHAVIORS.find((b) => b.id === character.behaviorId)?.description}
          </p>
        )}
      </section>

      <section className="grid sm:grid-cols-1 gap-4">
        <Field label="Qual é a Maior Ambição do Personagem?">
          <textarea
            className="bg-surface border border-border rounded-md px-3 py-2"
            rows={2}
            value={character.ambition}
            onChange={(e) => updateCharacter({ ambition: e.target.value })}
            placeholder="Poder, riqueza, glória, sobrevivência, ou servir ao Deus-Imperador..."
          />
        </Field>
        <Field label="O Que o Personagem Irá Sacrificar?">
          <textarea
            className="bg-surface border border-border rounded-md px-3 py-2"
            rows={2}
            value={character.sacrifice}
            onChange={(e) => updateCharacter({ sacrifice: e.target.value })}
            placeholder="Saúde, membros, vida, colegas, crenças..."
          />
        </Field>
        <Field label="Qual é o Maior Ódio do Personagem?">
          <textarea
            className="bg-surface border border-border rounded-md px-3 py-2"
            rows={2}
            value={character.hatred}
            onChange={(e) => updateCharacter({ hatred: e.target.value })}
            placeholder="Mutantes, renegados, xenos, um oficial específico, ou si mesmo..."
          />
        </Field>
      </section>

      {resolved.specialty?.hasComrade && (
        <section className="flex flex-col gap-3">
          <h2 className="font-semibold text-lg">
            {resolved.specialty.comradeReplacement ?? "Camarada"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Nome">
              <input
                className="bg-surface border border-border rounded-md px-3 py-2"
                value={character.comradeName}
                onChange={(e) => updateCharacter({ comradeName: e.target.value })}
              />
            </Field>
            <Field label="Comportamento">
              <select
                className="bg-surface border border-border rounded-md px-3 py-2"
                value={character.comradeBehaviorId ?? ""}
                onChange={(e) => updateCharacter({ comradeBehaviorId: e.target.value || null })}
              >
                <option value="">Selecione...</option>
                {BEHAVIORS.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </section>
      )}
      {resolved.specialty && !resolved.specialty.hasComrade && (
        <p className="text-sm text-muted">
          {resolved.specialty.name} não tem um Camarada tradicional (opera sozinho, conforme suas regras
          especiais).
        </p>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-semibold">{label}</span>
      {children}
    </label>
  );
}
