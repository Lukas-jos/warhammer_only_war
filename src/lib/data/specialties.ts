import { Specialty } from "@/lib/types";

// ============================================================================
// Padrão de transcrição de `initialTalentChoices` (Capítulo III, "Detalhamento
// por Especialidade" — /home/condo-401/warhammer/rules/03-criacao-personagem.md):
//
// - Talento FIXO (concedido sem escolha): { chooseCount: 1, options: ["Nome do Talento"] }
//   (um array com uma única opção — não há decisão do jogador).
// - Talento "ESCOLHA 1 DE N" (marcado no texto-fonte com "*ou*" entre as opções):
//   { chooseCount: 1, options: ["Opção A", "Opção B", ...] }
// - Talento "ESCOLHA N DE M" (ex.: "Treinamento com Arma, escolha 3"):
//   { chooseCount: 3, options: [...todas as M opções elegíveis] }
//
// Regra de leitura do texto-fonte: quando itens aparecem separados por VÍRGULA
// sem a palavra "ou" entre eles, TODOS são concedidos (viram entradas fixas
// separadas) — não é uma escolha. Quando "ou" aparece em algum ponto da lista
// entre parênteses, TODA a lista entre parênteses é tratada como um único
// pool de escolha (chooseCount:1), pois é assim que o livro combina múltiplas
// alternativas com uma exceção fixa. Esse mesmo critério (vírgula = fixo,
// "ou" = escolha) é aplicado também a `initialSkills`/`initialSkillChoices`.
// ============================================================================

export const SPECIALTIES: Specialty[] = [
  {
    id: "artilheiro-pesado",
    name: "Artilheiro Pesado",
    group: "Guarda",
    characteristicBonus: "+5 Dureza",
    initialAptitudes: ["Camaradagem", "Defesa", "Dureza", "Habilidade Balística", "Ofensa", "Percepção"],
    initialSkills: ["Conhecimento Comum (Guarda Imperial)", "Conhecimento Comum (Guerra)", "Intimidar"],
    initialSkillChoices: [{ chooseCount: 1, options: ["Atletismo", "Sobrevivência"] }],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Queixo de Ferro"] },
      {
        chooseCount: 1,
        options: [
          "Treinamento com Arma (Laser)",
          "Treinamento com Arma (Projétil Sólido)",
          "Treinamento com Arma (Baixa Tecnologia)",
          "Treinamento com Arma (Pesada)",
        ],
      },
    ],
    gear: [
      "Lança-mísseis de Qualidade Comum com 5 Mísseis de Fragmentação, ou Stub Pesado de Qualidade Comum, ou Arma Pesada Favorita Regimental de Qualidade Comum (escolha do jogador)",
    ],
    woundsFormula: "10+1d5",
    xpStart: 600,
    hasComrade: true,
    comradeAdvances: [
      {
        name: "Carregador",
        type: "Passivo",
        cost: 250,
        effect:
          "Enquanto o Camarada estiver em Coesão, o Artilheiro Pesado pode usar as Ações de seu Camarada para recarregar sua arma equipada (ex.: recarga de Ação Completa vira Meia Ação do Artilheiro + Meia Ação de Recarregar do Camarada, ambos ficando com Meia Ação restante).",
      },
      {
        name: "Estabilizar",
        type: "Ordem",
        action: "Ação Completa",
        cost: 300,
        effect:
          "O Camarada apoia a arma; Rajada Semiauto ou Auto do Artilheiro Pesado neste turno usa modificador +10 ao Teste de HB ao invés do modificador normal da Ação.",
      },
    ],
    recommendedAdvancesNote:
      "Dureza-Simples/Intermediário; HB-Simples/Intermediário; Percepção-Simples/Intermediário; Atenção, Atenção+10; Atletismo*, Atletismo+10; Esquiva, Esquiva+10; Intimidar, Intimidar+10; Sobrevivência*, Sobrevivência+10; Talentos: Bíceps Grandes (F45), Boa Constituição, Durão (D40), Fibra (D40), Olho da Vingança (HB50), Seleção de Alvo (HB50), Sentido de Combate (Per30), Tempestade de Ferro (HB45+Treinamento c/Arma alcance), Tiro Fatal (HB50), Tiro Poderoso (HB40).",
  },
  {
    id: "especialista-em-armas",
    name: "Especialista em Armas",
    group: "Guarda",
    characteristicBonus: "+5 Habilidade Balística ou +5 Habilidade com Arma",
    characteristicBonusChoices: [{ amount: 5, options: ["HB", "HA"] }],
    initialAptitudes: ["Agilidade", "Camaradagem", "Destreza", "Habilidade Balística", "Habilidade com Arma", "Técnicas de Campo"],
    initialSkills: ["Conhecimento Comum (Guarda Imperial)", "Conhecimento Comum (Guerra)", "Navegar (Superfície)"],
    initialSkillChoices: [{ chooseCount: 1, options: ["Atletismo", "Sobrevivência"] }],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Barragem de Laser", "Recarga Rápida"] },
      {
        chooseCount: 3,
        options: [
          "Treinamento com Arma (Bolt)",
          "Treinamento com Arma (Serra)",
          "Treinamento com Arma (Incendiária)",
          "Treinamento com Arma (Laser)",
          "Treinamento com Arma (Lançador)",
          "Treinamento com Arma (Melta)",
          "Treinamento com Arma (Plasma)",
          "Treinamento com Arma (Energia)",
          "Treinamento com Arma (Baixa Tecnologia)",
          "Treinamento com Arma (Choque)",
          "Treinamento com Arma (Projétil Sólido)",
        ],
      },
    ],
    gear: [
      "4 granadas de fragmentação ou krak",
      "Rifle Laser M36 de Qualidade Boa, ou Flamador de Qualidade Comum, ou Escopeta de Qualidade Comum, ou Arma Básica Favorita Regimental de Qualidade Comum (escolha do jogador)",
    ],
    woundsFormula: "8+1d5",
    xpStart: 600,
    hasComrade: true,
    comradeAdvances: [
      {
        name: "Homem de Armas",
        type: "Passivo",
        cost: 250,
        effect: "Camarada carrega todas as armas extras; contanto que esteja em Coesão, o Especialista pode trocar de arma como Ação Livre.",
      },
      {
        name: "Chuva de Fogo",
        type: "Ordem",
        action: "Meia Ação",
        cost: 200,
        effect:
          "Se em Coesão, todos os alvos dos ataques do Especialista neste turno devem fazer Teste Desafiador (+0) de Supressão ou ficam Suprimidos.",
      },
    ],
    recommendedAdvancesNote:
      "Ag-Simples/Intermediário; HB-Simples/Intermediário; HA-Simples/Intermediário; Atletismo*, Atletismo+10; Conh. Comum (GI)+10, Conh. Comum (Guerra)+10; Esquiva, Esquiva+10; Navegar (Superfície)+10; Sobrevivência*, Sobrevivência+10; Talentos: Ataque Preciso (HA40, Golpe Certo), Atirar em Movimento (HB40, Ag40), Barragem de Laser* (Treinamento Laser, HB40), Franco-Atirador (HB40), Golpe Certo (HA30), Mestre de Armas (HA40, HB40, Treinamento c/Armas quaisquer dois), Saque Rápido, Seleção de Alvo (HB50), Tiro Fatal (HB50), Tiro Preciso (HB30).",
  },
  {
    id: "medico",
    name: "Médico",
    group: "Guarda",
    characteristicBonus: "+5 Inteligência",
    initialAptitudes: ["Conhecimento", "Habilidade Balística", "Inteligência", "Percepção", "Técnicas de Campo", "Vontade"],
    initialSkills: ["Conhecimento Escolástico (Química)", "Medicina"],
    initialSkillChoices: [{ chooseCount: 1, options: ["Escrutínio", "Ofício (Químico)"] }],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Calejado", "Coração Frio"] },
      {
        chooseCount: 1,
        options: ["Treinamento com Arma (Laser)", "Treinamento com Arma (Projétil Sólido)", "Treinamento com Arma (Baixa Tecnologia)"],
      },
    ],
    gear: ["Diagnostor", "Injetor", "Kit Médico"],
    woundsFormula: "8+1d5",
    xpStart: 600,
    hasComrade: true,
    comradeAdvances: [
      {
        name: "Auxiliar Médico",
        type: "Passivo",
        cost: 250,
        effect:
          "Para Testes de Medicina de Cuidado Estendido, o Camarada conta como assistente treinado em Medicina; e o Teste de Medicina do Médico não sofre penalidade por pacientes adicionais.",
      },
      {
        name: "Tratamento de Campo",
        type: "Ordem",
        action: "Meia Ação",
        cost: 300,
        effect:
          "Contanto que o Camarada esteja em alcance de comunicações, o Médico pode realizar Testes de Medicina em qualquer personagem próximo ao Camarada, com penalidade -10.",
      },
    ],
    recommendedAdvancesNote:
      "Int-Simples/Intermediário; Per-Simples/Intermediário; Von-Simples/Intermediário; Atenção, Atenção+10; Conh. Escolástico (Química)+10; Escrutínio*, Escrutínio+10; Esquiva, Esquiva+10; Medicina+10; Ofício (Químico)*, Ofício (Químico)+10; Talentos: Calejado* (Von40), Coração Frio, Duro de Matar (Von40), Fé Inabalável (Von35), Meditação, Memória Perfeita (Int30), Mestre Cirurgião (Medicina+10), Paranoia, Presciência (Int30), Sentido de Combate (Per30), Sono Leve (Per30).",
  },
  {
    id: "operador",
    name: "Operador",
    group: "Guarda",
    characteristicBonus: "+5 Agilidade",
    initialAptitudes: ["Agilidade", "Camaradagem", "Habilidade Balística", "Inteligência", "Técnicas de Campo", "Tecnologia"],
    initialSkills: ["Operar (Superfície)", "Uso de Tecnologia"],
    initialSkillChoices: [{ chooseCount: 1, options: ["Conhecimento Comum (Tecnologia)", "Navegar (Superfície)"] }],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Pancada Técnica"] },
      {
        chooseCount: 1,
        options: ["Treinamento com Arma (Laser)", "Treinamento com Arma (Projétil Sólido)", "Treinamento com Arma (Baixa Tecnologia)"],
      },
    ],
    gear: ["Auspex/Escaneador", "Unidade de Impulso de Metal de Qualidade Comum", "Combi-Ferramenta", "Placa de Dados", "Laser Cortador"],
    woundsFormula: "6+1d5",
    xpStart: 600,
    hasComrade: true,
    comradeAdvances: [
      {
        name: "Artilheiro",
        type: "Passivo",
        cost: 250,
        effect:
          "Se o Operador pilota um veículo de múltiplos passageiros, o Camarada pode tripular uma das armas; se o Operador gastar seu Turno pilotando, também pode fazer um Ataque de Alcance usando arma tripulada pelo Camarada (usa a Ação Completa do Camarada).",
      },
      {
        name: "Apaga Isso!",
        type: "Ordem",
        action: "Ação Completa",
        cost: 300,
        effect: "Se o veículo do Operador pega fogo e o Camarada está dentro, ele gasta uma Ação Completa para por fim a qualquer Efeito de Fogo afligindo o veículo.",
      },
    ],
    recommendedAdvancesNote:
      "Ag-Simples/Intermediário; HB-Simples/Intermediário; Int-Simples/Intermediário; Conh. Comum (Tecnologia)*, +10; Esquiva, Esquiva+10; Navegar (Superfície)*, +10; Operar (Superfície)+10; Segurança, Segurança+10; Uso de Tecnologia+10; Talentos: Alvo Difícil (Ag40), Arrancada, Mestre de Armaduras (Int35, Uso de Tecnologia, Ofício Armeiro), Piloto Craque (Ag40, Operar qualquer), Reação Rápida (Ag40), Recarga Rápida, Reflexos Rápidos, Seleção de Alvo (HB50), Técnico de Arma (Uso de Tecnologia+10, Int40).",
  },
  {
    id: "sargento",
    name: "Sargento",
    group: "Guarda",
    characteristicBonus: "+5 Camaradagem",
    initialAptitudes: ["Defesa", "Dureza", "Camaradagem", "Força", "Habilidade com Arma", "Liderança", "Percepção"],
    initialSkills: ["Comando"],
    initialSkillChoices: [{ chooseCount: 1, options: ["Conhecimento Escolástico (Tactica Imperialis)", "Navegar (Superfície)"] }],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Ar de Autoridade", "Disciplina de Ferro"] },
      {
        chooseCount: 1,
        options: ["Treinamento com Arma (Serra)", "Treinamento com Arma (Laser)", "Treinamento com Arma (Projétil Sólido)", "Treinamento com Arma (Baixa Tecnologia)"],
      },
    ],
    gear: ["Pistola Laser de Qualidade Comum", "Espada Serra de Qualidade Comum"],
    woundsFormula: "10+1d5",
    xpStart: 600,
    hasComrade: true,
    comradeAdvances: [
      {
        name: "Técnico de Vox",
        type: "Passivo",
        cost: 250,
        effect: "Enquanto o Camarada estiver em Coesão, todas as ordens do Sargento afetam todos os Camaradas dentro do alcance de vox.",
      },
      {
        name: "Fogo de Cobertura",
        type: "Ordem Global",
        action: "Ação Livre",
        cost: 200,
        effect:
          "Todos os Camaradas em alcance disparam, protegendo aliados; na próxima Rodada, todos os PJs com Camaradas em Coesão ganham +10 em Testes de Esquiva.",
      },
      {
        name: "Peguem Eles!",
        type: "Ordem Global",
        action: "Ação Livre",
        cost: 200,
        effect:
          "Teste Desafiador (+0) de Comando; se bem-sucedido, na próxima Rodada Ordens de Rajada de Alcance/Combate Corporal dão +4 Dano adicional.",
      },
      {
        name: "Sai Dessa!",
        type: "Ordem Global",
        action: "Ação Livre",
        cost: 200,
        effect:
          "Teste Desafiador (+0) de Intimidar ou Comando; se bem-sucedido, todos os Camaradas em alcance terminam efeitos de Medo/Supressão e podem agir normalmente na rodada seguinte.",
      },
    ],
    specialRules: [
      {
        name: "Ordens Globais",
        effect:
          "O Sargento tem Camarada como qualquer outro PJ, mas seu papel é dar Ordens Globais, que afetam todos os Camaradas em alcance de comunicações com o Sargento. Ele pode dar apenas uma Ordem Global por turno.",
      },
    ],
    recommendedAdvancesNote:
      "Cam-Simples/Intermediário; HA-Simples/Intermediário; Aparar, Aparar+10; Comando+10; Conh. Escolástico (Tactica Imperialis)*, +10; Navegar (Superfície)*, +10; Talentos: Ambidestro (Ag30), Ar de Autoridade* (Cam30), Até os Portões do Inferno (Disciplina de Ferro, Cam50), Combate com Duas Armas, Disciplina de Ferro* (Cam30), Formação de Combate (Int40), Pistola e Espada (HA40, HB40, Combate com Duas Armas).",
  },
  {
    id: "comissario",
    name: "Comissário",
    group: "Apoio",
    characteristicBonus: "+5 Camaradagem",
    initialAptitudes: ["Agilidade", "Camaradagem", "Destreza", "Habilidade com Arma", "Liderança", "Percepção", "Vontade"],
    initialSkills: ["Conhecimento Comum (Guarda Imperial)", "Conhecimento Escolástico (Tactica Imperialis)"],
    initialSkillChoices: [{ chooseCount: 1, options: ["Comando", "Intimidar"] }],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Ar de Autoridade"] },
      { chooseCount: 1, options: ["Coração Frio", "Fé Inabalável"] },
      {
        chooseCount: 1,
        options: ["Treinamento com Arma (Bolt)", "Treinamento com Arma (Serra)", "Treinamento com Arma (Laser)", "Treinamento com Arma (Projétil Sólido)"],
      },
    ],
    gear: ["Espada Serra de Qualidade Boa", "Pistola Bolt de Qualidade Boa", "Uniforme de Comissário"],
    woundsFormula: "10+1d5",
    xpStart: 300,
    hasComrade: false,
    comradeAdvances: [
      {
        name: "Presença Galvanizante",
        type: "Passivo",
        cost: 250,
        effect:
          "Ao usar Aterrorizar (uso especial da Perícia Comando), os efeitos se aplicam a todos os membros da Esquadra (incluindo PJs); o Comissário conta como tendo Medo(2) para propósitos de Testes de Aterrorizar.",
      },
      {
        name: "Execução Sumária",
        type: "Ordem",
        action: "Meia Ação",
        cost: 300,
        effect:
          "Se um PJ dentro do alcance do Comissário cair abaixo de 0 Ferimentos, o Comissário pode fazer Execução Sumária do Camarada daquele personagem: Teste Desafiador (+0) de HB para dispará-la nele; se bem-sucedido, o Camarada morre, o PJ ignora todos os Efeitos Críticos até o fim do combate e recupera 1d5 Ferimentos.",
      },
    ],
    specialRules: [
      {
        name: "Lobo Solitário",
        effect: "O Comissário não tem Camarada tradicional — trabalha sozinho, de acordo com seu treinamento na Schola Progenium.",
      },
    ],
    recommendedAdvancesNote:
      "Ag-Simples/Intermediário; HA-Simples/Intermediário; Von-Simples/Intermediário; Aparar, Aparar+10; Comando+10, Comando*; Conh. Comum (GI), +10; Conh. Escolástico (Tactica Imperialis)+10; Intimidar+10, Intimidar*; Navegar (Superfície)+10; Talentos: Ambidestro (Ag30), Ataque Rápido (HA30), Ataque Relâmpago (Ataque Rápido), Até os Portões do Inferno (Disciplina de Ferro, Cam50), Combate com Duas Armas, Coração Frio*, Disciplina de Ferro (Cam30), Fé Inabalável* (Von35), Inspirar Fúria (Ar de Autoridade), Pistola e Espada (HA40, HB40, Combate com Duas Armas), Tornado da Morte (HA40).",
  },
  {
    id: "homem-rato",
    name: "Homem-Rato",
    group: "Apoio",
    characteristicBonus: "+10 Camaradagem, -10 Dureza, +10 Percepção",
    initialAptitudes: ["Agilidade", "Camaradagem", "Destreza", "Habilidade Balística", "Percepção", "Social", "Técnicas de Campo"],
    initialSkills: ["Enganar", "Ofício (Cozinheiro)"],
    initialSkillChoices: [{ chooseCount: 1, options: ["Atenção", "Furtividade"] }],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Tiro Preciso"] },
      { chooseCount: 1, options: ["Sentidos Aguçados (Visão)", "Sentidos Aguçados (Faro)", "Sentidos Aguçados (Paladar)", "Sono Leve"] },
      { chooseCount: 1, options: ["Treinamento com Arma (Laser)"] },
      { chooseCount: 1, options: ["Treinamento com Arma (Projétil Sólido)"] },
    ],
    initialTraits: ["Tamanho (Pequeno)"],
    gear: ["Laser Longo de Qualidade Boa ou Rifle de Precisão de Qualidade Boa com Mira Telescópica", "Capa de Camaleolina"],
    woundsFormula: "5+1d5",
    xpStart: 300,
    hasComrade: true,
    comradeAdvances: [
      {
        name: "Observador",
        type: "Passivo",
        cost: 250,
        effect:
          "O Camarada carrega magnóculos/ferramentas para ajudar a alinhar o tiro perfeito. Se o Homem-Rato usa arma Precisa e o Camarada está em Coesão, pode usar o Camarada para fazer uma Ação Mirar e o Homem-Rato ganha os benefícios.",
      },
      {
        name: "Tiro Preparatório",
        type: "Ordem",
        action: "Meia Ação",
        cost: 300,
        effect: "O Camarada dispara um tiro que distrai o alvo; o próximo Ataque de Alcance do Homem-Rato não pode ser Esquivado. O Camarada deve estar em Coesão.",
      },
    ],
    recommendedAdvancesNote:
      "Ag-Simples/Intermediário; Cam-Simples/Intermediário; Per-Simples/Intermediário; Acrobacia, Acrobacia+10; Atenção*, +10; Enganar+10; Furtividade*, +10; Mãos Rápidas, +10; Ofício (Cozinheiro)+10; Talentos: Atirador (HB35), Franco-Atirador (HB40), Olho da Vingança (HB50), Paranoia, Recarga Rápida, Reflexos Rápidos (Per30), Seleção de Alvo (HB50), Sentidos Aguçados (Faro/Paladar/Visão)*, Sono Leve*, Tiro Fatal (HB50), Tiro Poderoso (HB40).",
  },
  {
    id: "ogryn",
    name: "Ogryn",
    group: "Apoio",
    characteristicBonus: "-10 Agilidade, +10 Dureza, +10 Força, -15 Inteligência",
    initialAptitudes: ["Defesa", "Dureza", "Força", "Habilidade Balística", "Habilidade com Arma", "Ofensa"],
    initialSkills: [],
    initialSkillChoices: [{ chooseCount: 1, options: ["Intimidar", "Sobrevivência"] }],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Duro de Matar", "Queixo de Ferro"] },
      { chooseCount: 1, options: ["Treinamento com Arma (Pesada)"] },
      { chooseCount: 1, options: ["Treinamento com Arma (Projétil Sólido)"] },
    ],
    initialTraits: [
      "Auto-Estabilizado",
      "Desajeitado",
      "Dureza Sobrenatural (+2)",
      "Firme",
      "Força Sobrenatural (+2)",
      "Mas Tá Escuro Ali!",
      "Tamanho (Grande)",
    ],
    gear: ["Canhão Estripador de Qualidade Comum", "1d5 Granadas de Fragmentação"],
    woundsFormula: "25+1d5",
    xpStart: 300,
    hasComrade: true,
    comradeAdvances: [
      {
        name: "Baixinho",
        type: "Passivo",
        cost: 250,
        effect: "O Camarada do Ogryn ganha um Estado de Ferimento extra: pode estar Saudável, Levemente Ferido, Seriamente Ferido, ou Morto.",
      },
      {
        name: "Lealdade Feroz",
        type: "Passivo",
        cost: 300,
        effect:
          "Se o Camarada não estiver em Coesão (ou fora de 10m) e engajado em combate corporal com um inimigo, o Ogryn fica Enfurecido e ganha +10 Força e +10 Dureza até o Camarada estar seguro ou morto. Se o Camarada morre, o Ogryn fica inconsolável por horas.",
      },
    ],
    specialRules: [
      {
        name: "Mas Tá Escuro Ali!",
        effect:
          "Ogryns são extremamente claustrofóbicos: não entram voluntariamente em cavernas, porões, ruínas, veículos como a Quimera, ou construções menores que a média. Oficiais/Comissários podem ordená-los, mas sofrem Penalidade -10 em Testes de Comando para isso, e o Ogryn sofre penalidade -10 em quaisquer Testes de Perícia enquanto confinado.",
      },
      {
        name: "Desajeitado",
        effect:
          "Mãos grandes/fortes demais para tarefas delicadas; Ogryns não podem usar a maioria das armas feitas para humanos — apenas armas com o Traço 'À Prova de Ogryns' podem ser usadas.",
      },
    ],
    recommendedAdvancesNote:
      "D-Simples/Intermediário; F-Simples/Intermediário; Atletismo, +10; Intimidar*, +10; Sobrevivência*, +10; Talentos: Durão (D40), Duro de Matar* (Von40), Fibra (D40), Frenesi, Golpe Esmagador (HA40), Golpe de Martelo (Golpe Esmagador), Investida Enfurecida (HA40), Investida Trovão (F50), Queixo de Ferro* (D40).",
  },
  {
    id: "padre-do-ministorum",
    name: "Padre do Ministorum",
    group: "Apoio",
    characteristicBonus: "+5 Camaradagem",
    initialAptitudes: ["Camaradagem", "Força", "Habilidade com Arma", "Liderança", "Percepção", "Social", "Vontade"],
    initialSkills: ["Conhecimento Comum (Ecclesiocracia)", "Conhecimento Escolástico (Credo Imperial)"],
    initialSkillChoices: [{ chooseCount: 1, options: ["Cativar", "Questionar"] }],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Fé Inabalável"] },
      { chooseCount: 1, options: ["Ódio (qualquer)"] },
      {
        chooseCount: 1,
        options: [
          "Treinamento com Arma (Serra)",
          "Treinamento com Arma (Laser)",
          "Treinamento com Arma (Projétil Sólido)",
          "Treinamento com Arma (Incendiária)",
          "Treinamento com Arma (Baixa Tecnologia)",
        ],
      },
    ],
    gear: ["Manto da Ecclesiocracia", "Flamador de Qualidade Comum", "Espada Serra de Qualidade Comum", "Livro de Escritura"],
    woundsFormula: "9+1d5",
    xpStart: 300,
    hasComrade: true,
    comradeAdvances: [
      {
        name: "Acólito",
        type: "Passivo",
        cost: 250,
        effect:
          "Sempre que o Padre ativar Fúria Justa em um Ataque Corporal, e seu Camarada estiver em Coesão, o Camarada pode temporariamente dar um Ponto de Destino a qualquer PJ em alcance de comunicações (gasto normalmente, mas não pode ser queimado; perdido se não for gasto até o fim do encontro).",
      },
      {
        name: "Oração Justa",
        type: "Ordem",
        action: "Ação Completa",
        cost: 300,
        effect:
          "O Camarada recita litanias; todos os PJs em alcance de comunicações podem refazer qualquer rolagem de Dano na próxima Rodada. Depois, o Camarada fica exausto e não pode usar Oração Justa novamente pela duração do encontro.",
      },
    ],
    recommendedAdvancesNote:
      "Cam-Simples/Intermediário; F-Simples/Intermediário; HA-Simples/Intermediário; Aparar, +10; Cativar*, +10; Conh. Comum (Ecclesiocracia)+10; Conh. Proibido (Heresia)+10; Questionar*, +10; Talentos: Ar de Autoridade (Cam30), Assalto Furioso (HA35), Contra-Ataque (HA40), Golpe Esmagador (HA40), Golpe de Martelo (Golpe Esmagador), Golpe Matador (HA50), Imitar, Inspirar Fúria (Ar de Autoridade), Mestre Orador (Inspirar Fúria), Poliglota (Int40, Cam30), Presença Radiante (Cam45), Voz Perturbadora.",
  },
  {
    id: "psyker-sancionado",
    name: "Psyker Sancionado",
    group: "Apoio",
    characteristicBonus: "+5 Vontade",
    initialAptitudes: ["Conhecimento", "Inteligência", "Força", "Percepção", "Psyker", "Vontade"],
    initialSkills: [
      "Conhecimento Comum (Adeptus Astra Telepathica)",
      "Conhecimento Proibido (Psykers)",
      "Conhecimento Escolástico (Criptologia)",
      "Psinisciência",
    ],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Sentidos Aguçados (Audição)"] },
      { chooseCount: 1, options: ["Até 400xp em Poderes Psíquicos (ver Cap. VII)"] },
      { chooseCount: 1, options: ["Treinamento com Arma (Laser)", "Treinamento com Arma (Projétil Sólido)", "Treinamento com Arma (Baixa Tecnologia)"] },
    ],
    initialTraits: ["Psyker"],
    gear: ["Placa de Dados", "Foco Psy", "Cajado de Qualidade Excelente"],
    woundsFormula: "8+1d5",
    xpStart: 300,
    hasComrade: true,
    comradeAdvances: [
      {
        name: "Sanção Final",
        type: "Passivo",
        cost: 250,
        effect:
          "Contanto que o Camarada esteja em Coesão, o Psyker pode tomar 1d5 Ferimentos (ignorando Armadura e Dureza) para jogar novamente qualquer resultado na Tabela 7-2: Fenômenos Psíquicos.",
      },
      {
        name: "Supervisor",
        type: "Ordem",
        action: "Ação Completa",
        cost: 300,
        effect:
          "O Camarada protege o Psyker; na próxima Rodada, contanto que em Coesão, ataques que atingiriam o Psyker atingem o Camarada, exceto se o Teste de HA/HB do atacante for um duplo — nesse caso o ataque atinge o Psyker normalmente.",
      },
    ],
    specialRules: [
      {
        name: "Psyker Sancionado",
        effect:
          "O personagem passou pelo Rito de Sancionamento e possui os poderes da Distorção. Começa o jogo com o Traço Classificação Psy, Classificação Psy inicial de 2, e 1d5 Pontos de Corrupção.",
      },
      {
        name: "Avanço de Classificação Psy",
        effect:
          "Custo: 200 pe × Classificação Psy (atual/alvo). Aumenta a Classificação Psy em 1 por compra (escala 1-10, máximo 10), pode ser comprado múltiplas vezes. Ex.: CP 2 avançando para CP 3 paga 3×200 = 600 XP. Não concede Poderes Psíquicos adicionais automaticamente (apenas o potencial/limite).",
      },
    ],
    recommendedAdvancesNote:
      "Per-Simples/Intermediário; Von-Simples/Intermediário; Conh. Comum (Adeptus Astra Telepathica)+10; Conh. Proibido (Psykers)+10; Psinisciência+10; Talentos: Bastião de Vontade de Ferro (CP, Mente Forte, Von40), Conduíte da Distorção (CP, Mente Forte, Von50), Favorecido pela Distorção (Von35), Mente Forte (Von30, Resistência Técnicas Psíquicas), Resistência (Técnicas Psíquicas), Sentido da Distorção (CP, Psynisciência, Per30), Tranca da Distorção (CP, Mente Forte, Von50).",
  },
  {
    id: "soldado-de-assalto",
    name: "Soldado de Assalto",
    group: "Apoio",
    characteristicBonus: "+5 Dureza",
    initialAptitudes: ["Agilidade", "Destreza", "Dureza", "Habilidade Balística", "Ofensa", "Técnicas de Campo"],
    initialSkills: ["Atenção", "Conhecimento Escolástico (Tactica Imperialis)", "Furtividade"],
    initialSkillChoices: [
      { chooseCount: 1, options: ["Aparar", "Esquiva"] },
      { chooseCount: 1, options: ["Intimidar", "Segurança"] },
    ],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Derrubar"] },
      { chooseCount: 1, options: ["Recarga Rápida", "Saque Rápido"] },
      { chooseCount: 1, options: ["Treinamento com Arma (Laser)", "Treinamento com Arma (Projétil Sólido)", "Treinamento com Arma (Baixa Tecnologia)"] },
    ],
    gear: ["Rifle Laser Tiro-Quente de Qualidade Boa", "Armadura Carapaça de Soldado de Assalto"],
    woundsFormula: "12+1d5",
    xpStart: 300,
    hasComrade: false,
    comradeAdvances: [
      {
        name: "Mentor",
        type: "Ordem",
        action: "Ação Completa",
        cost: 300,
        effect:
          "Uma vez por sessão de jogo, todos os membros da Esquadra em alcance de comunicações (incluindo PJs) podem realizar Testes de Perícia em uma única Perícia à escolha do Soldado de Assalto como se tivessem o Treinamento de Perícia dele. Dura até o fim do encontro ou dez minutos narrativos.",
      },
      {
        name: "Protetor",
        type: "Passivo",
        cost: 300,
        effect:
          "Sempre que um Camarada dentro de 10m do Soldado de Assalto tomar um acerto que o mataria, o Soldado de Assalto pode tomar o acerto em seu lugar, jogando o Dano normalmente.",
      },
    ],
    specialRules: [
      {
        name: "Lobo Solitário",
        effect:
          "Como o Comissário, o treinamento na Schola Progenium torna o Soldado de Assalto um 'lobo solitário' quando operando em uma Esquadra normal — não ganha um Camarada, mas compra Avanços especiais para ajudar o resto da Esquadra.",
      },
    ],
    recommendedAdvancesNote:
      "D-Simples/Intermediário; HB-Simples/Intermediário; HA-Simples/Intermediário; Aparar*, +10; Atenção+10; Conh. Escolástico (Tactica Imperialis)+10; Esquiva*, +10; Intimidar*, +10; Segurança*, +10; Talentos: Arrancada, Barragem de Laser (Treinamento Laser, HB40), Olho da Vingança (HB50), Queda de Gato (Ag30), Recarga Rápida*, Reflexos Rápidos, Sair do Caminho (Ag40, Esquiva ou Aparar), Saque Rápido*, Tempestade de Ferro (HB45+Treinamento c/Arma alcance), Tiro Poderoso (HB40).",
  },
  {
    id: "tecnopadre-engenheiro",
    name: "Tecnopadre Engenheiro",
    group: "Apoio",
    characteristicBonus: "+5 Inteligência",
    initialAptitudes: ["Conhecimento", "Dureza", "Força", "Habilidade Balística", "Habilidade com Arma", "Inteligência", "Tecnologia", "Vontade"],
    initialSkills: ["Conhecimento Comum (Adeptus Mechanicus)", "Conhecimento Comum (Tecnologia)", "Conhecimento Proibido (Adeptus Mechanicus)", "Uso de Tecnologia"],
    initialSkillChoices: [{ chooseCount: 1, options: ["Conhecimento Proibido (Arqueotecnologia)", "Lógica"] }],
    initialTalentChoices: [
      { chooseCount: 1, options: ["Coração Frio", "Pancada Técnica"] },
      {
        chooseCount: 1,
        options: ["Treinamento com Arma (Laser)", "Treinamento com Arma (Projétil Sólido)", "Treinamento com Arma (Energia)", "Treinamento com Arma (Utilidade)"],
      },
    ],
    initialTraits: ["Uso de Mecatentáculo (Arma)", "Uso de Mecatentáculo (Utilidade)"],
    gear: ["Unguentos Sagrados", "Placa de Dados", "Combi-Ferramenta", "Escolha de Mecatentáculo de Utilidade ou Balístico"],
    woundsFormula: "8+1d5",
    xpStart: 300,
    hasComrade: true,
    comradeReplacement: "Servidor",
    comradeAdvances: [
      {
        name: "Servo-Braço",
        type: "Passivo",
        cost: 250,
        effect: "O Servidor ajuda em reparos; o Engenheiro ganha +10 em Testes de Uso de Tecnologia para reparos, e reduz pela metade o tempo do reparo.",
      },
      {
        name: "Reparos de Campo",
        type: "Ordem",
        action: "Ação Completa",
        cost: 300,
        effect: "O Engenheiro pode realizar Testes de Uso de Tecnologia em qualquer coisa próxima ao Servidor (dentro do alcance de comunicações) com penalidade -10.",
      },
    ],
    specialRules: [
      {
        name: "Servidor no lugar de Camarada",
        effect:
          "Ao invés de um Camarada humano, o Tecnopadre Engenheiro é acompanhado por um Servidor (perfil descrito no Cap. XI: PNJs e Adversários) — refletido pelos campos hasComrade:true e comradeReplacement:\"Servidor\". Os 2 Avanços exclusivos da Especialidade (Servo-Braço, Reparos de Campo) funcionam através do Servidor, não de um Camarada convencional.",
      },
      {
        name: "Mechanicus",
        effect:
          "Tecnopadres Engenheiros ganham o Traço Implantes Mechanicus. Adicionalmente, o personagem pode começar o jogo com uma Unidade de Impulso Mental de Qualidade Boa e dois implantes cibernéticos de Qualidade Boa à sua escolha.",
      },
    ],
    recommendedAdvancesNote:
      "D-Simples/Intermediário; F-Simples/Intermediário; Int-Simples/Intermediário; Conh. Comum (Adeptus Mechanicus)+10, Conh. Comum (Tecnologia)+10; Conh. Proibido (Adeptus Mechanicus)+10; Conh. Proibido (Arqueotecnologia)*, +10; Lógica, +10; Uso de Tecnologia+10; Talentos: Choque Luminen, Coração Frio*, Explosão Luminen, Invocações Férricas, Mestre Engenheiro (Uso de Tecnologia+20, Implantes Mechanicus), Ortoproxia, Pancada Técnica* (Int30), Prosanguíneo, Técnico de Arma (Uso de Tecnologia+10, Int40), Transcendência Maglev.",
  },
];
