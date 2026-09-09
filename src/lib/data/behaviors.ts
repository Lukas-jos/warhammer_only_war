// Tabela 3-21: Comportamentos (Only War, Cap. III, p.108+)
// Usada no Estágio 4: Dando Vida aos Personagens. O jogador pode escolher
// livremente ou sortear (1d100) um Comportamento para seu Guarda.

export interface Behavior {
  id: string;
  name: string;
  rollRange: [number, number]; // faixa de 1d100 (1-2, 3-4, ...)
  description: string;
}

export const BEHAVIORS: Behavior[] = [
  { id: "viciado", name: "Viciado", rollRange: [1, 2], description: "Dependente de estimulantes ou drogas; fica irritável e distraído sem sua dose." },
  { id: "afavel", name: "Afável", rollRange: [3, 4], description: "Caloroso e sociável, faz amigos com facilidade entre os companheiros de esquadra." },
  { id: "caipira", name: "Caipira", rollRange: [5, 6], description: "Vem de origem rural/simples; estranho aos costumes de mundos mais desenvolvidos." },
  { id: "heroico", name: "Heroico", rollRange: [7, 8], description: "Já construiu reputação por feitos corajosos; espera-se que continue à altura." },
  { id: "bilioso", name: "Bilioso", rollRange: [9, 10], description: "Temperamento amargo e desconfiado; vê conspiração e traição com facilidade." },
  { id: "barulhento", name: "Barulhento", rollRange: [11, 12], description: "Fala alto e chama atenção, para o desespero de quem busca discrição." },
  { id: "fanfarrao", name: "Fanfarrão", rollRange: [13, 14], description: "Gosta de se gabar de feitos (reais ou exagerados) diante de qualquer plateia." },
  { id: "pretencioso", name: "Pretencioso", rollRange: [15, 16], description: "Se considera superior aos demais, por educação, origem ou talento." },
  { id: "cozinheiro", name: "Cozinheiro", rollRange: [17, 18], description: "Tem talento e gosto por preparar comida, mesmo com rações de campanha." },
  { id: "covarde", name: "Covarde", rollRange: [19, 20], description: "Nervoso sob fogo inimigo; busca cobertura ao primeiro sinal de perigo." },
  { id: "desejo-de-morte", name: "Desejo de Morte", rollRange: [21, 22], description: "Parece não temer a morte, tomando riscos que assustam os companheiros." },
  { id: "dissidente", name: "Dissidente", rollRange: [23, 24], description: "Questiona ordens e a hierarquia, mesmo sabendo dos riscos disso na Guarda." },
  { id: "sonhador", name: "Sonhador", rollRange: [25, 26], description: "Frequentemente distraído com pensamentos de um futuro ou lugar melhor." },
  { id: "apostador", name: "Apostador", rollRange: [27, 28], description: "Vicia-se em jogos de azar, apostando qualquer coisa de valor disponível." },
  { id: "novato", name: "Novato", rollRange: [29, 30], description: "Ainda inexperiente na guerra, apesar de já ter sido posto à prova em combate." },
  { id: "incompetente", name: "Incompetente", rollRange: [31, 32], description: "Vive cometendo pequenos erros, apesar dos melhores esforços." },
  { id: "cansado", name: "Cansado", rollRange: [33, 34], description: "Exausto de anos de campanha; a energia para continuar lutando está minguando." },
  { id: "piadista", name: "Piadista", rollRange: [35, 36], description: "Usa humor (bom ou ruim) para aliviar a tensão em qualquer situação." },
  { id: "pensador-lateral", name: "Pensador Lateral", rollRange: [37, 38], description: "Enxerga soluções não convencionais onde outros só veem um beco sem saída." },
  { id: "solitario", name: "Solitário", rollRange: [39, 40], description: "Prefere companhia própria; não se aproxima facilmente dos colegas de esquadra." },
  { id: "volatil", name: "Volátil", rollRange: [41, 42], description: "Humor imprevisível, alterna entre calma e explosões de raiva ou pânico." },
  { id: "leal", name: "Leal", rollRange: [43, 44], description: "Confia inteiramente em seus companheiros e espera o mesmo em troca." },
  { id: "sortudo", name: "Sortudo", rollRange: [45, 46], description: "Parece escapar ileso de situações que deveriam tê-lo matado." },
  { id: "mentor", name: "Mentor", rollRange: [47, 48], description: "Gosta de ensinar e aconselhar recrutas mais novos ou inexperientes." },
  { id: "sanguessuga", name: "Sanguessuga", rollRange: [49, 50], description: "Vive pedindo favores, cigarros ou rações emprestadas, sem nunca retribuir." },
  { id: "nunca-toma-banho", name: "Nunca Toma Banho", rollRange: [51, 52], description: "Notoriamente sujo e malcheiroso, mesmo para os padrões da linha de frente." },
  { id: "niilista", name: "Niilista", rollRange: [53, 54], description: "Não vê sentido em nada além do próximo combate; descrente de causas maiores." },
  { id: "entorpecido", name: "Entorpecido", rollRange: [55, 56], description: "Emocionalmente apático após tanta guerra; pouco o afeta ou surpreende." },
  { id: "desatento", name: "Desatento", rollRange: [57, 58], description: "Frequentemente distraído, perde detalhes que outros notariam facilmente." },
  { id: "obsessivo", name: "Obsessivo", rollRange: [59, 60], description: "Fixado em um objeto, ritual ou objetivo específico, ao qual dedica atenção excessiva." },
  { id: "velho", name: "Velho", rollRange: [61, 62], description: "Veterano de muitas campanhas; carrega o peso e a sabedoria da idade." },
  { id: "otimista", name: "Otimista", rollRange: [63, 64], description: "Mantém esperança e bom humor mesmo nas piores circunstâncias." },
  { id: "pessimista", name: "Pessimista", rollRange: [65, 66], description: "Espera o pior resultado possível de qualquer situação." },
  { id: "pio", name: "Pio", rollRange: [67, 68], description: "Devoto fervoroso do Credo Imperial, recorrendo à fé em todo momento." },
  { id: "psicotico", name: "Psicótico", rollRange: [69, 70], description: "Comportamento instável e perturbador; a guerra parece tê-lo quebrado por dentro." },
  { id: "quieto", name: "Quieto", rollRange: [71, 72], description: "Fala pouco, prefere observar e agir a discursar." },
  { id: "ousado", name: "Ousado", rollRange: [73, 74], description: "Assume riscos calculados com confiança, buscando a glória do feito." },
  { id: "sarcastico", name: "Sarcástico", rollRange: [75, 76], description: "Responde a quase tudo com ironia mordaz, inclusive ao perigo." },
  { id: "sensato", name: "Sensato", rollRange: [77, 78], description: "Mantém a cabeça fria e o julgamento equilibrado mesmo sob pressão." },
  { id: "traumatizado", name: "Traumatizado", rollRange: [79, 80], description: "Emocionalmente marcado pela guerra; certos gatilhos o afetam profundamente." },
  { id: "preguicoso", name: "Preguiçoso", rollRange: [81, 82], description: "Evita esforço extra sempre que possível, para a frustração dos superiores." },
  { id: "lento", name: "Lento", rollRange: [83, 84], description: "Demora para processar ordens ou reagir a situações novas." },
  { id: "suave", name: "Suave", rollRange: [85, 86], description: "Trata os outros com gentileza e tato, mesmo em meio à brutalidade da guerra." },
  { id: "acerado", name: "Acerado", rollRange: [87, 88], description: "Frio e calculista, focado unicamente na eficiência da missão." },
  { id: "estrito", name: "Estrito", rollRange: [89, 90], description: "Segue regulamentos e protocolo à risca, cobrando o mesmo dos demais." },
  { id: "supersticioso", name: "Supersticioso", rollRange: [91, 92], description: "Crê em rituais, amuletos e sinais para se proteger dos horrores da guerra." },
  { id: "falador", name: "Falador", rollRange: [93, 94], description: "Fala sem parar, mesmo quando silêncio seria mais prudente." },
  { id: "ladrao", name: "Ladrão", rollRange: [95, 96], description: "Tem o hábito de 'requisitar' pertences alheios sem pedir permissão." },
  { id: "agitado", name: "Agitado", rollRange: [97, 98], description: "Sempre inquieto, com dificuldade de ficar parado ou esperar em silêncio." },
  { id: "azarado", name: "Azarado", rollRange: [99, 100], description: "Parece atrair má sorte para si e para quem está por perto." },
];
