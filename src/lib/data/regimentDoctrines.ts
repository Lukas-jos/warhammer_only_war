import { RegimentDoctrine } from "@/lib/types";

export const REGIMENT_DOCTRINES: RegimentDoctrine[] = [
  // ---------------------------------------------------------------------
  // Tipo de Regimento (obrigatório escolher exatamente 1)
  // ---------------------------------------------------------------------
  {
    id: "cacadores",
    name: "Caçadores",
    list: "Tipo de Regimento",
    cost: 3,
    characteristicMods: [
      { kind: "fixed", characteristic: "HB", amount: 3 },
      { kind: "fixed", characteristic: "F", amount: -3 },
    ],
    initialSkills: ["Operar (Superfície)"],
    initialTalentChoices: [{ chooseCount: 1, options: ["Resistência (Medo)"] }],
    kit: ["Um Caminhante Sentinela de Reconhecimento ou um Tanque de Apoio Cão Infernal (ou variante) por Esquadra"],
  },
  {
    id: "infantaria-de-linha",
    name: "Infantaria de Linha",
    list: "Tipo de Regimento",
    cost: 2,
    characteristicMods: [
      { kind: "fixed", characteristic: "F", amount: 3 },
      { kind: "fixed", characteristic: "Int", amount: -3 },
    ],
    initialSkills: ["Atletismo"],
    initialTalentChoices: [{ chooseCount: 1, options: ["Recarga Rápida"] }],
    kit: [
      "1 rifle laser M36 e 4 baterias por PJ (Arma Principal)",
      "Armadura flak da Guarda Imperial por PJ",
      "2 granadas de fragmentação e 2 granadas krak por PJ",
    ],
  },
  {
    id: "infantaria-de-cerco",
    name: "Infantaria de Cerco",
    list: "Tipo de Regimento",
    cost: 2,
    characteristicMods: [
      { kind: "fixed", characteristic: "D", amount: 3 },
      { kind: "fixed", characteristic: "Int", amount: -3 },
    ],
    initialSkills: ["Uso de Tecnologia"],
    initialTalentChoices: [{ chooseCount: 1, options: ["Nervos de Aço"] }],
    kit: [
      "1 rifle laser M36 e 6 baterias por PJ (Arma Principal)",
      "Armadura flak da Guarda Imperial por PJ",
      "1 respirador por PJ",
      "4 sacos de areia vazios e 1 ferramenta de trincheira por PJ",
      "2 granadas de fragmentação e 2 granadas de clarão de fóton por PJ",
    ],
  },
  {
    id: "infantaria-leve",
    name: "Infantaria Leve",
    list: "Tipo de Regimento",
    cost: 2,
    characteristicMods: [
      { kind: "fixed", characteristic: "Ag", amount: 3 },
      { kind: "fixed", characteristic: "D", amount: -3 },
    ],
    initialSkills: ["Navegar (Superfície)"],
    initialTalentChoices: [{ chooseCount: 1, options: ["Arrancada"] }],
    kit: [
      "1 carabina laser e 4 baterias por PJ (Arma Principal)",
      "Colete flak e capacete flak por PJ",
      "2 granadas de fragmentação e 2 granadas de fumaça por PJ",
    ],
  },
  {
    id: "infantaria-mecanizada",
    name: "Infantaria Mecanizada",
    list: "Tipo de Regimento",
    cost: 3,
    characteristicMods: [
      { kind: "fixed", characteristic: "Ag", amount: 3 },
      { kind: "fixed", characteristic: "Per", amount: -3 },
    ],
    initialSkills: ["Operar (Superfície)"],
    initialTalentChoices: [{ chooseCount: 1, options: ["Recarga Rápida"] }],
    kit: [
      "1 rifle laser M36 e 4 baterias por PJ (Arma Principal)",
      "Armadura flak da Guarda Imperial por PJ",
      "2 granadas de fragmentação e 2 granadas krak por PJ",
      "1 Transporte Blindado Quimera por Esquadra",
    ],
  },
  {
    id: "regimento-blindado",
    name: "Regimento Blindado",
    list: "Tipo de Regimento",
    cost: 4,
    characteristicMods: [
      { kind: "fixed", characteristic: "HA", amount: -3 },
      { kind: "fixed", characteristic: "Int", amount: 3 },
    ],
    initialSkills: ["Operar (Superfície)"],
    initialTalentChoices: [{ chooseCount: 1, options: ["Pancada Técnica"] }],
    kit: [
      "1 tanque de batalha Leman Russ (ou variante) por Esquadra",
      "1 kit de ferramentas de manutenção ungido por PJ",
    ],
  },
  {
    id: "regimento-de-reconhecimento",
    name: "Regimento de Reconhecimento",
    list: "Tipo de Regimento",
    cost: 3,
    characteristicMods: [
      { kind: "fixed", characteristic: "Per", amount: 3 },
      { kind: "fixed", characteristic: "Von", amount: -3 },
    ],
    initialSkills: ["Atenção"],
    initialTalentChoices: [{ chooseCount: 1, options: ["Sentido de Combate"] }],
    kit: [
      "1 Caminhante Sentinela de Reconhecimento ou 1 Transporte Blindado Quimera por Esquadra",
      "1 conjunto de magnóculos por PJ",
    ],
  },
  {
    id: "tropas-de-salto",
    name: "Tropas de Salto",
    list: "Tipo de Regimento",
    cost: 3,
    characteristicMods: [
      { kind: "fixed", characteristic: "Ag", amount: 3 },
      { kind: "fixed", characteristic: "Cam", amount: -3 },
    ],
    initialSkills: ["Operar (Aeronáutica)"],
    initialTalentChoices: [{ chooseCount: 1, options: ["Queda de Gato"] }],
    kit: [
      "1 carabina laser e 4 baterias por PJ (Arma Principal)",
      "Armadura flak da Guarda Imperial por PJ",
      "1 para-grav por PJ",
      "2 granadas de fragmentação e 2 granadas de fumaça por PJ",
    ],
  },

  // ---------------------------------------------------------------------
  // Doutrinas de Treinamento
  // ---------------------------------------------------------------------
  {
    id: "disciplina-de-ferro",
    name: "Disciplina de Ferro",
    list: "Doutrina de Treinamento",
    cost: 3,
    initialAptitudes: ["Vontade"],
    specialRules: [
      {
        name: "Disciplina de Ferro",
        effect: "O regimento é bem conhecido por sua devoção inabalável ao dever e absoluta lealdade aos superiores.",
      },
    ],
  },
  {
    id: "duros-de-matar",
    name: "Duros de Matar",
    list: "Doutrina de Treinamento",
    cost: 3,
    initialAptitudes: ["Dureza"],
    specialRules: [
      {
        name: "Duros de Matar",
        effect: "O regimento é inabalável diante da adversidade e não irá vacilar durante a fúria da batalha.",
      },
    ],
  },
  {
    id: "franco-atiradores",
    name: "Franco-Atiradores",
    list: "Doutrina de Treinamento",
    cost: 4,
    initialAptitudes: ["Habilidade Balística"],
    initialTalentChoices: [{ chooseCount: 1, options: ["Tiro Preciso"] }],
    specialRules: [
      {
        name: "Franco-Atiradores",
        effect:
          "O regimento produz atiradores mortais, com reputação bem ganha; mesmo o soldado comum derruba inimigo após inimigo.",
      },
    ],
  },
  {
    id: "inimigo-favorito",
    name: "Inimigo Favorito",
    list: "Doutrina de Treinamento",
    cost: 3,
    requiresChoice: true,
    initialSkills: ["Conhecimento Proibido (escolha um inimigo do Imperium)"],
    initialTalentChoices: [{ chooseCount: 1, options: ["Ódio (mesmo inimigo escolhido)"] }],
    specialRules: [
      {
        name: "Inimigo Favorito",
        effect:
          "Ao selecionar esta doutrina, um único inimigo do Imperium deve ser selecionado. A escolha de Conhecimento Proibido e Ódio devem ambas refletir esta escolha.",
      },
    ],
  },
  {
    id: "lutadores-endurecidos",
    name: "Lutadores Endurecidos",
    list: "Doutrina de Treinamento",
    cost: 2,
    characteristicMods: [{ kind: "fixed", characteristic: "HA", amount: 2 }],
    initialTalentChoices: [{ chooseCount: 1, options: ["Combate de Rua"] }],
    kit: [
      "Substitui a arma corporal padrão por uma Arma de Baixa Tecnologia Comum (ou mais disponível), ou aplica a melhoria mono à arma corporal padrão",
    ],
  },
  {
    id: "sobreviventes",
    name: "Sobreviventes",
    list: "Doutrina de Treinamento",
    cost: 4,
    requiresChoice: true,
    initialAptitudes: ["Agilidade"],
    specialRules: [
      {
        name: "Sobreviventes",
        effect:
          "Ao selecionar esta doutrina, nomeie um único tipo de terreno (Deserto, Selva, Tundra, Deserto de Cinzas, Ruínas Urbanas, etc.). Ao operar neste tipo de terreno, personagens do regimento podem jogar novamente Testes de Perícia falidos de Sobrevivência e Navegar (Superfície).",
      },
    ],
  },
  {
    id: "treinamento-de-combate-serrado",
    name: "Treinamento de Combate Serrado",
    list: "Doutrina de Treinamento",
    cost: 2,
    initialTalentChoices: [{ chooseCount: 1, options: ["Formação de Combate", "Trabalho em Equipe"] }],
    specialRules: [
      {
        name: "Treinamento de Combate Serrado",
        effect: "O regimento foi treinado em formações próximas, lutando ombro a ombro com seus camaradas.",
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Doutrinas de Equipamento Especial
  // ---------------------------------------------------------------------
  {
    id: "armas-de-guerreiro",
    name: "Armas de Guerreiro",
    list: "Doutrina de Equipamento Especial",
    cost: 3,
    initialSkills: ["Aparar"],
    kit: [
      "Pode trocar a Arma Principal por uma arma de Baixa Tecnologia Comum (ou mais disponível) e uma pistola laser com 2 baterias",
    ],
  },
  {
    id: "bem-providos",
    name: "Bem Providos",
    list: "Doutrina de Equipamento Especial",
    cost: 3,
    kit: [
      "+2 carregadores para a arma principal de alcance",
      "+2 semanas de rações",
      "+1 granada adicional de cada tipo do kit padrão (se aplicável)",
    ],
    specialRules: [
      {
        name: "Bem Providos (veículos)",
        effect:
          "Se o regimento contém veículos, dá bônus +10 em todos os Testes de Logística para obter combustível e partes para reparar/manter esses veículos.",
      },
    ],
  },
  {
    id: "camaleolina",
    name: "Camaleolina",
    list: "Doutrina de Equipamento Especial",
    cost: 3,
    kit: ["O regimento é equipado com capas de camaleolina ou armadura revestida de camaleolina"],
  },
  {
    id: "coletores",
    name: "Coletores",
    list: "Doutrina de Equipamento Especial",
    cost: 3,
    specialRules: [
      {
        name: "Coletores",
        effect:
          "O regimento pode escolher ganhar bônus +10 em qualquer Teste de Logística. Contudo, se qualquer duplo for rolado (22, 33, 44 etc.) nesse teste, sucesso ou fracasso, a pilhagem e roubo atraem atenção indesejada das autoridades da Guarda Imperial ou do Departamento Munitorum.",
      },
    ],
  },
  {
    id: "demolicoes",
    name: "Demolições",
    list: "Doutrina de Equipamento Especial",
    cost: 3,
    specialRules: [
      {
        name: "Demolições",
        effect:
          "O regimento recebe bônus +10 para todos os Testes de Logística feitos para obter granadas, mísseis, explosivos e munição especial de tanque.",
      },
    ],
  },
  {
    id: "drogas-de-combate",
    name: "Drogas de Combate",
    list: "Doutrina de Equipamento Especial",
    cost: 2,
    kit: [
      "Pode adicionar um injetor ou inalador e 3 doses de frenesom ou 5 doses de estimm (doses adicionais requerem requisição ou itens do kit padrão)",
    ],
  },
  {
    id: "melhorias",
    name: "Melhorias",
    list: "Doutrina de Equipamento Especial",
    cost: 2,
    specialRules: [
      {
        name: "Melhorias",
        effect: "O regimento ganha bônus adicional +10 em todos os Testes de Logística feitos para obter próteses ou implantes biônicos.",
      },
    ],
  },
];
