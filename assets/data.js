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

// PACEFLY_EVENTOS: versão corrigida (links oficiais reais)
// Substitua todo o array PACEFLY_EVENTOS do seu assets/data.js
// por este bloco abaixo (do "const PACEFLY_EVENTOS = [" até o "];")
// ============================================================

const PACEFLY_EVENTOS = [
  {
    "id": "corrida-do-fogo-mafra",
    "nome": "1ª Corrida do Fogo",
    "dia": "12",
    "mes": "09",
    "mesTxt": "SET",
    "ano": 2026,
    "dataExtenso": "12 de setembro de 2026",
    "cidade": "Mafra, SC",
    "largada": "Quartel do Corpo de Bombeiros de Mafra, Av. Pref. Frederico Heyse, 111, Centro, Mafra-SC. Entrega de kits das 9h às 19h30 no local de largada, aquecimento das 19h30 às 20h, largada dos 5 km às 20h e premiação a partir das 21h",
    "organizador": "CJR Academia e Eventos",
    "edicao": "1ª edição",
    "distancias": ["5 km"],
    "descricao": "Estreia da Corrida do Fogo em Mafra, no planalto norte catarinense, com percurso noturno de 5 km pelas principais ruas do município, largada às 20h no Quartel do Corpo de Bombeiros. A prova comemora o centenário do CBMSC e a renda líquida das inscrições vai para a Associação de Bombeiros Comunitários de Mafra. Limite técnico de 500 inscritos e tempo máximo de 1 hora de prova. As inscrições se encerraram em 04 de setembro de 2026.",
    "oficialUrl": "https://www.ticketsports.com.br/e/1a-corrida-do-fogo-mafra-sc-87412"
  },
  {
    "id": "balneario-shopping-night-run",
    "nome": "Balneário Shopping Night Run",
    "dia": "12",
    "mes": "09",
    "mesTxt": "SET",
    "ano": 2026,
    "dataExtenso": "12 de setembro de 2026",
    "cidade": "Balneário Camboriú, SC",
    "largada": "Balneário Shopping, Av. Santa Catarina, 1, bairro dos Estados. Concentração às 23h30, largada dos 5 km às 23h50 e dos 2,5 km às 23h59",
    "organizador": "Number Esportes",
    "edicao": "Edição 2026",
    "distancias": ["5 km", "2,5 km"],
    "descricao": "Corrida noturna com percurso montado inteiramente dentro do Balneário Shopping, no estacionamento e no mall, em ambiente iluminado e fechado ao trânsito. São 250 vagas para os 5 km e 250 para os 2,5 km, com tempo limite de 1 hora e premiação do 1º ao 5º lugar no geral de cada distância. O kit inclui camiseta, medalha, squeeze, chip e número de peito, e a retirada acontece no próprio shopping das 10h às 22h do dia da prova.",
    "oficialUrl": "https://www.ticketsports.com.br/e/BALNE%C3%81RIO+SHOPPING+NIGHT+RUN-87850"
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
    "largada": "Joinville Tênis Clube, Rua Aubé, 177, Saguaçu, às 7h",
    "organizador": "42K Assessoria Esportiva",
    "edicao": "Edição 2026",
    "distancias": ["11 km", "3,5 km", "Kids"],
    "descricao": "Prova de rua com largada às 7h no Joinville Tênis Clube, na Rua Aubé, 177, bairro Saguaçu, com percursos de 11 km e 3,5 km e corrida kids logo depois da chegada do último adulto, a partir das 8h30. Os 11 km sobem pela Rua Dona Francisca e voltam pelo Boa Vista, e os 3,5 km fazem um circuito curto pelas ruas do entorno do clube. O limite é de 1.100 atletas e o tempo máximo de prova é de 1h30.",
    "oficialUrl": "https://www.ticketsports.com.br/e/JTC+RUN+2026+-+JOINVILLE+-+SC-86176"
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
    "largada": "Praça Lauro Carneiro de Loyola, Avenida Paraná, 96, em frente ao Hotel Candeias, às 7h",
    "organizador": "Mons Ultra Trail",
    "edicao": "Edição 2026",
    "distancias": ["16 km", "10 km", "5 km", "Caminhada 3 km", "Kids"],
    "descricao": "Prova tradicional do litoral norte catarinense, com arena montada na Praça Lauro Carneiro de Loyola, na Avenida Paraná, 96, perto da lagoa de Barra Velha. Largada única às 7h para 16 km, 10 km e 5 km, com caminhada de 3 km e corrida kids no mesmo local. O tempo limite é de 3 horas, e os 16 km fazem dela uma boa opção para quem quer testar uma distância acima dos 10 km sem encarar a meia maratona.",
    "oficialUrl": "https://www.ticketsports.com.br/e/barra-run-2026-74328"
  },
  {
    "id": "corridas-do-bem-jaragua-do-sul",
    "nome": "Corridas do Bem SESI Saúde - Etapa Jaraguá do Sul",
    "dia": "13",
    "mes": "09",
    "mesTxt": "SET",
    "ano": 2026,
    "dataExtenso": "13 de setembro de 2026",
    "cidade": "Jaraguá do Sul, SC",
    "largada": "Bernardo Dornbusch, 1400, Vila Lalau, às 7h",
    "organizador": "SESI/SC",
    "edicao": "Edição 2026",
    "distancias": ["10 km", "5 km", "Maratoninha", "Caminhada"],
    "descricao": "Etapa jaraguaense do Circuito Corridas do Bem, realizado pelo SESI/SC em 16 cidades catarinenses ao longo de 2026. A prova reúne percursos de 5 km e 10 km para adultos, maratoninha para crianças e adolescentes de 2 a 13 anos e trajeto de caminhada. Parte do valor das inscrições é repassado a entidades beneficentes de Jaraguá do Sul. A etapa inclui o Festival Som em Movimento, com atrações musicais no espaço da prova. É a última das três etapas do circuito no Norte de SC nesta temporada, após Joinville em julho e São Bento do Sul em agosto.",
    "oficialUrl": "https://sesisc.org.br/pt-br/eventos/sesi-corridas-do-bem-jaragua-do-sul"
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
    "id": "garuva-run",
    "nome": "Garuva Run",
    "dia": "27",
    "mes": "09",
    "mesTxt": "SET",
    "ano": 2026,
    "dataExtenso": "27 de setembro de 2026",
    "cidade": "Garuva, SC",
    "largada": "Praça Pedro Ivo Campos, Avenida Celso Ramos, em frente ao estacionamento da Paróquia São João Batista. Largada dos 14 km às 7h, dos 7 km às 7h10 e dos 3 km às 7h20",
    "organizador": "KM Eventos Esportivos",
    "edicao": "Edição 2026",
    "distancias": ["14 km", "7 km", "3 km"],
    "descricao": "Prova em Garuva, a menos de 40 minutos de Joinville, com percursos que passam pelo verde da Serra do Mar, por nascentes e rios da região. Os 14 km contornam a Ponte de Arame e voltam pela Estrada Colonial Otto Roder, os 7 km vão até a Pedra da Judite e retornam pelo mesmo trajeto, e os 3 km seguem em direção a Garuva acima. As inscrições vão até 20 de setembro, e o kit básico traz medalha, número de peito e chip, com opção de kit completo com camiseta. Há retirada de kit em Joinville, em local a ser divulgado pela organização.",
    "oficialUrl": "https://www.ticketsports.com.br/e/GARUVA+RUN-87861"
  },
  {
    "id": "corrida-solida-rio-negrinho",
    "nome": "3ª Corrida de Rua Solida",
    "dia": "27",
    "mes": "09",
    "mesTxt": "SET",
    "ano": 2026,
    "dataExtenso": "27 de setembro de 2026",
    "cidade": "Rio Negrinho, SC",
    "largada": "Mak Center, Rua Capitão Osmar Romão da Silva, 303, Centro. Largada dos 10 km às 7h30 e dos 5 km às 7h40",
    "organizador": "CJR Academia e Eventos",
    "edicao": "3ª edição",
    "distancias": ["10 km", "5 km"],
    "descricao": "Terceira edição da Corrida Solida em Rio Negrinho, no planalto norte catarinense, com largada no Mak Center, na Rua Capitão Osmar Romão da Silva, 303. Os 10 km saem às 7h30 e os 5 km às 7h40, com aquecimento coletivo a partir das 7h e premiação às 9h. O kit tem número de peito, chip descartável e camiseta, com retirada em 26 de setembro no próprio Mak Center, das 8h às 16h. As inscrições vão até 18 de setembro ou até o limite de 800 atletas.",
    "oficialUrl": "https://www.ticketsports.com.br/e/3%C2%AA+CORRIDA+DE+RUA+SOLIDA-86668"
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
    id: "ademicon-run-joinville-2026-resultado",
    categoria: "Na região",
    titulo: "Ademicon Run: Henzo Luccas e Bruna Macedo vencem os 4 km, Lucas Brandalise e Rafaela Benevenuto os 8 km",
    resumo: "A prova de rua com largada na Ademicon, em Joinville, reuniu corredores nos percursos de 8 km e 4 km neste domingo, com pódios definidos no masculino e no feminino em ambas as distâncias.",
    dataTxt: "30 de agosto de 2026",
    local: "Joinville, SC",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "42K Assessoria Esportiva",
    fonteUrl: "https://42k.esp.br",
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
    fonteNome: "Circuito de Corridas Unimed",
    fonteUrl: "https://circuitodecorridaunimed.com.br/",
    corpo: [
      "O Circuito de Corridas Unimed, um dos calendários mais capilarizados de Santa Catarina, passou por Jaraguá do Sul neste domingo, 30 de agosto, com largada no estacionamento do Parque Linear Via Verde e percursos de 5 km e 10 km.",
      "Nos 10 km, Hailander da Silva foi o campeão masculino, com o tempo de 35min35s, e Aldenia Marinho venceu o feminino, em 43min10s. Nos 5 km, Caio Henrique de Oliveira levou o título masculino, com 17min30s, e Lucimari Perin Miretzki foi a campeã feminina, com 20min00s.",
      "O Via Verde virou ponto de encontro dos corredores jaraguaenses nos últimos anos, e a escolha do local ajuda a explicar por que a etapa costuma atrair também gente de Guaramirim, Schroeder e Corupá, além do pessoal de Joinville que faz a viagem curta pela BR-280.",
      "O Circuito Unimed segue pela região com etapas em São Bento do Sul, em outubro, e em Mafra, em novembro, sempre com o mesmo formato de 10 km e 5 km."
    ]
  },
  {
    id: "garuva-run-2026",
    categoria: "Na região",
    titulo: "Garuva Run leva corredores para dentro da Serra do Mar em 27 de setembro",
    resumo: "A prova sai da Praça Pedro Ivo Campos, a menos de 40 minutos de Joinville, com percursos de 14 km, 7 km e 3 km. Os 14 km contornam a Ponte de Arame e voltam pela Estrada Colonial Otto Roder.",
    dataTxt: "27 de setembro de 2026",
    local: "Garuva, SC",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Ticket Sports",
    fonteUrl: "https://www.ticketsports.com.br/e/GARUVA+RUN-87861",
    corpo: [
      "A KM Eventos Esportivos confirmou a Garuva Run para 27 de setembro, com arena na Praça Pedro Ivo Campos, na Avenida Celso Ramos, em frente ao estacionamento da Paróquia São João Batista. Para quem sai de Joinville, é menos de 40 minutos de estrada, o que coloca a prova na faixa de viagem curta que dá para fazer na manhã do próprio domingo.",
      "São três percursos. Os 14 km contornam a Ponte de Arame, ponto que a própria organização sinaliza como de atenção, e retornam pela Estrada Colonial Otto Roder. Os 7 km vão até a Pedra da Judite e voltam pelo mesmo trajeto. Os 3 km seguem em direção a Garuva acima, também com retorno pelo mesmo caminho.",
      "As largadas são escalonadas: 7h para os 14 km, 7h10 para os 7 km e 7h20 para os 3 km. O tempo limite dos 14 km é de 2h20, o que equivale a um pace máximo de 10 min/km. A premiação começa às 10h, com troféus do 1º ao 5º lugar no geral e do 1º ao 3º nas categorias por idade.",
      "O que diferencia essa prova das corridas urbanas da região é o cenário. O traçado atravessa uma área de mata preservada da Serra do Mar, com nascentes e rios ao longo do caminho. Há postos de hidratação no percurso e na chegada, mas a organização sugere que quem corre com cinta ou mochila leve a própria água. As inscrições vão até 20 de setembro, e haverá um ponto de retirada de kit em Joinville, ainda a ser anunciado."
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
