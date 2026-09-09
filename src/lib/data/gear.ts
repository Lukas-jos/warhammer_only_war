// ============================================================================
// Equipamento geral — extraído de /home/condo-401/warhammer/rules/07-arsenal-equipamento.md
// Seções: Munição, Munição Incomum, Campos de Força, Roupas e Equipamentos
// Vestidos, Drogas e Consumíveis, Ferramentas, Cibernéticos/Biônicos/Implantes.
// ============================================================================

import { GearItem } from "@/lib/types";

export const GEAR_ITEMS: GearItem[] = [
  // ==========================================================================
  // Campos de Força (Tabela 6-19)
  // ==========================================================================
  {
    id: "campo-refrator",
    name: "Campo Refrator",
    category: "Campo de Força",
    weight: "2kg",
    availability: "Muito Rara",
    description:
      "Valor de Proteção 30 (role 1d100 ao ser atacado; resultado igual ou maior anula o ataque, mesmo Explosivo). Do tamanho de um monóculo, facilmente disfarçado, mas emite brilho suave notável em pouca luz (penalidade -30 aos Testes de Furtividade em escuridão/pouca luz; -10 em geral). Sobrecarga em 1d100: Ruim 01-15, Comum 01-10, Boa 01-05, Excelente somente em 1 — ao sobrecarregar, para de funcionar até recarregar ou reparar.",
  },
  {
    id: "campo-de-conversao",
    name: "Campo de Conversão",
    category: "Campo de Força",
    weight: "1kg",
    availability: "Extremamente Rara",
    description:
      "Também chamado Campo de Clarão. Valor de Proteção 50 (1d100 igual ou maior anula o ataque). Converte a energia do ataque bloqueado em um clarão cegante; se bloquear mais de 12 pontos de Dano em um único ataque, gera uma explosão de granada de clarão fóton centrada no usuário (que não é afetado). Sobrecarga: Ruim 01-15, Comum 01-10, Boa 01-05, Excelente somente em 1.",
  },
  {
    id: "campo-deslocador",
    name: "Campo Deslocador",
    category: "Campo de Força",
    weight: "2kg",
    availability: "Quase Única",
    description:
      "Valor de Proteção 55. Em vez de absorver o ataque, teleporta o usuário para longe via salto de Distorção em miniatura (role 3d10 metros; sempre emerge de pé em local vazio adequado). Se os três dados derem o mesmo número, o usuário some por 1d5 Rodadas e ganha 1 Ponto de Corrupção. Ativação inesperada impede agir por 1 Rodada. Sobrecarga: Ruim 01-15, Comum 01-10, Boa 01-05, Excelente somente em 1.",
  },
  {
    id: "campo-energetico-pessoal",
    name: "Campo Energético (Pessoal)",
    category: "Campo de Força",
    weight: "50kg",
    availability: "Quase Única",
    description:
      "Valor de Proteção 80. Compacto o bastante para ser disfarçado; dura apenas uma hora de uso antes de se exaurir, deixando o usuário automaticamente Sobrecarregado. Faz o ar estalar com descargas estáticas (penalidade -20 aos Testes de Furtividade); não protege contra ataques de alcance feitos a menos de 1 metro nem contra ataques corporais. Sobrecarga: Ruim 01-15, Comum 01-10, Boa 01-05, Excelente somente em 1.",
  },
  {
    id: "campo-energetico-veiculo-estrutura",
    name: "Campo Energético (Veículo/Estrutura)",
    category: "Campo de Força",
    weight: "500kg",
    availability: "Muito Rara",
    description:
      "Valor de Proteção 80. Versão pesada demais para ser carregada por uma pessoa, usada para proteger veículos ou estruturas inteiras. Mesmas limitações do campo pessoal: não defende contra ataques de alcance a menos de 1 metro nem contra combate corporal, e faz o ar estalar (penalidade -20 em Furtividade). Sobrecarga: Ruim 01-15, Comum 01-10, Boa 01-05, Excelente somente em 1.",
  },

  // ==========================================================================
  // Roupas e Equipamentos Vestidos (Tabela 6-20)
  // ==========================================================================
  {
    id: "capa-de-camaleolina",
    name: "Capa de Camaleolina",
    category: "Roupas e Vestimenta",
    weight: "0,5kg",
    availability: "Rara",
    description:
      "Bônus +20 para Testes de Furtividade. Se o portador ficar estacionário, qualquer Teste de Habilidade Balística para mirar nele sofre penalidade -30.",
  },
  {
    id: "cinto-de-escalada",
    name: "Cinto de Escalada",
    category: "Roupas e Vestimenta",
    weight: "2kg",
    availability: "Comum",
    description:
      "Bônus +30 para Testes de Escalada ao descer superfícies verticais; o usuário não cai se o Teste falhar. Qualidade Comum suporta 150kg; Qualidade Boa suporta 200kg.",
  },
  {
    id: "fone-de-estrondo",
    name: "Fone de Estrondo",
    category: "Roupas e Vestimenta",
    availability: "Muito Rara",
    description:
      "Detecta e abafa automaticamente perturbações sônicas de alto volume. Bônus +20 em Testes de Dureza contra efeitos sônicos ou efeitos auditivos de armas Concussivas.",
  },
  {
    id: "foto-visores-lentes",
    name: "Foto-Visores/Lentes",
    category: "Roupas e Vestimenta",
    weight: "0,5kg",
    availability: "Escassa",
    description:
      "Amplificam luz de baixo nível, concedendo o Traço Visão Noturna. Qualidade Boa também torna o usuário imune aos efeitos de granadas de clarão fóton.",
  },
  {
    id: "luvas-de-recuo",
    name: "Luvas de Recuo",
    category: "Roupas e Vestimenta",
    weight: "0,5kg",
    availability: "Comum",
    description:
      "Permitem disparar Armas Básicas com uma mão sem a penalidade -20 normal, e usar com uma mão pistolas que exigiriam duas; ainda exige treinamento especializado (sem ele, a penalidade -20 continua se aplicando).",
  },
  {
    id: "mascara-respiradora-de-gas",
    name: "Máscara Respiradora/de Gás",
    category: "Roupas e Vestimenta",
    weight: "0,5kg",
    availability: "Mediana",
    description:
      "Bônus +30 para Testes de Dureza contra gás (permite refazer a rolagem se falhar). Qualidade Boa dá +10 adicional. Modelos Ruins devem ser substituídos após 10 horas de uso.",
  },
  {
    id: "oculos-de-visao-de-calor",
    name: "Óculos de Visão de Calor",
    category: "Roupas e Vestimenta",
    weight: "0,5kg",
    availability: "Muito Rara",
    description:
      "Permitem ver imagens térmicas, revelando corpos escondidos e fontes de calor: sem penalidade por escuridão e +20 para Testes de Percepção baseados em visão à noite. Qualidade Ruim tem aparência óbvia (lentes grandes e brilhantes); Boa/Excelente são disfarçáveis como óculos comuns.",
  },
  {
    id: "plugues-de-filtracao",
    name: "Plugues de Filtração",
    category: "Roupas e Vestimenta",
    weight: "1kg",
    availability: "Comum",
    description:
      "Bônus +20 para Testes de Dureza contra gases danosos. Qualidade Boa dá +10 adicional. Modelos Ruins devem ser substituídos após 5 horas de uso.",
  },
  {
    id: "re-respirador",
    name: "Re-Respirador",
    category: "Roupas e Vestimenta",
    weight: "0,5kg",
    availability: "Escassa",
    description:
      "Torna o usuário imune a efeitos de gases e permite sobreviver submerso por tempo limitado. Tanques duram cerca de uma hora e são trocados como Ação Completa (Qualidade Boa dura duas horas; Ruim exige duas Ações Completas para trocar). Tanques reserva são Escassos.",
  },
  {
    id: "roupa-de-sobrevivencia",
    name: "Roupa de Sobrevivência",
    category: "Roupas e Vestimenta",
    availability: "Mediana",
    description:
      "Bônus +20 contra efeitos de ambientes extremos (Qualidade Boa +25, Excelente +30). Roupas Ruins duram apenas três dias antes de precisarem ser removidas para recarregar.",
  },
  {
    id: "roupa-de-vacuo",
    name: "Roupa de Vácuo",
    category: "Roupas e Vestimenta",
    weight: "8kg",
    availability: "Escassa",
    description:
      "Protege contra o vácuo; provê 12 horas de ar (Qualidade Comum) e impõe penalidade -10 para Testes de Agilidade. Qualidade Ruim: só 6 horas de ar. Qualidade Boa/Excelente eliminam a penalidade de Agilidade.",
  },
  {
    id: "sinpele",
    name: "Sinpele",
    category: "Roupas e Vestimenta",
    weight: "2kg",
    availability: "Muito Rara",
    description:
      "Segunda pele reativa não reflexiva que se molda ao corpo. Dá 2 Pontos de Armadura a todas as localizações não protegidas por outra armadura, bônus +10 para Testes de Furtividade, e torna o usuário invisível a óculos infravermelhos e Visão Noturna.",
  },

  // ==========================================================================
  // Drogas e Consumíveis (Tabela 6-21)
  // ==========================================================================
  {
    id: "amasec",
    name: "Amasec",
    category: "Drogas e Consumíveis",
    availability: "Escassa",
    description:
      "Bebida alcoólica popular destilada do vinho, de qualidade variável. Sujeita à regra de Uso Excessivo (mais de uma dose em 24h exige Teste de Dureza com penalidade cumulativa).",
  },
  {
    id: "cigarrolhos",
    name: "Cigarrolhos",
    category: "Drogas e Consumíveis",
    availability: "Comum",
    description:
      "Cigarros comuns entre soldados; substância aromática levemente narcótica e viciante. Uso repetido pode levar a Vício (Teste de Vontade com penalidade acumulada por dose recente).",
  },
  {
    id: "de-tox",
    name: "De-Tox",
    category: "Drogas e Consumíveis",
    availability: "Rara",
    description:
      "Nega imediatamente efeitos duradouros (bons ou ruins) de drogas, toxinas ou gases afetando o personagem. Efeito colateral: causa Atordoamento por 1d10 menos o Bônus de Dureza (mínimo 0) do personagem, além de vômito, sangramento nasal e evacuação intestinal.",
  },
  {
    id: "estimm",
    name: "Estimm",
    category: "Drogas e Consumíveis",
    availability: "Mediana",
    description:
      "Por 3d10 Rodadas o usuário ignora efeitos de Características de Dano/Dano Crítico e não pode ser Atordoado. Quando o efeito passa, penalidade -20 para Testes de Força, Dureza e Agilidade por uma hora.",
  },
  {
    id: "freneson",
    name: "Freneson",
    category: "Drogas e Consumíveis",
    availability: "Muito Rara",
    description:
      "Droga de combate usada em Legiões Penais. O usuário ganha o Talento Frenesi e imunidade a efeitos de Medo pela duração da droga (1d10 minutos por dose).",
  },
  {
    id: "massacre",
    name: "Massacre",
    category: "Drogas e Consumíveis",
    availability: "Escassa",
    description:
      "Aumenta atenção e tempo de reação: +3 ao Bônus de Agilidade e Percepção por 2d10 minutos. Ao passar o efeito, Teste Desafiador (+0) de Dureza ou penalidade -20 para Testes de Agilidade e Percepção por 1d5 horas.",
  },
  {
    id: "obscura",
    name: "Obscura",
    category: "Drogas e Consumíveis",
    availability: "Rara",
    description:
      "Droga proibida; o usuário entra em estado semelhante a sonho por 1d5 horas (como sob efeito de granada alucinógena, se precisar entrar em combate). 1d10 horas depois de passar o efeito, entra em depressão profunda a menos que tome outra dose.",
  },
  {
    id: "recaf",
    name: "Recaf",
    category: "Drogas e Consumíveis",
    availability: "Abundante",
    description:
      "Bebida quente popular feita de folhas cozidas, com efeito estimulante leve (cafeína ou composto similar).",
  },
  {
    id: "susto",
    name: "Susto",
    category: "Drogas e Consumíveis",
    availability: "Rara",
    description:
      "Pode produzir habilidades psíquicas de curto prazo. Teste Desafiador (+0) de Vontade: sucesso concede 1d5 Pontos de Insanidade e um poder psíquico aleatório (Tabela 6-22) por 1d5 horas, usando Testes de Focar Poder como Classificação Psy 1. Um personagem já Psyker que use susto arrisca Pontos de Insanidade e, em sucesso, ganha +1 à Classificação Psy por uma hora com risco maior de Fenômeno Psíquico.",
  },
  {
    id: "tranq",
    name: "Tranq",
    category: "Drogas e Consumíveis",
    availability: "Abundante",
    description:
      "Destilado alcoólico artificial das colmeias baixas da Extensão Golgenna; amortece corpo e mente. Sabor adquirido; sujeito à regra de Uso Excessivo.",
  },
  {
    id: "unguentos-sagrados",
    name: "Unguentos Sagrados",
    category: "Drogas e Consumíveis",
    availability: "Muito Rara",
    description:
      "Abençoados pelo Omnissiah. Aplicados a uma arma (Ação Completa), tornam-na imune a emperramento por um número de disparos igual à sua Capacidade; se aplicados a uma arma já emperrada, a desemperram imediatamente.",
  },

  // ==========================================================================
  // Ferramentas (Tabela 6-23)
  // ==========================================================================
  {
    id: "abafador",
    name: "Abafador",
    category: "Ferramentas",
    weight: "2kg",
    availability: "Mediana",
    description:
      "Gera ondas de som que cancelam ruídos ambientes e de movimento em área pequena. Bônus +30 para Testes de Furtividade. Energia para 20 minutos de uso contínuo antes de precisar recarregar (até uma hora).",
  },
  {
    id: "algemas",
    name: "Algemas",
    category: "Ferramentas",
    weight: "1kg",
    availability: "Copiosa",
    description: "Usadas por caçadores de recompensas e policiais para capturar ou prender alvos para questionamento.",
  },
  {
    id: "arame-acordeao",
    name: "Arame Acordeão",
    category: "Ferramentas",
    weight: "0,5kg",
    availability: "Comum",
    description:
      "Arame laminado usado para defender trincheiras/construções de assaltos de infantaria. Quem tentar cruzá-lo deve passar em Teste Difícil (-20) de Acrobacia ou sofrer 1d5 de Dano de Laceração mais 1 extra por Grau de Falha.",
  },
  {
    id: "armadilha-de-homem",
    name: "Armadilha de Homem",
    category: "Ferramentas",
    weight: "2kg",
    availability: "Copiosa",
    description:
      "Mecanismo de mandíbulas populares contra Orks. Quem pisar no gatilho sofre 1d10 Dano de Laceração e fica Imobilizado; livrar-se exige Teste Dificultoso (-10) de Força.",
  },
  {
    id: "auspex-escaneador",
    name: "Auspex/Escaneador",
    category: "Ferramentas",
    weight: "0,5kg",
    availability: "Escassa",
    description:
      "Detecta emissões de energia, movimento e sinais de vida. Bônus +20 para Testes de Atenção; permite Teste de Uso de Tecnologia para perceber coisas invisíveis aos sentidos humanos. Alcance padrão de 50m. Qualidade Boa: bônus +30. Qualidade Ruim: só penetra até 20cm de material.",
  },
  {
    id: "auto-pena",
    name: "Auto Pena",
    category: "Ferramentas",
    availability: "Escassa",
    description:
      "Permite copiar texto com grande velocidade e precisão. Com a Perícia Ofício (Lembrador), dá bônus +10 para Testes envolvendo essa Perícia.",
  },
  {
    id: "bomba-melta",
    name: "Bomba Melta",
    category: "Ferramentas",
    weight: "12kg",
    availability: "Muito Rara",
    description:
      "Explosivo portátil que adere a superfícies metálicas com magnadesivos e detona com calor intenso: 6d10 Dano de Energia, Penetração 12, alcance de dois metros, Qualidades Fogo e Melta.",
  },
  {
    id: "carga-de-demolicao",
    name: "Carga de Demolição",
    category: "Ferramentas",
    weight: "1kg",
    availability: "Escassa",
    description:
      "Explosivo simples para arrombar portas ou destruir infraestrutura. Cargas podem ser somadas; ao explodir causa 3d10 Dano de Explosão mais 2 Dano por quilograma usado.",
  },
  {
    id: "cartilha-inspiradora",
    name: "Cartilha Inspiradora",
    category: "Ferramentas",
    availability: "Copiosa",
    description:
      "Manual obrigatório que todo Guarda deve portar, detalhando princípios, regulações, armas, uniformes, organização e guia dos inimigos do Imperium.",
  },
  {
    id: "combi-ferramenta",
    name: "Combi-ferramenta",
    category: "Ferramentas",
    weight: "1kg",
    availability: "Rara",
    description:
      "Equipamento mecânico versátil comum entre membros do Adeptus Mechanicus. Bônus +10 para Testes de Uso de Tecnologia.",
  },
  {
    id: "cortador-laser",
    name: "Cortador Laser",
    category: "Ferramentas",
    weight: "4kg",
    availability: "Mediana",
    description:
      "Corta ou solda até 10cm de metal; pode ser usado como arma improvisada (Pesada; 2m; 2d10+6 E; Pen 10; Cap 5; Recarga 2 Completas) somente contra alvos estacionários.",
  },
  {
    id: "diagnostor",
    name: "Diagnostor",
    category: "Ferramentas",
    weight: "4kg",
    availability: "Rara",
    description:
      "Equipamento médico sofisticado que detecta e diagnostica quase qualquer mal conhecido no Imperium. Bônus +20 para Testes de Medicina ou Percepção para diagnosticar um mal.",
  },
  {
    id: "eptc-do-soldado-calixiano",
    name: "EPTC do Soldado Calixiano",
    category: "Ferramentas",
    availability: "Copiosa",
    description:
      "Equipamento Portátil de Transcrição de Comunicações; registra comunicações quando não há operador de Vox disponível. Qualidade Ruim: 1d10 no uso, falha em 1-2 (restaurável com Teste Ordinário (+10) de Uso de Tecnologia). Qualidade Excelente: funciona sem gravidade e tem múltiplos reservatórios de pigmento.",
  },
  {
    id: "foco-psy",
    name: "Foco Psy",
    category: "Ferramentas",
    availability: "Mediana",
    description:
      "Item usado por psykers para ajudar a focar seus poderes. Bônus +10 ao fazer Teste de Focar Poder.",
  },
  {
    id: "gancho-de-escalada-e-linha",
    name: "Gancho de Escalada & Linha",
    category: "Ferramentas",
    weight: "2kg",
    availability: "Comum",
    description:
      "Lançador de gancho com 100m de linha fina e forte; pode ser içado manualmente ou por motor. Qualidade Comum suporta 150kg; Boa/Excelente suportam 200kg.",
  },
  {
    id: "gerador-de-estatica",
    name: "Gerador de Estática",
    category: "Ferramentas",
    weight: "3kg",
    availability: "Muito Rara",
    description:
      "Emite ruído branco em até 30 metros que impede equipamentos de comunicação de funcionar; o aparelho é facilmente localizado por quem estiver sendo interrompido.",
  },
  {
    id: "globo-brilhante-lanterna",
    name: "Globo Brilhante/Lanterna",
    category: "Ferramentas",
    weight: "0,5kg",
    availability: "Abundante",
    description: "Lança luz amarelada forte com cerca de 12 metros de diâmetro por cerca de cinco horas antes de precisar recarregar.",
  },
  {
    id: "gravador-picto",
    name: "Gravador Picto",
    category: "Ferramentas",
    weight: "1kg",
    availability: "Mediana",
    description: "Equipamento de gravação de mídia, com capacidades holográficas na maioria dos modelos; permite assistir e gravar.",
  },
  {
    id: "gritador",
    name: "Gritador",
    category: "Ferramentas",
    weight: "0,5kg",
    availability: "Escassa",
    description:
      "Alarme de proximidade ativado secretamente (Teste Desafiador (+0) de Uso de Tecnologia); detecta intrusos com Percepção 75 e pode ser ouvido a um quilômetro. Qualidade Ruim: só sons altos/movimentos rápidos próximos. Qualidade Boa: detecta sons específicos, movimentos e odores com métodos de alerta mais sutis.",
  },
  {
    id: "injetor",
    name: "Injetor",
    category: "Ferramentas",
    weight: "0,5kg",
    availability: "Comum",
    description: "Comporta uma dose de qualquer droga; pode ser administrado como Meia Ação.",
  },
  {
    id: "interruptor-de-sinal",
    name: "Interruptor de Sinal",
    category: "Ferramentas",
    weight: "2kg",
    availability: "Rara",
    description:
      "Sobrepuja transmissões locais de vox e dados. Modelos básicos são detectáveis pela agência transmissora; versões sofisticadas abafam frequências específicas sem serem percebidas.",
  },
  {
    id: "kit-medico",
    name: "Kit Médico",
    category: "Ferramentas",
    weight: "2kg",
    availability: "Comum",
    description:
      "Equipamento médico essencial; dá bônus +20 usado junto com a Perícia Medicina. Modelos avançados (Raros, 3kg adicionais) dão +20 para Testes de Medicina mesmo sem a Perícia.",
  },
  {
    id: "magbotas",
    name: "Magbotas",
    category: "Ferramentas",
    weight: "2kg",
    availability: "Rara",
    description:
      "Botas com eletroímãs que aderem a superfícies metálicas, permitindo movimento normal em gravidade baixa/zero; reduzem o Bônus de Agilidade do usuário em 2 enquanto usadas.",
  },
  {
    id: "magnoculos",
    name: "Magnóculos",
    category: "Ferramentas",
    weight: "0,5kg",
    availability: "Mediana",
    description:
      "Ampliam objetos distantes; modelos avançados fazem leituras de distância, detectam fontes de calor, calculam posicionamento de alvos e tiram picto-capturas.",
  },
  {
    id: "manual-munitorum",
    name: "Manual Munitorum",
    category: "Ferramentas",
    weight: "0,5kg",
    availability: "Copiosa",
    description: "Item mandatório dos Guardas, detalhando armamentos, suprimentos e kits usados pela Guarda/Imperium.",
  },
  {
    id: "mega-anunciador",
    name: "Mega Anunciador",
    category: "Ferramentas",
    weight: "4kg",
    availability: "Escassa",
    description: "Amplifica a fala normal a níveis audíveis por uma multidão inteira.",
  },
  {
    id: "micro-comunicador",
    name: "Micro-Comunicador",
    category: "Ferramentas",
    availability: "Mediana",
    description:
      "Equipamento de comunicação de curta distância usado na orelha; alcança cerca de um quilômetro (dependendo do clima/terreno). Modelos de Qualidade melhor são quase indetectáveis em inspeção casual.",
  },
  {
    id: "mirador-portatil",
    name: "Mirador Portátil",
    category: "Ferramentas",
    weight: "0,5kg",
    availability: "Escassa",
    description:
      "Detecta alcances com miras óticas e sistemas de predição de disparo. Como Meia Ação, dá a outro personagem +20 no próximo Teste de HB ao disparar uma arma com Qualidade Indireta.",
  },
  {
    id: "multichave",
    name: "Multichave",
    category: "Ferramentas",
    availability: "Escassa",
    description: "Abre a maioria das trancas imperiais padrão. Bônus +30 para Testes de Segurança ao abrir trancas.",
  },
  {
    id: "multicompasso",
    name: "Multicompasso",
    category: "Ferramentas",
    weight: "4kg",
    availability: "Quase Única",
    description:
      "Tecnologia antiga que analisa dados planetários, detecta direções, mapas topográficos e altitude. Bônus +20 para Testes de Sobrevivência e Navegação (Superfície).",
  },
  {
    id: "para-grav",
    name: "Para-Grav",
    category: "Ferramentas",
    weight: "15kg",
    availability: "Rara",
    description:
      "Versão menor da mochila de salto, com campos suspensores para desacelerar quedas longas. Teste Desafiador (+0) de Agilidade ou Teste Rotina (+20) de Operar (Aeronáutica) para descida segura; caso contrário, conta como queda de dois metros por Grau de Falha.",
  },
  {
    id: "placa-de-dados",
    name: "Placa de Dados",
    category: "Ferramentas",
    weight: "0,5kg",
    availability: "Comum",
    description:
      "Meio primário de armazenar e ler texto e outras mídias; a maioria mostra um único arquivo, mas versões melhores gravam nova informação ou transmitem/recebem dados.",
  },
  {
    id: "projetor-vox",
    name: "Projetor Vox",
    category: "Ferramentas",
    weight: "4kg",
    availability: "Escassa",
    description: "Aparelho de comunicação padrão para longas distâncias, incluindo naves orbitais. Alcance padrão de 100km (versões melhores alcançam mais).",
  },
  {
    id: "sutura-de-campo",
    name: "Sutura de Campo",
    category: "Ferramentas",
    weight: "0,5kg",
    availability: "Mediana",
    description: "Fecha ferimentos rapidamente e previne perda de sangue. Bônus +30 para Testes de Medicina para estancar Perda de Sangue.",
  },

  // ==========================================================================
  // Munição (Tabela 6-14)
  // ==========================================================================
  {
    id: "municao-flechas-setas",
    name: "Flechas/Setas",
    category: "Munição",
    availability: "Comum",
    description: "Usada com arcos, bestas e arcos de mão.",
  },
  {
    id: "municao-disparo",
    name: "Disparo",
    category: "Munição",
    availability: "Comum",
    description: "Bola de chumbo sólido/pedra com carga de pólvora negra. Usada com pistolas e mosquetes de pederneira.",
  },
  {
    id: "municao-balas",
    name: "Balas",
    category: "Munição",
    availability: "Copiosa",
    description:
      "Projéteis sólidos; balas de um tipo de arma não servem em outra a menos que muito parecidas. Usadas com autopistolas, revólveres stub, automáticas stub, canhões de mão, autorifles e stubs pesados.",
  },
  {
    id: "municao-cartucho",
    name: "Cartucho",
    category: "Munição",
    availability: "Comum",
    description: "Contém dúzias de pequenas bolas projetadas para se espalhar, ideal para curta distância. Usado com qualquer escopeta.",
  },
  {
    id: "municao-bateria-mochila",
    name: "Bateria Mochila",
    category: "Munição",
    weight: "25kg",
    availability: "Rara",
    description:
      "Fonte de munição carregada como mochila: 80 disparos para armas de Plasma, Melta e Laser; 200 para Projétil Sólido ou Bolt; 60 para Incendiárias. A arma conectada ignora sua capacidade normal.",
  },
  {
    id: "municao-celula-de-energia",
    name: "Célula de Energia",
    category: "Munição",
    availability: "Comum",
    description: "Libera uma carga limitada por vez, energia para um único tiro laser; deve ser trocada após cada disparo. Usada com pederlasers.",
  },
  {
    id: "municao-bateria-pistola",
    name: "Bateria (pistola)",
    category: "Munição",
    availability: "Comum",
    description: "Bateria para armas laser de classe Pistola; provê disparos iguais à capacidade da arma.",
  },
  {
    id: "municao-bateria-basica",
    name: "Bateria (básica)",
    category: "Munição",
    availability: "Comum",
    description: "Bateria para armas laser de classe Básica; provê disparos iguais à capacidade da arma.",
  },
  {
    id: "municao-bateria-pesada",
    name: "Bateria (pesada)",
    category: "Munição",
    availability: "Rara",
    description: "Bateria para armas laser de classe Pesada; provê disparos iguais à capacidade da arma.",
  },
  {
    id: "municao-combustivel-pistola",
    name: "Combustível (pistola)",
    category: "Munição",
    availability: "Escassa",
    description: "Combustível para flamadores de mão; provê disparos iguais à capacidade da arma.",
  },
  {
    id: "municao-combustivel-basica",
    name: "Combustível (básica)",
    category: "Munição",
    availability: "Escassa",
    description: "Combustível para flamadores; provê disparos iguais à capacidade da arma.",
  },
  {
    id: "municao-combustivel-pesada",
    name: "Combustível (pesada)",
    category: "Munição",
    availability: "Escassa",
    description: "Combustível para flamadores pesados; provê disparos iguais à capacidade da arma.",
  },
  {
    id: "municao-bolts",
    name: "Bolts",
    category: "Munição",
    availability: "Rara",
    description: "Projétil explosivo reativo de massa, caro e difícil de fabricar. Usado com pistolas bolt, rifles bolt e bolts pesados.",
  },
  {
    id: "municao-tanque-melta-pistola",
    name: "Tanque Melta (pistola)",
    category: "Munição",
    availability: "Muito Rara",
    description: "Mistura química para pistolas inferno; disparos iguais à capacidade da arma.",
  },
  {
    id: "municao-tanque-melta-basica",
    name: "Tanque Melta (básica)",
    category: "Munição",
    availability: "Muito Rara",
    description: "Mistura química para rifles melta; disparos iguais à capacidade da arma.",
  },
  {
    id: "municao-tanque-melta-pesada",
    name: "Tanque Melta (pesada)",
    category: "Munição",
    availability: "Muito Rara",
    description: "Mistura química para multi-meltas; disparos iguais à capacidade da arma.",
  },
  {
    id: "municao-frasco-de-plasma-pistola",
    name: "Frasco de Plasma (pistola)",
    category: "Munição",
    availability: "Rara",
    description: "Hidrogênio fotônico comprimido para pistolas de plasma; disparos iguais à capacidade da arma.",
  },
  {
    id: "municao-frasco-de-plasma-basica",
    name: "Frasco de Plasma (básica)",
    category: "Munição",
    availability: "Rara",
    description: "Hidrogênio fotônico comprimido para rifles de plasma; disparos iguais à capacidade da arma.",
  },
  {
    id: "municao-frasco-de-plasma-pesada",
    name: "Frasco de Plasma (pesada)",
    category: "Munição",
    availability: "Muito Rara",
    description: "Hidrogênio fotônico comprimido para canhões de plasma; disparos iguais à capacidade da arma.",
  },
  {
    id: "municao-exotica",
    name: "Exótica",
    category: "Munição",
    availability: "Muito Rara",
    description: "Munições incomuns (gel viscoso de teiadeira, dardos de pistola agulha, etc.). Usada com pistolas agulha, rifles agulha e outras armas de alcance exótica.",
  },
  {
    id: "municao-artilharia",
    name: "Artilharia",
    category: "Munição",
    availability: "Muito Rara",
    description: "Enormes projéteis proprietários, pesando no mínimo 20kg e podendo ser instáveis. Usada com qualquer canhão de classe Veículo.",
  },

  // ==========================================================================
  // Munição Incomum (Tabela 6-15)
  // ==========================================================================
  {
    id: "bala-dumdum",
    name: "Bala Dumdum",
    category: "Munição Incomum",
    availability: "Escassa",
    description:
      "+2 ao Dano da arma, mas os Pontos de Armadura do alvo contam em dobro contra ela. Compatível com revólveres stub, automáticas stub, rifles de precisão e canhões de mão.",
  },
  {
    id: "bala-mata-homem",
    name: "Bala Mata-Homem",
    category: "Munição Incomum",
    availability: "Escassa",
    description:
      "Penetração +3. Compatível com revólveres stub, automáticas stub, rifles de precisão, canhões de mão, autopistolas e autorifles.",
  },
  {
    id: "bateria-tiro-quente",
    name: "Bateria Tiro-Quente",
    category: "Munição Incomum",
    availability: "Escassa",
    description:
      "+1 ao Dano, ganha Qualidade Dilacerante e Penetração 4, mas a arma perde a Qualidade Confiável e sua Capacidade cai para 1. Compatível com pistolas laser, carabinas laser, rifles laser e lasers longos.",
  },
  {
    id: "flechas-setas-explosivas",
    name: "Flechas/Setas Explosivas",
    category: "Munição Incomum",
    availability: "Escassa",
    description:
      "Ataques feitos com penalidade -10, Dano da arma vira Explosão e a arma perde a Qualidade Primitiva. Compatível com arcos, bestas e arcos de mão.",
  },
  {
    id: "projetil-amputador",
    name: "Projétil Amputador",
    category: "Munição Incomum",
    availability: "Extremamente Rara",
    description:
      "+2 ao Dano da arma. Compatível com revólveres stub, automáticas stub, escopetas (todos os tipos), rifles de precisão, canhões de mão, autopistolas e autorifles.",
  },
  {
    id: "projetil-bolt-tempestade",
    name: "Projétil Bolt Tempestade",
    category: "Munição Incomum",
    availability: "Quase Única",
    description:
      "Muda a classe do Dano da arma para Energia, ganha Qualidade Eletrizante e adiciona 3 Dano contra alvos com o Traço Máquina. Compatível com pistolas bolt, rifles bolt e bolts pesados.",
  },
  {
    id: "projetil-expansor",
    name: "Projétil Expansor",
    category: "Munição Incomum",
    availability: "Escassa",
    description:
      "Adiciona 1 à Penetração da arma. Compatível com revólveres stub, automáticas stub, rifles de precisão, autopistolas e autorifles.",
  },
  {
    id: "projetil-inferno",
    name: "Projétil Inferno",
    category: "Munição Incomum",
    availability: "Rara",
    description:
      "Muda o perfil da arma para Dano 2d10+10 E, Pen 6; perde a Qualidade Concussiva mas ganha a Qualidade Fogo. Compatível com escopetas, escopetas de ação de bomba, escopetas de combate e todas as armas bolt.",
  },
  {
    id: "projetil-sangrador",
    name: "Projétil Sangrador",
    category: "Munição Incomum",
    availability: "Rara",
    description:
      "Quando o alvo sofre Dano, começa a esguichar sangue: todos os ataques subsequentes contra ele causam +2 Dano até o fim do combate (não acumula, e não afeta alvos com Traços Daemoníaco ou Máquina). Compatível com revólveres stub, automáticas stub, canhões de mão, autopistolas e autorifles.",
  },

  // ==========================================================================
  // Cibernéticos / Biônicos / Implantes (Tabela 6-24)
  // ==========================================================================
  {
    id: "armadura-craniana",
    name: "Armadura Craniana",
    category: "Cibernético",
    availability: "Escassa",
    description: "Cobre/substitui parte do crânio com placas de aço e gel, prevenindo concussões. +1 Armadura na localização Cabeça (acumula com armadura vestida).",
  },
  {
    id: "armadura-subpele",
    name: "Armadura Subpele",
    category: "Cibernético",
    availability: "Muito Rara",
    description: "Placas de carapaça finas inseridas sob a pele. +2 Pontos de Armadura nas localizações Braços, Corpo e Pernas (soma-se a outros PA).",
  },
  {
    id: "autosangui-neo",
    name: "Autosanguíneo",
    category: "Cibernético",
    availability: "Muito Rara",
    description: "Máquinas minúsculas que reparam ferimentos e aceleram a cura pelo sangue. Ao ser curado, o personagem é sempre tratado como Levemente Danificado e cura 2 pontos de Dano por dia.",
  },
  {
    id: "bobinas-maglev",
    name: "Bobinas Maglev",
    category: "Cibernético",
    availability: "Muito Rara",
    description:
      "Permitem pairar 20-30cm do chão por 1d10 + Bônus de Dureza minutos (Meia Ação para ativar, mais uma Meia Ação por Rodada para manter). Reduz Dano de queda para 1d10+3 de Impacto. Drena a energia, precisando recarregar por 24 horas antes de reusar.",
  },
  {
    id: "braco-bionico",
    name: "Braço Biônico",
    category: "Cibernético",
    availability: "Escassa",
    description:
      "Substitui um braço mantendo Força, Destreza e tato (Qualidade Comum). Ruim: reduz Agilidade pela metade em tarefas de destreza fina, penalidade -5 em Testes de HA/HB com o membro. Boa: +10 em Testes de Agilidade para manipulação delicada. Excelente: +10 em Testes de Força e compartimentos internos ocultos para pequenos itens.",
  },
  {
    id: "capacitores-luminen",
    name: "Capacitores Luminen",
    category: "Cibernético",
    availability: "Muito Rara",
    description:
      "Permitem recarregar ou energizar máquinas com Teste de Dureza (um minuto de foco), dificuldade variando conforme o sistema-alvo, ou atacar ofensivamente. Só usável por quem tem o Traço Implantes Mechanicus. Qualidade Ruim: -10 aos Testes de Dureza; Qualidade Boa: +10.",
  },
  {
    id: "conjunto-augurio",
    name: "Conjunto Augúrio",
    category: "Cibernético",
    availability: "Rara",
    description:
      "Duplica sistemas sensoriais além dos sentidos humanos (Meia Ação e concentração). Comum: equivale a um auspex portátil. Ruim: apenas uma habilidade de detecção, alcance 20m. Bom: auspex completo com repetição de Testes de Percepção durante o uso.",
  },
  {
    id: "coracao-bionico",
    name: "Coração Biônico",
    category: "Cibernético",
    availability: "Muito Rara",
    description: "Substitui o coração por materiais mais duráveis. +1 Armadura na localização Corpo (acumula com armadura vestida) e concede o Talento Arrancada.",
  },
  {
    id: "entrada-de-interface",
    name: "Entrada de Interface",
    category: "Cibernético",
    availability: "Rara",
    description: "Entrada implantada (geralmente na nuca) que conecta a máquinas via cabos de dados. Bônus +10 para Testes de Conhecimento Comum, Questionar e Uso de Tecnologia enquanto conectado.",
  },
  {
    id: "implante-de-filtro-respiratorio",
    name: "Implante de Filtro Respiratório",
    category: "Cibernético",
    availability: "Rara",
    description: "Implantado nos pulmões, drena gases tóxicos e filtra matéria particulada. Permite ignorar gases tóxicos ou contaminantes atmosféricos inalados.",
  },
  {
    id: "implante-de-memorizacao",
    name: "Implante de Memorização",
    category: "Cibernético",
    availability: "Rara",
    description: "Armazém de dados e picto-captura conectado neurologicamente a um ou ambos os olhos. Bônus +10 para Testes de Ofício (Lembrador) ou Testes sociais onde informação registrada ajude; concede o Talento Memória Perfeita se o usuário não o tiver.",
  },
  {
    id: "implante-vocal",
    name: "Implante Vocal",
    category: "Cibernético",
    availability: "Escassa",
    description: "Amplifica as cordas vocais para alcance sobre-humano, permitindo gritar comandos sobre o ruído de batalha. Comum entre Comissários.",
  },
  {
    id: "implante-volitor",
    name: "Implante Volitor",
    category: "Cibernético",
    availability: "Rara",
    description: "Receptores neurais implantados que compelem o usuário a não revelar informação, permanecer em área determinada ou realizar tarefa específica; combater a compulsão pode causar inconsciência ou morte. Usado pelo Departamento Munitorum em agentes com segredos valiosos.",
  },
  {
    id: "implantes-cerebrais",
    name: "Implantes Cerebrais",
    category: "Cibernético",
    availability: "Muito Rara",
    description:
      "Reparam cérebro danificado ou melhoram habilidades. Comum: restaura usuários paralisados/com dano cerebral, com perda permanente de 1d10 pontos em HA, HB, Ag, Int e Cam. Ruim: restaura função mas destrói personalidade/memórias (não adequado a Personagens Jogadores). Bom (Quase Único): concede o Traço Inteligência Sobrenatural (2) e +20 para Testes de Logística e Conhecimento.",
  },
  {
    id: "implantes-de-isca-ferrica",
    name: "Implantes de Isca Férrica",
    category: "Cibernético",
    availability: "Muito Rara",
    description: "Eletroímãs implantados que puxam objetos metálicos soltos a até 20 metros (Ação Completa, Teste Desafiador (+0) de Vontade), com massa máxima de 1kg por ponto de Bônus de Vontade. Exige o Traço Implantes Mechanicus.",
  },
  {
    id: "interface-uim-de-arma",
    name: "Interface UIM de Arma",
    category: "Cibernético",
    availability: "Rara",
    description: "Permite operar remotamente uma arma acoplada ao ombro, disparando-a como Ação Livre durante o Turno (ainda limitado a uma Ação de Ataque por Turno).",
  },
  {
    id: "matriz-localizadora",
    name: "Matriz Localizadora",
    category: "Cibernético",
    availability: "Rara",
    description: "Micro-cogitadores implantados na base do crânio que informam direção, localização, velocidade, altitude e hora do dia; requer acesso a mapas/dados planetários para ser útil.",
  },
  {
    id: "mecatentaculo-balistico",
    name: "Mecatentáculo Balístico",
    category: "Cibernético",
    availability: "Muito Rara",
    description: "Membro montado no ombro (2m) que pode portar uma arma de classe Pistola com a Melhoria Compacta, disparada como Reação. Exige o Talento de Uso de Mecatentáculo apropriado.",
  },
  {
    id: "mecatentaculo-manipulador",
    name: "Mecatentáculo Manipulador",
    category: "Cibernético",
    availability: "Muito Rara",
    description:
      "Membro artificial que se estende a 1,5m, dando +20 para Testes baseados em Força e permitindo combate corporal (perfil Corporal; 1d10+2 I; Pen 0). Não é sutil para tarefas delicadas. Exige o Talento de Uso de Mecatentáculo apropriado.",
  },
  {
    id: "mecatentaculo-medico",
    name: "Mecatentáculo Médico",
    category: "Cibernético",
    availability: "Muito Rara",
    description:
      "Membro flexível de 2m para auxílio médico: +10 para Testes de Medicina, seis pistões injetores, estanca Perda de Sangue como Meia Ação, reduz a dificuldade de amputação para Desafiador (+0), e pode ser usado como arma (perfil Corporal; 1d5 L; Pen 0; Balanceada). Também dá +10 para Testes de Interrogação. Exige o Talento de Uso de Mecatentáculo apropriado.",
  },
  {
    id: "mecatentaculo-otico",
    name: "Mecatentáculo Ótico",
    category: "Cibernético",
    availability: "Muito Rara",
    description: "Membro extremamente flexível (3m) com picto-captura e sensores: +10 para Testes baseados em Percepção, sem penalidade por escuridão e +20 para Percepção baseada em visão à noite. Exige o Talento de Uso de Mecatentáculo apropriado.",
  },
  {
    id: "mecatentaculo-utilitario",
    name: "Mecatentáculo Utilitário",
    category: "Cibernético",
    availability: "Muito Rara",
    description:
      "Membro de 2m com ferramentas diversas: conta como combi-ferramenta (+10 Uso de Tecnologia), seis pistões injetores para unguento sagrado, incensário que distrai criaturas vivas próximas (-5 HA) e dá +10 para detectar o Tecnopadre. Pode ser usado como arma (perfil Corporal; 1d5 L; Pen 2; Defensiva). Exige o Talento de Uso de Mecatentáculo apropriado.",
  },
  {
    id: "melhoria-calculus-logi",
    name: "Melhoria Calculus Logi",
    category: "Cibernético",
    availability: "Muito Rara",
    description: "Biônicos que ajudam na retenção e processamento de dados. Bônus +10 para Testes de Literatura, Lógica ou Conhecimento Escolástico.",
  },
  {
    id: "olho-maligno",
    name: "Olho Maligno",
    category: "Cibernético",
    availability: "Quase Única",
    description:
      "Olho biônico arqueotecnológico com arma laser miniatura embutida (sacrifica a visão normal desse olho): equivale a uma pistola tiro-quente com alcance de 10m, disparável mesmo com as mãos ocupadas. Sem Capacidade — um Emperramento cega o olho por Rodadas iguais aos Graus de Falha no ataque.",
  },
  {
    id: "pernas-bionicas",
    name: "Pernas Biônicas",
    category: "Cibernético",
    availability: "Escassa",
    description:
      "Substituem as pernas mantendo desempenho humano normal (Qualidade Comum). Ruim: reduz a velocidade e exige Teste Ordinário (+0) de Agilidade ao correr ou o personagem cai. Boa: concede o Talento Corrida e +20 para Testes de Atletismo de salto.",
  },
  {
    id: "reservatorio-interno",
    name: "Reservatório Interno",
    category: "Cibernético",
    availability: "Rara",
    description: "Bateria que armazena energia para implantes. Quando cheio, evita Fadiga ao usar Capacitores Luminen, mas cada uso drena o reservatório pela metade; recarrega totalmente após um dia de descanso.",
  },
  {
    id: "sentidos-ciberneticos",
    name: "Sentidos Cibernéticos",
    category: "Cibernético",
    availability: "Rara",
    description:
      "Duplicam artificialmente um sentido (visão, audição, olfato, tato, paladar). Comuns: sem efeitos extras. Ruins: penalidade -20 nos Testes com esse sentido. Bons: concedem o Talento Sentidos Aguçados correspondente e +20 para resistir a ataques contra o próprio sentido; olhos podem incluir foto-visor/Visão Noturna, ouvidos podem incluir micro-comunicador.",
  },
  {
    id: "sintmusculo",
    name: "Sintmúsculo",
    category: "Cibernético",
    availability: "Rara",
    description: "Cordas musculares cultivadas entrelaçadas com os músculos existentes. Concede Força Sobrenatural (1); Qualidade Excelente concede Força Sobrenatural (4); impõe -10 em Testes de Agilidade.",
  },
  {
    id: "sistema-respiratorio-bionico",
    name: "Sistema Respiratório Biônico",
    category: "Cibernético",
    availability: "Rara",
    description:
      "Pulmões biônicos que imitam a respiração humana. Bônus +20 em Testes de Dureza contra toxinas aéreas e gases. Ruins: mesmos benefícios mas penalidade -20 em Furtividade (barulhentos) e -10 em atividade física extenuante. Bons: mantêm o sangue oxigenado mesmo se o sistema respiratório natural falhar, quase indetectáveis.",
  },
  {
    id: "unidade-de-impulso-mental",
    name: "Unidade de Impulso Mental",
    category: "Cibernético",
    availability: "Rara",
    description:
      "Conector de sentidos para interface direta com máquinas. Comum: +10 para Testes de Uso de Tecnologia ou Operar em conjunto com aparelhos com conexão UIM. Ruim: exige Teste de Vontade para usar e impõe -10 na interface. Bom: +10 para se comunicar com espíritos mecânicos e para Uso de Tecnologia, Operar, Lógica, Questionar e HB feitos via interface UIM.",
  },
];
