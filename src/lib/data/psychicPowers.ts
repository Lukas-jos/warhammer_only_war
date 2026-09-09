import { PsychicPower } from "@/lib/types";

// Fonte: Capítulo VII: Poderes Psíquicos (Only War, p.239-257).
// Ver /home/condo-401/warhammer/rules/08-poderes-psiquicos.md para a extração completa,
// incluindo regras gerais de Classificação Psy, níveis de uso (Restrito/Irrestrito/Forçar)
// e tabelas de referência (ver psychicTables.ts).
export const PSYCHIC_POWERS: PsychicPower[] = [
  // ---------------------------------------------------------------------
  // Adivinhação
  // ---------------------------------------------------------------------
  {
    id: "pressagio-ataque",
    discipline: "Adivinhação",
    name: "Presságio (Ataque)",
    cost: 200,
    prerequisites: "CP 1",
    action: "Meia Ação",
    sustained: "Sustentado: Meia Ação",
    range: "3m x CP (raio)",
    effect:
      "Teste Desafiador (+0) de Psynisciência. Aliados em alcance (número = CP) mais o próprio psyker ganham bônus à Habilidade com Arma e Habilidade Balística igual ao dobro da CP.",
  },
  {
    id: "pressagio-evasao",
    discipline: "Adivinhação",
    name: "Presságio (Evasão)",
    cost: 200,
    prerequisites: "Psynisciência Nível 1",
    action: "Reação",
    sustained: "Não sustentado",
    range: "Conjurador",
    effect:
      "Teste Dificultoso (-10) de Percepção. Substitui um Teste de Evasão: se o poder suceder, o psyker evita o ataque como se tivesse passado no Teste de Evasão.",
  },
  {
    id: "aviso-previo",
    discipline: "Adivinhação",
    name: "Aviso Prévio",
    cost: 300,
    prerequisites: "Presságio",
    action: "Meia Ação",
    sustained: "Sustentado: Ação Livre",
    range: "3m x CP (raio)",
    effect:
      "Teste Desafiador (+0) de Psynisciência. Aliados em alcance (número = CP) mais o psyker ganham bônus a todos os Testes de Evasão igual ao dobro da CP.",
  },
  {
    id: "bem-na-hora",
    discipline: "Adivinhação",
    name: "Bem Na Hora",
    cost: 300,
    prerequisites: "Presságio",
    action: "Meia Ação",
    sustained: "Sustentado: Meia Ação",
    range: "3m x CP (raio)",
    effect:
      "Teste Dificultoso (-10) de Psynisciência. Aliados em alcance (número = CP) mais o psyker ignoram os efeitos de cobertura ao disparar contra um alvo.",
  },
  {
    id: "precognicao",
    discipline: "Adivinhação",
    name: "Precognição",
    cost: 400,
    prerequisites: "Bem Na Hora",
    action: "Ação Completa",
    sustained: "Não sustentado",
    range: "5m x CP (raio)",
    effect:
      "Teste Difícil (-20) de Psynisciência. O psyker ganha re-rolagens em número igual à CP, válidas até o início do próximo turno; pode gastá-las para permitir que um aliado (ou ele mesmo) role novamente um Teste ou uma rolagem de Dano. Perde as re-rolagens restantes se morrer ou ficar inconsciente antes do próximo turno.",
  },
  {
    id: "olhar-do-vidente",
    discipline: "Adivinhação",
    name: "Olhar do Vidente",
    cost: 200,
    prerequisites: "Psynisciência Nível 2",
    action: "Especial",
    sustained: "Não sustentado",
    range: "Conjurador",
    effect:
      "Teste Desafiador (+0) de Psynisciência. Exige um ritual de 30 minutos de concentração; ao final, o Teste de Focar Poder revela informações do campo de batalha conforme os Graus de Sucesso (Tabela 7-4): 1 GdS = Única Ameaça (foca em uma única manobra-chave que o inimigo planeja ou executa); 2 GdS = Movimentos de Tropas (vê a movimentação de todas as unidades aliadas e inimigas, sem número/composição exatos); 3 GdS = Números de Tropas (também discerne número e composição de cada unidade); 4+ GdS = Planos do Comandante (ciente de todos os efeitos anteriores e também dos planos de batalha do comandante inimigo).",
  },
  {
    id: "infortunio",
    discipline: "Adivinhação",
    name: "Infortúnio",
    cost: 300,
    prerequisites: "",
    action: "Meia Ação",
    sustained: "Sustentado: Ação Livre",
    range: "20m x CP",
    effect:
      "Teste Oposto Dificultoso (-10) de Vontade. Se o alvo único falhar em resistir: seus Pontos de Armadura são reduzidos em todas as localizações pela metade da CP (arredondado para cima); as armas do alvo emperram em qualquer ataque que falhe em acertá-lo.",
  },

  // ---------------------------------------------------------------------
  // Biomancia
  // ---------------------------------------------------------------------
  {
    id: "castigo",
    discipline: "Biomancia",
    name: "Castigo",
    cost: 200,
    prerequisites: "",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "20m x CP",
    effect:
      "Teste Desafiador (+0) de Vontade. Barragem Psíquica: 1d10 + CP Dano de Energia, Pen 4.",
  },
  {
    id: "enfraquecer",
    discipline: "Biomancia",
    name: "Enfraquecer",
    cost: 100,
    prerequisites: "Dureza 35+",
    action: "Meia Ação",
    sustained: "Sustentado: Meia Ação",
    range: "20m x CP",
    effect:
      "Teste Oposto Desafiador (+0) de Vontade. Se o alvo falhar: fica Atordoado por 1 Rodada; enquanto o poder permanece em efeito, se o alvo rolar duplos em qualquer Teste, ganha níveis de Fadiga iguais à CP (arredondado para baixo).",
  },
  {
    id: "vigor",
    discipline: "Biomancia",
    name: "Vigor",
    cost: 300,
    prerequisites: "Dureza 30+",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "3m x CP (raio)",
    effect:
      "Teste Dificultoso (-10) de Vontade. Aliados em alcance (número = CP) mais o psyker recuperam Ferimentos iguais à metade da CP (arredondado para cima) e superam Supressão imediatamente. Exige ao menos 12h de recuperação antes de poder ser usado novamente.",
  },
  {
    id: "braco-de-ferro",
    discipline: "Biomancia",
    name: "Braço de Ferro",
    cost: 400,
    prerequisites: "Vigor; Força 35+; Dureza 35+",
    action: "Meia Ação",
    sustained: "Sustentado: Ação Livre",
    range: "Conjurador",
    effect:
      "Teste Difícil (-20) de Vontade. Ganha os Traços Dureza Sobrenatural e Força Sobrenatural com valor igual à metade da CP (arredondado para cima); sofre -10 de Agilidade enquanto o poder está em efeito.",
  },
  {
    id: "drenagem-de-vida",
    discipline: "Biomancia",
    name: "Drenagem de Vida",
    cost: 400,
    prerequisites: "Enfraquecer; Dureza 40+",
    action: "Ação Completa",
    sustained: "Sustentado: Ação Livre",
    range: "10m x CP",
    effect:
      "Teste Oposto Dificultoso (-10) de Vontade. Se o alvo falhar: sofre 1d10 + CP Dano de Dureza; o psyker ganha Dureza Sobrenatural (1), com +1 para cada 5 pontos completos de dano causado, enquanto o efeito persistir.",
  },
  {
    id: "hemorragia",
    discipline: "Biomancia",
    name: "Hemorragia",
    cost: 400,
    prerequisites: "CP 4; Castigo",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "10m x CP",
    effect:
      "Teste Oposto Dificultoso (-10) de Vontade. Dano de Energia igual à CP, mais dano adicional por Grau de Falha no Teste de Dureza do alvo (ignora Dureza e Armadura). Se matar o alvo, o psyker pode reconjurar o poder como Ação Livre contra um novo alvo dentro de 5m.",
  },
  {
    id: "velocidade-da-distorcao",
    discipline: "Biomancia",
    name: "Velocidade da Distorção",
    cost: 500,
    prerequisites: "CP 5",
    action: "Meia Ação",
    sustained: "Sustentado: Ação Livre",
    range: "Conjurador",
    effect:
      "Teste Dificultoso (-10) de Vontade. Ganha Habilidade com Arma Sobrenatural, Habilidade Balística Sobrenatural e Agilidade Sobrenatural, todos com valor igual à CP.",
  },

  // ---------------------------------------------------------------------
  // Piromancia
  // ---------------------------------------------------------------------
  {
    id: "combustao-espontanea",
    discipline: "Piromancia",
    name: "Combustão Espontânea",
    cost: 200,
    prerequisites: "",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "20m x CP",
    effect:
      "Teste Ordinário (+10) de Vontade. Rajada Psíquica: 1d10+2 Dano de Energia, +2 por ponto de CP, Pen 0, Qualidade Fogo.",
  },
  {
    id: "sopro-de-fogo",
    discipline: "Piromancia",
    name: "Sopro de Fogo",
    cost: 300,
    prerequisites: "CP 3; Combustão Espontânea",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "20m x CP",
    effect:
      "Teste Desafiador (+0) de Vontade. Barragem Psíquica: 1d10+2 Dano de Energia, +2 por ponto de CP, Pen 0, Qualidade Fogo.",
  },
  {
    id: "escudo-de-fogo",
    discipline: "Piromancia",
    name: "Escudo de Fogo",
    cost: 300,
    prerequisites: "",
    action: "Meia Ação",
    sustained: "Sustentado: Ação Livre",
    range: "20m x CP",
    effect:
      "Teste Desafiador (+0) de Vontade. Enquanto em efeito, qualquer criatura em alcance e linha de visão que acertar o psyker em combate corpo a corpo sofre Dano de Energia igual à CP (não reduzido por Armadura ou Bônus de Dureza).",
  },
  {
    id: "explosao-solar",
    discipline: "Piromancia",
    name: "Explosão Solar",
    cost: 400,
    prerequisites: "Sopro de Fogo; CP 4",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "20m x CP",
    effect:
      "Teste Desafiador (+0) de Vontade. Tempestade Psíquica: 1d10+2 Dano de Energia, +2 por ponto de CP, Pen 0, Qualidade Fogo.",
  },
  {
    id: "raio-derretedor",
    discipline: "Piromancia",
    name: "Raio Derretedor",
    cost: 400,
    prerequisites: "Sopro de Fogo; CP 4",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "5m x CP",
    effect:
      "Teste Desafiador (+0) de Vontade. Rajada Psíquica: 1d10+5 Dano de Energia, +3 por ponto de CP, Pen igual ao dobro da CP, Qualidade Melta.",
  },
  {
    id: "tempestade-flamejante",
    discipline: "Piromancia",
    name: "Tempestade Flamejante",
    cost: 400,
    prerequisites: "Escudo de Fogo; CP 4",
    action: "Meia Ação",
    sustained: "Sustentado: Meia Ação",
    range: "Conjurador",
    effect:
      "Teste Dificultoso (-10) de Vontade. Enquanto em efeito, todos os ataques corporais do psyker causam Dano de Energia adicional igual à CP (Qualidade Fogo); ao final de cada turno sustentando, emite uma Explosão Psíquica (raio = CP): 1d10+CP Dano de Energia, Pen 0, Qualidade Fogo, a todos na área exceto o psyker.",
  },
  {
    id: "inferno",
    discipline: "Piromancia",
    name: "Inferno",
    cost: 500,
    prerequisites: "Raio Derretedor; CP 5; Explosão Solar",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "10m x CP",
    effect:
      "Teste Dificultoso (-10) de Vontade. Explosão Psíquica (raio = CP): 2d10 Dano de Energia, +3 por ponto de CP, Pen 0, Qualidade Fogo.",
  },

  // ---------------------------------------------------------------------
  // Telepatia
  // ---------------------------------------------------------------------
  {
    id: "alucinacao",
    discipline: "Telepatia",
    name: "Alucinação",
    cost: 200,
    prerequisites: "",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "10m x CP",
    effect:
      "Teste Oposto Desafiador (+0) de Vontade. Se o alvo falhar: rola na Tabela 6-7 (Efeitos Alucinógenos); o efeito dura em rodadas metade da CP (arredondado para cima).",
  },
  {
    id: "dominar",
    discipline: "Telepatia",
    name: "Dominar",
    cost: 200,
    prerequisites: "Vontade 40+",
    action: "Ação Completa",
    sustained: "Não sustentado",
    range: "5m x CP",
    effect:
      'Teste Oposto Desafiador (+0) de Vontade. Se o alvo falhar: obedece um único comando simples e realizável em uma Rodada (ex.: "Fuja", "Caia", "Ataque seu amigo"); comandos suicidas dão +20 ao Teste de Vontade do alvo.',
  },
  {
    id: "grito-psiquico",
    discipline: "Telepatia",
    name: "Grito Psíquico",
    cost: 300,
    prerequisites: "CP 3",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "10m x CP",
    effect:
      "Teste Desafiador (+0) de Vontade. Rajada Psíquica: 1d10+2 Dano de Explosão, +2 por ponto de CP, Pen 0, Qualidade Concussiva (1).",
  },
  {
    id: "fortaleza-mental",
    discipline: "Telepatia",
    name: "Fortaleza Mental",
    cost: 300,
    prerequisites: "Destemido (Talento)",
    action: "Meia Ação",
    sustained: "Sustentado: Ação Livre",
    range: "3m x CP (raio)",
    effect:
      "Teste Dificultoso (-10) de Vontade. Aliados em alcance (número = CP) mais o psyker contam como tendo o Talento Destemido.",
  },
  {
    id: "mestre-de-marionetes",
    discipline: "Telepatia",
    name: "Mestre de Marionetes",
    cost: 400,
    prerequisites: "Dominar",
    action: "Ação Completa",
    sustained: "Sustentado: Especial",
    range: "10m x CP",
    effect:
      "Teste Oposto Dificultoso (-10) de Vontade. Se o alvo único (Ferimentos ≤ 3x CP) falhar: é controlado como marionete; o psyker divide suas ações entre si e o alvo (alvo age com -10 pela crueza do controle); o alvo pode tentar um Teste Oposto Desafiador (+0) de Vontade para se libertar se ordenado a realizar uma ação suicida; o poder termina se o alvo sair do alcance.",
  },
  {
    id: "aterrorizar",
    discipline: "Telepatia",
    name: "Aterrorizar",
    cost: 400,
    prerequisites: "Alucinação",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "10m x CP",
    effect:
      "Teste Oposto Dificultoso (-10) de Vontade. Se o alvo falhar: rola na Tabela 9-5: Choque, somando +10x CP à rolagem (em vez do modificador normal de Grau de Falha); aplica os efeitos imediatamente.",
  },
  {
    id: "invisibilidade",
    discipline: "Telepatia",
    name: "Invisibilidade",
    cost: 400,
    prerequisites: "Agilidade 30; CP 4",
    action: "Meia Ação",
    sustained: "Sustentado: Ação Livre",
    range: "10m x CP",
    effect:
      "Teste Oposto Dificultoso (-10) de Vontade. O alvo (pode ser o próprio psyker) conta como Treinado em Furtividade e ganha bônus a Testes de Furtividade igual a +5x CP; ataques de alcance contra o alvo sofrem penalidade de -5x CP.",
  },

  // ---------------------------------------------------------------------
  // Telequinesia
  // ---------------------------------------------------------------------
  {
    id: "assaltar",
    discipline: "Telequinesia",
    name: "Assaltar",
    cost: 200,
    prerequisites: "",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "20m x CP",
    effect:
      "Teste Ordinário (+10) de Vontade. Rajada Psíquica: 1d10 + CP Dano de Impacto, Pen 2; com 3 ou mais Graus de Sucesso no Teste de Focar Poder, o alvo também é lançado 1d5 metros e cai deitado (alvos muito grandes — tanques, Daemônios Maiores, Titãs — são imunes a critério do Mestre).",
  },
  {
    id: "esmagar",
    discipline: "Telequinesia",
    name: "Esmagar",
    cost: 300,
    prerequisites: "Assaltar",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "10m x CP",
    effect:
      "Teste Desafiador (+0) de Vontade. 1d10 + CP Dano de Impacto, Pen 2, no Local Corpo; o alvo conta como afetado pela Qualidade Prender com valor igual à metade da CP (arredondado para baixo).",
  },
  {
    id: "objuracao-mechanicum",
    discipline: "Telequinesia",
    name: "Objuração Mechanicum",
    cost: 300,
    prerequisites: "Assaltar",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "10m x CP",
    effect:
      "Teste Desafiador (+0) de Vontade. Cria um Campo de Curto centrado em um ponto escolhido, com raio em metros igual à CP; armas emperram e motores morrem na área.",
  },
  {
    id: "onda-de-choque",
    discipline: "Telequinesia",
    name: "Onda de Choque",
    cost: 300,
    prerequisites: "Assaltar",
    action: "Meia Ação",
    sustained: "Não sustentado",
    range: "Conjurador",
    effect:
      "Teste Desafiador (+0) de Vontade. Explosão Psíquica centrada no psyker, raio igual à CP: 1d10 + CP Dano Explosivo, Pen 0; empurra criaturas para longe do psyker por uma quantidade de metros igual à CP.",
  },
  {
    id: "domo-telequino",
    discipline: "Telequinesia",
    name: "Domo Telequino",
    cost: 300,
    prerequisites: "CP 4",
    action: "Meia Ação",
    sustained: "Sustentado: Ação Livre",
    range: "5m x CP",
    effect:
      "Teste Desafiador (+0) de Vontade. Cria um domo de energia invisível centrado em um ponto, com raio igual à metade da CP (arredondado para cima); aliados dentro ganham Pontos de Armadura iguais à CP em todos os Locais contra ataques originados de fora do domo (inimigos ainda podem atravessá-lo fisicamente sem penalidade).",
  },
  {
    id: "portao-da-infinidade",
    discipline: "Telequinesia",
    name: "Portão da Infinidade",
    cost: 400,
    prerequisites: "CP 5",
    action: "Ação Estendida (3)",
    sustained: "Não sustentado",
    range: "1km x CP",
    effect:
      "Teste Difícil (-20) de Vontade. Abre um portão de entrada em um ponto (dentro de 5x CP metros) e um portão de saída em outro ponto (dentro do alcance do poder); dura em Rodadas quantidade igual à CP; o raio em metros de cada portão é igual à CP; pessoas e objetos podem passar enquanto durar. Exige ao menos 12h de recuperação antes de poder ser usado novamente.",
  },
  {
    id: "vortice-da-condenacao",
    discipline: "Telequinesia",
    name: "Vórtice da Condenação",
    cost: 400,
    prerequisites: "Esmagar; Objuração Mechanicum; CP 5; Onda de Choque",
    action: "Meia Ação",
    sustained: "Sustentado: Meia Ação",
    range: "5m x CP",
    effect:
      "Teste Dificultoso (-10) de Vontade. Cria um vórtice de energia com raio inicial de 2 metros; quem tocá-lo sofre 2d10 + 2x CP Dano de Energia, Pen igual ao raio atual (em metros). A cada turno sustentando, faz um Teste Desafiador (+0) de Vontade com -5 por metro de raio atual: sucesso permite aumentar ou diminuir o raio em 1m, ou mover o vórtice em metros iguais à CP. Se falhar ou não puder testar, o raio aumenta 1m e o vórtice se move aleatoriamente (Diagrama de Dispersão). Se o raio chegar a 0, o poder termina; se o raio exceder a CP do psyker, o vórtice explode: 2d10 Dano de Energia +4 por ponto de CP, Pen igual ao raio atual, a todos num raio igual ao dobro da CP (o psyker é atingido independente da proximidade).",
  },
];
