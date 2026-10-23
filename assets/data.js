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
    id: "maratona-pomerode-2026-campeoes-42k",
    categoria: "Resultados",
    titulo: "Juliana de Souza é bicampeã e Guilherme Czuy vence a Maratona Internacional de Pomerode",
    resumo: "Juliana de Souza conquistou o segundo título seguido nos 42 km e Guilherme Henrique Bueno Czuy venceu entre os homens, no domingo, 18 de outubro. A prova também contou pontos no Ranking PaceFly.",
    dataTxt: "18 de outubro de 2026",
    local: "Pomerode, SC",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Contra Relógio",
    fonteUrl: "https://contrarelogio.com.br/juliana-de-souza-e-guilherme-czuy-vencem-a-maratona-de-pomerode/",
    corpo: [
      "A maratona de 42 km da Maratona Internacional de Pomerode foi decidida no domingo, 18 de outubro. Entre as mulheres, Juliana de Souza venceu pelo segundo ano seguido e se consagrou bicampeã da prova. Entre os homens, o vencedor foi Guilherme Henrique Bueno Czuy.",
      "Segundo o Contra Relógio, Juliana de Souza fechou os 42 km em 3h10min32 e Guilherme Henrique Bueno Czuy, em 2h35min41. Os tempos são os divulgados pela reportagem, que não informa se são de tempo bruto ou líquido.",
      "Segundo o portal Contra Relógio, o percurso passou por ruas centrais, áreas verdes e pela Rota Enxaimel de Pomerode. O evento reuniu cerca de 8,5 mil atletas somando as provas de 42 km, 21 km e 6 km.",
      "Para quem acompanha o Ranking PaceFly: os 42 km e os 21 km de Pomerode contam pontos e entraram na apuração de 18 de outubro. Procure o seu nome em pacefly.com.br/ranking."
    ]
  },
  {
    id: "maratona-pomerode-2026-publico-meia-6k",
    categoria: "Provas e resultados",
    titulo: "Maratona de Pomerode reúne cerca de 8,5 mil atletas, e a prova de 6 km concentra 43% das inscrições",
    resumo: "Atletas de todos os estados e do Distrito Federal correram em Pomerode em 18 de outubro. Na meia maratona, Nayara Santana de Oliveira Borges e Patrick Gularte foram os vencedores.",
    dataTxt: "18 de outubro de 2026",
    local: "Pomerode, SC",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Mania de Corrida",
    fonteUrl: "https://www.maniadecorrida.com.br/2026/10/maratona-internacional-de-pomerode-2026.html",
    corpo: [
      "A Maratona Internacional de Pomerode reuniu cerca de 8,5 mil atletas em 18 de outubro, segundo a cobertura do portal Mania de Corrida, que classifica a edição como histórica. Corredores de todos os estados brasileiros e do Distrito Federal participaram.",
      "Entre as distâncias, o único percentual divulgado pela cobertura é o dos 6 km: a prova mais curta concentrou 43% dos inscritos. Os outros 57% se dividiram entre os 21 km, os 42 km e a Maratoninha Kids, para crianças e adolescentes de até 13 anos. As reportagens consultadas não trazem o número de inscritos de cada uma dessas provas.",
      "No Ranking PaceFly, que apura os 42 km e os 21 km, entraram 3.755 participações de Pomerode: 3.107 na meia maratona (82,7%) e 648 na maratona (17,3%). Os 6 km e a Maratoninha não pontuam e ficam fora desse número.",
      "Na meia maratona, os vencedores foram Nayara Santana de Oliveira Borges, no feminino, com 1h21min32, e Patrick Gularte, no masculino, com 1h11min02, tempos informados pelo Mania de Corrida. Nos 42 km, Juliana de Souza e Guilherme Henrique Bueno Czuy ficaram com os títulos.",
      "A meia maratona de Pomerode (21 km) conta pontos no Ranking PaceFly, assim como os 42 km. O percurso de 6 km não pontua."
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

/* DICAS_ULTIMA_ROTACAO: 2026-10-11
   As 6 dicas são trocadas por completo a cada 2 semanas.
   Ao rodar a rotação, atualize a data acima. */
const PACEFLY_DICAS = [
  {
    id: "hidratacao-estrategica-em-dias-de-calor",
    categoria: "Saúde",
    titulo: "Hidratação estratégica: quanto beber antes, durante e depois da prova",
    resumo: "Com as provas de outubro e novembro caindo em dias mais quentes, beber água só quando a sede aparece costuma ser tarde demais. Uma estratégia simples, pensada em três momentos, evita a queda de rendimento no fim do percurso.",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "A sede é um sinal atrasado: quando ela aparece, o corpo já está em déficit de líquido há um tempo. Por isso a hidratação de prova começa antes da largada, não no primeiro posto de água do percurso.",
      "Nas duas horas antes da prova, de 400 a 600 ml de água ou isotônico, aos poucos, preparam o corpo sem deixar o estômago pesado na hora de correr. Tomar tudo de uma vez só, na última hora, costuma sobrar como desconforto no início do percurso.",
      "Durante a prova, a regra prática é beber pequenos goles em todos os postos, mesmo sem sentir sede, em vez de esperar o calor apertar. Em provas de mais de uma hora, alternar água com isotônico ajuda a repor também o sódio perdido no suor.",
      "Depois de cruzar a chegada, a reposição não para: o corpo continua repondo líquido nas horas seguintes. Pesar-se antes e depois de um treino longo, uma vez, dá uma ideia real de quanto cada pessoa perde de peso em líquido, número que varia bastante de corredor para corredor.",
      "Dias de calor forte pedem mais atenção que o roteiro padrão. Se o treino ou a prova tiver sol forte e pouca sombra, vale aumentar um pouco o volume de cada gole e observar sinais como tontura, boca muito seca ou queda de ritmo sem causa aparente."
    ]
  },
  {
    id: "quando-trocar-o-tenis-de-corrida",
    categoria: "Equipamento",
    titulo: "Quando trocar o tênis de corrida: os sinais que o calendário não mostra",
    resumo: "Contar só os meses de uso engana, porque dois corredores no mesmo tênis desgastam ele de formas diferentes. O solado e a sensação na pisada contam uma história mais confiável do que a data da compra.",
    imagem: "https://images.pexels.com/photos/5319384/pexels-photo-5319384.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "A referência mais citada é a quilometragem, algo entre 500 e 800 km, mas esse número varia com o peso do corredor, o tipo de pisada e até o piso onde a maioria dos treinos acontece. Vale usar como alerta, não como regra fixa.",
      "O solado conta boa parte da história: desgaste irregular, mais de um lado do que do outro, ou a entressola comprimida e sem voltar ao formato original depois de apertada com o dedo, são sinais de que o amortecimento já perdeu parte da função.",
      "A sensação na pisada também avisa. Tênis que começam a parecer mais duros, ou que deixam uma dor nova no joelho, na canela ou no pé depois dos treinos de sempre, geralmente não é o corpo que mudou, é o tênis que já não absorve o impacto como antes.",
      "Para quem tem mais de um par, alternar entre eles nos treinos da semana estica a vida útil de cada um, porque o amortecimento tem tempo de descomprimir entre um uso e outro. Usar o mesmo par todos os dias acelera justamente o desgaste que faz menos sentido.",
      "Antes de uma prova importante, o ideal é nunca estrear tênis novo: o par usado na prova deve ter pelo menos duas ou três semanas de treino nas pernas, tempo suficiente para o corpo se adaptar sem o risco de bolha ou dor inesperada no dia."
    ]
  },
  {
    id: "sono-antes-da-prova-por-que-importa",
    categoria: "Mente",
    titulo: "Sono antes da prova: por que ele pesa tanto quanto o treino",
    resumo: "Muita gente otimiza treino, alimentação e tênis, mas dorme mal na semana da prova sem perceber o efeito disso no desempenho. O sono é onde boa parte da recuperação do treino realmente acontece.",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "É durante o sono profundo que o corpo repara o tecido muscular exigido pelo treino e consolida parte da adaptação que o treino buscou provocar. Dormir pouco na semana de prova, mesmo treinando certo, deixa essa recuperação incompleta.",
      "A noite que mais importa não é a véspera da prova, é a semana inteira antes dela. Uma noite mal dormida na véspera, por ansiedade ou nervosismo, afeta bem menos o resultado do que várias noites curtas acumuladas nos dias anteriores.",
      "Ainda assim, vale cuidar da véspera: deixar tudo organizado (roupa, número de peito, horário de saída) antes de dormir reduz a lista de pensamentos que mantêm a cabeça acesa na cama. Evitar telas e cafeína no fim da noite ajuda o corpo a relaxar mais rápido.",
      "Cochilos curtos nos dias que antecedem a prova, de 20 a 30 minutos, compensam parte de uma noite mais curta sem prejudicar o sono da noite seguinte. Cochilos longos demais, ou tarde da tarde, tendem a fazer o efeito contrário.",
      "Depois da prova, o sono volta a ser protagonista: é nos dias seguintes, dormindo bem, que o corpo processa o desgaste do esforço maior que teve. Pular essa fase de recuperação é um dos motivos mais comuns de lesão na prova seguinte."
    ]
  },
  {
    id: "primeira-meia-maratona-como-comecar",
    categoria: "Treino",
    titulo: "Primeira meia maratona: como dar o salto do 10 km para os 21 km",
    resumo: "Com a Maratona Internacional de Pomerode e outras provas de distância maior no calendário dos próximos meses, cresce a vontade de encarar os 21 km pela primeira vez. O salto de distância pede um plano, não só vontade.",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Quem já corre 10 km com regularidade tem a base necessária para começar a treinar os 21 km, mas o salto direto no dia da prova, sem nunca ter passado dos 10 km em treino, é a receita mais comum de sofrer bastante no segundo pelotão da meia maratona.",
      "O ponto central da preparação é o treino longo semanal, que cresce pouco a pouco ao longo das semanas até chegar perto de 16 a 18 km antes da prova, sempre em ritmo confortável, bem mais lento do que o ritmo de prova.",
      "Correr rápido todo treino longo, tentando simular a prova, cansa mais do que ensina. O treino longo serve para o corpo se acostumar ao tempo em movimento e ao desgaste progressivo, não para testar velocidade.",
      "Nas duas últimas semanas antes da prova, a distância dos treinos cai, mesmo que o corpo pareça pronto para mais. Esse período de polimento garante que as pernas cheguem descansadas e não desgastadas pelo próprio treino de preparação.",
      "No dia da prova, o erro mais comum de quem estreia nos 21 km é sair no ritmo da emoção da largada. Guardar energia para os últimos 5 km, em vez de gastar tudo nos primeiros, costuma decidir se a chegada é comemorada ou sofrida."
    ]
  },
  {
    id: "alimentacao-na-vespera-e-na-manha-da-prova",
    categoria: "Saúde",
    titulo: "O que comer na véspera e na manhã da prova",
    resumo: "A refeição perfeita no dia da prova não compensa semanas de treino mal alimentado, mas uma escolha errada na véspera ou na manhã pode, sim, arruinar uma boa preparação. Duas refeições simples evitam a maioria dos problemas.",
    imagem: "https://images.pexels.com/photos/18408962/pexels-photo-18408962.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Na véspera, o jantar deve ser parecido com o que o corpo já conhece: carboidrato de fácil digestão (arroz, massa, batata), uma porção moderada de proteína magra e pouca fibra ou gordura em excesso, que pedem mais tempo de digestão.",
      "Testar um prato completamente novo na noite antes da prova é um risco que não compensa. O estômago reage melhor ao que já foi comido antes de um treino longo, mesmo que a receita não seja a mais sofisticada do cardápio.",
      "Na manhã da prova, a refeição ideal acontece de 2 a 3 horas antes da largada, com algo leve e já testado em treino: pão com geleia, banana, aveia com pouca fruta. Esse intervalo dá tempo para o corpo absorver a energia sem o desconforto de correr de estômago cheio.",
      "Café, para quem já tem o hábito, pode continuar fazendo parte da rotina da manhã, mas não é o momento de descobrir se cafeína em jejum cai bem. Novidade na manhã da prova é sempre um risco maior do que o ganho que promete.",
      "Para provas que passam de uma hora, levar um gel ou uma fruta fácil de comer durante o percurso ajuda a manter a energia na segunda metade, desde que esse mesmo gel já tenha sido testado em algum treino longo antes, nunca estreado na prova."
    ]
  },
  {
    id: "dor-no-joelho-ajustes-de-tecnica",
    categoria: "Técnica",
    titulo: "Dor no joelho na corrida: ajustes de técnica que ajudam a proteger a articulação",
    resumo: "Boa parte da dor no joelho do corredor não vem do joelho em si, vem de como o resto do corpo se move durante a passada. Pequenos ajustes de técnica aliviam a cobrança sobre a articulação sem exigir parar de treinar.",
    imagem: "https://images.pexels.com/photos/28766046/pexels-photo-28766046.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "A passada muito longa, com o pé pousando bem na frente do corpo, aumenta o impacto que chega ao joelho a cada passo. Encurtar um pouco a passada e deixar o pé pousar mais perto do corpo reduz essa sobrecarga de forma simples.",
      "A cadência (quantos passos por minuto) tem efeito parecido: aumentar levemente o número de passos, mantendo o mesmo ritmo, tende a suavizar o impacto por passada. Isso costuma acontecer naturalmente conforme o corredor ganha experiência, mas também pode ser treinado de forma consciente.",
      "O fortalecimento do quadril e da parte lateral da coxa, músculos que estabilizam o joelho durante a corrida, costuma fazer diferença maior do que qualquer ajuste só na pisada. Exercícios simples de ponte e elevação lateral de perna, feitos duas vezes por semana, já ajudam.",
      "Dor que aparece sempre no mesmo ponto do treino, ou que piora conforme a distância aumenta, pede atenção redobrada: não é normal e não deve ser tratada só com analgésico para continuar treinando. Esse tipo de dor tende a crescer, não a desaparecer sozinha.",
      "Se a dor persistir mesmo depois de ajustes de técnica e de alguns dias de descanso, o caminho certo é uma avaliação com profissional de saúde especializado em corrida, que consegue identificar a causa real, em vez de insistir em um palpite sem confirmação."
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
