"use client";

import { ReactNode } from "react";

export const WIZARD_STEPS = [
  "Regimento",
  "Características",
  "Especialidade",
  "Avanços",
  "Equipamento",
  "Antecedentes",
] as const;

export function StepShell({
  stepIndex,
  title,
  description,
  onBack,
  onNext,
  nextLabel = "Continuar",
  nextDisabled,
  children,
}: {
  stepIndex: number;
  title: string;
  description?: string;
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 gap-6">
      <ol className="flex flex-wrap gap-x-2 gap-y-1 text-xs">
        {WIZARD_STEPS.map((label, i) => (
          <li
            key={label}
            className={
              "px-2 py-1 rounded " +
              (i === stepIndex
                ? "bg-accent text-accent-fg font-semibold"
                : i < stepIndex
                  ? "text-accent"
                  : "text-muted")
            }
          >
            {i + 1}. {label}
          </li>
        ))}
      </ol>

      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && <p className="text-muted mt-1 text-sm max-w-2xl">{description}</p>}
      </div>

      <div className="flex-1">{children}</div>

      <div className="flex justify-between border-t border-border pt-4 no-print">
        <button
          type="button"
          onClick={onBack}
          disabled={!onBack}
          className="btn-secondary px-5 py-2 rounded-md disabled:opacity-0"
        >
          Voltar
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={nextDisabled}
          className="btn-primary px-6 py-2 rounded-md"
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}
