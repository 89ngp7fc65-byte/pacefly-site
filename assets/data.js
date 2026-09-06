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
    titulo: "Tex Run estreia em Blumenau com vitórias de Felipe Tiago de Souza e Alessandra Dolberth",
    resumo: "Primeira edição da prova, criada para celebrar os 40 anos da Tex Cotton, levou corredores às ruas do bairro Vorstadt neste domingo, com percursos de 8 km e 4 km e ação solidária de doação de alimentos.",
    dataTxt: "30 de agosto de 2026",
    local: "Blumenau, SC",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Super Crono",
    fonteUrl: "https://www.supercrono.com.br/resultados/result/#/corrida-tex-run-2026",
    corpo: [
      "Blumenau recebeu neste domingo, 30 de agosto, a estreia da Tex Run, prova criada pela Tex Cotton para celebrar os 40 anos da companhia têxtil, uma das mais tradicionais do Vale do Itajaí. A largada saiu da própria sede da empresa, na Rua Itajaí, 948, no bairro Vorstadt, com percursos de 8 km e 4 km, caminhada e corrida kids.",
      "Nos 8 km, Adilson Alves Dolberth venceu o masculino com 27min20s, e Simoni Gabriel foi a campeã feminina, com 34min39s. Já nos 4 km, o mais rápido foi Felipe Tiago de Souza, com 13min43s, e Alessandra Alves Dolberth levou o título feminino, com 17min09s. Os tempos ainda constam como classificação extraoficial na plataforma de cronometragem.",
      "A prova também teve um lado solidário: cada inscrição incluiu a doação de 1 kg de alimento não perecível, revertido a entidades da região que trabalham com acolhimento de crianças.",
      "Para quem mora em Joinville e no norte catarinense, Blumenau fica a menos de duas horas de viagem, e a boa adesão da primeira edição da Tex Run sinaliza que ela deve voltar ao calendário do Vale do Itajaí em 2027."
    ]
  },
  {
    id: "ademicon-run-joinville-2026-resultado",
    categoria: "Na região",
    titulo: "Ademicon Run: Henzo Luccas e Bruna Macedo vencem os 4 km, Lucas Brandalise e Rafaela Benevenuto os 8 km",
    resumo: "A prova de rua com largada na Ademicon, em Joinville, reuniu corredores nos percursos de 8 km e 4 km neste domingo, com pódios definidos no masculino e no feminino em ambas as distâncias.",
    dataTxt: "30 de agosto de 2026",
    local: "Joinville, SC",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Km Eventos",
    fonteUrl: "https://www.km.esp.br/resultado/ademicon-run,1300826",
    corpo: [
      "A Ademicon Run, prova de rua organizada pela 42K Assessoria Esportiva com largada na sede da Ademicon, em Joinville, teve sua edição de 2026 disputada neste domingo, 30 de agosto, com percursos de 8 km e 4 km.",
      "Nos 8 km, o pódio masculino foi liderado por Lucas Brandalise, seguido por Luciano Manfio e Wagner Carvalho Cardozo Borges. No feminino, a vitória ficou com Rafaela Pereira Benevenuto, à frente de Rafaela Barbara da Silva e Aline da Silva.",
      "Já nos 4 km, Henzo Luccas venceu o masculino, com João Paulo Vieira e Leonardo de Carvalho dos Santos completando o pódio. No feminino, Bruna Macedo ficou em primeiro, seguida por Mariana Coelho Strutzel e Luciele Martins.",
      "A prova é uma das que a 42K Assessoria Esportiva organiza ao longo do ano em Joinville, ao lado de eventos como a JTC Run e a Corrida pela Vida, que seguem no calendário da cidade em setembro e outubro."
    ]
  },
  {
    id: "circuito-unimed-jaragua-2026-resultado",
    categoria: "Na região",
    titulo: "Circuito Unimed em Jaraguá do Sul tem Caio Henrique de Oliveira e Hailander da Silva como campeões",
    resumo: "A etapa jaraguaense do circuito catarinense, no Parque Linear Via Verde, definiu os vencedores dos 5 km e dos 10 km neste domingo, no masculino e no feminino.",
    dataTxt: "30 de agosto de 2026",
    local: "Jaraguá do Sul, SC",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "MyCrono",
    fonteUrl: "https://resultados.racetag.com.br/mycrono/#/circuito-unimed-jaragua-do-sul-2026",
    corpo: [
      "O Circuito de Corridas Unimed, um dos calendários mais capilarizados de Santa Catarina, passou por Jaraguá do Sul neste domingo, 30 de agosto, com largada no estacionamento do Parque Linear Via Verde e percursos de 5 km e 10 km.",
      "Nos 10 km, Hailander da Silva foi o campeão masculino, com o tempo de 35min35s, e Aldenia Marinho venceu o feminino, em 43min10s. Nos 5 km, Caio Henrique de Oliveira levou o título masculino, com 17min30s, e Lucimari Perin Miretzki foi a campeã feminina, com 20min00s.",
      "O Via Verde virou ponto de encontro dos corredores jaraguaenses nos últimos anos, e a escolha do local ajuda a explicar por que a etapa costuma atrair também gente de Guaramirim, Schroeder e Corupá, além do pessoal de Joinville que faz a viagem curta pela BR-280.",
      "O Circuito Unimed segue pela região com etapas em São Bento do Sul, em outubro, e em Mafra, em novembro, sempre com o mesmo formato de 10 km e 5 km."
    ]
  },
  {
    id: "maratona-floripa-2026-fim-de-semana-ponte-hercilio-luz",
    categoria: "Maratona de Floripa",
    titulo: "Maratona de Floripa tem ugandense e brasileira como campeões dos 42 km, com recorde de percurso",
    resumo: "Jonathan Akankwasa e Ana Catarina Amancio de Oliveira venceram a maratona, disputada neste domingo com cerca de 19 mil atletas de 26 países. No sábado, os títulos da meia maratona também saíram com recorde, para o queniano Nicolas Kosgei e a colombiana Laura Morales.",
    dataTxt: "29 e 30 de agosto de 2026",
    local: "Florianópolis, SC",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "NSC Total",
    fonteUrl: "https://www.nsctotal.com.br/esportes/veja-os-campeoes-da-prova-de-42-km-da-maratona-internacional-de-floripa",
    corpo: [
      "A Maratona Internacional de Floripa Fibra 2026 tomou conta da Beira-Mar Norte neste fim de semana, com pelotões de cerca de 19 mil corredores representando 26 países. A concentração ficou na Praça Sesquicentenário, com provas de 42 km, 21 km, 5 km e a divisão infantil.",
      "Nos 42 km, disputados no domingo, 30 de agosto, o ugandense Jonathan Akankwasa venceu com tempo recorde de 2h14min56s, superando o brasileiro Antonio Marco Pereira de Araújo, que buscava o tricampeonato e terminou em terceiro. No feminino, a brasileira Ana Catarina Amancio de Oliveira faturou o bicampeonato com marca também recorde, 2h40min35s.",
      "No sábado, 29 de agosto, a meia maratona também teve recordes de percurso: o queniano Nicolas Kiptoo Kosgei cravou 1h03min43s no masculino, e a colombiana Laura Manuela Morales fez 1h15min33s no feminino. Nos 5 km de domingo, Fernando Augusto Rodrigues da Silva e Isadora Martello Chiesorin foram os campeões.",
      "A edição trouxe um novo traçado com passagem sob a Ponte Hercílio Luz em todas as categorias adultas, além de chancela da World Athletics para a meia maratona e selo Road Race Label para os 42 km, que integram o Circuito Brasil Gigante. Para o corredor de Joinville e do norte catarinense, a Maratona de Floripa segue como a principal referência de prova grande dentro do estado."
    ]
  }
];

/* DICAS_ULTIMA_ROTACAO: 2026-08-30
   As 6 dicas são trocadas por completo a cada 2 semanas.
   Ao rodar a rotação, atualize a data acima. */
const PACEFLY_DICAS = [
  {
    id: "hidratacao-antes-durante-depois-do-treino",
    categoria: "Nutrição",
    titulo: "Hidratação: quanto beber antes, durante e depois do treino",
    resumo: "Com os dias esquentando no norte de Santa Catarina, a sede deixa de ser o único sinal de que o corpo precisa de água. Um planejamento simples de hidratação evita queda de rendimento e cãibra.",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Conforme o inverno vai ficando para trás e os treinos voltam a pegar sol mais cedo, a hidratação passa a pesar mais no resultado do treino. O problema é que a sede é um sinal atrasado: quando ela aparece, o corpo já está em déficit de líquido há um tempo.",
      "Antes de sair para correr, o ideal é beber um copo de água de 1 a 2 horas antes, dando tempo do corpo absorver sem deixar o estômago pesado na largada. Em treinos de até 40 minutos, isso costuma bastar, sem necessidade de carregar garrafa.",
      "Para treinos mais longos, a lógica muda: pequenos goles a cada 15 ou 20 minutos rendem mais do que beber muito de uma vez só. Em dias quentes ou treinos acima de uma hora, vale considerar um isotônico para repor também o sódio perdido no suor, principalmente para quem sua bastante.",
      "Depois do treino, o corpo continua precisando de reposição por um bom tempo. Uma referência simples é beber cerca de 1,5 litro de água para cada quilo perdido de suor, o que dá para estimar pesando-se antes e depois de um treino mais longo em dia quente.",
      "Sinais de que a hidratação ficou atrasada incluem urina bem escura, dor de cabeça depois do treino e sensação de cansaço fora do normal. Se isso virar rotina, vale rever a quantidade de água ao longo do dia, não só durante a corrida."
    ]
  },
  {
    id: "primeira-semana-de-treino-do-zero",
    categoria: "Treino",
    titulo: "Como montar sua primeira semana de treino do zero",
    resumo: "Sair do sedentarismo direto para a corrida contínua é o caminho mais rápido para uma lesão. Uma primeira semana bem planejada, com caminhada e corrida intercaladas, constrói uma base que dura.",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Quem decide começar a correr costuma cometer o mesmo erro: tentar correr o máximo possível já no primeiro treino. O resultado, na maioria das vezes, é dor no dia seguinte, desânimo e, em muitos casos, uma lesão que atrasa o começo em semanas.",
      "Um jeito mais inteligente de começar é intercalar caminhada rápida com pequenos trechos de corrida leve. Por exemplo: 1 minuto correndo e 2 minutos caminhando, repetindo por 20 a 25 minutos. O corpo vai se adaptando ao impacto aos poucos, sem sobrecarregar tendão e articulação de uma vez.",
      "Na primeira semana, três treinos já são suficientes, com um dia de descanso entre eles. Não é sobre quantidade, é sobre dar tempo do corpo se recuperar entre uma sessão e outra, principalmente para quem está destreinado há tempo.",
      "Vale prestar atenção ao ritmo: se não dá para manter uma conversa enquanto corre, o ritmo está forte demais para essa fase. As primeiras semanas são de adaptação, não de performance, e ir com calma agora é o que garante evolução mais à frente.",
      "A partir da segunda ou terceira semana, dá para aumentar aos poucos o tempo correndo e reduzir o de caminhada, sempre respeitando como o corpo responde. Quem persiste nesse ritmo gradual costuma chegar aos 30 minutos contínuos de corrida sem drama nenhum."
    ]
  },
  {
    id: "respiracao-na-corrida-evitar-pontada",
    categoria: "Técnica",
    titulo: "Respiração na corrida: o ritmo certo evita a pontada",
    resumo: "Aquela fisgada do lado da barriga tem explicação, e prevenção. Ajustar a respiração ao ritmo da passada é um dos jeitos mais simples de evitar a pontada que atrapalha o treino.",
    imagem: "https://images.pexels.com/photos/5319384/pexels-photo-5319384.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "A pontada, aquela dor aguda do lado da barriga, é uma das queixas mais comuns entre corredores, especialmente entre quem está começando. Ela costuma aparecer quando a respiração fica curta e descompassada da passada, ou quando o treino começa forte demais sem aquecimento.",
      "Uma respiração eficiente na corrida é mais profunda do que parece. Em vez de respirar só com o peito, vale puxar o ar enchendo também a barriga, o chamado respirar diafragmático, que aproveita melhor cada respiração e reduz a chance da pontada aparecer.",
      "Um padrão que costuma ajudar é respirar em ritmo de 3 passos inspirando e 2 expirando, alternando o lado em que o pé toca o chão na hora de soltar o ar. Isso distribui o impacto entre os dois lados do corpo e reduz a sobrecarga que costuma gerar a fisgada.",
      "Se a pontada aparecer no meio do treino, reduzir o ritmo e respirar fundo e devagar, empurrando o ar para fora com força, costuma aliviar em poucos minutos. Parar totalmente raramente é necessário, mas forçar o ritmo com dor é o caminho certo para piorar.",
      "Comer pouco antes de correr e começar o treino sem aquecimento são dois fatores que aumentam bastante a chance de pontada. Um aquecimento leve de 5 minutos e um intervalo de pelo menos uma hora após a última refeição já reduzem boa parte do problema."
    ]
  },
  {
    id: "quando-trocar-o-tenis-de-corrida",
    categoria: "Equipamento",
    titulo: "Hora de trocar o tênis: os sinais que o solado dá",
    resumo: "O amortecimento perde eficiência bem antes de o tênis parecer gasto por fora. Reconhecer os sinais certos evita lesão e também economiza um tênis novo antes da hora.",
    imagem: "https://images.pexels.com/photos/28766046/pexels-photo-28766046.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Uma referência comum para troca de tênis de corrida é entre 500 e 800 km de uso, mas esse número varia bastante conforme o peso do corredor, o tipo de pisada e a superfície mais usada nos treinos. Vale usar essa faixa como alerta, não como regra fixa.",
      "O desgaste que mais importa costuma ser invisível: a espuma do solado perde parte do amortecimento aos poucos, mesmo quando a parte de cima do tênis ainda parece nova. Um jeito simples de perceber é apertar o solado com o dedo, comparando com um tênis novo do mesmo modelo, se tiver como comparar.",
      "Sinais no corpo também avisam. Dor nova no joelho, no tornozelo ou na canela, sem mudança no volume ou intensidade do treino, pode ser o tênis pedindo aposentadoria antes mesmo de qualquer sinal visível de desgaste.",
      "Olhar o desgaste da sola por baixo ajuda a entender o tipo de pisada e se está uniforme. Desgaste muito concentrado de um lado só, ou uma quina gasta de forma irregular, é sinal de que vale conversar com quem vende o tênis sobre o modelo mais adequado para o seu movimento.",
      "Para quem treina bastante, ter dois pares em rodízio costuma prolongar a vida útil de cada um, já que a espuma do solado recupera parte do amortecimento durante o descanso entre um uso e outro. E o par novo nunca deve estrear direto numa prova."
    ]
  },
  {
    id: "motivacao-quando-a-vontade-de-treinar-sai-de-ferias",
    categoria: "Mente",
    titulo: "Manter a motivação quando a vontade de treinar sai de férias",
    resumo: "Toda rotina de treino tem semanas de baixa. Pequenos ajustes de meta, companhia e variedade ajudam a atravessar essas fases sem abandonar o hábito que você já construiu.",
    imagem: "https://images.pexels.com/photos/18408962/pexels-photo-18408962.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Mesmo quem corre há anos passa por semanas em que o despertador toca e a vontade de treinar simplesmente não aparece. Isso é normal, faz parte de qualquer rotina de longo prazo, e o problema não é sentir isso, é como reagir quando acontece.",
      "Um erro comum é tentar recuperar a motivação sozinho, treinando exatamente igual até a vontade voltar. Muitas vezes o que falta não é disciplina, é variedade: trocar o percurso de sempre, treinar em outro horário ou convidar alguém para correr junto já muda a sensação do treino.",
      "Ter uma meta concreta pela frente, como uma prova já inscrita no calendário, costuma funcionar melhor do que depender só da vontade do dia. A meta vira o motivo para sair de casa nos dias em que a motivação sozinha não seria suficiente.",
      "Correr em grupo, mesmo que só uma vez por semana, ajuda bastante nessas fases. O compromisso com outras pessoas, e a conversa durante o treino, tiram o peso da corrida como obrigação solitária e devolvem parte do prazer que fez você começar.",
      "Se a queda de vontade vier acompanhada de cansaço persistente, sono ruim ou irritação fora do comum, vale considerar que pode ser sinal de treino em excesso, não só desânimo passageiro. Nesses casos, um ou dois dias de descanso extra costumam resolver mais do que insistir."
    ]
  },
  {
    id: "aquecimento-e-alongamento-antes-e-depois",
    categoria: "Saúde",
    titulo: "Aquecimento e alongamento: o que fazer antes e depois de correr",
    resumo: "Alongar antes e aquecer depois é a ordem trocada que mais aparece entre corredores iniciantes. Entender a diferença entre os dois momentos ajuda a treinar com menos risco de lesão.",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Antes de correr, o corpo pede aquecimento, não alongamento parado. Um alongamento estático, segurando a posição por 20 ou 30 segundos, com o músculo ainda frio, pode reduzir a força momentânea da perna e não previne lesão como muita gente imagina.",
      "O aquecimento ideal antes do treino é dinâmico: uma caminhada rápida de 3 a 5 minutos, seguida de alguns exercícios de mobilidade, como elevação de joelho, chute no glúteo e passadas curtas indo aumentando o ritmo aos poucos até chegar na velocidade do treino.",
      "Depois de correr é o momento certo para o alongamento estático, com o músculo já aquecido e mais receptivo. Focar em panturrilha, posterior de coxa, quadríceps e quadril, segurando cada posição por cerca de 30 segundos, ajuda na recuperação e na manutenção da amplitude de movimento ao longo do tempo.",
      "Treinos mais longos ou intensos pedem ainda mais atenção a esse momento pós-treino. Pular o alongamento sistematicamente, semana após semana, é um dos fatores que colabora para o encurtamento muscular que aparece em corredores mais experientes.",
      "No fim das contas, a regra simples é: movimento antes, alongamento depois. Essa inversão de ordem, tão comum entre quem está começando, é um ajuste pequeno que reduz risco de lesão sem exigir nenhum equipamento ou tempo extra na rotina."
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
   Instagram/Twitter — esses robôs leem só o HTML estático, sem
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
