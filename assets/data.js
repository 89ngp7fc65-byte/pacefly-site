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
   - Imagens: troque as URLs por fotos próprias/licenciadas antes
     de divulgar amplamente.
   ============================================================ */

// PACEFLY_EVENTOS — versão corrigida (links oficiais reais)
// Substitua todo o array PACEFLY_EVENTOS do seu assets/data.js
// por este bloco abaixo (do "const PACEFLY_EVENTOS = [" até o "];")
// ============================================================

const PACEFLY_EVENTOS = [
  {
    "id": "maratona-internacional-floripa",
    "nome": "Maratona Internacional de Floripa Fibra",
    "dia": "29",
    "mes": "08",
    "mesTxt": "AGO",
    "ano": 2026,
    "dataExtenso": "29 e 30 de agosto de 2026",
    "cidade": "Florianópolis, SC",
    "largada": "Praça Sesquicentenário (Bolsão da Casan), Av. Beira-Mar Norte",
    "organizador": "Maratona Internacional de Floripa",
    "edicao": "Edição 2026",
    "distancias": ["42 km", "21 km", "5 km", "Maratoninha"],
    "descricao": "A maior prova de rua de Santa Catarina, disputada em dois dias na Beira-Mar Norte, com largada na Praça Sesquicentenário. A meia maratona sai no sábado, 29 de agosto, e a maratona no domingo, 30. A programação inclui ainda os 5 km e a Maratoninha para crianças e jovens até 13 anos. A retirada de kits começa na quinta-feira, 27 de agosto.",
    "oficialUrl": "https://maratonadefloripa.com.br"
  },
  {
    "id": "ademicon-run-joinville",
    "nome": "Ademicon Run",
    "dia": "30",
    "mes": "08",
    "mesTxt": "AGO",
    "ano": 2026,
    "dataExtenso": "30 de agosto de 2026",
    "cidade": "Joinville, SC",
    "largada": "Ademicon, Rua Ministro Calógeras",
    "organizador": "42K Assessoria Esportiva",
    "edicao": "Edição 2026",
    "distancias": ["8 km", "4 km"],
    "descricao": "Prova de rua em Joinville com largada na Ademicon e percursos de 8 km e 4 km.",
    "oficialUrl": "https://42k.esp.br"
  },
  {
    "id": "circuito-unimed-jaragua-do-sul",
    "nome": "Circuito de Corridas Unimed",
    "dia": "30",
    "mes": "08",
    "mesTxt": "AGO",
    "ano": 2026,
    "dataExtenso": "30 de agosto de 2026",
    "cidade": "Jaraguá do Sul, SC",
    "largada": "Parque Linear Via Verde",
    "organizador": "Unimed",
    "edicao": "Etapa Jaraguá do Sul",
    "distancias": ["10 km", "5 km"],
    "descricao": "Etapa jaraguaense do Circuito de Corridas Unimed, com largada às 7h no estacionamento do Parque Linear Via Verde e percursos de 10 km e 5 km.",
    "oficialUrl": "https://circuitodecorridaunimed.com.br"
  },
  {
    "id": "tex-run-blumenau",
    "nome": "Tex Run",
    "dia": "30",
    "mes": "08",
    "mesTxt": "AGO",
    "ano": 2026,
    "dataExtenso": "30 de agosto de 2026",
    "cidade": "Blumenau, SC",
    "largada": "Tex Cotton, Rua Itajaí, 948, bairro Vorstadt, às 7h30",
    "organizador": "Tex Cotton",
    "edicao": "1ª edição",
    "distancias": ["8 km", "4 km", "Caminhada 4 km", "Kids"],
    "descricao": "Estreia da Tex Run em Blumenau, criada pela Tex Cotton para celebrar os 40 anos da companhia têxtil no Vale do Itajaí. A largada é às 7h30, na sede da empresa, na Rua Itajaí, 948, bairro Vorstadt, com percursos de 8 km e 4 km, caminhada de 4 km e corrida kids para crianças de 2 a 14 anos. O trajeto plano passa por pontos turísticos do centro da cidade e cada inscrição inclui a doação de 1 kg de alimento não perecível para entidades da região que atendem crianças.",
    "oficialUrl": "https://www.ticketsports.com.br/e/CORRIDA+TEX+RUN+2026-87231"
  },
  {
    "id": "corrida-avc-sao-francisco-do-sul",
    "nome": "9ª Corrida e Caminhada de Combate ao AVC",
    "dia": "06",
    "mes": "09",
    "mesTxt": "SET",
    "ano": 2026,
    "dataExtenso": "6 de setembro de 2026",
    "cidade": "São Francisco do Sul, SC",
    "largada": "Av. Jaime Ernesto de Oliveira, 1",
    "organizador": "KM Eventos Esportivos",
    "edicao": "9ª edição",
    "distancias": ["8 km", "4 km"],
    "descricao": "Nona edição da Corrida e Caminhada de Combate ao AVC, em São Francisco do Sul, com largada na Av. Jaime Ernesto de Oliveira, 1, e percursos de 8 km e 4 km. A prova une esporte e conscientização sobre a prevenção do AVC.",
    "oficialUrl": "https://www.ticketsports.com.br/e/9-corrida-e-caminhada-de-combate-ao-avc-86921"
  },
  {
    "id": "corrida-do-fogo-mafra",
    "nome": "1ª Corrida do Fogo",
    "dia": "12",
    "mes": "09",
    "mesTxt": "SET",
    "ano": 2026,
    "dataExtenso": "12 de setembro de 2026",
    "cidade": "Mafra, SC",
    "largada": "Mafra, SC (endereço e horário de largada a confirmar com a organização)",
    "organizador": "CJR Academia e Eventos",
    "edicao": "1ª edição",
    "distancias": ["5 km"],
    "descricao": "Estreia da Corrida do Fogo em Mafra, no planalto norte catarinense, com percurso de 5 km. Confirme horário de largada e local exato de concentração diretamente com a organização antes de se inscrever.",
    "oficialUrl": "https://www.ticketsports.com.br/e/1-corrida-do-fogo-74816"
  },
  {
    "id": "jtc-run-joinville",
    "nome": "JTC Run",
    "dia": "13",
    "mes": "09",
    "mesTxt": "SET",
    "ano": 2026,
    "dataExtenso": "13 de setembro de 2026",
    "cidade": "Joinville, SC",
    "largada": "Joinville Tênis Clube",
    "organizador": "42K Assessoria Esportiva",
    "edicao": "Edição 2026",
    "distancias": ["11 km", "3,5 km"],
    "descricao": "Prova de rua com largada no Joinville Tênis Clube e percursos de 11 km e 3,5 km.",
    "oficialUrl": "https://42k.esp.br"
  },
  {
    "id": "barra-run-barra-velha",
    "nome": "Barra Run",
    "dia": "13",
    "mes": "09",
    "mesTxt": "SET",
    "ano": 2026,
    "dataExtenso": "13 de setembro de 2026",
    "cidade": "Barra Velha, SC",
    "largada": "Barra Velha, SC",
    "organizador": "Barra Run",
    "edicao": "Edição 2026",
    "distancias": ["16 km", "10 km", "5 km"],
    "descricao": "Prova tradicional do litoral norte catarinense, com percursos de 16 km, 10 km e 5 km à beira-mar em Barra Velha. Os 16 km fazem dela uma boa opção para quem quer testar uma distância acima dos 10 km sem encarar a meia maratona.",
    "oficialUrl": "https://www.ticketsports.com.br/e/barra-run-2026-74328"
  },
  {
    "id": "desafio-drogaria-catarinense",
    "nome": "4º Desafio Drogaria Catarinense",
    "dia": "19",
    "mes": "09",
    "mesTxt": "SET",
    "ano": 2026,
    "dataExtenso": "19 de setembro de 2026",
    "cidade": "Joinville, SC",
    "largada": "Ágora Tech Park",
    "organizador": "Number Esportes",
    "edicao": "4ª edição",
    "distancias": ["10 km", "5 km", "Kids"],
    "descricao": "Quarta edição do Desafio Drogaria Catarinense, com largada no Ágora Tech Park e percursos de 10 km, 5 km e corrida kids. A prova vem crescendo ano a ano e já se consolidou entre as principais corridas de rua de Joinville.",
    "oficialUrl": "https://www.ticketsports.com.br/e/4o-desafio-drogaria-catarinense-87507"
  },
  {
    "id": "corrida-cooper-jaragua-do-sul",
    "nome": "Corrida e Caminhada Movimento Cooper - Etapa Jaraguá do Sul",
    "dia": "20",
    "mes": "09",
    "mesTxt": "SET",
    "ano": 2026,
    "dataExtenso": "20 de setembro de 2026",
    "cidade": "Jaraguá do Sul, SC",
    "largada": "Parque Linear Via Verde, Rua Bertholdo Bruns, bairro Ilha da Figueira, às 8h",
    "organizador": "Corre Brasil Marketing Esportivo, com apoio da Cooper",
    "edicao": "Etapa Jaraguá do Sul",
    "distancias": ["7 km", "3 km", "Caminhada Pet 3 km", "Kids"],
    "descricao": "Etapa jaraguaense do Movimento Cooper, com largada às 8h no Parque Linear Via Verde, na Rua Bertholdo Bruns, bairro Ilha da Figueira. A programação reúne corrida de 7 km e 3 km, corrida kids e uma caminhada pet de 3 km para quem quiser levar o cachorro. A inscrição inclui a doação de 1 kg de alimento não perecível (exceto sal), entregue no dia da prova.",
    "oficialUrl": "https://vemcorrer.com/evento/369-corrida-e-caminhada-movimento-cooper-n-etapa-jaragua-do-sul-2026"
  },
  {
    "id": "meia-maratona-bela-vista-gaspar",
    "nome": "42ª Meia Maratona Bela Vista Country Club",
    "dia": "26",
    "mes": "09",
    "mesTxt": "SET",
    "ano": 2026,
    "dataExtenso": "26 e 27 de setembro de 2026",
    "cidade": "Gaspar, SC",
    "largada": "Bela Vista Country Club, Rua Anfilóquio Nunes Pires, 5300, às 6h30 (Maratoninha às 9h15)",
    "organizador": "Bela Vista Country Club",
    "edicao": "42ª edição",
    "distancias": ["21 km", "10 km", "5 km", "Maratoninha"],
    "descricao": "Considerada a meia maratona mais antiga do Brasil, a prova reúne mais de 3 mil participantes em Gaspar, no Vale do Itajaí. A largada dos adultos é às 6h30, no Bela Vista Country Club, com percursos de 21 km, 10 km e 5 km. A Maratoninha, para crianças de 4 a 13 anos, sai às 9h15 e tem vagas limitadas a 200 participantes.",
    "oficialUrl": "https://www.clubebelavista.com.br/eventos/42-meia-maratona"
  },
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
    "oficialUrl": "https://www.cbvj.org.br"
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
    id: "desafio-drogaria-catarinense-2026-confirmado",
    categoria: "Desafio Drogaria Catarinense",
    titulo: "4º Desafio Drogaria Catarinense confirma data em 19 de setembro no Ágora Tech Park",
    resumo: "A prova, que vem crescendo a cada edição, mantém os percursos de 10 km e 5 km, além da corrida kids, com largada no Ágora Tech Park, na Rua Dona Francisca.",
    dataTxt: "19 de setembro de 2026",
    local: "Joinville, SC",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Ticket Sports",
    fonteUrl: "https://www.ticketsports.com.br/e/4o-desafio-drogaria-catarinense-87507",
    corpo: [
      "A Number Esportes confirmou a data do 4º Desafio Drogaria Catarinense: a prova acontece em 19 de setembro, um sábado, no Ágora Tech Park, na Rua Dona Francisca, em Joinville.",
      "A programação segue o formato que já consagrou o evento entre os corredores da cidade, com percursos de 10 km e 5 km para quem busca desempenho, além da corrida kids para os pequenos participarem também.",
      "De uma edição para outra, o Desafio Drogaria Catarinense vem ganhando mais gente na largada e hoje já é uma das provas de referência do calendário joinvilense de setembro, ao lado de outras etapas que movimentam a cidade no mesmo mês.",
      "Quem quiser se organizar com antecedência já pode conferir todos os detalhes da prova, incluindo local exato de largada e distâncias, no nosso calendário de corridas."
    ]
  },
  {
    id: "tex-run-blumenau-2026",
    categoria: "Na região",
    titulo: "Tex Run estreia em Blumenau em 30 de agosto e une corrida a ação solidária",
    resumo: "Primeira edição da prova celebra os 40 anos da Tex Cotton, com largada na sede da empresa, no bairro Vorstadt. Cada inscrição inclui a doação de 1 kg de alimento não perecível para entidades que atendem crianças na região.",
    dataTxt: "30 de agosto de 2026",
    local: "Blumenau, SC",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Noticenter",
    fonteUrl: "https://www.noticenter.com.br/noticia/42029/tex-run-abre-inscricoes-para-corrida-que-celebra-historia-de-empreendedorismo-em-blumenau",
    corpo: [
      "Blumenau recebe pela primeira vez a Tex Run no dia 30 de agosto, prova criada pela Tex Cotton para celebrar os 40 anos da companhia têxtil, uma das mais tradicionais do Vale do Itajaí.",
      "A largada é às 7h30, na própria sede da empresa, na Rua Itajaí, 948, no bairro Vorstadt, com percursos de 8 km e 4 km, caminhada de 4 km e corrida kids para crianças de 2 a 14 anos. O trajeto é plano e passa por pontos turísticos do centro da cidade, o que facilita a participação até de quem está começando a correr.",
      "A prova tem um lado solidário: cada inscrição inclui a doação de 1 kg de alimento não perecível, revertido a entidades da região que trabalham com acolhimento de crianças. Ao longo do percurso, a organização também promete ativações especiais a cada quilômetro.",
      "Para quem mora em Joinville e no norte catarinense, Blumenau fica a menos de duas horas de viagem, e a Tex Run é mais uma opção de fim de semana para quem gosta de conhecer provas novas na região do Vale do Itajaí."
    ]
  },
  {
    id: "meia-maratona-rio-2026",
    categoria: "Meia Maratona do Rio",
    titulo: "Meia Maratona Internacional do Rio de Janeiro reúne 18 mil corredores neste domingo",
    resumo: "A 28ª edição da prova sai do Leblon rumo ao Aterro do Flamengo, passando por Copacabana e pelo Pão de Açúcar, com a elite do atletismo brasileiro na disputa dos 21,097 km.",
    dataTxt: "16 de agosto de 2026",
    local: "Rio de Janeiro, RJ",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Olympics.com Brasil",
    fonteUrl: "https://www.olympics.com/pt/noticias/meia-maratona-internacional-rio-de-janeiro-2026-horarios-percurso-onde-assistir",
    corpo: [
      "Neste domingo, 16 de agosto, o Rio de Janeiro recebe a 28ª edição da Meia Maratona Internacional, uma das provas mais tradicionais do calendário brasileiro. A expectativa é reunir cerca de 18 mil corredores nas ruas da cidade, um crescimento expressivo sobre os 12 mil inscritos do ano anterior.",
      "O percurso de 21,097 km larga na Praia do Leblon e termina no Monumento aos Pracinhas, no Aterro do Flamengo, passando por trechos icônicos como Copacabana e o Pão de Açúcar. A largada da elite acontece pela manhã, aproveitando o clima mais ameno do início do dia carioca.",
      "Além do público amador, a prova costuma reunir nomes de peso do atletismo nacional, servindo como uma das principais referências de tempo da temporada antes das grandes maratonas do fim de ano.",
      "Para o corredor de Joinville e região, a Meia do Rio é uma vitrine do nível que a corrida de rua brasileira vem alcançando, o mesmo movimento que também aparece nas provas menores do calendário catarinense. Vale acompanhar o nosso calendário para não perder as próximas largadas por aqui perto."
    ]
  },
  {
    id: "circuito-unimed-jaragua-agosto-2026",
    categoria: "Na região",
    titulo: "Circuito Unimed chega a Jaraguá do Sul em 30 de agosto com largada no Parque Linear Via Verde",
    resumo: "A etapa jaraguaense do circuito catarinense larga às 7h, com provas de 5 km e 10 km. A retirada de kits acontece no dia 17 de agosto, na sede da Unimed no centro da cidade.",
    dataTxt: "30 de agosto de 2026",
    local: "Jaraguá do Sul, SC",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Circuito de Corridas Unimed SC",
    fonteUrl: "https://circuitodecorridaunimed.com.br/index.php/corrida/jaragua-do-sul/",
    corpo: [
      "O Circuito de Corridas Unimed, um dos calendários mais capilarizados de Santa Catarina, chega a Jaraguá do Sul no dia 30 de agosto. A largada está marcada para as 7h, no estacionamento do Parque Linear Via Verde, com percursos de 5 km e 10 km.",
      "O Via Verde virou ponto de encontro dos corredores jaraguaenses nos últimos anos, e a escolha do local ajuda a explicar por que a etapa costuma atrair também gente de Guaramirim, Schroeder e Corupá, além do pessoal de Joinville que faz a viagem curta pela BR-280.",
      "A retirada de kits está prevista para 17 de agosto, na sede da Unimed Jaraguá do Sul, na Avenida Marechal Deodoro da Fonseca, no centro, com apresentação de documento com foto. Vale confirmar horários e regras diretamente com a organização antes de ir.",
      "Para quem mora na região, a etapa cai bem no calendário: acontece no mesmo fim de semana da Ademicon Run, em Joinville, e serve como bom termômetro para quem está construindo base rumo às provas de setembro e outubro."
    ]
  },
  {
    id: "maratona-floripa-17-mil-inscritos-2026",
    categoria: "Maratona de Floripa",
    titulo: "Maratona de Floripa ultrapassa 17 mil inscritos e entra na reta final",
    resumo: "A prova, disputada em 29 e 30 de agosto em Florianópolis, espera chegar a 19 mil participantes nas distâncias de 42 km, 21 km e 5 km. Os percursos da meia maratona e dos 5 km foram remodelados para esta edição.",
    dataTxt: "11 de agosto de 2026",
    local: "Florianópolis, SC",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Contra-Relógio / Terra",
    fonteUrl: "https://www.terra.com.br/vida-e-estilo/partiu-correr/maratona-de-floripa-supera-17-mil-inscritos-e-entra-na-reta-final,622e7d25ec42b4131762997c02e1566835s90s84.html",
    corpo: [
      "A Maratona Internacional de Floripa já ultrapassou os 17 mil inscritos e entra na reta final do período de inscrições. A prova, maior corrida de rua de Santa Catarina, acontece nos dias 29 e 30 de agosto em Florianópolis, com disputas de 42 km, 21 km e 5 km, e a organização espera chegar a 19 mil participantes.",
      "A meia maratona larga no sábado, dia 29, e a maratona e os 5 km saem no domingo, dia 30. Uma das novidades deste ano está no percurso dos 5 km, que passa a cruzar a Ponte Hercílio Luz, enquanto a meia maratona foi reformulada com menos curvas, buscando deixar a corrida mais fluida.",
      "Os percursos de 42 km e 21 km têm selo Ouro da Confederação Brasileira de Atletismo, e a maratona integra o Ranking Brasileiro de Maratonistas da Contra-Relógio e o Circuito Brasil Gigante, que reúne oito maratonas pelo país em 2026. Floripa é a sexta etapa do circuito, depois de São Paulo, Paraná, Porto Alegre, Campo Grande e João Pessoa.",
      "Para quem mora em Joinville e no norte catarinense, a Maratona de Floripa é uma das provas de referência do estado e já está no nosso calendário. A programação começa em 27 de agosto, com a abertura da Expo e a retirada de kits, e as inscrições seguem abertas no site oficial da prova."
    ]
  }
];

/* DICAS_ULTIMA_ROTACAO: 2026-08-16
   As 6 dicas são trocadas por completo a cada 2 semanas.
   Ao rodar a rotação, atualize a data acima. */
const PACEFLY_DICAS = [
  {
    id: "seguranca-correr-de-madrugada-luz-baixa",
    categoria: "Segurança",
    titulo: "Correr no escuro: como se ver e ser visto nas primeiras horas do dia",
    resumo: "No inverno, o sol nasce tarde e muita gente treina ainda de madrugada. Roupa refletiva, lanterna de cabeça e escolha de rota fazem toda a diferença na segurança.",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "No inverno, o sol demora a aparecer no norte de Santa Catarina, e boa parte dos treinos matinais acontece ainda no escuro. Isso muda a lógica da segurança: não basta se preocupar só com o próprio cansaço, é preciso pensar em como enxergar o caminho e em como os carros enxergam você.",
      "O primeiro cuidado é a roupa. Peças com faixas refletivas, mesmo discretas, fazem diferença enorme sob o farol de um carro. Cores claras ajudam de dia, mas à noite o que realmente funciona é o material refletivo, não a cor em si.",
      "Uma lanterna de cabeça ou de peito resolve dois problemas ao mesmo tempo: ilumina buracos e desníveis na calçada e sinaliza sua presença de longe para quem vem na direção contrária. Vale mais a lanterna simples usada todo dia do que o modelo caro que fica parado na gaveta.",
      "Escolher a rota também é decisão de segurança. Prefira ruas com iluminação pública em bom estado e evite atalhos por terrenos baldios ou trechos sem movimento, mesmo que sejam mais curtos. Correr acompanhado, ou pelo menos avisar alguém do horário e do trajeto, é um hábito simples que custa nada.",
      "Por fim, atenção aos fones de ouvido. No escuro, a audição vira um sentido extra de segurança, então vale reduzir o volume ou correr só com um lado livre para escutar o trânsito. Treinar de madrugada não precisa ser arriscado, só exige um pouco mais de planejamento antes de sair de casa."
    ]
  },
  {
    id: "postura-e-passada-erros-comuns",
    categoria: "Técnica",
    titulo: "Postura e passada: os erros mais comuns que sabotam o corredor",
    resumo: "Cabeça caída, passada longa demais, braços tensos. Pequenos ajustes na postura melhoram a economia de corrida e reduzem o risco de dor.",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Muita gente corre pensando só na perna, mas boa parte da economia de corrida vem do que acontece do quadril para cima. Cabeça caída, ombros tensos e tronco curvado para frente fazem o corpo gastar energia à toa, e o cansaço chega mais cedo do que deveria.",
      "Um erro comum é a passada longa demais, quando o pé toca o chão bem à frente do corpo. Esse impacto frontal funciona quase como um freio a cada passada, sobrecarrega o joelho e reduz a eficiência. O ideal é que o pé aterrisse mais próximo da linha do quadril, com passos um pouco mais curtos e mais rápidos.",
      "Os braços também contam a história do esforço. Se eles sobem demais na frente do peito ou cruzam o corpo de um lado para o outro, parte da energia que deveria empurrar você para frente está sendo desperdiçada de lado. O movimento ideal é próximo ao corpo, com o cotovelo dobrado perto de 90 graus, balançando para frente e para trás.",
      "Olhar para o próprio umbigo é outro hábito que atrapalha sem que o corredor perceba. Manter o olhar num ponto mais à frente, na altura do horizonte, ajuda a manter a cabeça alinhada com a coluna e evita aquela tensão no pescoço que aparece depois de corridas longas.",
      "Ajustar a postura não é sobre copiar a passada de outra pessoa, é sobre soltar tensões desnecessárias. Vale gravar um vídeo correndo em ritmo leve de vez em quando e observar: se algo parece rígido ou forçado, geralmente é ali que está o ajuste mais simples de fazer."
    ]
  },
  {
    id: "rotina-do-dia-da-prova",
    categoria: "Provas",
    titulo: "Rotina do dia da prova: o que fazer da véspera até a largada",
    resumo: "Comer certo, dormir bem e chegar cedo. Uma rotina bem definida no dia da prova evita imprevistos e ajuda a render o treino que você já fez.",
    imagem: "https://images.pexels.com/photos/18408962/pexels-photo-18408962.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "O treino já foi feito nas semanas anteriores, mas o dia da prova tem uma lógica própria. Uma boa rotina, pensada com antecedência, evita que o nervosismo ou um imprevisto de última hora atrapalhem tudo o que você construiu até ali.",
      "A noite anterior pesa mais do que parece. Deixar separado o que vai vestir, o número de peito já fixado e o horário de saída calculado com folga tira decisões da manhã da prova, quando a cabeça já está mais ansiosa. Dormir cedo importa mais do que fazer o último treino puxado da véspera.",
      "No café da manhã, a regra é não testar novidade. Coma algo que você já experimentou em treinos e que seu estômago reconhece bem, de preferência de duas a três horas antes da largada. Provas com largada muito cedo pedem um café mais leve, complementado por algo pequeno já no local da concentração.",
      "Chegar com antecedência é outro ponto que faz diferença. Estacionar, retirar o número se ainda não tiver feito, ir ao banheiro sem fila e ainda sobrar tempo para um aquecimento leve muda completamente o estado de espírito na hora de entrar no corredor de largada.",
      "Por fim, tenha um plano simples para o percurso: em que ritmo pretende começar, onde ficam os pontos de hidratação, o que fazer se sentir desconforto. Prova não é hora de inventar estratégia nova, é hora de confiar no que já foi treinado."
    ]
  },
  {
    id: "dor-no-joelho-do-corredor",
    categoria: "Saúde",
    titulo: "Dor no joelho do corredor: quando é normal e quando é hora de parar",
    resumo: "Nem toda dor é sinal de lesão grave, mas ignorar os sinais certos pode transformar um incômodo passageiro em um problema sério.",
    imagem: "https://images.pexels.com/photos/5319384/pexels-photo-5319384.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Dor no joelho é uma das queixas mais comuns entre corredores, e também uma das que mais geram dúvida: treinar mesmo assim ou parar? A resposta certa depende do tipo de dor, não da vontade de não perder o treino do dia.",
      "Um desconforto leve, que aparece durante a corrida e desaparece logo depois que você para, geralmente é sinal de sobrecarga temporária, algo que um dia de descanso ou uma redução no volume resolve. Já uma dor que piora ao longo do treino, que incha a região ou que continua no dia seguinte pede atenção maior.",
      "A famosa dor lateral do joelho, ligada à banda iliotibial, costuma aparecer em quem aumentou a quilometragem rápido demais ou tem fraqueza no quadril. Ela tende a surgir sempre no mesmo ponto do percurso, quase como um relógio, o que ajuda a identificar o padrão.",
      "Sinais de alerta que não devem ser ignorados incluem dor que persiste em repouso, inchaço visível, sensação de instabilidade no joelho ou dor que piora dia após dia mesmo com descanso. Nesses casos, treinar apostando que vai passar sozinho costuma custar caro depois.",
      "Fortalecimento de quadril e panturrilha, progressão de treino sem pular etapas e um tênis em boas condições previnem boa parte dessas dores. Mas quando o desconforto foge do padrão leve e passageiro, a conversa certa é com um profissional de saúde, não com o grupo de corrida."
    ]
  },
  {
    id: "treino-intervalado-para-iniciar",
    categoria: "Treino",
    titulo: "Treino intervalado: o que é e como começar sem se machucar",
    resumo: "Alternar tiros rápidos com recuperação é uma das formas mais eficientes de ganhar velocidade. O segredo está em começar devagar e respeitar a progressão.",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Treino intervalado, os famosos tiros, é uma das ferramentas mais eficientes para quem quer ficar mais rápido, mas também uma das que mais gera lesão quando é feita sem critério. A lógica é simples: alternar blocos de esforço mais forte com blocos de recuperação.",
      "Para quem nunca fez, o começo não precisa ser sofisticado. Um exemplo simples é alternar um minuto em ritmo forte, mas controlado, com dois minutos de trote bem leve ou caminhada, repetindo de 6 a 8 vezes. A sensação deve ser de esforço real, mas não de sprint total.",
      "O erro mais comum de quem está começando é ir forte demais no primeiro tiro e não conseguir manter o ritmo nos seguintes. É melhor terminar o treino sentindo que ainda tinha um pouco mais a dar do que travar no meio da sessão.",
      "Esse tipo de treino é o que mais cobra do corpo, então pede aquecimento de verdade antes, com trote leve e alguns exercícios de ativação, e vale fazer no máximo uma ou duas vezes por semana, nunca em dias seguidos.",
      "Os ganhos não aparecem no primeiro treino, aparecem depois de algumas semanas de constância. Se a meta é melhorar o tempo numa prova de 5 km ou 10 km, o intervalado bem dosado costuma trazer resultado mais rápido do que simplesmente correr mais quilômetros no mesmo ritmo de sempre."
    ]
  },
  {
    id: "assaduras-e-detalhes-do-equipamento",
    categoria: "Equipamento",
    titulo: "Assaduras, meias e os pequenos detalhes que arruinam um treino longo",
    resumo: "Meia errada, costura no lugar errado, vaselina esquecida em casa. Os detalhes pequenos costumam decidir o conforto nos treinos e provas mais longas.",
    imagem: "https://images.pexels.com/photos/28766046/pexels-photo-28766046.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Tem treino longo que é arruinado não pela distância, mas por um detalhe pequeno: uma costura mal posicionada, uma meia errada, uma assadura que começa incômoda e termina insuportável. Vale prestar atenção nesses detalhes antes que eles decidam o treino por você.",
      "Meia de algodão costuma ser a maior vilã. Ela retém umidade e favorece o atrito, exatamente o combo que gera bolha. Meias técnicas, feitas para corrida, secam mais rápido e reduzem esse problema, mesmo custando um pouco mais.",
      "Assaduras aparecem nos lugares de mais atrito: coxas, embaixo dos braços, no peito para quem usa camiseta de tecido áspero. Vaselina ou produtos próprios de antiassadura aplicados antes do treino resolvem boa parte do problema, principalmente em treinos acima de uma hora.",
      "Roupa nova nunca deve estrear no dia da prova. Toda peça, camiseta, shorts, meia, precisa já ter passado por pelo menos um treino longo antes, para você descobrir se incomoda em algum ponto enquanto ainda dá tempo de trocar.",
      "Cortar as unhas dos pés antes de treinos longos, escolher o cadarço com o aperto certo e verificar se a língua do tênis não está torta são cuidados que levam menos de um minuto e evitam boa parte dos pequenos problemas que tiram a graça de um treino que, fora isso, estava ótimo."
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
  return m;
}

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
}
