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
    "id": "corrida-pela-vida-joinville",
    "nome": "Corrida pela Vida",
    "dia": "11",
    "mes": "10",
    "mesTxt": "OUT",
    "ano": 2026,
    "dataExtenso": "11 de outubro de 2026",
    "cidade": "Joinville, SC",
    "largada": "Shopping Mueller Joinville",
    "organizador": "42K Assessoria Esportiva",
    "edicao": "6ª edição",
    "distancias": ["8 km", "3 km"],
    "descricao": "Sexta edição da Corrida pela Vida, que encerra o Circuito Movimento Pelo Bem do ano, com largada no Shopping Mueller e percursos de 8 km e 3 km.",
    "oficialUrl": "https://www.ticketsports.com.br/e/corrida-pela-vida-2026-joinville-sc-84988"
  },
  {
    "id": "oktoberfest-run-blumenau",
    "nome": "1ª Oktoberfest Run Blumenau",
    "dia": "11",
    "mes": "10",
    "mesTxt": "OUT",
    "ano": 2026,
    "dataExtenso": "11 de outubro de 2026",
    "cidade": "Blumenau, SC",
    "largada": "Portal da Vila Germânica, Rua Alberto Stein, 199, Bairro Velha, às 7h",
    "organizador": "FTA Sports",
    "edicao": "1ª edição",
    "distancias": ["10 km", "5 km", "Caminhada 3 km", "Kids"],
    "descricao": "Primeira corrida oficial da Oktoberfest Blumenau, que chega à 41ª edição em 2026 (7 a 25 de outubro, no Parque Vila Germânica). A prova sai do Portal da Vila Germânica às 7h, com percursos de 10 km, 5 km, caminhada de 3 km e corrida kids (das 8h30 às 9h, por faixa etária), supervisão técnica da Federação Catarinense de Atletismo e hidratação a cada 2 km.",
    "oficialUrl": "https://www.ticketsports.com.br/e/1%C2%AA+OKTOBERFEST+RUN+BLUMENAU+-+SC-87870"
  },
  {
    "id": "sports-run-jaragua-do-sul",
    "nome": "Sports + Run",
    "dia": "11",
    "mes": "10",
    "mesTxt": "OUT",
    "ano": 2026,
    "dataExtenso": "11 de outubro de 2026",
    "cidade": "Jaraguá do Sul, SC",
    "largada": "Arena Jaraguá, Rua Gustavo Hagedorn, 636, às 7h",
    "organizador": "M8 Runners - Treinamento e Eventos Esportivos",
    "edicao": "1ª edição",
    "distancias": ["10 km", "5 km", "3 km", "Caminhada", "Kids"],
    "descricao": "Estreia da Sports + Run em Jaraguá do Sul, com largada às 7h na Arena Jaraguá. A programação reúne percursos de 10 km, 5 km e 3 km, caminhada e corrida kids com medalha garantida para as crianças.",
    "oficialUrl": "https://www.ticketsports.com.br/e/sports-run-2026-85105"
  },
  {
    "id": "maratona-internacional-pomerode",
    "nome": "Maratona Internacional de Pomerode",
    "dia": "17",
    "mes": "10",
    "mesTxt": "OUT",
    "ano": 2026,
    "dataExtenso": "17 e 18 de outubro de 2026",
    "cidade": "Pomerode, SC",
    "largada": "Pomerode, SC",
    "organizador": "Maratona Internacional de Pomerode",
    "edicao": "19ª edição",
    "distancias": ["42 km", "21 km", "6 km", "Maratoninha"],
    "descricao": "Realizada desde 2008, a maratona transforma Pomerode em um cenário de cultura germânica, com apresentações folclóricas, bandas, brincadeiras típicas e degustação de cucas ao longo do percurso. Os 6 km saem no sábado, 17 de outubro, e a maratona e a meia no domingo, 18. Idades mínimas: 14 anos nos 6 km, 18 anos nos 21 km e 20 anos nos 42 km, com a Maratoninha a partir dos 3 anos.",
    "oficialUrl": "https://vemcorrer.com/evento/345-maratona-internacional-de-pomerode-2026"
  },
  {
    "id": "corrida-bombeiros-sao-francisco-do-sul",
    "nome": "2ª Corrida dos Bombeiros Voluntários",
    "dia": "18",
    "mes": "10",
    "mesTxt": "OUT",
    "ano": 2026,
    "dataExtenso": "18 de outubro de 2026",
    "cidade": "São Francisco do Sul, SC",
    "largada": "Quartel Central dos Bombeiros Voluntários, Rua Coronel Oliveira, 290",
    "organizador": "Bombeiros Voluntários de São Francisco do Sul",
    "edicao": "2ª edição",
    "distancias": ["5 km"],
    "descricao": "Segunda edição da corrida em apoio aos Bombeiros Voluntários de São Francisco do Sul, com largada no Quartel Central, na Rua Coronel Oliveira, 290, e percurso de 5 km pela cidade mais antiga de Santa Catarina.",
    "oficialUrl": "https://www.ticketsports.com.br/e/2-corrida-dos-bombeiros-voluntarios-de-sao-francisco-do-sul-86590"
  },
  {
    "id": "circuito-unimed-sao-bento-do-sul",
    "nome": "Circuito de Corridas Unimed",
    "dia": "18",
    "mes": "10",
    "mesTxt": "OUT",
    "ano": 2026,
    "dataExtenso": "18 de outubro de 2026",
    "cidade": "São Bento do Sul, SC",
    "largada": "Avenida dos Imigrantes, às 8h",
    "organizador": "Unimed",
    "edicao": "Etapa São Bento do Sul",
    "distancias": ["10 km", "5 km"],
    "descricao": "Etapa são-bentense do Circuito de Corridas Unimed, com largada às 8h na Avenida dos Imigrantes e percursos de 10 km e 5 km. A retirada de kits acontece em 12 de outubro, das 14h às 17h, na sede da Unimed. Clientes com carteirinha Unimed têm 50% de desconto na inscrição.",
    "oficialUrl": "https://circuitodecorridaunimed.com.br/corrida/sao-bento-do-sul/"
  },
  {
    "id": "gutbrau-oktober-run-joinville",
    "nome": "Gutbrau Oktober Run",
    "dia": "18",
    "mes": "10",
    "mesTxt": "OUT",
    "ano": 2026,
    "dataExtenso": "18 de outubro de 2026",
    "cidade": "Joinville, SC",
    "largada": "Gutbrau Cervejaria, Estrada Mutucas, 3122, Vila Nova, às 8h",
    "organizador": "42K Assessoria Esportiva",
    "edicao": "Edição 2026",
    "distancias": ["15 km", "10 km", "5 km", "Kids"],
    "descricao": "Corrida com arena na Gutbrau Cervejaria, na Estrada Mutucas, 3122, bairro Vila Nova, em Joinville. Largada única às 8h para 15 km, 10 km e 5 km, com corrida kids às 10h e premiação a partir das 10h30. O percurso é basicamente plano: os 5 km são em paver e os 10 km e 15 km têm predomínio de chão batido, com hidratação a cada 3 km. É uma das poucas provas da região a oferecer 15 km, distância que serve bem de teste para quem prepara uma meia maratona. As inscrições vão até 12 de outubro e a retirada de kit está prevista para 17 de outubro.",
    "oficialUrl": "https://www.ticketsports.com.br/e/GUTBRAU+Oktober+RUN+-88131"
  },
  {
    "id": "corrida-matriz-oxford-sao-bento",
    "nome": "2ª Corrida da Matriz Oxford",
    "dia": "24",
    "mes": "10",
    "mesTxt": "OUT",
    "ano": 2026,
    "dataExtenso": "24 de outubro de 2026",
    "cidade": "São Bento do Sul, SC",
    "largada": "Igreja Matriz Oxford, Rua São Cristóvão, bairro Oxford, às 21h",
    "organizador": "CJR Academia e Eventos",
    "edicao": "2ª edição",
    "distancias": ["5 km", "Caminhada 3 km"],
    "descricao": "Segunda edição da Corrida da Matriz Oxford, prova noturna em São Bento do Sul com largada às 21h na Igreja Matriz Oxford, na Rua São Cristóvão. São 5 km de corrida e 3 km de caminhada, com premiação logo depois, às 22h. A retirada de kit acontece em 23 de outubro no salão de festas da igreja, na Rua Alfredo Diener, 87, e também no dia da prova, das 8h às 20h30. As inscrições vão até 16 de outubro ou até o limite de 800 atletas.",
    "oficialUrl": "https://www.ticketsports.com.br/e/2%C2%AA+CORRIDA+DA+MATRIZ+OXFORD-87381"
  },
  {
    "id": "corrida-rede-feminina-guaramirim",
    "nome": "Circuito Maria's Run - 1ª Corrida da Rede Feminina de Combate ao Câncer",
    "dia": "24",
    "mes": "10",
    "mesTxt": "OUT",
    "ano": 2026,
    "dataExtenso": "24 de outubro de 2026",
    "cidade": "Guaramirim, SC",
    "largada": "Praça Serafim José dos Santos, às 17h30",
    "organizador": "Rede Feminina de Combate ao Câncer de Guaramirim",
    "edicao": "1ª edição",
    "distancias": ["10 km", "5 km"],
    "descricao": "Primeira edição do Circuito Maria's Run, corrida solidária em apoio à Rede Feminina de Combate ao Câncer de Guaramirim. A largada é no sábado, às 17h30, na Praça Serafim José dos Santos, com percursos de 10 km e 5 km. As inscrições ficam abertas até 15 de outubro.",
    "oficialUrl": "https://www.movnow.com.br/"
  },
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
  }
];

const PACEFLY_NOTICIAS = [
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
    id: "gutbrau-oktober-run-joinville-2026",
    categoria: "Gutbrau Oktober Run",
    titulo: "Joinville ganha uma prova de 15 km em outubro, com largada na Gutbrau Cervejaria",
    resumo: "A Gutbrau Oktober Run acontece em 18 de outubro, na Estrada Mutucas, com percursos de 15 km, 10 km e 5 km. A distância de 15 km é rara no calendário da região e cai bem para quem está montando base para uma meia maratona.",
    dataTxt: "18 de outubro de 2026",
    local: "Joinville, SC",
    imagem: "https://images.pexels.com/photos/18408962/pexels-photo-18408962.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Ticket Sports",
    fonteUrl: "https://www.ticketsports.com.br/e/GUTBRAU+Oktober+RUN+-88131",
    corpo: [
      "A 42K Assessoria Esportiva confirmou a Gutbrau Oktober Run para 18 de outubro, com arena montada na Gutbrau Cervejaria, na Estrada Mutucas, 3122, no bairro Vila Nova, em Joinville. A largada é única, às 8h, para as três distâncias adultas.",
      "O detalhe que chama atenção no calendário regional é a prova de 15 km. Entre os 10 km, que dominam o calendário de Joinville, e a meia maratona, quase não existe opção intermediária por aqui. Quem está construindo volume para encarar 21 km costuma ter que inventar o teste sozinho no treino, e a Gutbrau oferece esse degrau com estrutura de prova, hidratação e cronometragem.",
      "O percurso ajuda nessa leitura. A organização informa que os 5 km correm em paver e que os 10 km e 15 km têm predomínio de chão batido, com traçado descrito como basicamente plano e rápido. Há postos de hidratação a cada 3 km e também na chegada, além de guarda-volumes na área interna da cervejaria. O tempo limite é de 2 horas.",
      "A corrida kids sai às 10h, depois da chegada do último adulto, com percursos de 50 m a 300 m conforme a idade, e a premiação começa por volta das 10h30. As inscrições ficam abertas até 12 de outubro, e a retirada de kit está prevista para o dia 17, em local ainda a ser anunciado. Atenção para uma regra que costuma pegar gente desprevenida: não há entrega de kit no dia da prova para quem mora em Joinville."
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
  },
  {
    id: "nike-alphafly-4-lancamento",
    categoria: "Equipamento",
    titulo: "Nike lança o Alphafly 4, mas o tênis não chega ao Brasil antes da Maratona de Joinville",
    resumo: "A nova geração do tênis de placa de carbono da Nike traz espuma mais leve e mais retorno de energia, mas só deve chegar às lojas brasileiras na primeira quinzena de dezembro, depois da 1ª Maratona de Joinville (31/10 e 1º/11) e da Meia Maratona de Piracity (8/11).",
    dataTxt: "18 de setembro de 2026",
    local: "",
    imagem: "https://images.pexels.com/photos/28766046/pexels-photo-28766046.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Contra Relógio",
    fonteUrl: "https://contrarelogio.com.br/nike-apresenta-alphafly-4-nova-geracao-do-tenis-de-maratona/",
    corpo: [
      "A Nike apresentou em 18 de setembro o Alphafly 4, nova geração do seu tênis de placa de carbono voltado às provas longas. A principal mudança é a espuma ZoomX LT, descrita pela marca como até 17% mais leve que a ZoomX tradicional e com 8% mais retorno de energia, combinada com um cabedal Atomknit novo e ajustes na placa de carbono e nas unidades Air Zoom.",
      "No geral, a Nike descreve o conjunto como 5% mais leve e com 10% mais retorno de energia do que o Alphafly 3. O modelo tem histórico de peso nas maratonas de elite: versões anteriores da linha estiveram nos pés do recorde mundial de Kelvin Kiptum e da vitória olímpica de Sifan Hassan em Paris.",
      "Para quem corre por aqui, o dado que interessa é o prazo: o tênis chega às lojas brasileiras só na primeira quinzena de dezembro, segundo a marca, depois de encerrada a sequência mais forte do calendário local, que inclui a 1ª Maratona de Joinville (6 km no sábado 31 de outubro, 42 km no domingo 1º de novembro) e a 10ª Meia Maratona de Piracity (8 de novembro). Ou seja, quem vai estrear os 42 km de Joinville não vai correr de Alphafly 4, e não precisa: o tênis que já está no seu treino, testado e sem surpresa, ainda é a escolha mais segura para uma estreia."
    ]
  }
];

/* DICAS_ULTIMA_ROTACAO: 2026-09-27
   As 6 dicas são trocadas por completo a cada 2 semanas.
   Ao rodar a rotação, atualize a data acima. */
const PACEFLY_DICAS = [
  {
    id: "calor-e-sol-nos-treinos-da-primavera",
    categoria: "Saúde",
    titulo: "Calor e sol: como ajustar o treino agora na primavera",
    resumo: "Com as tardes mais longas e o sol mais forte em Joinville e região, o treino que funcionava no inverno pode virar um problema nos próximos meses. Pequenos ajustes de horário e proteção evitam queda de rendimento e queimadura.",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "A primavera muda duas coisas de uma vez: a temperatura sobe e o sol fica mais forte, mesmo em horários que antes eram tranquilos. Treinar no mesmo horário do inverno, sem ajustar mais nada, é um dos motivos mais comuns de treino ruim nessa transição de estação.",
      "O primeiro ajuste é o horário. Treinar bem cedo, antes das 9h, ou já no fim da tarde, depois das 17h, evita o calor mais forte e ainda garante o sol mais baixo, com raios menos diretos. Quem só pode treinar no meio do dia deve reduzir o ritmo e aceitar que o mesmo esforço vai parecer mais puxado.",
      "Protetor solar deixa de ser opcional a partir de agora. Vale passar pelo menos 20 minutos antes de sair de casa, em rosto, nuca, orelhas e ombros, e reaplicar se o treino passar de uma hora. Boné ou viseira e óculos escuros ajudam bastante nos percursos mais abertos, sem sombra de árvore.",
      "A hidratação também precisa de mais atenção nessa fase. Levar água em treinos acima de 40 minutos, mesmo em dias que não parecem tão quentes, evita o efeito surpresa de suar mais do que o esperado. Roupas claras e tecidos leves, que respiram melhor, fazem diferença real no conforto.",
      "Sinais de que o calor está pesando mais do que deveria incluem tontura, pele muito vermelha, parada de suar em pleno esforço e dor de cabeça. Nesses casos, o certo é parar, buscar sombra, se hidratar e não insistir no treino programado."
    ]
  },
  {
    id: "recuperacao-entre-provas-seguidas",
    categoria: "Treino",
    titulo: "Como recuperar bem entre duas provas em fins de semana seguidos",
    resumo: "Com o calendário da região cheio quase todo fim de semana entre setembro e novembro, é comum a vontade de correr duas provas seguidas. A recuperação entre elas decide se isso vira ganho ou lesão.",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Correr uma prova por fim de semana, duas vezes seguidas, não é automaticamente um problema, mas exige tratar a semana entre elas como recuperação, não como treino normal. O erro mais comum é voltar para o treino de sempre já na segunda-feira seguinte à primeira prova.",
      "Nos dois ou três dias depois da prova, o corpo ainda está processando o esforço, mesmo que a dor muscular já tenha passado. Um passeio leve, caminhada ou um trote bem curto e confortável ajudam a circulação sem acrescentar mais desgaste em cima do que já foi feito no fim de semana.",
      "Sono e alimentação pesam mais do que parecem nessa janela curta entre provas. Dormir um pouco mais do que o normal e não deixar a alimentação solta, principalmente a reposição de carboidrato e proteína nas primeiras horas depois da chegada, acelera a recuperação sem exigir nada além de rotina.",
      "Vale prestar atenção especial em dor articular ou muscular que persiste ou piora ao longo da semana, diferente do cansaço geral esperado. Esse tipo de dor é sinal de que a segunda prova pode precisar ser encarada em ritmo mais conservador, ou até repensada, para não transformar um fim de semana cheio em uma lesão de semanas.",
      "Quando as duas provas são de distâncias parecidas e o intervalo é de uma semana, o corredor mais experiente tende a lidar melhor, porque já tem uma base de treino que absorve o esforço extra. Para quem está começando, escolher só uma das duas, ou trocar a segunda por uma distância mais curta, costuma valer mais do que provar os dois pódios."
    ]
  },
  {
    id: "caibra-na-corrida-causas-e-prevencao",
    categoria: "Saúde",
    titulo: "Cãibra na corrida: por que aparece e como evitar",
    resumo: "Aquela dor súbita na panturrilha ou na parte de trás da coxa, geralmente perto do fim da prova, tem mais de uma causa possível. Entender qual é a sua ajuda a evitar que ela decida o resultado do próximo desafio.",
    imagem: "https://images.pexels.com/photos/28766046/pexels-photo-28766046.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "A cãibra é uma contração muscular involuntária e dolorida, que na corrida costuma aparecer na panturrilha, no posterior de coxa ou nos pés, quase sempre na parte final do treino ou da prova, quando o músculo já está mais cansado.",
      "A causa mais estudada hoje é a fadiga muscular em si: o músculo exigido além do que está preparado para aquele ritmo ou distância perde parte do controle da própria contração. É por isso que a cãibra aparece mais em quem tenta correr mais rápido ou mais longe do que o treino recente permite.",
      "Desidratação e perda de sódio pelo suor também entram na conta, principalmente em dias quentes ou em provas longas. Quem sua muito e só reposiciona água, sem nenhum eletrólito, fica mais exposto a esse tipo de cãibra, especialmente depois de mais de uma hora de esforço.",
      "Se a cãibra aparecer no meio da prova, parar por alguns segundos e alongar bem devagar o músculo afetado, sem forçar, costuma aliviar mais rápido do que tentar continuar no mesmo ritmo. Massagear a região e reduzir a velocidade depois evita que ela volte na sequência.",
      "Prevenção de verdade começa antes da prova: treino específico na distância que será cobrada, hidratação com eletrólito em treinos longos ou dias de calor, e respeitar o ritmo que o treino recente sustenta, não o ritmo que a ansiedade da largada sugere."
    ]
  },
  {
    id: "checklist-da-mochila-no-dia-da-prova",
    categoria: "Equipamento",
    titulo: "O que levar no dia da prova: o checklist da mochila",
    resumo: "Entre número de peito, chip e tênis novo demais, é fácil esquecer algo importante na corrida contra o relógio da manhã da prova. Uma mochila organizada na noite anterior evita esse estresse.",
    imagem: "https://images.pexels.com/photos/5319384/pexels-photo-5319384.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Separar a mochila na noite anterior, e não na manhã da prova, já resolve metade do problema. Com tudo pronto na véspera, sobra tempo de sobra para chegar com calma, sem a pressa que faz esquecer justamente o item mais importante.",
      "O essencial começa pelo número de peito e o chip de cronometragem, já fixados na roupa que será usada, mais um alfinete ou clipe reserva, para o caso de algum se soltar. Documento com foto também costuma ser pedido na retirada de kit ou em caso de alguma dúvida na largada.",
      "Na parte de roupa, a regra é: nada estreando no dia da prova. Tênis, meia, short e camiseta devem ser os mesmos já testados em treino, para evitar bolha ou assadura por causa de uma peça nova. Vale separar também uma muda de roupa seca para depois da chegada, principalmente em dias de chuva ou muito sol.",
      "Vaselina ou similar nas áreas de atrito, como axila, mamilo e virilha, evita assadura em provas mais longas. Protetor solar, se a largada for de manhã com sol já forte, e um boné leve completam a parte de proteção.",
      "Por fim, um pouco de dinheiro ou cartão, o celular carregado com o contato de alguém de referência, e algo pequeno para comer antes da largada, como uma banana ou uma barrinha já testada em treino, fecham a mochila. Menos improviso no dia da prova costuma significar mais foco na hora de correr."
    ]
  },
  {
    id: "treino-intervalado-primeiro-passo",
    categoria: "Técnica",
    titulo: "Treino intervalado: o primeiro passo para melhorar seu tempo",
    resumo: "Para quem já corre uma distância com folga mas quer melhorar o tempo, o intervalado costuma ser o treino que faz mais diferença. O segredo está em começar com uma versão simples, sem se afobar.",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Treino intervalado é, na prática, alternar trechos mais rápidos com trechos de recuperação, em vez de correr sempre no mesmo ritmo do início ao fim. É o tipo de treino que ensina o corpo a sustentar uma velocidade maior do que o ritmo confortável do dia a dia.",
      "Para quem nunca fez, o ideal é começar simples: 6 a 8 tiros de 1 minuto em ritmo mais forte, mas controlado, intercalados com 2 minutos de trote bem leve ou caminhada. O erro mais comum de quem começa é sair no ritmo máximo do primeiro tiro e não conseguir manter o mesmo esforço nos seguintes.",
      "Uma boa referência de ritmo para esses tiros é o esforço em que dá para falar só frases curtas, sem manter uma conversa fluida, mas também sem estar no limite total. Com o tempo, dá para aumentar a duração dos tiros ou reduzir o tempo de recuperação, sempre de forma gradual.",
      "Esse tipo de treino pede mais atenção ao aquecimento do que um treino comum, justamente por exigir esforço mais forte logo nos primeiros tiros. Uns 10 minutos de trote leve, seguidos de alguns exercícios de mobilidade, preparam o corpo para o ritmo mais puxado que vem a seguir.",
      "Uma vez por semana já é suficiente para começar a sentir diferença, geralmente depois de 3 a 4 semanas de treino consistente. Fazer intervalado todos os dias, ou logo depois de uma prova recente, tende a cansar mais do que ajudar, então vale reservar esse treino para quando o corpo estiver descansado."
    ]
  },
  {
    id: "correr-em-grupo-como-comecar",
    categoria: "Mente",
    titulo: "Correr em grupo: como encontrar uma turma e o que isso muda no treino",
    resumo: "Com tanta prova nova pipocando na região, treinar sempre sozinho pode estar deixando o corredor de fora de uma parte importante da experiência. Encontrar um grupo certo muda a forma como o treino é sentido.",
    imagem: "https://images.pexels.com/photos/18408962/pexels-photo-18408962.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Correr em grupo não é só sobre companhia. O mesmo treino que parece pesado sozinho costuma parecer mais leve ao lado de outras pessoas no mesmo ritmo, porque a conversa distrai da sensação de esforço e o compromisso combinado com alguém reduz a chance de faltar ao treino.",
      "Para encontrar um grupo na região, vale começar observando quem aparece nas provas locais usando a mesma camiseta, procurando por assessorias e grupos de corrida no Instagram, ou perguntando na loja de artigos esportivos que costuma vender para corredores da cidade. A maioria dos grupos recebe bem quem chega para experimentar.",
      "Encaixar num grupo já formado exige um pouco de humildade no início: nem todo grupo vai ter alguém exatamente no seu ritmo no primeiro treino. Vale conversar antes sobre o pace médio do grupo e não ter vergonha de pedir para o pessoal ir um pouco mais devagar na primeira experiência.",
      "Treinar acompanhado também ajuda em outro ponto que passa batido: alguém correndo ao lado percebe antes uma mudança estranha na pisada, uma queda de postura ou um sinal de desidratação que o próprio corredor, concentrado no esforço, às vezes não nota em si mesmo.",
      "Para quem está treinando para a primeira prova, especialmente as mais longas do calendário regional, entrar num grupo nas semanas finais de preparação costuma ajudar tanto no ritmo quanto na ansiedade da estreia. Chegar acompanhado na largada, e não sozinho, já muda a sensação do dia da prova."
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
