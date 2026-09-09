import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center gap-8">
      <div className="space-y-4 max-w-2xl">
        <p className="uppercase tracking-[0.3em] text-xs text-muted">Warhammer 40.000 Roleplay</p>
        <h1 className="text-5xl font-bold tracking-tight">ONLY WAR</h1>
        <p className="text-lg text-muted">Criador de Regimento &amp; Personagem</p>
        <p className="text-sm text-muted max-w-xl mx-auto">
          Monte o regimento da Guarda Imperial de sua Esquadra e crie seu Guarda passo a passo —
          características, especialidade, perícias, talentos, equipamento e poderes psíquicos —
          com todos os cálculos de Only War feitos automaticamente e uma ficha pronta para
          impressão ao final.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/criar"
          className="btn-primary px-8 py-3 rounded-md text-base"
        >
          Iniciar Criação
        </Link>
        <Link href="/ficha" className="btn-secondary px-8 py-3 rounded-md text-base">
          Ver Ficha Atual
        </Link>
      </div>
      <p className="text-xs text-muted max-w-md">
        Baseado na tradução de fã de <em>Only War</em> por Machar Solarius. Only War é propriedade
        da Fantasy Flight Publishing, Inc. Warhammer 40.000 e todos os personagens e termos
        relacionados são propriedade da Games Workshop Group PLC. Este projeto não tem fins
        comerciais.
      </p>
    </main>
  );
}
