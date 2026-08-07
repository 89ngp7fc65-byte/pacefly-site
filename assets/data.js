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
    "id": "night-run-joinville",
    "nome": "Night Run Joinville",
    "dia": "08",
    "mes": "08",
    "mesTxt": "AGO",
    "ano": 2026,
    "dataExtenso": "8 de agosto de 2026",
    "cidade": "Joinville, SC",
    "largada": "Av. Hermann August Lepper",
    "organizador": "42K Assessoria Esportiva",
    "edicao": "Edição 2026",
    "distancias": ["10 km", "5 km"],
    "descricao": "A corrida noturna de Joinville, com largada na Av. Hermann August Lepper e percursos de 10 km e 5 km.",
    "oficialUrl": "https://42k.esp.br"
  },
  {
    "id": "corrida-verde-joinville",
    "nome": "1ª Corrida Verde",
    "dia": "09",
    "mes": "08",
    "mesTxt": "AGO",
    "ano": 2026,
    "dataExtenso": "9 de agosto de 2026",
    "cidade": "Joinville, SC",
    "largada": "Mercado Municipal",
    "organizador": "On Sports",
    "edicao": "1ª edição",
    "distancias": ["10 km", "5 km"],
    "descricao": "Primeira edição da Corrida Verde, com largada no Mercado Municipal e percursos de 10 km e 5 km.",
    "oficialUrl": "https://www.onsportsoficial.com.br"
  },
  {
    "id": "corrida-tigre-joinville",
    "nome": "Corrida Tigre - 85 Anos",
    "dia": "16",
    "mes": "08",
    "mesTxt": "AGO",
    "ano": 2026,
    "dataExtenso": "16 de agosto de 2026",
    "cidade": "Joinville, SC",
    "largada": "Rua Ottokar Doerffel, em frente à Tigre, bairro Atiradores, às 7h",
    "organizador": "SER Tigre e Number Esportes",
    "edicao": "Edição 85 Anos",
    "distancias": ["10 km", "5 km", "Kids"],
    "descricao": "Prova de rua em Joinville em comemoração aos 85 anos da Tigre. A largada dos 10 km e 5 km é às 7h, na Rua Ottokar Doerffel, em frente à unidade da Tigre, no bairro Atiradores. A Corrida Kids sai às 8h20 e a premiação acontece às 9h. O kit inclui camiseta, número de peito, chip de cronometragem, sacola e medalha.",
    "oficialUrl": "https://www.ticketsports.com.br/e/corrida-tigre-85-anos-87589"
  },
  {
    "id": "circuito-banco-do-brasil-joinville",
    "nome": "Circuito Banco do Brasil",
    "dia": "23",
    "mes": "08",
    "mesTxt": "AGO",
    "ano": 2026,
    "dataExtenso": "23 de agosto de 2026",
    "cidade": "Joinville, SC",
    "largada": "Perini Business Park",
    "organizador": "Tática Marketing Esportivo",
    "edicao": "Etapa Joinville",
    "distancias": ["10 km", "5 km"],
    "descricao": "Etapa joinvilense do Circuito Banco do Brasil, com largada no Perini Business Park e percursos de 10 km e 5 km.",
    "oficialUrl": "https://www.circuitobb.com.br"
  },
  {
    "id": "corrida-protecao-animais",
    "nome": "Corrida pela Proteção dos Animais",
    "dia": "23",
    "mes": "08",
    "mesTxt": "AGO",
    "ano": 2026,
    "dataExtenso": "23 de agosto de 2026",
    "cidade": "Joinville, SC",
    "largada": "Shopping Mueller Joinville",
    "organizador": "42K Assessoria Esportiva",
    "edicao": "3ª edição",
    "distancias": ["7 km", "5,5 km"],
    "descricao": "Terceira edição da Corrida pela Proteção dos Animais, etapa do Circuito Movimento Pelo Bem (Shopping Mueller com a 42K Assessoria Esportiva), com largada no Shopping Mueller e percursos de 7 km e 5,5 km. Parte da renda de inscrição é destinada a instituições de apoio à causa animal de Joinville.",
    "oficialUrl": "https://42k.esp.br"
  },
  {
    "id": "corrida-senhor-bom-jesus-guaramirim",
    "nome": "2ª Corrida com o Senhor Bom Jesus",
    "dia": "23",
    "mes": "08",
    "mesTxt": "AGO",
    "ano": 2026,
    "dataExtenso": "23 de agosto de 2026",
    "cidade": "Guaramirim, SC",
    "largada": "Paróquia Senhor Bom Jesus, Rua 28 de Agosto, 1189",
    "organizador": "CJR Academia e Eventos",
    "edicao": "2ª edição",
    "distancias": ["10 km", "5 km", "Caminhada 3 km", "Kids"],
    "descricao": "Segunda edição da Corrida com o Senhor Bom Jesus, em Guaramirim, com largada na Paróquia Senhor Bom Jesus, na Rua 28 de Agosto, 1189. A programação tem provas de 10 km e 5 km, caminhada de 3 km e corrida kids. As inscrições vão até 15 de agosto ou até o limite técnico de 700 participantes.",
    "oficialUrl": "https://www.ticketsports.com.br/e/2-corrida-com-o-senhor-bom-jesus-85707"
  },
  {
    "id": "corridas-do-bem-sesi-sao-bento-do-sul",
    "nome": "Corridas do Bem Sesi + Saúde",
    "dia": "23",
    "mes": "08",
    "mesTxt": "AGO",
    "ano": 2026,
    "dataExtenso": "23 de agosto de 2026",
    "cidade": "São Bento do Sul, SC",
    "largada": "Em frente ao Sesi do Centro, às 7h",
    "organizador": "Sesi Santa Catarina",
    "edicao": "Etapa São Bento do Sul",
    "distancias": ["10 km", "5 km", "Caminhada 5 km", "Maratoninha"],
    "descricao": "Etapa são-bentense do circuito Corridas do Bem Sesi + Saúde, com largada às 7h em frente ao Sesi do Centro. A programação tem corridas de 10 km e 5 km, caminhada de 5 km e a Maratoninha para crianças de 2 a 14 anos, com percursos de 30 a 150 metros conforme a idade. A retirada de kits acontece no dia anterior e o kit inclui camiseta, chip de cronometragem, número de peito e brindes.",
    "oficialUrl": "https://sesisc.org.br/pt-br/eventos/sesi-corridas-do-bem-sao-bento-do-sul"
  },
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
    "distancias": ["10 km", "5 km"],
    "descricao": "Quarta edição do Desafio Drogaria Catarinense, com largada no Ágora Tech Park e percursos de 10 km e 5 km. A prova vem crescendo ano a ano e já se consolidou entre as principais corridas de rua de Joinville.",
    "oficialUrl": "https://number.esp.br"
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
    "largada": "São Bento do Sul, SC",
    "organizador": "Unimed",
    "edicao": "Etapa São Bento do Sul",
    "distancias": ["10 km", "5 km"],
    "descricao": "Etapa são-bentense do Circuito de Corridas Unimed, com percursos de 10 km e 5 km. Confirme o local e o horário exato da largada na página oficial da etapa antes de se inscrever.",
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
    "id": "corrida-bombeiros-joinville",
    "nome": "6ª Corrida Bombeiros Voluntários",
    "dia": "15",
    "mes": "11",
    "mesTxt": "NOV",
    "ano": 2026,
    "dataExtenso": "15 de novembro de 2026",
    "cidade": "Joinville, SC",
    "largada": "Corpo de Bombeiros Voluntários de Joinville",
    "organizador": "Number Esportes",
    "edicao": "6ª edição",
    "distancias": ["9 km", "5 km"],
    "descricao": "Sexta edição da corrida em apoio aos Bombeiros Voluntários de Joinville, com percursos de 9 km e 5 km.",
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
    id: "circuito-bb-corrida-joinville-2026",
    categoria: "Circuito Banco do Brasil",
    titulo: "Circuito Banco do Brasil de Corrida chega a Joinville em 23 de agosto",
    resumo: "Pela primeira vez na cidade, a etapa larga no Perini Business Park com percursos de 5 km, 10 km e 1 km para crianças, além de ativações gratuitas de saúde e bem-estar.",
    dataTxt: "28 de julho de 2026",
    local: "Joinville, SC",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "RCN Online",
    fonteUrl: "https://www.rcnonline.com.br/eventos/2026/07/2604958-circuito-banco-do-brasil-de-corrida-vai-chegar-a-joinville.html",
    corpo: [
      "O Circuito Banco do Brasil de Corrida chega pela primeira vez a Joinville no dia 23 de agosto, um domingo. Com dez anos de história e passagens por Cuiabá, São Paulo, Salvador, Rio de Janeiro e Belo Horizonte só em 2026, o circuito é hoje um dos maiores eventos de corrida de rua do país.",
      "A prova será no Perini Business Park, na Rua Dona Francisca, 8300, no Distrito Industrial. A largada dos percursos de 5 km e 10 km está marcada para as 7h, e a corridinha das crianças, com os responsáveis, sai às 9h. As inscrições podem ser feitas em www.circuitobb.com.br.",
      "Além da corrida, o evento reserva atendimento de avaliação física, massagens e áreas de relaxamento gratuitas, num formato que já é marca registrada do circuito por onde passa.",
      "Para o corredor de Joinville, é a chance de participar de um evento nacional sem sair de casa. A etapa cai no mesmo mês de outras provas grandes na cidade, então vale organizar a agenda: no nosso calendário você encontra tudo o que está confirmado para agosto na região."
    ]
  },
  {
    id: "desafio-beto-carrero-penha-2026",
    categoria: "Na região",
    titulo: "Desafio Beto Carrero reúne 3 mil corredores dentro do parque, em Penha",
    resumo: "A oitava edição da prova ocupou as ruas do Beto Carrero World entre sexta e domingo, com trajetos de 3 km a 21 km e a tradicional medalha para quem completa as quatro distâncias competitivas.",
    dataTxt: "31 de julho a 2 de agosto de 2026",
    local: "Penha, SC",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "NSC Total",
    fonteUrl: "https://www.nsctotal.com.br/esportes/beto-carrero-recebe-desafio-com-quatro-trajetos-e-3-mil-corredores",
    corpo: [
      "A oitava edição do Desafio Beto Carrero movimentou Penha, no litoral norte catarinense, entre sexta-feira (31) e domingo (2). Cerca de 3 mil atletas de todo o país se dividiram entre os trajetos de 5, 6, 10 e 21 quilômetros ao longo de três dias, correndo pelas ruas do parque e interagindo com as atrações no caminho.",
      "A programação abriu na sexta com os 5 km, às 20h30. No sábado, a manhã começou com os 10 km, às 6h30, e a noite trouxe os 6 km e, na sequência, a corrida de 3 km para toda a família, com crianças e adultos percorrendo juntos o interior do parque. O fim de semana se encerrou no domingo com a meia maratona, largando às 6h.",
      "Quem completou as quatro provas competitivas somou 42 quilômetros ao longo do evento e levou para casa a medalha especial do Desafio. A chegada de todas as distâncias foi na arena montada no kartódromo do parque, com hidratação, degustações e atividades para as famílias.",
      "Para quem mora na região de Joinville, Penha fica a menos de duas horas de carro e a prova é um exemplo de como o turismo esportivo catarinense também gera corrida de qualidade. Fique de olho no nosso calendário para as próximas provas por aqui perto."
    ]
  },
  {
    id: "sp-city-marathon-dobradinha-brasileira",
    categoria: "SP City Marathon",
    titulo: "SP City Marathon 2026 tem dobradinha brasileira com vitórias de Gilmar Silvestre e Maria Ferraz",
    resumo: "Na 10ª edição da maratona paulistana, Gilmar Silvestre Lopes venceu numa chegada decidida nos últimos metros e Maria Aparecida Ferraz assumiu a liderança feminina na reta final. A prova também bateu recorde de concluintes.",
    dataTxt: "27 de julho de 2026",
    local: "São Paulo, SP",
    imagem: "https://images.pexels.com/photos/5319384/pexels-photo-5319384.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Iguana Sports",
    fonteUrl: "https://iguanasports.com.br/blogs/materias/sp-city-marathon-2026-tem-dobradinha-brasileira-com-vitorias-de-gilmar-silvestre-e-maria-ferraz",
    corpo: [
      "A 10ª edição da São Paulo City Marathon, disputada no domingo, 26 de julho, terminou com dobradinha brasileira nas duas provas principais. Na maratona masculina, Gilmar Silvestre Lopes venceu numa chegada decidida nos últimos metros, cruzando a linha com o mesmo tempo do queniano Nicolas Kiptoo Kosgei, 2h16min34s. Na maratona feminina, Maria Aparecida Ferraz assumiu a liderança na parte final do percurso e fechou em 2h42min19s.",
      "O crescimento do evento também chamou atenção: a maratona teve 6.635 concluintes, 23% a mais que em 2025, enquanto a meia maratona somou 21.478 concluintes, alta de 34%, um número que já se aproxima das maiores provas do continente.",
      "Na meia maratona, os títulos ficaram com os etíopes Alemu Balcha Ragasa, no masculino, e Tigist Girma Assefa, no feminino, mas o pódio seguiu com boa presença brasileira, incluindo Giovani dos Santos e Jéssica Ladeira Soares entre os primeiros colocados.",
      "Para o corredor da região de Joinville, o resultado reforça um momento de amadurecimento da elite brasileira nas maratonas de rua, o mesmo movimento que também aparece nas provas menores do calendário local. Vale acompanhar o nosso calendário para não perder as próximas largadas por aqui."
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
    id: "rio-half-marathon-2026-retorno",
    categoria: "Meia Maratona do Rio",
    titulo: "Meia Maratona Internacional do Rio volta ao calendário em 16 de agosto",
    resumo: "A 28ª edição da Rio Half Marathon, com selo da World Athletics, retoma o tradicional percurso entre o Leblon e a Glória, com largada na Avenida Niemeyer, de frente para o mar.",
    dataTxt: "16 de agosto de 2026",
    local: "Rio de Janeiro, RJ",
    imagem: "https://images.pexels.com/photos/18408962/pexels-photo-18408962.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Meia Maratona Internacional do Rio",
    fonteUrl: "https://www.yescom.com.br/meiadorio/2026/index.asp",
    corpo: [
      "A Meia Maratona Internacional do Rio, conhecida como Rio Half Marathon, volta ao calendário carioca no dia 16 de agosto, na sua 28ª edição. A prova tem selo da World Athletics e é considerada uma das mais tradicionais do país, com largada na Avenida Niemeyer, no Leblon, de frente para o mar.",
      "O percurso passa por pontos conhecidos da orla do Rio, entre praia, costões e túneis, até a chegada na Avenida Infante Dom Henrique, na Glória, entre a Praça Paris e o Monumento aos Pracinhas. As distâncias oferecidas são 5 km e 21,0975 km.",
      "A retirada de kits e a expo dos atletas acontecem nos dias 14 e 15 de agosto, em horários variados, movimentando a cidade nos dias que antecedem a largada.",
      "Para o corredor da região de Joinville, é mais uma prova histórica de volta ao radar de quem sonha em correr no Rio de Janeiro. Enquanto isso, o calendário aqui perto segue recheado de opções para treinar essa meta."
    ]
  },
  {
    id: "maratona-joinville-estreia",
    categoria: "Perto de você",
    titulo: "Joinville terá sua 1ª Maratona em novembro de 2026",
    resumo: "A cidade estreia no calendário dos 42K em 1º de novembro, com uma prova de 6 km no sábado anterior.",
    dataTxt: "2026",
    local: "Joinville, SC",
    imagem: "https://images.pexels.com/photos/39308/pexels-photo-39308.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "1ª Maratona de Joinville",
    fonteUrl: "https://www.ticketsports.com.br/e/1o-maratona-de-joinville-87159",
    corpo: [
      "Joinville entra para o mapa das maratonas do Brasil. A cidade realiza sua 1ª Maratona no dia 1º de novembro de 2026, com a distância clássica de 42 km e largada no Kart Joinville, sob organização da Tkar Produção de Eventos Esportivos.",
      "O fim de semana começa no sábado, 31 de outubro, com uma prova de 6 km, ampliando a participação para quem ainda não encara a distância cheia.",
      "Para o corredor da região, é a chance de disputar uma maratona em casa, sem precisar viajar, e de fazer parte de um evento inédito na história esportiva da cidade. Fique de olho no nosso calendário para acompanhar a abertura das inscrições e os detalhes do percurso."
    ]
  }
];

/* DICAS_ULTIMA_ROTACAO: 2026-08-02
   As 6 dicas são trocadas por completo a cada 2 semanas.
   Ao rodar a rotação, atualize a data acima. */
const PACEFLY_DICAS = [
  {
    id: "descobrir-seu-ritmo-de-treino",
    categoria: "Treino",
    titulo: "Como descobrir o seu ritmo ideal de treino",
    resumo: "A maioria dos corredores treina rápido demais nos dias fáceis. O teste da conversa resolve isso sem precisar de relógio caro.",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Existe um erro que atravessa quase todos os níveis de corrida: treinar rápido demais nos dias que deveriam ser leves. O resultado é chegar cansado nos treinos que realmente exigem intensidade, e a evolução simplesmente empaca.",
      "O jeito mais simples de acertar o ritmo é o teste da conversa. No treino leve, você precisa conseguir falar frases completas sem engasgar. Se só sai palavra solta entre uma respirada e outra, você está indo rápido demais para aquele dia.",
      "Uma referência prática: a maior parte do seu volume semanal, algo em torno de 70% a 80%, deveria ser nesse ritmo confortável. O restante fica para tiros, ritmo forte ou subidas, que aí sim precisam doer um pouco.",
      "Se você usa relógio com frequência cardíaca, use como apoio e não como dono do treino. Frio, noite mal dormida, café e estresse mexem nos batimentos, e o corpo costuma ser mais honesto que o número na tela.",
      "Vale lembrar que ritmo leve não é ritmo inútil. É nele que o corpo constrói base aeróbica, fortalece tendões e aprende a queimar energia com eficiência. Correr devagar de propósito é o que permite correr rápido quando importa."
    ]
  },
  {
    id: "quando-trocar-o-tenis-de-corrida",
    categoria: "Equipamento",
    titulo: "Quando trocar o tênis de corrida",
    resumo: "Entre 500 e 800 km o amortecimento já não é o mesmo. Aprenda a ler os sinais antes que a dor apareça.",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "O tênis de corrida tem prazo de validade, mesmo que a parte de cima continue com cara de novo. A referência mais usada fica entre 500 e 800 km, variando conforme o peso do corredor, o tipo de piso e a construção da entressola.",
      "O sinal mais confiável não é a aparência, é a sensação. Quando o tênis começa a parecer duro, sem aquele retorno na passada, e você sente mais impacto na canela e no joelho depois dos treinos longos, provavelmente a espuma já perdeu boa parte da capacidade de absorver choque.",
      "Vale olhar a sola por baixo também. Desgaste muito irregular, com uma região lisa enquanto o resto ainda tem relevo, indica que o apoio já mudou e a pisada está compensando de um jeito que não é o seu natural.",
      "Uma prática que ajuda muito é o rodízio entre dois pares. Alternando os tênis, a espuma tem tempo de voltar ao formato entre uma corrida e outra, e os dois duram mais do que um par usado todos os dias.",
      "Anote a quilometragem em algum lugar, nem que seja no aplicativo do celular. É bem mais barato trocar o tênis no momento certo do que tratar uma canelite ou uma fascite plantar que apareceu por causa de um calçado gasto."
    ]
  },
  {
    id: "musculacao-para-corredor",
    categoria: "Fortalecimento",
    titulo: "Musculação para corredor: o que realmente importa",
    resumo: "Não é sobre ficar grande. Quadril, core e panturrilha fortes seguram o corpo no fim da prova e afastam lesão.",
    imagem: "https://images.pexels.com/photos/5319384/pexels-photo-5319384.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Muito corredor evita a musculação com medo de ficar pesado ou de gastar energia que faria falta na corrida. Na prática, acontece o contrário: força bem trabalhada melhora a economia de corrida e é uma das formas mais eficazes de reduzir risco de lesão.",
      "A prioridade número um é o quadril. Glúteo médio e máximo fracos deixam o joelho cair para dentro na passada, e daí vem boa parte das dores de joelho e da banda iliotibial. Agachamento, afundo, elevação de quadril e trabalho com faixa elástica dão conta do recado.",
      "O segundo pilar é a panturrilha e o pé. Elevação de panturrilha, feita também com o joelho dobrado, prepara o tornozelo para absorver impacto repetido e ajuda bastante quem sofre com canelite ou dor na sola do pé.",
      "O core entra como estabilizador. Prancha, prancha lateral e exercícios antirrotação seguram o tronco quando o cansaço chega, evitando aquela postura desmontada dos últimos quilômetros que rouba ritmo sem você perceber.",
      "Duas sessões por semana, de 30 a 40 minutos, já entregam a maior parte do benefício. Faça de preferência em dias de corrida leve ou depois do treino de corrida, para não chegar com as pernas cansadas no treino que exige qualidade. Se tiver dúvida sobre carga ou execução, vale uma orientação profissional."
    ]
  },
  {
    id: "respiracao-na-corrida-mitos",
    categoria: "Técnica",
    titulo: "Respiração na corrida: o que funciona e o que é mito",
    resumo: "Respirar pelo nariz não é regra, e não existe cadência mágica. O que importa é usar o diafragma e ajustar ao esforço.",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Poucos assuntos geram tanta regra sem fundamento quanto a respiração na corrida. A primeira coisa a esclarecer é que respirar só pelo nariz não é obrigatório. Conforme o esforço sobe, a demanda de ar aumenta e a boca precisa entrar, isso é fisiologia e não falta de técnica.",
      "O ponto que realmente muda o jogo é respirar com o diafragma, e não só com a parte alta do peito. Na respiração diafragmática a barriga expande na inspiração, o pulmão é usado por inteiro e você consegue mais ar com menos esforço muscular.",
      "Existe muita conversa sobre cadência respiratória, do tipo três passos inspirando e dois expirando. Pode ser um exercício útil para acalmar a respiração em treinos leves, mas não existe padrão mágico que sirva para todo mundo em qualquer ritmo.",
      "Ficar ofegante em treino leve costuma significar ritmo alto demais, não problema de respiração. Antes de tentar controlar o ar, tente reduzir a velocidade e ver se a respiração se organiza sozinha.",
      "Nas manhãs frias e úmidas da nossa região, o ar mais gelado pode incomodar a garganta de quem tem vias aéreas sensíveis. Usar uma gola ou bandana cobrindo a boca nos primeiros minutos ajuda a aquecer o ar. Se falta de ar ou chiado forem frequentes, vale procurar avaliação médica."
    ]
  },
  {
    id: "sono-e-recuperacao-do-corredor",
    categoria: "Recuperação",
    titulo: "Sono: o treino que acontece enquanto você dorme",
    resumo: "É dormindo que o corpo repara o músculo e consolida o ganho do treino. Noite curta derruba desempenho e aumenta risco de lesão.",
    imagem: "https://images.pexels.com/photos/28766046/pexels-photo-28766046.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "O treino é o estímulo, mas a adaptação acontece no descanso, e a maior parte dela durante o sono. É dormindo que o corpo repara fibras musculares, repõe estoques de energia e consolida o ganho daquele treino puxado de terça.",
      "Noites curtas de forma repetida cobram caro. A percepção de esforço aumenta, a coordenação piora e o risco de lesão sobe, além do humor e da vontade de treinar despencarem justamente quando você mais precisa de constância.",
      "Para a maioria dos adultos, a faixa de 7 a 9 horas dá conta. Quem está em fase de volume alto, preparando uma meia ou uma maratona, tende a precisar da parte de cima dessa faixa.",
      "Alguns ajustes simples resolvem muita coisa: horário parecido para dormir e acordar todos os dias, quarto escuro e fresco, e cortar a tela pelo menos meia hora antes de deitar. Café à tarde atrapalha mais gente do que se imagina, mesmo quem jura que não sente efeito.",
      "Se um dia a noite for ruim, não force um treino de qualidade na manhã seguinte. Trocar por um trote leve ou por um dia de descanso é decisão de quem treina com inteligência, não sinal de falta de disciplina."
    ]
  },
  {
    id: "como-escolher-sua-proxima-prova",
    categoria: "Provas",
    titulo: "Como escolher a sua próxima prova",
    resumo: "Distância compatível, prazo de preparo realista e percurso que combina com o seu momento. A escolha certa mantém a motivação viva.",
    imagem: "https://images.pexels.com/photos/18408962/pexels-photo-18408962.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Escolher uma prova é uma das melhores formas de dar propósito ao treino. Mas a escolha errada, seja pela distância ou pelo prazo, transforma o que era motivação em frustração.",
      "Comece pelo prazo. Para saltar de 5 km para 10 km, uma janela de 8 a 12 semanas costuma ser confortável. Para encarar uma meia maratona pela primeira vez, pense em 12 a 16 semanas com base já construída. Prazo apertado é o caminho mais curto para a lesão.",
      "Olhe o percurso com atenção. Provas planas favorecem quem busca tempo, enquanto percursos com subidas exigem preparo específico. Horário também conta: uma prova noturna pede rotina de alimentação diferente de uma largada às 7h.",
      "Considere o tamanho do evento. Provas grandes têm estrutura, público e energia contagiante, mas também mais gente no funil da largada. Provas menores, comuns aqui na região, oferecem clima mais tranquilo e são ótimas para estrear.",
      "Uma estratégia que funciona bem é montar o calendário com uma prova principal e duas ou três menores no caminho, usadas como treino e termômetro. No nosso calendário você encontra as opções de Joinville e do norte catarinense para montar essa sequência sem precisar viajar longe."
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
