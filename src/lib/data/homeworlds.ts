import { Homeworld } from "@/lib/types";

export const HOMEWORLDS: Homeworld[] = [
  {
    id: "mundo-mortal",
    name: "Mundo Mortal",
    cost: 3,
    characteristicMods: [
      { kind: "choice", chooseCount: 2, amount: 3, options: ["D", "F", "Per"] },
    ],
    initialSkills: ["Sobrevivência (Treinado)"],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Reflexos Rápidos", "Resistência (Venenos)", "Sono Leve"] },
    ],
    specialRules: [
      {
        name: "Fluência",
        effect:
          "Não começam com Linguística (Baixo Gótico) na criação, apesar de ainda serem capazes de comunicação verbal.",
      },
      {
        name: "Endurecido",
        effect: "Começam com um Talento à escolha: Reflexos Rápidos, Resistência (Venenos), ou Sono Leve.",
      },
      {
        name: "Desconfiado de Estranhos",
        effect:
          "Penalidade -10 em todos os Testes de Perícia de Interação feitos em ambientes formais, e penalidade -10 em qualquer Teste de Perícia de Interação feito neles por um não-habitante de mundo mortal. Podem ser ignoradas a critério do Mestre.",
      },
    ],
    woundsModifier: 2,
  },
  {
    id: "mundo-fortaleza",
    name: "Mundo Fortaleza",
    cost: 3,
    characteristicMods: [
      { kind: "choice", chooseCount: 2, amount: 3, options: ["D", "HB", "Von"] },
    ],
    initialSkills: [
      "Conhecimento Comum (Guarda Imperial)",
      "Conhecimento Comum (Guerra)",
      "Conhecimento Comum (Imperium)",
      "Linguística (Baixo Gótico)",
    ],
    initialTalentChoices: [],
    specialRules: [
      {
        name: "Inimigo Odiado",
        effect:
          "Ganham um único Talento Ódio, escolhido para representar o inimigo que o mundo fortaleza foi estabelecido para se defender.",
      },
      {
        name: "Nascido Para Guerra",
        effect:
          "Devem passar um Teste Desafiador (+0) de Vontade para ir contra as regras e regulações da Guarda Imperial. A critério do Mestre, podem ter de fazer um Teste Ordinário (+10) de Vontade para se conterem de atacar sem piedade quando o inimigo odiado é visto.",
      },
    ],
    woundsModifier: 0,
  },
  {
    id: "nobre",
    name: "Nobre",
    cost: 3,
    characteristicMods: [
      { kind: "choice", chooseCount: 2, amount: 3, options: ["Cam", "Int", "HA"] },
    ],
    initialSkills: [
      "Conhecimento Comum (Administratum)",
      "Conhecimento Comum (Guarda Imperial)",
      "Questionar",
    ],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Ar de Autoridade", "Conexão (Nobreza)"] },
    ],
    specialRules: [
      {
        name: "Fluência",
        effect:
          "Não começam com Linguística (Baixo Gótico) na criação, apesar de ainda serem capazes de comunicação verbal.",
      },
      {
        name: "Dever e Honra",
        effect:
          "Penalidade -10 em todos os Testes de Cativar, Questionar e Enganar feitos para interagir com personagens que não são nobres. Ganham um bônus +10 nos mesmos Testes ao lidar com a nobreza e outras autoridades elevadas em situações formais.",
      },
      {
        name: "Recursos Abundantes",
        effect: "Uma esquadra de um regimento nobre começa com mais 10 na Classificação Logística.",
      },
      {
        name: "Os Melhores Tutores",
        effect: "Começam com um dos seguintes Talentos: Ar de Autoridade ou Conexão (Nobreza).",
      },
    ],
    woundsModifier: -1,
  },
  {
    id: "mundo-colmeia",
    name: "Mundo Colmeia",
    cost: 3,
    characteristicMods: [
      { kind: "choice", chooseCount: 2, amount: 3, options: ["Ag", "Cam", "Per"] },
    ],
    initialSkills: ["Enganar", "Conhecimento Comum (Imperium)", "Linguística (Baixo Gótico)"],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Indiferente", "Sentidos Aguçados (Audição)", "Paranoia"] },
    ],
    specialRules: [
      {
        name: "Acostumado a Multidões",
        effect:
          "Multidões não contam como Terreno Difícil; ao Correr ou Investir através de uma multidão densa, não recebem penalidade no Teste de Agilidade para se manterem em pé.",
      },
      {
        name: "Nascidos em Colmeias",
        effect:
          "Enquanto fora de um ambiente fechado ou artificial (cidade colmeia, nave espacial ou similar), sofrem penalidade -10 em todos os Testes de Sobrevivência.",
      },
      {
        name: "Violência Urbana",
        effect: "Começam com um dos seguintes Talentos: Indiferente, Sentidos Aguçados (Audição), ou Paranoia.",
      },
    ],
    woundsModifier: -1,
  },
  {
    id: "mundo-imperial",
    name: "Mundo Imperial",
    cost: 1,
    characteristicMods: [
      { kind: "fixed", characteristic: "Von", amount: 3 },
      { kind: "choice", chooseCount: 1, amount: 3, options: [] },
    ],
    initialSkills: [
      "Conhecimento Comum (Credo Imperial)",
      "Conhecimento Comum (Imperium)",
      "Linguística (Baixo Gótico)",
    ],
    initialTalentChoices: [],
    initialAptitudes: [],
    specialRules: [
      {
        name: "Bendita Ignorância",
        effect: "Impõe uma penalidade -5 a todos os Testes de Conhecimento Proibido (Int).",
      },
      {
        name: "Mate o Mutante",
        effect: "Começam com o Talento Ódio (Mutantes).",
      },
    ],
    woundsModifier: 0,
    notes:
      "Modificadores: +3 Vontade (fixo) e +3 para qualquer outra Característica à escolha livre do jogador (options vazio = escolha livre).",
  },
  {
    id: "colonia-penal",
    name: "Colônia Penal",
    cost: 2,
    characteristicMods: [
      { kind: "choice", chooseCount: 1, amount: 3, options: ["Ag", "D", "F"] },
    ],
    initialSkills: ["Intimidar", "Linguística (Baixo Gótico)"],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Combate de Rua", "Conexão (Submundo)"] },
    ],
    specialRules: [
      {
        name: "Honra Entre Ladrões",
        effect: "Começam com um dos seguintes Talentos: Combate de Rua ou Conexão (Submundo).",
      },
      {
        name: "Larcenoso",
        effect: "Adicionam +10 em todos os Testes de Logística feitos para adquirir itens ilegais ou contrabandeados.",
      },
      {
        name: "Escória e Vilania",
        effect:
          "Regimentos de colonos penais têm apenas 15 pontos para determinar o Kit Padrão Regimental (raramente recebem mais do que o equipamento mais básico).",
      },
    ],
    woundsModifier: 1,
  },
  {
    id: "penitente",
    name: "Penitente",
    cost: 3,
    characteristicMods: [
      { kind: "choice", chooseCount: 1, amount: 3, options: ["Cam", "D", "Von"] },
    ],
    initialSkills: [
      "Conhecimento Comum (Credo Imperial)",
      "Conhecimento Comum (Ecclesiocracia)",
      "Intimidar",
      "Linguística (Baixo Gótico)",
    ],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Fé Inabalável", "Nervos de Aço", "Ortoproxia"] },
    ],
    specialRules: [
      {
        name: "O Sangue de Mártires",
        effect:
          "Penitentes não consideram a morte a serviço do Imperador algo a se temer, e encaram o prospecto de sacrifício justo com gratidão.",
      },
      {
        name: "Apenas Uma Vida Para Dar",
        effect:
          "Deve passar um Teste Ordinário (+10) de Vontade para se retirar de combate ou de outra forma agir em interesse de autopreservação.",
      },
      {
        name: "Zelo Não Temperado",
        effect: "Podem jogar novamente qualquer Teste de Cativar para inspirar fervor religioso ou ódio justo nos outros.",
      },
    ],
    woundsModifier: 2,
  },
  {
    id: "schola-progenium",
    name: "Schola Progenium",
    cost: 3,
    characteristicMods: [
      { kind: "fixed", characteristic: "Von", amount: 3 },
      { kind: "choice", chooseCount: 1, amount: 3, options: ["HA", "HB"] },
    ],
    initialSkills: [
      "Conhecimento Comum (Guarda Imperial) (Treinado)",
      "Conhecimento Comum (Guerra) (Treinado)",
      "Conhecimento Comum (Imperium) (Treinado)",
      "Intimidar (Treinado)",
      "Linguística (Alto Gótico) (Treinado)",
      "Linguística (Baixo Gótico) (Treinado)",
    ],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Ar de Autoridade", "Fé Inabalável"] },
    ],
    specialRules: [
      {
        name: "Só na Morte e Dever Termina",
        effect:
          "Treinados pelos endurecidos abades de treinamento; espera-se que defendam o domínio do Imperador com suas vidas se necessário. Começam com um dos seguintes Talentos: Ar de Autoridade ou Fé Inabalável.",
      },
    ],
    woundsModifier: 1,
  },
];
