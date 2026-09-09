"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useAppStore } from "@/lib/store";
import { resolveCharacter } from "@/lib/engine/resolveCharacter";
import { movementForAgilityBonus } from "@/lib/engine/derivedStats";
import { skillTierIndex } from "@/lib/engine/purchases";
import { SKILLS } from "@/lib/data/skills";
import { TALENTS } from "@/lib/data/talents";
import { WEAPONS } from "@/lib/data/weapons";
import { ARMORS } from "@/lib/data/armor";
import { GEAR_ITEMS } from "@/lib/data/gear";
import { PSYCHIC_POWERS } from "@/lib/data/psychicPowers";
import { CHARACTERISTIC_NAMES, CHARACTERISTICS } from "@/lib/types";
import { BEHAVIORS } from "@/lib/data/behaviors";

const SKILL_TIER_BONUS = [0, 10, 20, 30];
const SKILL_TIER_LABEL = ["Conhecido", "Treinado", "Experiente", "Veterano"];

export default function FichaPage() {
  const regiment = useAppStore((s) => s.regiment);
  const character = useAppStore((s) => s.character);
  const resolved = useMemo(() => resolveCharacter(regiment, character), [regiment, character]);
  const sheetRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);

  const behavior = BEHAVIORS.find((b) => b.id === character.behaviorId);
  const comradeBehavior = BEHAVIORS.find((b) => b.id === character.comradeBehaviorId);
  const movement = movementForAgilityBonus(resolved.characteristics.Ag.bonus);

  const purchasedSkills = new Map<string, { skill: (typeof SKILLS)[number]; specialization?: string; tierIdx: number }>();
  for (const skill of SKILLS) {
    const specs = new Set<string | undefined>();
    for (const p of character.xpPurchases) {
      if (p.type === "skill" && p.refId === skill.id) specs.add(p.specialization);
    }
    if (specs.size === 0) specs.add(undefined);
    for (const spec of specs) {
      const tierIdx = skillTierIndex(character.xpPurchases, skill.id, spec);
      const isGrantedFree = Array.from(resolved.skillNames).some((n) =>
        n.toLowerCase().startsWith(skill.name.toLowerCase())
      );
      if (tierIdx >= 0 || isGrantedFree) {
        const finalIdx = Math.max(tierIdx, isGrantedFree ? 1 : -1);
        purchasedSkills.set(`${skill.id}:${spec ?? ""}`, { skill, specialization: spec, tierIdx: finalIdx });
      }
    }
  }

  const purchasedTalents: { talent: (typeof TALENTS)[number]; specialization?: string }[] = [];
  for (const p of character.xpPurchases) {
    if (p.type !== "talent") continue;
    const talent = TALENTS.find((t) => t.id === p.refId);
    if (talent) purchasedTalents.push({ talent, specialization: p.specialization });
  }

  const purchasedPowers = character.xpPurchases
    .filter((p) => p.type === "psychicPower")
    .map((p) => PSYCHIC_POWERS.find((pw) => pw.id === p.refId))
    .filter((p): p is (typeof PSYCHIC_POWERS)[number] => !!p);

  const carriedWeapons = character.equipment
    .map((e) => ({ eq: e, weapon: WEAPONS.find((w) => w.id === e.id) }))
    .filter((x): x is { eq: typeof x.eq; weapon: (typeof WEAPONS)[number] } => !!x.weapon);

  const carriedArmor = character.equipment
    .map((e) => ({ eq: e, armor: ARMORS.find((a) => a.id === e.id) }))
    .filter((x): x is { eq: typeof x.eq; armor: (typeof ARMORS)[number] } => !!x.armor);

  const carriedGear = character.equipment
    .map((e) => ({ eq: e, gear: GEAR_ITEMS.find((g) => g.id === e.id) }))
    .filter((x): x is { eq: typeof x.eq; gear: (typeof GEAR_ITEMS)[number] } => !!x.gear);

  async function downloadPdf() {
    if (!sheetRef.current) return;
    setExporting(true);
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas-pro"),
        import("jspdf"),
      ]);
      const canvas = await html2canvas(sheetRef.current, { scale: 2, backgroundColor: "#ffffff" });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ unit: "pt", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save(`${character.name || "ficha-only-war"}.pdf`);
    } catch (err) {
      console.error(err);
      alert("Não foi possível gerar o PDF. Tente usar o botão Imprimir e salvar como PDF pelo navegador.");
    } finally {
      setExporting(false);
    }
  }

  return (
    <div className="flex-1 flex flex-col max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 gap-4">
      <div className="flex justify-between items-center no-print">
        <Link href="/criar" className="btn-secondary px-4 py-2 rounded-md text-sm">
          ← Voltar à Criação
        </Link>
        <div className="flex gap-2">
          <button onClick={() => window.print()} className="btn-secondary px-4 py-2 rounded-md text-sm">
            Imprimir
          </button>
          <button
            onClick={downloadPdf}
            disabled={exporting}
            className="btn-primary px-4 py-2 rounded-md text-sm disabled:opacity-50"
          >
            {exporting ? "Gerando PDF..." : "Baixar PDF"}
          </button>
        </div>
      </div>

      <div id="character-sheet" ref={sheetRef} className="card p-6 flex flex-col gap-6 text-sm">
        <header className="flex justify-between items-start border-b border-border pb-4">
          <div>
            <h1 className="text-2xl font-bold">{character.name || "Sem Nome"}</h1>
            <p className="text-muted">
              {resolved.specialty?.name ?? "Sem Especialidade"} · {resolved.regiment.displayName}
            </p>
            <p className="text-muted text-xs">
              {character.gender} {character.age && `· ${character.age}`} · {character.handedness}
              {behavior && ` · ${behavior.name}`}
            </p>
          </div>
          <div className="text-right text-xs text-muted">
            <p>Ferimentos: <span className="font-bold text-foreground">{resolved.wounds}</span></p>
            <p>Pontos de Destino: <span className="font-bold text-foreground">{resolved.fatePoints}</span></p>
            <p>
              Movimento: {movement.halfMove}/{movement.fullMove}/{movement.charge}/{movement.run}
            </p>
            <p>
              XP: {resolved.xpSpent} gastos / {resolved.xpStart} (restam {resolved.xpRemaining})
            </p>
          </div>
        </header>

        <section>
          <h2 className="font-semibold mb-2">Características</h2>
          <div className="grid grid-cols-3 sm:grid-cols-9 gap-2 text-center">
            {CHARACTERISTICS.map((c) => (
              <div key={c} className="card p-2">
                <p className="text-xs text-muted">{c}</p>
                <p className="text-lg font-bold">{resolved.characteristics[c].total}</p>
                <p className="text-xs text-muted">B{resolved.characteristics[c].bonus}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-semibold mb-2">Perícias</h2>
          {purchasedSkills.size === 0 ? (
            <p className="text-muted text-xs">Nenhuma perícia treinada ainda.</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-1">
              {Array.from(purchasedSkills.values()).map(({ skill, specialization, tierIdx }) => (
                <div key={`${skill.id}:${specialization ?? ""}`} className="flex justify-between text-xs border-b border-border/50 py-1">
                  <span>
                    {skill.name}
                    {specialization && ` (${specialization})`}
                  </span>
                  <span className="text-muted">
                    {SKILL_TIER_LABEL[Math.max(0, tierIdx)]} (+{SKILL_TIER_BONUS[Math.max(0, tierIdx)]})
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <h2 className="font-semibold mb-2">Talentos e Habilidades Concedidas</h2>
          {purchasedTalents.length === 0 && resolved.talentNames.size === 0 ? (
            <p className="text-muted text-xs">Nenhum talento ainda.</p>
          ) : (
            <ul className="list-disc list-inside text-xs grid sm:grid-cols-2 gap-1">
              {Array.from(resolved.talentNames).map((name, i) => (
                <li key={`granted-${i}`}>{name}</li>
              ))}
              {purchasedTalents.map(({ talent, specialization }, i) => (
                <li key={`bought-${i}`}>
                  {talent.name}
                  {specialization && ` (${specialization})`}
                </li>
              ))}
            </ul>
          )}
        </section>

        {purchasedPowers.length > 0 && (
          <section>
            <h2 className="font-semibold mb-2">Poderes Psíquicos</h2>
            <ul className="text-xs flex flex-col gap-1">
              {purchasedPowers.map((p) => (
                <li key={p.id}>
                  <span className="font-semibold">{p.name}</span> ({p.discipline}) — {p.effect}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section>
          <h2 className="font-semibold mb-2">Armas</h2>
          {carriedWeapons.length === 0 ? (
            <p className="text-muted text-xs">Nenhuma arma adicionada além do kit regimental.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-left text-muted border-b border-border">
                    <th className="py-1 pr-2">Arma</th>
                    <th className="pr-2">Alcance</th>
                    <th className="pr-2">CdD</th>
                    <th className="pr-2">Dano</th>
                    <th className="pr-2">Pen</th>
                    <th className="pr-2">Cap</th>
                    <th className="pr-2">Rec</th>
                    <th>Qualidades</th>
                  </tr>
                </thead>
                <tbody>
                  {carriedWeapons.map(({ eq, weapon }) => (
                    <tr key={eq.id} className="border-b border-border/50">
                      <td className="py-1 pr-2">
                        {weapon.name} {eq.qty > 1 && `×${eq.qty}`}
                      </td>
                      <td className="pr-2">{weapon.range}</td>
                      <td className="pr-2">{weapon.rof}</td>
                      <td className="pr-2">{weapon.damage}</td>
                      <td className="pr-2">{weapon.penetration}</td>
                      <td className="pr-2">{weapon.clip}</td>
                      <td className="pr-2">{weapon.reload}</td>
                      <td>{weapon.special.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section>
          <h2 className="font-semibold mb-2">Armadura</h2>
          {carriedArmor.length === 0 ? (
            <p className="text-muted text-xs">Nenhuma armadura adicionada além do kit regimental.</p>
          ) : (
            <ul className="text-xs grid sm:grid-cols-2 gap-1">
              {carriedArmor.map(({ eq, armor }) => (
                <li key={eq.id}>
                  {armor.name} — PA {armor.armorPoints} ({armor.locations.join(", ")})
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h2 className="font-semibold mb-2">Equipamento e Kit</h2>
          <ul className="text-xs list-disc list-inside grid sm:grid-cols-2 gap-1">
            {resolved.regiment.kit.map((k, i) => (
              <li key={`kit-${i}`}>{k}</li>
            ))}
            {resolved.specialty?.gear.map((g, i) => (
              <li key={`spec-${i}`}>{g}</li>
            ))}
            {carriedGear.map(({ eq, gear }) => (
              <li key={eq.id}>
                {gear.name} {eq.qty > 1 && `×${eq.qty}`}
              </li>
            ))}
          </ul>
        </section>

        <section className="grid sm:grid-cols-2 gap-4">
          <div>
            <h2 className="font-semibold mb-1">Motivações</h2>
            <p className="text-xs text-muted">
              <span className="text-foreground">Ambição:</span> {character.ambition || "—"}
            </p>
            <p className="text-xs text-muted">
              <span className="text-foreground">Sacrifício:</span> {character.sacrifice || "—"}
            </p>
            <p className="text-xs text-muted">
              <span className="text-foreground">Ódio:</span> {character.hatred || "—"}
            </p>
          </div>
          {resolved.specialty?.hasComrade && (
            <div>
              <h2 className="font-semibold mb-1">{resolved.specialty.comradeReplacement ?? "Camarada"}</h2>
              <p className="text-xs text-muted">
                {character.comradeName || "Sem nome"} {comradeBehavior && `— ${comradeBehavior.name}`}
              </p>
            </div>
          )}
        </section>

        <section>
          <h2 className="font-semibold mb-2">Regras Especiais do Regimento</h2>
          <ul className="text-xs list-disc list-inside grid sm:grid-cols-2 gap-1">
            {resolved.regiment.specialRules.map((r, i) => (
              <li key={i}>
                <span className="text-foreground font-semibold">{r.name}:</span> {r.effect}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
