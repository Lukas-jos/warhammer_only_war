import { Trait } from "@/lib/types";

// Fonte: Capítulo V: Talentos e Traços (Only War, p.163-169), seção "Traços".
export const TRAITS: Trait[] = [
  { id: "alternante", name: "Alternante", effect: "Alterna entre incorpóreo e corpóreo como uma Meia Ação." },
  { id: "amorfo", name: "Amorfo", effect: "A criatura é uma geleia maleável, e lenta (velocidade usa metade do Bônus de Agilidade)." },
  { id: "anfibio", name: "Anfíbio", effect: "A criatura pode respirar na água (e no ar), submergindo indefinidamente." },
  { id: "armadura-natural", name: "Armadura Natural (X)", effect: "Ganha X Pontos de Armadura adicionais em todos os locais; acumula com armadura vestida." },
  { id: "armas-da-distorcao", name: "Armas da Distorção", effect: "Ataques da criatura ignoram armadura física (a menos que protegida contra a distorção); campos de força ainda funcionam." },
  { id: "armas-naturais", name: "Armas Naturais", effect: "Ataques desarmados causam 1d10+Bônus de Força de Dano (Qualidade Primitiva 7, salvo indicado ao contrário); conta como sempre armada." },
  { id: "armas-naturais-mortais", name: "Armas Naturais Mortais", effect: "Como Armas Naturais, mas sem a Qualidade Primitiva (ataques mais poderosos, atravessam armaduras)." },
  { id: "auto-estabilizado", name: "Auto-Estabilizado", effect: "Sempre conta como apoiado; pode disparar armas pesadas em modo semiauto/auto sem Ação Apoiar e sem penalidade." },
  { id: "bestial", name: "Bestial", effect: "Automaticamente passa Testes de Sobrevivência em seu habitat; a menos que faminta/desesperada, deve fazer Teste Desafiador (+0) de Vontade para não fugir se intimidada/ferida." },
  { id: "caracteristica-sobrenatural", name: "Característica Sobrenatural (X)", effect: "Uma Característica é melhorada sobrenaturalmente: Bônus de Característica +X adicional; ao passar Teste com essa Característica, ganha Graus de Sucesso extras iguais à metade do valor de X." },
  { id: "cego", name: "Cego", effect: "Falha automaticamente Testes baseados em visão e Testes de Habilidade Balística; -30 em Habilidade com Arma e na maioria de outros Testes que envolvem visão." },
  { id: "daemoniaco", name: "Daemoníaco (X)", effect: "Bônus de Dureza contra Dano (indicado por X); imune a veneno e doenças; ganha benefícios ao usar Poderes Psíquicos; efeitos negados por armas de força, poderes psíquicos, ataques sagrados." },
  { id: "debandada", name: "Debandada", effect: "Ao falhar Teste de Vontade, debanda em linha reta (atropelando o que estiver no caminho, causando Dano da Arma Natural ou 1d5+Bônus de Força); dura até a fonte do perigo sumir de vista ou 1d10 minutos." },
  { id: "do-alem", name: "Do Além", effect: "Imune a Medo, Supressão, Pontos de Insanidade, e poderes que nublam/iludem a mente." },
  { id: "escavador", name: "Escavador (X)", effect: "Move-se por objetos sólidos escavando (velocidade X); deixa túnel que pode desmoronar (50% de chance por Rodada)." },
  { id: "firme", name: "Firme", effect: "Bônus +20 para resistir agarramentos e o Talento Derrubar." },
  { id: "imortal", name: "Imortal", effect: "Imune a doenças, venenos, efeitos tóxicos; não precisa respirar; sobrevive no vácuo." },
  { id: "implantes-mechanicus", name: "Implantes Mechanicus", effect: "Personagem tem acesso a implantes especiais (Eletro-enxerto, Eletruagens Indutoras, Unidade Respiradora, Cyber-Manto, Bobina Potentia, Circuito Craniano)." },
  { id: "incorporeo", name: "Incorpóreo", effect: "Insubstancial e sem peso; passa por objetos sólidos; imune a armas normais (exceto de força/psíquicas/outras entidades incorpóreas); +30 em Furtividade; ganha Traço Pairador (6)." },
  { id: "instabilidade-da-distorcao", name: "Instabilidade da Distorção", effect: "Se a criatura recebe Dano sem causar Dano/Insanidade a outra criatura até o fim do próximo turno dela, deve fazer Teste de Vontade ou sofrer Dano (1 + 1 por Grau de Falha); se igualar/exceder Ferimentos, é mandada de volta à distorção." },
  { id: "investida-brutal", name: "Investida Brutal (X)", effect: "Causa X pontos extras de Dano por ataque, no turno em que já fez uma investida." },
  { id: "ligacao-de-alma", name: "Ligação de Alma", effect: "Ligada a um poder maior/entidade em troca de proteção; efeitos e obrigações variam (ex.: Astropatas ligados ao Imperador)." },
  { id: "maquina", name: "Máquina (X)", effect: "Feita de materiais não-orgânicos; não respira; imune a vácuo, frio extremo, efeitos psíquicos que afetam a mente; tem X Pontos de Armadura (acumula com armadura vestida, mas não com Armadura Natural)." },
  { id: "medo", name: "Medo (X)", effect: "Aparência assustadora; classificação de 1 a 4; força Teste de Vontade ao encontrar a criatura, sob pena de Teste na Tabela de Choque com +10 por Grau de Falha." },
  { id: "membros-multiplos", name: "Membros Múltiplos (X)", effect: "Tem mais de um par de braços (X = total); +10 em Atletismo (escalada/pendurar); pode fazer ataque adicional por par extra de braços (dividido por 2), se tiver Combate com Duas Armas (Corporal)." },
  { id: "pairador", name: "Pairador (X)", effect: "Voo limitado, não mais alto que 2m; X substitui o Bônus de Agilidade para Ações de movimento." },
  { id: "possessao", name: "Possessão", effect: "Habilidade de possuir corpos mortais (Ataque de Possessão, Testes Opostos de Vontade cumulativos até 5 Graus de Sucesso de diferença)." },
  { id: "psyker", name: "Psyker", effect: "Criatura tem Classificação Psy 1+; permite comprar Psynisciência e Talentos Classificação Psy/Poderes Psíquicos." },
  { id: "quadrupede", name: "Quadrúpede", effect: "Movimento é o dobro do indicado pelo Bônus de Agilidade." },
  { id: "rastejante", name: "Rastejante", effect: "Move-se rastejando (base de movimento = metade do Bônus de Agilidade, arredondado para cima); sem penalidade por terreno difícil." },
  { id: "regeneracao", name: "Regeneração (X)", effect: "No início do turno, Teste de Dureza remove X pontos de Dano; perde o traço ao morrer." },
  { id: "sentidos-sobrenaturais", name: "Sentidos Sobrenaturais (X)", effect: "Percebe arredores por sentidos além de visão/audição (órgãos, pelos finos, etc.); alcance em metros indicado por X." },
  { id: "sonar", name: "Sonar", effect: "Percebe arredores por eco de frequência, localizando objetos sólidos em 30m; outras criaturas dentro de 40m podem detectar o ruído com Teste de Atenção -10." },
  { id: "tamanho", name: "Tamanho (X)", effect: "Determina o tamanho da criatura e seus modificadores de Acerto/Furtividade/Movimento Base (ver tabela de Tamanho)." },
  { id: "tocado-pelos-destinos", name: "Tocado pelos Destinos (X)", effect: "Criatura/PNJ tem X Pontos de Destino, usáveis como um PJ (inclusive para sobreviver à morte)." },
  { id: "toxico", name: "Tóxico (X)", effect: "Ataque venenoso; alvo atingido faz Teste de Dureza com penalidade -10xX ou sofre 1d10 de Dano adicional (não reduzido por Armadura/Dureza)." },
  { id: "vindo-dos-pesadelos", name: "Vindo dos Pesadelos", effect: "Imune a venenos, doenças, necessidade de respirar, perigos ambientais, sangramento e atordoamento; ignora resultados de Acerto Crítico exceto os que a destruiriam instantaneamente (a menos causado por poder psíquico, arma de força ou ataque divino)." },
  { id: "visao-noturna", name: "Visão Noturna", effect: "Enxerga normalmente mesmo em escuridão total; nunca sofre penalidades por pouca/nenhuma luz." },
  { id: "voador", name: "Voador (X)", effect: "Voa livremente (X = velocidade de voo, substitui Bônus de Agilidade para Ações de movimento); pode voar a qualquer altitude." },
];

// Tabela 5-5: Classificação de Medo
export interface FearRating {
  rating: number;
  name: string;
  penalty: number;
}
export const FEAR_RATINGS: FearRating[] = [
  { rating: 1, name: "Perturbador", penalty: 0 },
  { rating: 2, name: "Assustador", penalty: -10 },
  { rating: 3, name: "Horrível", penalty: -20 },
  { rating: 4, name: "Aterrorizante", penalty: -30 },
];

// Tabela 5-6: Tamanho
export interface SizeCategory {
  value: number;
  name: string;
  example: string;
  hitModifier: number;
  stealthModifier: number;
  baseMovementModifier: string; // ex.: "AB-3", "AB", "AB+6"
}
export const SIZE_CATEGORIES: SizeCategory[] = [
  { value: 1, name: "Minúsculo", example: "Autopena, Faca", hitModifier: -30, stealthModifier: 30, baseMovementModifier: "AB-3" },
  { value: 2, name: "Ínfimo", example: "Pistola bolt, servo-crânio", hitModifier: -20, stealthModifier: 20, baseMovementModifier: "AB-2" },
  { value: 3, name: "Pequeno", example: "Gretchin, Criança Humana", hitModifier: -10, stealthModifier: 10, baseMovementModifier: "AB-1" },
  { value: 4, name: "Mediano", example: "Humano, Eldar", hitModifier: 0, stealthModifier: 0, baseMovementModifier: "AB" },
  { value: 5, name: "Grande", example: "Nob Ork, Fuzileiro Espacial com armadura", hitModifier: 10, stealthModifier: -10, baseMovementModifier: "AB+1" },
  { value: 6, name: "Enorme", example: "Caminhante Sentinela, Krootox", hitModifier: 20, stealthModifier: -20, baseMovementModifier: "AB+2" },
  { value: 7, name: "Gigante", example: "Tanque de Batalha, Demônio Maior", hitModifier: 30, stealthModifier: -30, baseMovementModifier: "AB+3" },
  { value: 8, name: "Imenso", example: "Saqueador Land, Grande Knarloc", hitModifier: 40, stealthModifier: -40, baseMovementModifier: "AB+4" },
  { value: 9, name: "Monumental", example: "Squiggoth, Lâmina da Perdição", hitModifier: 50, stealthModifier: -50, baseMovementModifier: "AB+5" },
  { value: 10, name: "Titânico", example: "Titan de Batalha Ceifador, Máquina de Guerra Ordinatus", hitModifier: 60, stealthModifier: -60, baseMovementModifier: "AB+6" },
];
