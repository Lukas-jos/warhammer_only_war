"use client";

import { ReactNode } from "react";

export function SelectableCard({
  selected,
  onClick,
  title,
  subtitle,
  description,
  right,
  disabled,
  children,
}: {
  selected?: boolean;
  onClick?: () => void;
  title: string;
  subtitle?: string;
  description?: ReactNode;
  right?: ReactNode;
  disabled?: boolean;
  children?: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      data-selected={selected ? "true" : "false"}
      className="card-option w-full text-left p-4 flex flex-col gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold leading-tight">{title}</p>
          {subtitle && <p className="text-xs text-muted mt-0.5">{subtitle}</p>}
        </div>
        {right && <div className="shrink-0 text-sm text-accent font-mono">{right}</div>}
      </div>
      {description && <p className="text-sm text-muted mt-1">{description}</p>}
      {children}
    </button>
  );
}
