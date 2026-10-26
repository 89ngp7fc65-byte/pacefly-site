/* ============================================================
   PaceFly | Base de dados (eventos + notícias)
   ------------------------------------------------------------
   COMO EDITAR:
   - EVENTOS: array PACEFLY_EVENTOS. Cada prova é um objeto { }.
     "id" é usado na URL (evento.html?id=SEU-ID): minúsculas,
     hífens, sem espaços/acentos.
   - Para adicionar prova: copie um bloco { ... }, cole no fim
     da lista e troque os valores.
   - "oficialUrl" DEVE apontar para a fonte oficial da prova:
     site do evento, do organizador ou a plataforma de inscrição
     indicada por ele. NUNCA usar agregadores/sites de terceiros
     (corridasbr, calendariodecorrida, guiadacorrida e afins).
     Agregadores servem para PESQUISAR, não para linkar.
   - "largada", "organizador" e "distancias" devem ser confirmados
     na fonte oficial. Se não der para confirmar, a prova não entra.
     Sempre reconfirme perto da data com o organizador.
   - NOTÍCIAS: array PACEFLY_NOTICIAS. "corpo" é uma lista de
     parágrafos. "fonteUrl" é a origem da informação.
   - Campos que não tiver: deixe "" ou null. A página esconde
     automaticamente o que estiver vazio.
   - "inscricoesEncerradas": true quando a inscrição da prova já
     fechou, mesmo que a prova ainda não tenha acontecido. O site
     troca o CTA por "Inscrições encerradas" e mantém o link para
     a página oficial. Prova com data já passada é tratada como
     encerrada automaticamente, sem precisar do campo.
   - Imagens: troque as URLs por fotos próprias/licenciadas antes
     de divulgar amplamente.
   ============================================================ */

// PACEFLY_EVENTOS: versão corrigida (links oficiais reais)
// Substitua todo o array PACEFLY_EVENTOS do seu assets/data.js
// por este bloco abaixo (do "const PACEFLY_EVENTOS = [" até o "];")
// ============================================================

const PACEFLY_EVENTOS = [
  {
    "id": "maratona-joinville-6k",
    "nome": "1ª Maratona de Joinville (6K)",
    "dia": "31",
    "mes": "10",
    "mesTxt": "OUT",
    "ano": 2026,
    "dataExtenso": "31 de outubro de 2026",
    "cidade": "Joinville, SC",
    "largada": "Kart Joinville",
    "organizador": "Tkar Produção de Eventos Esportivos",
    "edicao": "1ª edição, prova de sábado",
    "distancias": ["6 km"],
    "descricao": "Prova de 6 km que abre o fim de semana da 1ª Maratona de Joinville, com largada no Kart Joinville.",
    "oficialUrl": "https://www.ticketsports.com.br/e/1o-maratona-de-joinville-87159"
  },
  {
    "id": "maratona-joinville-42k",
    "nome": "1ª Maratona de Joinville",
    "dia": "01",
    "mes": "11",
    "mesTxt": "NOV",
    "ano": 2026,
    "dataExtenso": "1 de novembro de 2026",
    "cidade": "Joinville, SC",
    "largada": "Kart Joinville",
    "organizador": "Tkar Produção de Eventos Esportivos",
    "edicao": "1ª edição",
    "distancias": ["42 km"],
    "descricao": "Marco histórico: a primeira Maratona de Joinville, com a distância clássica de 42 km e largada no Kart Joinville.",
    "oficialUrl": "https://www.ticketsports.com.br/e/1o-maratona-de-joinville-87159",
    "destaque": true
  },
  {
    "id": "meia-maratona-piracity-joinville",
    "nome": "10ª Meia Maratona de Piracity",
    "dia": "08",
    "mes": "11",
    "mesTxt": "NOV",
    "ano": 2026,
    "dataExtenso": "8 de novembro de 2026",
    "cidade": "Joinville, SC",
    "largada": "Fundos do Colégio Estadual Olavo Bilac, Rua Olavo Bilac, Distrito de Pirabeiraba, às 6h",
    "organizador": "L'quelibre e KM Eventos Esportivos",
    "edicao": "10ª edição",
    "distancias": ["21 km", "10 km", "5 km", "Caminhada 5 km"],
    "descricao": "Décima edição da Meia Maratona de Piracity, no distrito joinvilense de Pirabeiraba, com largada e chegada nos fundos do Colégio Estadual Olavo Bilac. Aquecimento às 5h30 e largada única às 6h para os 21 km, 10 km, 5 km e caminhada de 5 km, com premiação a partir das 8h30. A inscrição inclui a doação de 1 kg de alimento não perecível.",
    "oficialUrl": "https://www.ticketsports.com.br/e/10o-meia-maratona-de-piracity-87885"
  },
  {
    "id": "circuito-unimed-mafra",
    "nome": "Circuito de Corridas Unimed",
    "dia": "08",
    "mes": "11",
    "mesTxt": "NOV",
    "ano": 2026,
    "dataExtenso": "8 de novembro de 2026",
    "cidade": "Mafra, SC",
    "largada": "Avenida Coronel José Severiano Maia, 590, Vila Buenos Aires",
    "organizador": "Unimed",
    "edicao": "Etapa Mafra",
    "distancias": ["10 km", "5 km"],
    "descricao": "Etapa mafrense do Circuito de Corridas Unimed, na Avenida Coronel José Severiano Maia, no bairro Vila Buenos Aires, com percursos de 10 km e 5 km. A retirada de kits acontece no dia anterior à prova.",
    "oficialUrl": "https://circuitodecorridaunimed.com.br/corrida/mafra/"
  },
  {
    "id": "corrida-bombeiros-joinville",
    "nome": "6ª Corrida Bombeiros Voluntários",
    "dia": "15",
    "mes": "11",
    "mesTxt": "NOV",
    "ano": 2026,
    "dataExtenso": "15 de novembro de 2026",
    "cidade": "Joinville, SC",
    "largada": "Unidade Central dos Bombeiros Voluntários, Rua Jaguaruna, às 6h",
    "organizador": "Number Esportes",
    "edicao": "6ª edição",
    "distancias": ["9 km", "5 km"],
    "descricao": "Sexta edição da corrida em apoio aos Bombeiros Voluntários de Joinville, com largada às 6h na Unidade Central, na Rua Jaguaruna, e percursos de 9 km e 5 km. Inscrições até 3 de novembro.",
    "oficialUrl": "https://www.ticketsports.com.br/e/6%C2%AA+CORRIDA+BOMBEIROS+VOLUNT%C3%81RIOS+JOINVILLE-87309"
  },
  {
    "id": "corrida-do-tatico",
    "nome": "Corrida do Tático",
    "dia": "20",
    "mes": "11",
    "mesTxt": "NOV",
    "ano": 2026,
    "dataExtenso": "20 de novembro de 2026",
    "cidade": "Joinville, SC",
    "largada": "1º BPR, Rua São Paulo",
    "organizador": "Number Esportes",
    "edicao": "Edição 2026",
    "distancias": ["7 km"],
    "descricao": "Prova de rua em Joinville com largada no 1º BPR e percurso de 7 km.",
    "oficialUrl": "https://number.esp.br"
  },
  {
    "id": "corrida-speed-life-run-barra-velha",
    "nome": "2ª Corrida Speed Life Run",
    "dia": "29",
    "mes": "11",
    "mesTxt": "NOV",
    "ano": 2026,
    "dataExtenso": "29 de novembro de 2026",
    "cidade": "Barra Velha, SC",
    "largada": "Praça Lauro Loyola, Avenida Paraná, 96, Centro, às 7h (10 km) e 7h05 (5 km e caminhada de 3 km)",
    "organizador": "Speed Life Run",
    "edicao": "2ª edição",
    "distancias": ["10 km", "5 km", "Caminhada 3 km", "Kids"],
    "descricao": "Segunda edição da Speed Life Run, com percurso à beira-mar e perto da lagoa de Barra Velha. Largada dos 10 km às 7h e dos 5 km e caminhada de 3 km às 7h05, na Praça Lauro Loyola, com corrida kids às 8h30 e premiação às 9h15. A prova também tem versão virtual, para corredores de fora da cidade.",
    "oficialUrl": "https://www.ticketsports.com.br/e/2-corrida-speed-life-run-85505"
  },
  {
    "id": "ho-ho-run-joinville",
    "nome": "Ho Ho Run",
    "dia": "06",
    "mes": "12",
    "mesTxt": "DEZ",
    "ano": 2026,
    "dataExtenso": "6 de dezembro de 2026",
    "cidade": "Joinville, SC",
    "largada": "Arena de Prova, Rua Rio Branco, 229, Centro, às 20h (Corrida Kids às 18h30)",
    "organizador": "Number Esportes",
    "edicao": "Edição 2026",
    "distancias": ["5 km", "Kids", "Kangoo"],
    "descricao": "Corrida noturna de Natal que integra a programação oficial de Natal da Prefeitura de Joinville, com percurso de 5 km pelo Centro, além de Corrida Kids e categoria Kangoo. Todos os participantes que concluírem a prova recebem medalha.",
    "oficialUrl": "https://gruposnumber.ultranocode.com.br/i/ho-ho-run-joinville-2026-2026?g=2549c330456b45b6a6383955621ac2cc"
  },
  {
    "id": "corrida-rustica-trentina-rio-dos-cedros",
    "nome": "2ª Corrida Rústica Trentina",
    "dia": "06",
    "mes": "12",
    "mesTxt": "DEZ",
    "ano": 2026,
    "dataExtenso": "6 de dezembro de 2026",
    "cidade": "Rio dos Cedros, SC",
    "largada": "Pavilhão da Festa Trentina, Rua Trento, às 7h30",
    "organizador": "KW Eventos Esportivos",
    "edicao": "2ª edição",
    "distancias": ["5 km"],
    "descricao": "Segunda edição da Corrida Rústica Trentina, no Centro de Eventos de Rio dos Cedros, com largada no Pavilhão da Festa Trentina, na Rua Trento, e percurso de 5 km. A prova, que seria em outubro, teve a data alterada pela organização para 6 de dezembro.",
    "oficialUrl": "https://www.kweventosesportivos.com.br/evento/corrida-rustica-trentina-2026"
  },
  {
    "id": "corrida-proma-jaragua-do-sul",
    "nome": "5ª Corrida Proma",
    "dia": "06",
    "mes": "12",
    "mesTxt": "DEZ",
    "ano": 2026,
    "dataExtenso": "6 de dezembro de 2026",
    "cidade": "Jaraguá do Sul, SC",
    "largada": "Local exato a definir pela organização; largada principal às 6h e largada kids às 7h30",
    "organizador": "Sesi Jaraguá do Sul",
    "edicao": "5ª edição",
    "distancias": ["10 km", "5 km", "Caminhada 5 km", "Kids"],
    "descricao": "Quinta edição da Corrida Proma, organizada pelo Sesi Jaraguá do Sul, com largada principal às 6h e largada kids às 7h30. Os percursos são de 10 km, 5 km e caminhada de 5 km, com kit de camiseta, número de peito, chip e medalha. A retirada de kits acontece em 5 de dezembro, das 8h às 15h, na sede do Sesi Jaraguá do Sul, na Rua Walter Marquardt, 835, bairro Barra do Rio Molha. O local exato da largada ainda não foi divulgado pela organização.",
    "oficialUrl": "https://www.movnow.com.br/eventos/235-corrida-proma-2026"
  },
  {
    "id": "corrida-da-virada-acorde-blumenau",
    "nome": "6ª Corrida da Virada ACORDE",
    "dia": "31",
    "mes": "12",
    "mesTxt": "DEZ",
    "ano": 2026,
    "dataExtenso": "31 de dezembro de 2026",
    "cidade": "Blumenau, SC",
    "largada": "Prefeitura Municipal de Blumenau, Praça Vitor Konder, 2, Centro, às 6h",
    "organizador": "KW Eventos Esportivos",
    "edicao": "6ª edição",
    "distancias": ["8 km", "Caminhada 3 km", "Kids"],
    "descricao": "Sexta edição da Corrida da Virada ACORDE, tradicional prova de Réveillon de Blumenau, com largada às 6h na Praça Vitor Konder, em frente à Prefeitura Municipal. Percursos de 8 km e caminhada de 3 km, com inscrição gratuita para crianças de 2 a 13 anos na Corrida Kids.",
    "oficialUrl": "https://www.kweventosesportivos.com.br/evento/vi-corrida-da-virada-acorde-2026"
  }
];

const PACEFLY_NOTICIAS = [
  {
    id: "corrida-rede-feminina-guaramirim-400-inscritos",
    categoria: "Guaramirim",
    titulo: "Corrida da Rede Feminina reúne mais de 400 inscritos em Guaramirim",
    resumo: "A 1ª Corrida da Rede Feminina de Combate ao Câncer, parte do Circuito Maria's Run, mudou de local por causa da chuva e levou mais de 400 corredores ao Ginásio Osvaldo Klein no sábado, 24 de outubro, com ação de arrecadação para apoiar pacientes do município.",
    dataTxt: "24 de outubro de 2026",
    local: "Guaramirim, SC",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Nossa FM",
    fonteUrl: "https://nossa.fm/corrida-da-rede-feminina-reune-mais-de-400-inscritos-em-guaramirim-neste-sabado/",
    corpo: [
      "A 1ª Corrida da Rede Feminina de Combate ao Câncer, parte do Circuito Maria's Run, reuniu mais de 400 inscritos em Guaramirim no sábado, 24 de outubro, com largada às 17h30. O tema da edição foi \"A vida pede movimento\", e as inscrições, feitas pelo site movnow.com.br, se esgotaram na véspera da prova.",
      "Por causa da previsão de chuva, a organização mudou o local de largada da Praça da Figueira para o Ginásio Municipal de Esportes Osvaldo Klein, anexo à EMEF Mamãe Gansa e seus Filhotes, no bairro Guamiranga. A prova teve percursos de 5 km e 10 km, além de uma caminhada de 3 km, aberta a iniciantes e corredores experientes.",
      "A corrida faz parte da programação do Outubro Rosa da Rede Feminina de Guaramirim, entidade que acolhe, orienta e apoia pacientes com câncer no município. No mesmo sábado, voluntários também fizeram o \"Pedágio Rosa\", recolhendo doações nas ruas entre 8h e 12h30, além do Pix divulgado pela organização. Uma semana antes, pedágios em Schroeder e Massaranduba já tinham arrecadado R$ 9.449,60.",
      "A retirada de kits aconteceu na sede da Rede Feminina, na véspera e na manhã da prova, antes da largada ser transferida para o ginásio. O resultado oficial da corrida ainda não foi encontrado em nenhuma fonte até a conclusão desta notícia; a classificação, quando publicada, também entra na apuração do Ranking PaceFly."
    ]
  },
  {
    id: "primeira-maratona-de-joinville-2026",
    categoria: "1ª Maratona de Joinville",
    titulo: "Joinville vai ter sua primeira maratona da história em 1º de novembro",
    resumo: "A cidade sempre teve a tradicional Meia Maratona, mas nunca uma prova de 42 km. Isso muda no fim de semana de 31 de outubro e 1º de novembro, com largada no Kart Joinville e opção de revezamento para quem quiser dividir o percurso.",
    dataTxt: "31 de outubro e 1º de novembro de 2026",
    local: "Joinville, SC",
    imagem: "https://images.pexels.com/photos/18408962/pexels-photo-18408962.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Ticket Sports",
    fonteUrl: "https://www.ticketsports.com.br/e/1o-maratona-de-joinville-87159",
    corpo: [
      "Joinville tem décadas de tradição com a Meia Maratona, mas nunca recebeu uma prova na distância cheia de 42 km. Isso vai mudar em 2026: a Tkar Produção de Eventos Esportivos confirmou a 1ª Maratona de Joinville, com largada no Kart Joinville, marcando um capítulo novo para o esporte na cidade.",
      "A programação se estende por dois dias. No sábado, 31 de outubro, a organização abre o fim de semana com uma prova de 6 km, pensada para quem quer participar da festa sem encarar a distância cheia. No domingo, 1º de novembro, é a vez da maratona propriamente dita, com os 42 km tradicionais.",
      "Uma das novidades é a opção de revezamento para os 42 km, em que duas pessoas podem dividir o percurso entre si, o que amplia a prova para quem ainda não se sente pronto para correr a distância sozinho, mas quer fazer parte dessa estreia histórica.",
      "Para o corredor de Joinville e região, a expectativa é grande: depois de anos de meia maratona, a cidade finalmente entra no calendário nacional das provas de 42 km. Os detalhes de inscrição estão na plataforma oficial do evento, e o nosso calendário já traz a prova cadastrada para quem quiser se programar com antecedência."
    ]
  },
  {
    id: "peres-jepchirchir-suspensao-doping-epo",
    categoria: "Doping",
    titulo: "Campeã olímpica Peres Jepchirchir é suspensa provisoriamente por doping",
    resumo: "A queniana, bicampeã mundial e vencedora de Tóquio, Nova York, Boston, Londres e Sydney, teve um resultado adverso para EPO em um exame fora de competição, segundo a Athletics Integrity Unit. A suspensão é provisória e o caso ainda segue o devido processo.",
    dataTxt: "23 de outubro de 2026",
    local: "",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "ESPN",
    fonteUrl: "https://www.espn.com/olympics/trackandfield/story/_/id/50257059/champion-marathoner-peres-jepchirchir-given-doping-suspension",
    corpo: [
      "A queniana Peres Jepchirchir, uma das maiores maratonistas da atualidade, foi suspensa provisoriamente pela Athletics Integrity Unit (AIU) na sexta-feira, 23 de outubro. Segundo a entidade, uma amostra coletada fora de competição, no Quênia, antes da vitória da atleta na Maratona de Sydney, teve resultado adverso para EPO (eritropoetina), substância que estimula a produção de glóbulos vermelhos e é proibida no esporte.",
      "Jepchirchir é campeã olímpica da maratona em Tóquio 2021, campeã mundial em 2025 e venceu as maratonas de Nova York (2021), Boston (2022), Londres (2024) e, mais recentemente, Sydney, em 2026. Ocupa hoje o 5º lugar no ranking mundial de maratona feminina da World Athletics.",
      "A suspensão é provisória: nesse status, a atleta fica impedida de competir enquanto o processo segue seu curso, sem prazo definido para uma decisão final. Seu representante, Gianni Demadonna, não quis comentar o caso. A organização da Maratona de Sydney disse estar extremamente decepcionada com a notícia, mas reforçou que a atleta tem direito ao devido processo e que não fará novos comentários até o desfecho do caso.",
      "O caso chama atenção por envolver uma das atletas mais vitoriosas da maratona mundial na última década, e reabre a discussão sobre o controle antidoping no fundo queniano, que já teve outros nomes de peso suspensos nos últimos anos. Até a conclusão do processo, os resultados de Jepchirchir seguem válidos; uma suspensão provisória não é, por si só, uma confirmação de culpa."
    ]
  },
  {
    id: "kiprun-kipnext-connect-tenis-sensor-desgaste",
    categoria: "Equipamento",
    titulo: "Kiprun lança tênis com sensor que avisa quando o amortecimento já gastou",
    resumo: "O novo Kipnext Connect, da Decathlon, tem um sensor de 3 gramas no calcanhar que mede o desgaste real da espuma e informa pelo celular quando é hora de trocar o tênis, em vez de depender só da aparência do solado.",
    dataTxt: "21 de outubro de 2026",
    local: "",
    imagem: "https://images.pexels.com/photos/5319384/pexels-photo-5319384.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Máquina do Esporte",
    fonteUrl: "https://maquinadoesporte.com.br/?p=245769",
    corpo: [
      "A Decathlon apresentou o Kipnext Connect, tênis de corrida da linha Kiprun desenvolvido em parceria com a empresa de tecnologia Movmenta, com um sensor embutido no calcanhar que mede a compactação real da espuma de amortecimento, batizado de Sollo. Ele pesa cerca de 3 gramas, não precisa de bateria externa e usa ondas eletromagnéticas para avaliar o desgaste de forma estática.",
      "Para consultar o resultado, basta aproximar o celular da área indicada no calcanhar, de um jeito parecido com pagamento por aproximação. O aplicativo Pacer converte a leitura num percentual de degradação da espuma, em vez de deixar essa avaliação só no olho, como a maioria dos corredores faz hoje.",
      "A proposta ataca um problema real: segundo estudos citados pela marca, quase metade dos corredores se machuca ao menos uma vez por ano, e a perda de amortecimento do tênis é um dos fatores de risco. Mesmo assim, 60% dos corredores decidem a troca só pela aparência do solado ou por sensação subjetiva, sem um critério mais objetivo.",
      "A entressola tem 53 mm de altura no retropé, em poliuretano termoplástico, e o conjunto eletrônico é isolado contra umidade e variação de temperatura. Segundo a marca, o sistema é imperceptível durante a corrida e não interfere na dinâmica da pisada; o modelo é indicado para rodagens longas no asfalto.",
      "A reportagem não informou preço nem data exata de chegada ao Brasil, apenas que o modelo \"chega ao mercado\". Ainda assim, é um indício de para onde a indústria de calçados de corrida está olhando: menos achismo sobre quando trocar o tênis, mais dado objetivo."
    ]
  },
  {
    id: "parque-porto-cachoeira-joinville",
    categoria: "Infraestrutura",
    titulo: "Joinville licita R$ 55,5 milhões para o Parque Porto Cachoeira, com pista de caminhada e corrida",
    resumo: "A licitação do novo parque na região central, inspirado em modelos como o High Line de Nova York, recebeu sete propostas e prevê 24 meses de obra. O projeto inclui ciclovia, pista de caminhada e corrida, quadras e área pet, entre o Centreventos Cau Hansen e o rio.",
    dataTxt: "14 de setembro de 2026",
    local: "Joinville, SC",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "ND Mais",
    fonteUrl: "https://ndmais.com.br/infraestrutura/parque-r-55-milhoes-avanca-joinville/",
    corpo: [
      "A Prefeitura de Joinville abriu a licitação do Parque Porto Cachoeira, orçado em R$ 55,5 milhões, e já recebeu sete propostas na fase de avaliação de preços, capacidade técnica e documentação, segundo a Secretaria de Administração e Planejamento. O prazo previsto de obra é de 24 meses a partir da assinatura do contrato.",
      "O parque fica na região central da cidade, próximo ao Centreventos Cau Hansen, numa área entre as avenidas José Vieira e Hermann August Lepper e as ruas Itaiópolis e Dona Francisca, junto ao rio. O projeto se inspira em conceitos de parques urbanos como o High Line de Nova York, que transformou uma antiga estrutura elevada em área de lazer.",
      "Para quem corre na cidade, o ponto central é a pista de caminhada e corrida prevista no projeto, ao lado de ciclovia, quadras de futsal, basquete e queimada, playground, área de piquenique, espaço pet, mesas de tênis e jogos de tabuleiro, além de pavimentação, drenagem, iluminação e paisagismo completos.",
      "Com 24 meses de prazo a partir da contratação, a expectativa é de que o parque só fique pronto em 2028. Ainda assim, é mais uma opção de pista segura se somando ao pouco espaço fechado para treino que a região central de Joinville oferece hoje, e vale ficar de olho no avanço da obra nos próximos meses."
    ]
  }
];

/* DICAS_ULTIMA_ROTACAO: 2026-10-25
   As 6 dicas são trocadas por completo a cada 2 semanas.
   Ao rodar a rotação, atualize a data acima. */
const PACEFLY_DICAS = [
  {
    id: "treinar-com-calor-sem-se-arriscar",
    categoria: "Saúde",
    titulo: "Treinar com calor sem se arriscar: o que muda na rotina a partir de agora",
    resumo: "Os dias mais quentes do ano estão chegando em Joinville e região, e o treino que funcionava bem no inverno pode virar risco se a rotina não se adaptar. Pequenos ajustes de horário e ritmo evitam o mal-estar que o calor provoca.",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "O calor muda o corpo durante o esforço de um jeito que vai além do simples desconforto: o coração trabalha mais para levar sangue até a pele e ajudar a dissipar o calor, e isso sobra menos energia para os músculos que estão correndo. Ritmo que era confortável no inverno pode parecer mais difícil no mesmo esforço, e isso é esperado, não um sinal de perda de condicionamento.",
      "O horário do treino é o ajuste mais simples e mais eficaz. Treinar no início da manhã, antes do sol ficar forte, ou no fim da tarde, depois do calor passar do pico, reduz bastante a exposição ao sol direto e à temperatura mais alta do dia, comum entre o meio-dia e as 16h.",
      "Vestimenta clara, leve e que deixa o suor evaporar ajuda o corpo a se refrescar. Boné ou viseira e protetor solar não são detalhes de estética, protegem contra a insolação e contra a queimadura que, sem perceber, pode piorar bastante o desconforto do treino seguinte.",
      "Sinais de alerta merecem respeito imediato: tontura, dor de cabeça forte, calafrio apesar do calor, ou parar de suar de repente no meio do esforço. Qualquer um desses pede parar o treino, buscar sombra e se hidratar, não empurrar mais alguns minutos para terminar a planilha.",
      "Para quem está treinando para a 1ª Maratona de Joinville ou para a Meia Maratona de Piracity, vale lembrar que o corpo leva de uma a duas semanas para se adaptar melhor ao calor. Quem tem treino longo importante pela frente ganha ao antecipar esse ajuste de horário, em vez de só sentir o calor no dia da prova."
    ]
  },
  {
    id: "tapering-as-duas-semanas-antes-da-prova",
    categoria: "Treino",
    titulo: "Tapering: por que reduzir o treino nas duas semanas antes da prova funciona",
    resumo: "Com a 1ª Maratona de Joinville e a Meia Maratona de Piracity chegando, bate a tentação de treinar pesado até os últimos dias. Fazer o contrário, reduzindo o volume de propósito, é o que deixa as pernas realmente prontas para o dia da prova.",
    imagem: "https://images.pexels.com/photos/5319384/pexels-photo-5319384.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Tapering é o nome que o treino dá à redução proposital de volume nas últimas semanas antes de uma prova importante, enquanto a intensidade de alguns treinos pontuais se mantém. A ideia parece contraintuitiva, porque treinar menos antes de um desafio grande não é o instinto natural de quem está animado com a prova chegando.",
      "O corpo não fica mais forte durante o treino, fica mais forte durante a recuperação depois dele. Nas semanas finais, o acúmulo de treinos já fez o trabalho necessário, e o que falta é tempo para esse trabalho virar resultado nas pernas, sem o desgaste de treinos novos.",
      "Na prática, a redução é gradual: a semana duas antes da prova cai para cerca de 70 a 80% do volume normal, e a última semana cai ainda mais, para 40 a 60%, mantendo alguns treinos curtos em ritmo de prova para a sensação de velocidade não se perder.",
      "Erro comum: interpretar o tapering como desculpa para parar de se cuidar. Sono, alimentação e hidratação continuam tão importantes quanto durante o treino pesado, porque é justamente esse período que decide se o corpo chega descansado ou só menos cansado.",
      "A sensação de estar perdendo forma nos últimos dias é comum e engana bastante gente. Pernas mais leves e descansadas no início da prova valem muito mais do que alguns quilômetros extras de treino que só cansam sem agregar nada à essa altura da preparação."
    ]
  },
  {
    id: "caimbras-na-corrida-causas-e-prevencao",
    categoria: "Saúde",
    titulo: "Câimbras na corrida: por que aparecem e como evitar que estraguem a prova",
    resumo: "A câimbra quase sempre chega no peor momento, perto do fim de uma prova ou de um treino longo, e para muita gente parece surgir do nada. Entender o que realmente causa a maioria dos casos ajuda a evitar que ela decida o resultado do seu dia.",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Durante muito tempo, a explicação mais repetida para a câimbra era a falta de sódio ou potássio no corpo, mas pesquisas mais recentes apontam a fadiga muscular como o gatilho mais comum: o músculo cansado perde parte do controle fino que evita a contração involuntária, mais do que simplesmente ficar sem eletrólito.",
      "Isso explica por que a câimbra costuma aparecer em provas mais longas do que o corredor está acostumado a treinar, ou em ritmos mais fortes do que o habitual: o músculo chega a um nível de fadiga que o treino normal nunca tinha exigido dele antes.",
      "A prevenção mais eficaz é o treino específico: treinar na distância e perto do ritmo que a prova vai exigir, em vez de confiar só no dia da prova para descobrir se as pernas aguentam. Progressão gradual de volume e de ritmo reduz bastante esse tipo de surpresa.",
      "Hidratação e eletrólitos ainda importam, principalmente em dias de calor forte e suor abundante, então vale manter a reposição de sódio em provas longas como parte da estratégia, mesmo sabendo que ela não é a causa isolada da maioria dos casos.",
      "Se a câimbra já apareceu no meio da prova, parar, alongar suavemente o músculo afetado por alguns segundos e retomar em ritmo mais leve costuma funcionar melhor do que insistir no mesmo ritmo esperando que ela passe sozinha."
    ]
  },
  {
    id: "respiracao-durante-a-corrida-como-controlar-o-ritmo",
    categoria: "Técnica",
    titulo: "Respiração durante a corrida: como ela ajuda a controlar o ritmo",
    resumo: "Muita gente só nota a própria respiração quando ela já está descontrolada, ofegante, no meio de um esforço mais forte. Prestar atenção nela antes desse ponto é uma das formas mais simples de perceber, e corrigir, um ritmo que está acima do que o corpo aguenta sustentar.",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "A respiração é um dos sinais mais honestos de intensidade que o corpo dá durante a corrida, mais imediato até do que o batimento cardíaco, que a maioria não consegue sentir sem um relógio. Se a respiração já não permite falar uma frase curta sem pausar, o ritmo provavelmente está mais forte do que o esforço pretendido para aquele treino.",
      "A respiração pelo nariz, quando dá para manter, costuma indicar um ritmo mais confortável e sustentável, enquanto a respiração só pela boca, rápida e curta, aparece justamente quando o esforço sobe para uma intensidade mais forte. Nenhuma das duas é errada, cada uma serve para um tipo de treino diferente.",
      "Um padrão respiratório mais regular, como inspirar em dois passos e expirar em dois passos nos treinos leves, ajuda a manter o ritmo estável e a notar mais rápido quando o corpo está acelerando sem intenção. Não precisa ser uma contagem rígida, serve mais como referência do que como regra fixa.",
      "Em subidas ou em trechos finais de prova, a respiração tende a ficar mais curta e mais ofegante, e isso é esperado. O problema é quando esse padrão aparece cedo demais na prova, sinal de que o ritmo da largada saiu mais forte do que o corpo tinha planejado sustentar até o fim.",
      "Treinar prestando atenção na respiração, sem se sobrecarregar pensando nela o tempo todo, ajuda a desenvolver uma noção de ritmo mais confiável do que só olhar o relógio. Com o tempo, boa parte dos corredores aprende a sentir o próprio limite antes mesmo de ele aparecer no desempenho."
    ]
  },
  {
    id: "alongamento-antes-ou-depois-do-treino",
    categoria: "Técnica",
    titulo: "Alongamento antes ou depois do treino? O que cada tipo realmente faz",
    resumo: "A dúvida é clássica e a resposta não é só uma das duas opções: alongamento dinâmico e alongamento estático servem para momentos diferentes, e trocar a ordem pode render menos do que promete ou até incomodar mais do que ajudar.",
    imagem: "https://images.pexels.com/photos/18408962/pexels-photo-18408962.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Alongamento estático é aquele em que a posição é mantida parada por um tempo, geralmente de 15 a 30 segundos. Feito antes do treino, ele tende a deixar o músculo momentaneamente menos responsivo, o que pode reduzir um pouco a potência logo nos primeiros minutos de corrida.",
      "Por isso a recomendação mais aceita hoje é inverter a lógica antiga: antes do treino, o alongamento dinâmico, com movimentos ativos como elevação de joelho, chute de calcanhar e balanço de perna, prepara o músculo sem deixá-lo mais lento, além de elevar a temperatura corporal gradualmente.",
      "O alongamento estático encontra seu melhor momento depois do treino, quando o músculo já está aquecido e o objetivo passa a ser recuperação e manutenção da amplitude de movimento ao longo do tempo, não mais desempenho imediato.",
      "Nenhum dos dois tipos substitui o aquecimento progressivo, que para quem corre pode ser simplesmente começar o treino em ritmo bem mais leve nos primeiros minutos, deixando o corpo entrar em movimento antes de cobrar ritmo de prova dele.",
      "Quem sente desconforto muscular recorrente em uma região específica tende a se beneficiar mais de um trabalho de mobilidade regular, feito em dias separados do treino, do que de alongar mais forte bem na hora em que o músculo já está cansado pelo esforço."
    ]
  },
  {
    id: "recuperacao-entre-provas-proximas",
    categoria: "Treino",
    titulo: "Duas provas em uma semana: como recuperar entre a Maratona de Joinville e a Meia de Piracity",
    resumo: "Quem vai correr a 1ª Maratona de Joinville no fim de semana de 31 de outubro e 1º de novembro e também encarar a 10ª Meia Maratona de Piracity, já em 8 de novembro, tem pouco mais de uma semana para recuperar entre as duas. Esse intervalo curto pede cuidado redobrado.",
    imagem: "https://images.pexels.com/photos/28766046/pexels-photo-28766046.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "O primeiro erro costuma ser tratar a semana entre as duas provas como uma semana de treino normal. O corpo que acabou de correr 42 km, ou mesmo os 6 km de sábado, precisa de tempo de recuperação antes de qualquer treino com intensidade de novo, mesmo que a sensação geral pareça boa nos primeiros dias.",
      "Os primeiros dois ou três dias depois da prova pedem descanso ativo: caminhada leve, alongamento suave ou, no máximo, um trote bem curto e bem lento, só para soltar as pernas, sem nenhuma meta de ritmo ou distância.",
      "Dor muscular que persiste além do esperado, inchaço localizado ou qualquer dor articular que não existia antes da prova são sinais para adiar o retorno ao treino e, se não melhorar em poucos dias, buscar avaliação profissional antes da próxima largada.",
      "Sono e alimentação pesam tanto quanto o treino nessa recuperação relâmpago: dormir bem e repor bem as reservas de energia nos dias seguintes à maratona faz mais diferença no desempenho de Piracity do que qualquer treino apertado nessa janela curta.",
      "Para quem vai encarar as duas provas, vale ajustar a expectativa para a segunda: correr a Meia de Piracity em ritmo mais conservador do que correria isoladamente é a decisão mais sensata depois de um esforço grande como a maratona, e ainda assim garante cruzar a linha de chegada bem."
    ]
  }

];

/* ============================================================
   VITRINE DA CIDADE (carrossel da home)
   ------------------------------------------------------------
   Cada item vira um slide do banner logo abaixo do hero.
   A foto local fica em: imagens/cidade/<id>/imagem.jpg
   Enquanto a pasta estiver vazia, o site usa a URL de reserva
   do campo "imagem" (mesmo comportamento das outras seções).
   Para trocar uma foto, basta salvar imagem.jpg na pasta.
   Tamanho sugerido: 1600x900 px (horizontal).
   ============================================================ */
const PACEFLY_CIDADE = [
  {
    id: "amanhecer-na-cidade",
    legenda: "Joinville amanhece correndo",
    local: "Joinville, SC",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: "ruas-e-parques",
    legenda: "Rua, parque e gente de verdade",
    local: "Joinville, SC",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: "norte-catarinense",
    legenda: "Do centro ao litoral do norte catarinense",
    local: "Norte de Santa Catarina",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: "proxima-largada",
    legenda: "Sua próxima largada é aqui perto",
    local: "Joinville e região",
    imagem: "https://images.pexels.com/photos/18408962/pexels-photo-18408962.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

/* ------------------------------------------------------------
   IMAGENS LOCAIS COM RESERVA AUTOMÁTICA
   O site tenta carregar primeiro a imagem local em
   imagens/<tipo>/<id>/imagem.jpg. Se ela não existir, usa a
   URL online cadastrada acima. Para trocar uma foto, basta
   salvar o arquivo "imagem.jpg" na pasta correspondente.
   ------------------------------------------------------------ */
function pfImg(tipo, id, remota) {
  return 'src="imagens/' + tipo + '/' + id + '/imagem.jpg" onerror="this.onerror=null;this.src=\'' + remota + '\'"';
}

/* ============================================================
   TEXTOS EDITÁVEIS POR PASTA
   ------------------------------------------------------------
   Lê o arquivo conteudo/<tipo>/<id>/texto.txt e usa o que
   estiver preenchido lá NO LUGAR do texto deste arquivo.
   Campo vazio, arquivo vazio ou pasta inexistente = mantém o
   texto original. Nunca fica em branco no site.
   ============================================================ */
function pfParseTexto(txt) {
  var out = {}, corpo = null;
  // Linhas iniciadas por # ou = sao instrucoes/decoracao e nao entram no site
  var linhas = txt.split(/\r?\n/).filter(function (l) { return !/^\s*[#=]/.test(l); });
  for (var i = 0; i < linhas.length; i++) {
    if (/^\s*corpo\s*:/i.test(linhas[i])) { corpo = linhas.slice(i + 1).join('\n'); break; }
    var m = linhas[i].match(/^\s*([a-zA-Z\-]+)\s*:\s*(.*)$/);
    if (m) { var v = m[2].trim(); if (v) out[m[1].toLowerCase()] = v; }
  }
  if (corpo !== null) {
    var paras = corpo.split(/\n\s*\n/).map(function (p) { return p.trim(); }).filter(Boolean);
    if (paras.length) out.corpo = paras;
  }
  return out;
}

function pfTexto(tipo, id) {
  try {
    return fetch('conteudo/' + tipo + '/' + id + '/texto.txt', { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.text() : ''; })
      .then(function (t) { return t ? pfParseTexto(t) : {}; })
      .catch(function () { return {}; });
  } catch (e) { return Promise.resolve({}); }
}

function pfAplicar(item, ov) {
  if (!item || !ov) return item;
  var m = {};
  for (var k in item) m[k] = item[k];
  if (ov.titulo) m.titulo = ov.titulo;
  if (ov.nome) m.nome = ov.nome;
  if (ov.resumo) m.resumo = ov.resumo;
  if (ov.descricao) m.descricao = ov.descricao;
  if (ov.categoria) m.categoria = ov.categoria;
  if (ov.local) m.local = ov.local;
  if (ov['fonte-nome']) m.fonteNome = ov['fonte-nome'];
  if (ov['fonte-url']) m.fonteUrl = ov['fonte-url'];
  if (ov.link) m.oficialUrl = ov.link;
  if (ov.corpo) m.corpo = ov.corpo;
  if (ov.parceiro) m.parceiro = ov.parceiro; // 'sim' marca o evento como parceiro
  if (ov.cupom) m.cupom = ov.cupom;          // código do cupom (para badge no calendário)
  if (ov['inscricoes-encerradas']) m.inscricoesEncerradas = /^(sim|true|1)$/i.test(ov['inscricoes-encerradas']);
  return m;
}

/* Inscrição encerrada? Fonte única usada pelo calendário e pela página do evento.
   Duas situações contam: o campo "inscricoesEncerradas": true no objeto da prova,
   para quando a inscrição fecha antes do dia da corrida, e a data da prova já ter
   passado, que encerra sozinha sem precisar editar nada. O dia da prova ainda
   conta como aberto, porque costuma haver inscrição de última hora na retirada
   de kit. */
function pfInscricoesEncerradas(ev) {
  if (!ev) return false;
  if (ev.inscricoesEncerradas === true) return true;
  var dia = parseInt(ev.dia, 10), mes = parseInt(ev.mes, 10), ano = parseInt(ev.ano, 10);
  if (!dia || !mes || !ano) return false;
  var dataProva = new Date(ano, mes - 1, dia);
  var hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  return dataProva < hoje;
}
window.pfInscricoesEncerradas = pfInscricoesEncerradas;

function pfLista(tipo, lista) {
  return Promise.all(lista.map(function (it) {
    return pfTexto(tipo, it.id).then(function (ov) { return pfAplicar(it, ov); });
  })).catch(function () { return lista; });
}

/* ============================================================
   EVENTOS PARCEIROS
   ------------------------------------------------------------
   Lê o arquivo conteudo/eventos/<id>/parceiro.txt quando
   presente. Se existir, o evento é tratado como parceiro e
   o site exibe o banner de cupom. Campos suportados:
     cupom:        código do cupom (ex: PACEFLY10)
     desconto:     percentual ou valor (ex: 10%)
     texto:        frase extra (ex: Use na inscrição oficial)
     validade:     data limite (ex: 31/12/2026)
   Se o arquivo não existir, retorna null silenciosamente.
   ============================================================ */
function pfParceiro(id) {
  try {
    return fetch('conteudo/eventos/' + id + '/parceiro.txt', { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.text() : ''; })
      .then(function (t) { return t ? pfParseTexto(t) : null; })
      .catch(function () { return null; });
  } catch (e) { return Promise.resolve(null); }
}

/* ============================================================
   SEO POR PÁGINA (título, description, canonical, Open Graph)
   ------------------------------------------------------------
   dica.html, noticia.html e evento.html carregam o conteúdo via
   JS a partir deste arquivo, então o <head> estático só tem um
   título/description genérico. Assim que o item real é
   encontrado, cada página chama pfSEO({...}) para substituir
   título, meta description, canonical e Open Graph pelo dado
   real daquele item específico (mesmo padrão já usado, escrito
   à mão, em rankings.html).
   IMPORTANTE: isso ajuda o Google (que executa JS ao indexar),
   mas NÃO ajuda o preview de compartilhamento no WhatsApp/
   Instagram/Twitter, porque esses robôs leem só o HTML estático, sem
   rodar JS. Para preview de compartilhamento correto por item,
   seria preciso gerar HTML estático por página (fora do escopo
   desta correção).
   ============================================================ */
function pfTrunc(txt, max) {
  if (!txt) return '';
  txt = String(txt).trim();
  if (txt.length <= max) return txt;
  var cortado = txt.slice(0, max - 1).replace(/\s+\S*$/, '');
  return cortado + '...';
}

function pfMeta(chave, valor, ehProperty) {
  if (!valor) return;
  var attr = ehProperty ? 'property' : 'name';
  var el = document.querySelector('meta[' + attr + '="' + chave + '"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, chave);
    document.head.appendChild(el);
  }
  el.setAttribute('content', valor);
}

function pfCanonical(url) {
  if (!url) return;
  var el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

function pfSEO(opts) {
  opts = opts || {};
  var descricao = pfTrunc(opts.description, 160);
  if (opts.title) document.title = opts.title;
  pfMeta('description', descricao, false);
  pfCanonical(opts.url);
  pfMeta('og:type', opts.type || 'article', true);
  pfMeta('og:site_name', 'PaceFly', true);
  pfMeta('og:title', opts.title, true);
  pfMeta('og:description', descricao, true);
  pfMeta('og:url', opts.url, true);
  pfMeta('og:image', opts.image, true);
  pfMeta('og:locale', 'pt_BR', true);
  pfMeta('twitter:card', 'summary_large_image', false);
  pfMeta('twitter:title', opts.title, false);
  pfMeta('twitter:description', descricao, false);
  pfMeta('twitter:image', opts.image, false);
}

/* ============================================================
   DADOS ESTRUTURADOS (JSON-LD) POR ITEM
   ------------------------------------------------------------
   Injeta/substitui um único <script type="application/ld+json">
   no <head> com o schema.org do item atual (Article, NewsArticle
   ou SportsEvent, conforme a página). Mesma ressalva do pfSEO:
   ajuda o Google (executa JS ao indexar), não ajuda robôs de
   preview de compartilhamento (não rodam JS).
   ============================================================ */
function pfJSONLD(obj) {
  if (!obj) return;
  var id = 'pf-jsonld-item';
  var antigo = document.getElementById(id);
  if (antigo) antigo.remove();
  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.textContent = JSON.stringify(obj);
  document.head.appendChild(script);
}

if (typeof window !== "undefined") {
  window.pfTexto = pfTexto;
  window.pfAplicar = pfAplicar;
  window.pfLista = pfLista;
  window.pfParceiro = pfParceiro;
  window.PACEFLY_EVENTOS = PACEFLY_EVENTOS;
  window.PACEFLY_NOTICIAS = PACEFLY_NOTICIAS;
  window.PACEFLY_DICAS = PACEFLY_DICAS;
  window.PACEFLY_CIDADE = PACEFLY_CIDADE;
  window.pfImg = pfImg;
  window.pfSEO = pfSEO;
  window.pfJSONLD = pfJSONLD;
}
