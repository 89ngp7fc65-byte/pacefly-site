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
    id: "10a-meia-maratona-piracity-resultados-2026",
    categoria: "10ª Meia Maratona de Piracity",
    titulo: "10ª Meia Maratona de Piracity reúne 750 corredores em Pirabeiraba, com quase a metade do pelotão formada por mulheres",
    resumo: "A 10ª edição da Meia Maratona de Piracity levou 750 corredores aos 21 km, 10 km e 5 km do distrito joinvilense de Pirabeiraba no domingo, 8 de novembro. As mulheres somaram 48% do pelotão. Veja os pódios das três distâncias e os tempos médios por gênero.",
    dataTxt: "8 de novembro de 2026",
    local: "Pirabeiraba, Joinville, SC",
    imagem: "https://images.pexels.com/photos/18408962/pexels-photo-18408962.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "L'quelibre e KM Eventos Esportivos (organização da prova)",
    fonteUrl: "https://www.ticketsports.com.br/e/10o-meia-maratona-de-piracity-87885",
    corpo: [
      "A décima edição da Meia Maratona de Piracity, com largada e chegada nos fundos do Colégio Estadual Olavo Bilac, no distrito de Pirabeiraba, reuniu 750 corredores no domingo, 8 de novembro, somando as distâncias de 21 km, 10 km e 5 km. O resultado oficial, publicado pela organização, mostra um pelotão bastante equilibrado: 360 mulheres completaram alguma das três distâncias, 48% do total.",
      "Nos 21 km, a distância mais longa do dia, Vitor Hugo Wielewski, de 25 anos, foi o primeiro a cruzar a linha de chegada, com 1h17min22s, seguido por Diego Maneira, em 1h21min17s, e João Victor Galdino, em 1h22min56s. No feminino, Rachel Gomes, de 40 anos, liderou com 1h37min43s, com Roseli dos Santos em segundo lugar, a apenas 7 segundos, e Josiany Moreira em terceiro.",
      "Nos 10 km, o pódio masculino ficou com Vitor Estivalet de Souza (35min17s), Jean Amaral Lourenço (35min50s) e Joel Rodrigues, de 54 anos, que fechou o top 3 com 36min07s. No feminino, Rafaela B. Galdino venceu com 44min17s, menos de 10 segundos na frente de Rafaela Rosa Neitzel, com Juliana Aparecida Soares Dalpra em terceiro.",
      "Já nos 5 km, Gabriel Lima, de 26 anos, foi o mais rápido do dia entre todas as distâncias, com 17min18s, seguido por João Paulo de Lara Novakoski, de apenas 16 anos, e Roger Patrick Terres. No feminino, Ana Letícia Ferreira Vilela venceu com 21min33s, com Bianca Vieira Miranda em segundo lugar e Vanessa Rodrigues Pereira dos Santos em terceiro.",
      "Olhando para os tempos médios, o pelotão masculino cruzou a chegada em 28min34s nos 5 km, 51min36s nos 10 km e 1h50min11s nos 21 km, enquanto o pelotão feminino fechou em 34min40s, 1h02min24s e 2h01min49s nas mesmas distâncias, respectivamente. A prova, que também distribuiu premiação a partir das 8h30 e incluiu a doação de 1 kg de alimento não perecível na inscrição, reforça o calendário de corridas de Joinville às vésperas do verão."
    ]
  },
{
    id: "chuva-impacta-treinos-e-provas-na-regiao",
    categoria: "Clima e corrida",
    titulo: "Com El Niño elevando a chuva de novembro em SC, veja os cuidados para treinar e competir na região",
    resumo: "Santa Catarina vive um novembro mais chuvoso que o normal por causa do El Niño, com temporais, granizo e vento forte no fim de semana de 7 e 8/11. Veja os cuidados práticos para treinar e competir na chuva na região de Joinville e o que a Epagri/Ciram e o INMET esperam do tempo nos próximos dias.",
    dataTxt: "3 a 15 de novembro de 2026",
    local: "Joinville e região, SC",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Instituto Nacional de Meteorologia (INMET)",
    fonteUrl: "https://portal.inmet.gov.br/noticias/inmet-divulga-previsão-para-semana-de-03-a-10-de-novembro-de-2026",
    corpo: [
      "Novembro começou instável em Santa Catarina. O sábado, 7 de novembro, concentrou o trecho mais tenso da semana: uma frente fria trouxe chuva forte desde a madrugada, com risco de granizo e rajadas de vento entre 70 e 90 km/h em diversos pontos do estado. É um sintoma do pano de fundo da estação, o El Niño, que deixa novembro mais chuvoso e mais sujeito a temporais isolados do que a média histórica na região Norte de Santa Catarina.",
      "Antes de sair para o treino em dias de instabilidade, o primeiro cuidado é conferir o boletim da Defesa Civil do município e os apps de radar meteorológico, não só a previsão do dia, mas os alertas em tempo real, que costumam antecipar temporais isolados em poucas horas. Vale também evitar, nesses dias, ruas e trechos historicamente sujeitos a alagamento na rota de treino, e ter sempre um plano B pronto: treino indoor, esteira, ou mudança de horário para fugir da janela de chuva mais forte prevista.",
      "Durante a corrida, o risco mais sério em dia de temporal é o raio: ao ouvir trovão ou ver relâmpago, a orientação é interromper o treino e buscar abrigo fechado imediatamente, evitando áreas abertas, postes, árvores isoladas e qualquer estrutura metálica alta. Em piso encharcado, reduzir o ritmo nos trechos de poça, grelha e faixa de pedestre pintada ajuda a evitar escorregões, já que essas superfícies perdem aderência rapidamente na chuva. Para quem treina com o céu fechado ou no fim de tarde chuvoso, roupas claras ou com elementos refletivos aumentam a segurança em cruzamentos.",
      "A chuva não elimina o risco de desidratação: mesmo em dias mais frescos, repor líquidos e eletrólitos continua necessário, principalmente em treinos longos. Depois do treino, trocar a roupa molhada e se secar rapidamente evita que o corpo perca temperatura além do normal, risco que aumenta quando a chuva vem acompanhada de vento forte. Meias e tênis encharcados por tempo prolongado também aumentam o risco de bolha e assadura, por isso vale levar um par seco de reserva nos treinos mais longos em dia de previsão de chuva.",
      "Para quem vai competir, provas da região costumam monitorar de perto os alertas da Defesa Civil na semana da largada, e podem ajustar horário, percurso ou pontos de hidratação em cima da hora em caso de temporal. Vale acompanhar os canais oficiais da organização no dia anterior e na manhã da prova, não só a previsão divulgada dias antes.",
      "Como complemento, a previsão de 5 dias da Epagri/Ciram, divulgada em 7 de novembro, indica tempo estável nos dois primeiros dias desta semana, segunda (9/11) e terça (10/11), com sol, poucas nuvens e mínimas entre 2°C e 13°C, incluindo risco de geada nas áreas altas do Planalto Norte e do Planalto Sul, e uma quarta-feira (11/11) ainda majoritariamente estável, mas com mais nuvens entre o Planalto e o Litoral e chance de chuva isolada. A segunda metade da semana (12 a 15/11) ainda não tinha sido detalhada pela Ciram até o momento desta apuração, nem havia volume de chuva específico divulgado para a região de Joinville. No panorama do mês, o INMET projeta para novembro de 2026 chuva acima da média em toda a Região Sul, com anomalia positiva de pelo menos 75 mm e temperatura entre 0,6°C e 1,5°C acima da média, reforçando o risco de temporais isolados com vendaval, granizo e chuva intensa em curtos períodos.",
      "Vale reforçar: a previsão de curto prazo pode mudar de um dia para o outro nesta época do ano, então o canal mais confiável para quem vai treinar ou competir na região continua sendo o boletim oficial da Defesa Civil do próprio município, atualizado conforme a situação evolui."
    ]
  },
{
    id: "boston-half-2026-samuel-e-belayneh",
    categoria: "Boston Half",
    titulo: "Habtom Samuel corre a primeira meia maratona abaixo de 1 hora já registrada em Massachusetts na Boston Half 2026",
    resumo: "O eritreu Habtom Samuel venceu a Boston Half 2026 com 59min49s, recorde do percurso e a primeira meia maratona abaixo de 1 hora já cronometrada no estado de Massachusetts. A etíope Fentaye Belayneh conquistou o tricampeonato feminino, e Daniel Romanchuk bateu o recorde da prova entre os cadeirantes.",
    dataTxt: "8 de novembro de 2026",
    local: "Boston, Massachusetts, Estados Unidos",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "The Boston Globe",
    fonteUrl: "https://www.bostonglobe.com/2026/11/08/sports/boston-half-marathon-photos-times-records/",
    corpo: [
      "A edição de 2026 da Boston Half, disputada no domingo, 8 de novembro, com largada e chegada no Franklin Park, teve um resultado histórico no masculino: o eritreu Habtom Samuel venceu com 59min49s, 45 segundos abaixo do recorde anterior do percurso. Segundo a organização, foi a primeira vez que uma meia maratona cronometrada no estado de Massachusetts terminou abaixo de 1 hora.",
      "No feminino, a etíope Fentaye Belayneh confirmou o favoritismo e venceu com 1h09min14s, conquistando o tricampeonato consecutivo da prova.",
      "Entre os cadeirantes, o americano Daniel Romanchuk também bateu o recorde do evento, com 45min53s, na sua terceira vitória na Boston Half. No feminino da categoria, Yen Hoang cruzou a linha em 1h02min54s, em um fotofinish com Jenna Ayers, que marcou exatamente o mesmo tempo.",
      "A prova reuniu mais de 7.300 atletas que completaram o percurso, vindos de 104 países e 46 estados americanos, reafirmando o alcance internacional de uma das principais provas de meia distância dos Estados Unidos.",
      "A Boston Half é apresentada pelo Dana-Farber Cancer Institute e pelo Jimmy Fund, parceria que já levou corredores do Team Dana-Farber a arrecadar mais de US$ 12 milhões para pesquisa e tratamento do câncer desde que o acordo com a Boston Athletic Association começou, em 2003."
    ]
  },
{
    id: "maratona-de-atenas-2026-recordes-e-mundial-2030",
    categoria: "Maratona de Atenas",
    titulo: "Etíopes dominam o pódio da Maratona de Atenas 2026, que bate recordes e reforça a candidatura da cidade ao Mundial de 2030",
    resumo: "A 43ª Maratona Autêntica de Atenas reuniu mais de 85 mil corredores entre todas as distâncias do fim de semana e teve recordes do percurso quebrados no masculino e no feminino, com dobradinha etíope. O governador da região de Ática também usou a edição de 2026 para reforçar a candidatura da cidade a sediar o primeiro Mundial de Maratona independente, em 2030.",
    dataTxt: "8 de novembro de 2026",
    local: "Atenas, Grécia",
    imagem: "https://images.pexels.com/photos/5319384/pexels-photo-5319384.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Greek City Times",
    fonteUrl: "https://greekcitytimes.com/2026/11/08/athens-authentic-marathon-2026-course-records",
    corpo: [
      "A 43ª edição da Maratona Autêntica de Atenas, disputada no domingo, 8 de novembro, reuniu mais de 85 mil corredores somando todas as distâncias do fim de semana, a maratona de 42 km e as provas de 5 km e 10 km, um novo recorde de participação para o evento.",
      "No masculino, o etíope Manazut Siyoum Taferi venceu com 2h10min03s, batendo o recorde do percurso que resistia desde 2023. O pódio foi completado por outro etíope, Asefa Tefera Mengisha, em 2h10min18s, e pelo queniano Patrick Keter Kiplagat, em 2h11min22s.",
      "No feminino, a dobradinha etíope se repetiu: Yatane Kormose Dusa venceu com 2h30min04s, também superando o recorde anterior do percurso, seguida por Tsiyon Abebe Temesgen, em 2h30min29s. A americana Jane Chemkemboy Bareikis completou o pódio, em 2h32min59s.",
      "Além do resultado esportivo, a Maratona de Atenas é tratada pela organização como vitrine internacional de turismo esportivo para a Grécia, atraindo corredores de fora do país para a cidade na mesma semana da prova.",
      "A edição de 2026 também teve um recado político: Nikos Hardalias, governador da região de Ática, afirmou que a organização deste ano ajuda a confirmar que Atenas vai sediar o primeiro Campeonato Mundial de Maratona independente da World Athletics, marcado para 2030. A entidade internacional anunciou em abril de 2026 que abriu negociações formais com a cidade para a sede, mas o acordo ainda não foi formalmente fechado."
    ]
  },
  {
    id: "maratona-nova-york-2026-almgren-chepkirui",
    categoria: "Maratona de Nova York",
    titulo: "Sueco Andreas Almgren vence a Maratona de Nova York na primeira maratona da carreira",
    resumo: "Em sua estreia na distância, o sueco Andreas Almgren cruzou a linha de chegada em 2h06min01s e se tornou o primeiro europeu a vencer a prova desde 1996. No feminino, a queniana Sheila Chepkirui conquistou o bicampeonato na cidade, com 2h24min36s.",
    dataTxt: "1º de novembro de 2026",
    local: "Nova York, Estados Unidos",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    fonteNome: "Marathons.com",
    fonteUrl: "https://www.marathons.com/pt/maratona-de-new-york/andreas-almgren-e-sheila-chepkirui-dominam-a-maratona-de-nova-iorque-2026-todos-os-resultados_8479",
    corpo: [
      "A edição de 2026 da Maratona de Nova York, disputada no domingo, 1º de novembro, marcou o cinquentenário do tradicional percurso pelos cinco distritos da cidade, com uma pequena alteração no trajeto pelo Bronx, a primeira em quinze anos. As condições do dia favoreceram tempos rápidos, com cerca de 7 graus e sem vento.",
      "No masculino, o sueco Andreas Almgren, recordista europeu dos 5.000 m, disputava a primeira maratona da carreira e surpreendeu ao vencer com 2h06min01s, deixando o italiano Yemaneberhan Crippa (2h06min14s) e o lesotense Kamohelo Mofolo (2h06min26s) na sequência. Almgren se tornou o primeiro europeu a vencer a prova desde o italiano Giacomo Leone, em 1996, e o primeiro sueco da história a conquistar o título. O queniano Benson Kipruto, defensor do título, terminou em quarto lugar, a primeira vez desde 2020 que fica fora do pódio na cidade.",
      "No feminino, a queniana Sheila Chepkirui confirmou o favoritismo e levou seu segundo título em Nova York, o primeiro havia sido em 2024, com o tempo de 2h24min36s. A americana Jessica McClain terminou em segundo lugar, com 2h24min42s, tornando-se a primeira atleta dos Estados Unidos no pódio da prova desde Shalane Flanagan, em 2018. A queniana Hellen Obiri, recordista da Maratona de Nova York com 2h19min51s, marcado em 2025, fechou o pódio em terceiro, com 2h24min43s.",
      "A disputa reforça a tradição da Maratona de Nova York como uma das provas mais concorridas do calendário mundial de maratonas, ao lado de Boston, Chicago, Berlim, Londres e Tóquio, as seis que compõem o circuito World Marathon Majors.",
      "Para quem acompanha o calendário local, a mesma semana também marcou a estreia da 1ª Maratona de Joinville, disputada no mesmo final de semana, 31 de outubro e 1º de novembro, outro sinal de como a distância de 42 km vem ganhando espaço no Brasil e no mundo."
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
  }

];

/* DICAS_ULTIMA_ROTACAO: 2026-11-08
   As 6 dicas são trocadas por completo a cada 2 semanas.
   Ao rodar a rotação, atualize a data acima. */
const PACEFLY_DICAS = [
  {
    id: "reposicao-de-eletrolitos-em-dias-quentes",
    categoria: "Saúde",
    titulo: "Reposição de eletrólitos em dias quentes: o que realmente faz diferença na corrida",
    resumo: "Com as temperaturas subindo em Joinville e região, o suor leva junto mais do que água, e repor só líquido pode não bastar para evitar mal-estar em treinos e provas mais longas. Entender o papel do sódio na hidratação ajuda a treinar com mais segurança nos meses mais quentes.",
    imagem: "https://images.pexels.com/photos/2461982/pexels-photo-2461982.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "O suor não é só água: ele carrega minerais, principalmente sódio, que o corpo perde em quantidade maior conforme o calor aumenta e o treino fica mais longo ou mais intenso. Em dias quentes, essa perda acontece mais rápido do que em dias frescos, mesmo num treino que parece igual ao de sempre.",
      "Beber bastante água sem repor nada além disso funciona bem para treinos curtos, mas em esforços mais longos sob calor pode deixar o corpo com pouco sódio no sangue, o que causa sensação de fraqueza, confusão leve e mal-estar, sintomas que às vezes são confundidos com simples desidratação.",
      "Na prática, para treinos de até cerca de 60 minutos a água costuma bastar. Acima disso, principalmente em dias de calor forte, vale incluir uma bebida isotônica ou um sachê de eletrólito na garrafa, sobretudo para quem vai encarar provas mais longas, como os 9 km da Corrida Bombeiros Voluntários ou os percursos de 10 km que ainda restam no calendário da região.",
      "Um jeito simples de perceber se você perde bastante sódio no treino é observar as marcas brancas que o suor seco deixa na roupa escura ou no boné depois de um treino mais longo. Quem nota isso com frequência costuma se beneficiar ainda mais da reposição de eletrólitos, não só de água.",
      "A reposição de eletrólitos não precisa esperar a cãimbra ou a tontura aparecerem. Planejar a hidratação pensando na duração do treino e na temperatura do dia, em vez de confiar só na sede, é o que realmente evita que o calor decida o resultado do treino ou da prova."
    ]
  },
  {
    id: "treinar-na-chuva-cuidados-com-pes-e-equipamento",
    categoria: "Técnica",
    titulo: "Treinar na chuva: cuidados com os pés e o equipamento que fazem diferença",
    resumo: "Nesta época do ano, a chance de chuva nos treinos e nas provas da região aumenta bastante, como mostrou a própria previsão para a Meia Maratona de Piracity deste fim de semana. Alguns cuidados simples com o calçado e a roupa evitam que a chuva vire desconforto ou lesão.",
    imagem: "https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "A combinação de calor e umidade típica do fim de ano em Santa Catarina traz mais chuva de verão, geralmente rápida e forte, tanto nos treinos quanto nas provas de rua da região. Em vez de simplesmente evitar a chuva o tempo todo, vale se preparar para treinar bem mesmo quando ela chega.",
      "O pé que fica molhado por muito tempo amolece a pele e fica mais sujeito a bolhas, então meias sintéticas ou de lã, que secam mais rápido e deslizam menos do que o algodão, ajudam bastante em treinos sob chuva ou em pisos encharcados.",
      "Piso molhado também exige atenção redobrada em superfícies lisas, como blocos de calçada, faixas de pintura no asfalto e tampas metálicas de bueiro, que ficam bem mais escorregadias do que o asfalto comum quando molhadas. Reduzir o ritmo nesses trechos específicos evita a maioria dos escorregões.",
      "Roupas claras ou com faixa refletiva ajudam na visibilidade em dias nublados e chuvosos, quando a luz natural já é mais fraca mesmo de manhã. Um boné com aba curta protege os olhos da chuva sem comprometer a visão do caminho.",
      "Depois do treino, tirar o tênis e a meia molhados o quanto antes e secar o calçado com jornal amassado por dentro, em vez de usar secador ou deixar no sol forte, preserva o material por mais tempo. Quem treina na chuva com frequência ganha ao ter um segundo par de tênis para alternar, dando tempo de cada um secar por completo."
    ]
  },
  {
    id: "assaduras-e-bolhas-como-prevenir-no-treino-longo",
    categoria: "Saúde",
    titulo: "Assaduras e bolhas no calor: como prevenir no treino longo",
    resumo: "Suor, umidade e atrito aumentam no verão, e é nessa combinação que assaduras e bolhas mais aparecem, até em quem nunca teve esse problema no inverno. A prevenção é simples e evita que um machucado interrompa um treino longo ou uma prova importante.",
    imagem: "https://images.pexels.com/photos/2404056/pexels-photo-2404056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Assadura é resultado de atrito repetido num ponto da pele, agravado pela umidade do suor, e por isso aparece mais no calor mesmo em quem usa a mesma roupa de sempre. As áreas mais comuns são a parte interna das coxas, as axilas e a cintura, onde a roupa pressiona ou roça a cada passada.",
      "A bolha nos pés segue a mesma lógica, só que dentro do tênis: fricção mais umidade. Em dias mais úmidos, o pé sua mais dentro do calçado, e isso aumenta o risco de bolha mesmo com o mesmo tênis e a mesma meia que nunca causaram problema antes.",
      "Passar um creme ou vaselina nos pontos de atrito antes de um treino longo, usar roupas técnicas sem costura áspera e escolher meias que não dobram nem formam rugas dentro do tênis reduzem bastante o risco, tanto de assadura quanto de bolha.",
      "O tamanho e o amarrar do tênis também importam: um calçado meio apertado ou meio solto demais aumenta o atrito a cada passo. Vale testar qualquer tênis ou meia nova em treinos mais curtos antes de usar numa prova ou num treino longo importante, o mesmo cuidado que já vale para não estrear equipamento no dia da prova.",
      "Se a assadura ou a bolha aparecer no meio do treino ou da prova, limpar a área e cobrir com um curativo, quando disponível, ajuda a terminar com menos desconforto. Depois, descansar a região até ela cicatrizar evita que o mesmo ponto volte a incomodar no treino seguinte."
    ]
  },
  {
    id: "treino-noturno-seguranca-e-visibilidade",
    categoria: "Segurança",
    titulo: "Treino noturno: como correr com segurança quando o calor empurra o treino para a noite",
    resumo: "Com o sol do meio do dia cada vez mais forte, muita gente antecipa ou atrasa o treino para fugir do calor, e o número de corredores nas ruas à noite cresce nesta época do ano. Visibilidade e atenção ao ambiente ficam ainda mais importantes nesse horário.",
    imagem: "https://images.pexels.com/photos/28766046/pexels-photo-28766046.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Conforme o calor do meio do dia fica mais difícil de encarar, é comum migrar parte do treino para o início da manhã ou para a noite, horários mais frescos. Treinar de noite, porém, traz cuidados de segurança e visibilidade que o treino de dia não exige.",
      "Roupas claras ou com detalhes refletivos, e se possível uma luzinha de clipe ou uma lanterna de cabeça em trechos mais escuros, ajudam em dois sentidos: quem corre vê melhor o piso irregular, e quem dirige ou pedala por perto enxerga o corredor com antecedência suficiente para reagir.",
      "Na escolha do trajeto, ruas mais movimentadas e bem iluminadas valem mais do que um atalho deserto, mesmo que esse atalho pareça mais rápido ou mais tranquilo. Treinar em dupla ou em grupo também ajuda, tanto pela companhia quanto pela segurança.",
      "Manter atenção ao redor importa tanto quanto a roupa certa: correr com um fone no volume baixo, ou com só um lado no ouvido, deixa escutar o trânsito e qualquer coisa ao redor. Avisar alguém o trajeto e o horário previsto de volta é um cuidado simples que não custa nada.",
      "Treinar de noite nos meses mais quentes é um ajuste razoável e muitas vezes necessário, não um problema em si. Mas merece o mesmo cuidado com segurança que qualquer outra mudança na rotina de treino, não menos."
    ]
  },
  {
    id: "protecao-solar-para-quem-corre-na-rua",
    categoria: "Saúde",
    titulo: "Protetor solar para quem corre: o que considerar além do fator de proteção",
    resumo: "Treinar ao ar livre em dias mais claros e mais longos significa mais exposição ao sol acumulada ao longo das semanas, e o protetor solar, se usado do jeito errado, protege bem menos do que o rótulo promete. Alguns detalhes práticos fazem diferença para quem corre na rua.",
    imagem: "https://images.pexels.com/photos/18408962/pexels-photo-18408962.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Quem treina na rua se expõe ao sol de um jeito diferente de quem passa o dia em ambiente fechado, e isso vale mesmo em dias nublados, quando a radiação ultravioleta continua presente. Escolher um protetor solar resistente à água e ao suor é o primeiro ajuste, porque o suor de um treino mais longo tira boa parte do produto comum rapidamente.",
      "A quantidade e o momento de aplicar também importam: a maioria das pessoas usa menos protetor do que o recomendado, e passá-lo uns 20 a 30 minutos antes de sair de casa dá tempo da pele absorver melhor o produto antes do primeiro raio de sol.",
      "Algumas áreas costumam ficar de fora na pressa do dia a dia: orelhas, nuca, a risca do cabelo no couro cabeludo e os lábios, que também se beneficiam de um protetor labial com proteção solar. Vale revisar essas áreas de tempos em tempos, não só o rosto e os braços.",
      "Protetor solar não precisa fazer esse trabalho sozinho: boné ou viseira, óculos de sol com proteção UV e roupas técnicas com proteção solar embutida somam, principalmente em treinos mais longos sob sol direto. Os óculos escuros também evitam o esforço de ficar apertando os olhos por causa da claridade, o que ajuda a não cansar tanto o rosto durante o treino.",
      "O efeito do sol no corredor é acumulado: mesmo sem nenhuma queimadura visível, anos de exposição repetida pesam na saúde da pele no longo prazo. Tratar o protetor solar como parte fixa da rotina de treino, do mesmo jeito que a hidratação, protege mais do que só o conforto do dia."
    ]
  },
  {
    id: "manter-o-ritmo-de-treino-nas-festas-de-fim-de-ano",
    categoria: "Treino",
    titulo: "Como manter o ritmo de treino nas festas de fim de ano sem perder o que já conquistou",
    resumo: "Dezembro traz confraternizações, viagens e uma rotina fora do normal, e é comum o treino ser o primeiro compromisso a sair da agenda. Com a Ho Ho Run e a Corrida da Virada ACORDE fechando o calendário da região, um pouco de planejamento evita perder o condicionamento construído ao longo do ano.",
    imagem: "https://images.pexels.com/photos/5319384/pexels-photo-5319384.jpeg?auto=compress&cs=tinysrgb&w=1200",
    corpo: [
      "Dezembro desorganiza a rotina de quase todo mundo: festas de família, viagens, calor mais forte e uma agenda social bem mais cheia do que o normal. É esperado que o treino sinta esse impacto, e o objetivo realista nesse período é manter o condicionamento, não buscar grandes ganhos.",
      "Trocar o treino completo por uma versão mais curta, como 20 a 30 minutos num ritmo leve, preserva muito mais a base aeróbica construída no ano do que pular o treino inteiro naquela semana mais cheia. Pouco treino ainda é melhor do que nenhum.",
      "Para quem vai viajar nas festas, vale olhar um trajeto seguro perto de onde vai ficar antes mesmo de viajar, usando um aplicativo de mapas, ou simplesmente aceitar que aquela semana vai ter volume mais baixo mesmo, em vez de tentar encaixar o plano de treino inteiro num lugar e numa rotina diferentes.",
      "Quem está de olho numa das provas que fecham o calendário da região, como a Ho Ho Run, em 6 de dezembro, ou a Corrida da Virada ACORDE, no réveillon de Blumenau, em 31 de dezembro, ganha ao manter alguns treinos em ritmo de prova dentro dessas semanas mais leves, para as pernas não estranharem o ritmo na hora da largada.",
      "O ano novo sempre traz a sensação de reiniciar os planos do zero, mas o jeito mais fácil de chegar a janeiro já treinando bem é simplesmente não parar de vez em dezembro, mesmo que o volume fique bem mais baixo do que o normal."
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
