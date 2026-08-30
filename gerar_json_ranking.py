"""
PaceFly — Gerador do JSON do ranking para o site
=================================================
Converte o CSV do ranking de corredores em assets/ranking_2026.json, que é o
arquivo que a página rankings.html consome para a busca por nome.

USO
---
    python gerar_json_ranking.py "CAMINHO\\DO\\ranking_corredores_norte_sc_2026.csv"

    # com o indicador de subida e queda:
    python gerar_json_ranking.py "ranking.csv" "historico_posicoes_norte_sc_2026.csv"

O segundo arquivo é opcional. Quando informado, o script compara a posição atual
com a da apuração anterior e grava o campo "v" (variação) de cada atleta, que o
site mostra como ▲2, ▼1, = ou NOVO. Sem ele, a coluna Variação fica vazia.

Se você não passar o caminho, o script procura o CSV nos lugares mais prováveis
(pasta atual, pasta do projeto, subpasta ranking-corredores-norte-sc).

O QUE ELE FAZ
-------------
1. Lê o CSV, detectando automaticamente o separador (vírgula ou ponto e vírgula)
   e as colunas de nome, pontos, posição e número de corridas.
2. Ordena por pontos (maior primeiro) e recalcula a posição, caso o CSV não traga.
3. Escreve assets/ranking_2026.json com todos os atletas.
4. Mostra um resumo para você conferir antes de publicar.

O JSON fica com chaves curtas de propósito, para o arquivo baixar rápido no
celular: p = posição, n = nome, pt = pontos, c = corridas.
"""

import csv, json, sys, os, unicodedata
from pathlib import Path

AQUI = Path(__file__).parent.resolve()
SAIDA = AQUI / "assets" / "ranking_2026.json"

# Metadados da apuração. Atualize a cada nova rodada.
# A lista de provas aparece na página, na seção de transparência. Ela responde
# a pergunta que mais gera desconfiança: "corri, por que não estou aqui?".
META = {
    "atualizado_em": "27/08/2026",
    "temporada": 2026,
    "total_provas": 11,
    "total_participacoes": 6376,
    "periodo_coberto": "14 de junho a 23 de agosto de 2026",
    "provas": [
        "Meia Maratona Quiriri · 14/06 · Joinville",
        "12ª Corrida do 8º BPM · 21/06 · Joinville",
        "Jaraguá Night Race 150 Anos · 27/06 · Jaraguá do Sul",
        "Desafio 60 Anos CBVJGS · 04/07 · Jaraguá do Sul",
        "Corrida HUPI · 05/07 · Joinville",
        "Massaranduba Night Run · 11/07 · Massaranduba",
        "1ª Corrida do Colono · 18/07 · Joinville",
        "RunFest Cidade das Águas · 19/07 · Joinville",
        "2ª Menegotti Run Together · 02/08 · Jaraguá do Sul",
        "Corrida Tigre 85 Anos · 16/08 · Joinville",
        "Circuito Banco do Brasil · 23/08 · Joinville",
    ],
    # Setas de subida e queda. Deixe True na rotina normal.
    # Está False nesta rodada porque a apuração de 27/08 além de incluir uma
    # prova nova também corrigiu nomes que estavam duplicados por espaçamento.
    # Boa parte das mudanças de posição veio da correção, não de desempenho, e
    # uma seta vermelha em quem não perdeu nada seria informação errada.
    # Volte para True na próxima apuração, quando a comparação for limpa.
    "usar_historico": False,
}

# A fonte correta é o arquivo de multicorridas: ele já traz só quem tem 2 provas
# ou mais, que é a regra do doc 08 para aparecer no ranking publicado.
BASE_ONEDRIVE = Path.home() / "OneDrive" / "Business" / "Ranking corredores"
CANDIDATOS = [
    BASE_ONEDRIVE / "ranking_multicorridas_norte_sc_2026.csv",
    BASE_ONEDRIVE / "ranking-corredores-norte-sc" / "ranking_multicorridas_norte_sc_2026.csv",
    AQUI / "ranking_multicorridas_norte_sc_2026.csv",
    Path.cwd() / "ranking_multicorridas_norte_sc_2026.csv",
]

# Mínimo de provas para entrar no ranking publicado (doc 08, item 7).
MIN_CORRIDAS = 2


def achar_csv():
    if len(sys.argv) > 1:
        p = Path(sys.argv[1])
        if p.exists():
            return p
        print(f"[ERRO] Caminho informado nao existe: {p}")
        sys.exit(1)
    for c in CANDIDATOS:
        if c.exists():
            return c
    print("[ERRO] Nao encontrei o CSV do ranking. Passe o caminho como argumento:")
    print('       python gerar_json_ranking.py "C:\\caminho\\ranking_corredores_norte_sc_2026.csv"')
    sys.exit(1)


def sem_acento(s):
    return "".join(c for c in unicodedata.normalize("NFD", s or "")
                   if unicodedata.category(c) != "Mn").lower().strip()


def achar_coluna(cabecalho, *palavras):
    """Encontra a coluna cujo nome contem alguma das palavras dadas."""
    for i, col in enumerate(cabecalho):
        c = sem_acento(col)
        for p in palavras:
            if p in c:
                return i
    return None


def ler_historico(caminho):
    """Lê o CSV de posições da apuração anterior e devolve {nome_normalizado: posicao}."""
    p = Path(caminho)
    if not p.exists():
        print(f"[AVISO] Historico nao encontrado: {p}. A coluna Variacao ficara vazia.")
        return {}
    bruto = p.read_text(encoding="utf-8-sig", errors="replace")
    amostra = bruto[:4000]
    sep = ";" if amostra.count(";") > amostra.count(",") else ","
    linhas = [l for l in csv.reader(bruto.splitlines(), delimiter=sep)
              if any(str(x).strip() for x in l)]
    if not linhas:
        return {}
    cab = linhas[0]
    i_n = achar_coluna(cab, "nome", "atleta", "corredor")
    # Prioriza a coluna do ranking geral, se houver mais de uma de posicao.
    # Cuidado com "or" aqui: indice 0 e falsy, entao a checagem e explicita.
    i_p = achar_coluna(cab, "posgeral", "geral")
    if i_p is None:
        i_p = achar_coluna(cab, "posicao", "pos", "colocacao", "rank")
    i_d = achar_coluna(cab, "data")
    if i_n is None or i_p is None:
        print(f"[AVISO] Nao localizei nome/posicao no historico. Colunas: {cab}")
        return {}

    # Se o historico for da MESMA apuracao que estamos publicando, comparar
    # daria "=" para todo mundo e "novo" para o resto. Melhor nao mostrar seta
    # nenhuma do que mostrar uma seta que nao significa nada.
    if i_d is not None and len(linhas) > 1 and len(linhas[1]) > i_d:
        data_hist = (linhas[1][i_d] or "").strip()
        if data_hist and data_hist == META.get("atualizado_em"):
            print(f"[AVISO] O historico e da mesma data da apuracao atual ({data_hist}).")
            print("        Sem apuracao anterior para comparar, a coluna Variacao fica")
            print("        vazia. As setas passam a aparecer na proxima atualizacao.")
            return {}
    mapa = {}
    for l in linhas[1:]:
        if len(l) <= max(i_n, i_p):
            continue
        nome = (l[i_n] or "").strip()
        pos = para_int(l[i_p])
        if nome and pos:
            mapa[sem_acento(nome)] = pos
    print(f"[OK] Historico anterior: {len(mapa)} atletas para comparacao")
    return mapa


def normalizar_sexo(v):
    """Aceita F/M, FEM/MASC, FEMININO/MASCULINO, MULHER/HOMEM. Devolve 'F', 'M' ou None."""
    s = sem_acento(str(v or "")).strip()
    if not s:
        return None
    if s.startswith("f") or s.startswith("mulher"):
        return "F"
    if s.startswith("m") and not s.startswith("mulher"):
        return "M"
    if s.startswith("h"):
        return "M"
    return None


def para_int(v):
    if v is None:
        return None
    v = str(v).strip().replace(".", "").replace(",", ".")
    v = "".join(ch for ch in v if ch.isdigit() or ch == ".")
    if not v:
        return None
    try:
        return int(float(v))
    except ValueError:
        return None


def main():
    origem = achar_csv()
    print(f"[OK] Lendo: {origem}")

    historico = {}
    if not META.get("usar_historico", True):
        print("[INFO] Setas de variacao desligadas nesta rodada")
        print("       (usar_historico = False no META do topo do arquivo).")
    elif len(sys.argv) > 2:
        historico = ler_historico(sys.argv[2])
    else:
        auto = origem.parent / "historico_posicoes_norte_sc_2026.csv"
        if auto.exists():
            print(f"[OK] Historico encontrado automaticamente ao lado do CSV")
            historico = ler_historico(auto)
        else:
            print("[INFO] Sem historico de posicoes. A coluna Variacao ficara vazia.")
            print("       Passe o caminho como 2o argumento para ativar as setas.")

    bruto = origem.read_text(encoding="utf-8-sig", errors="replace")
    amostra = bruto[:4000]
    sep = ";" if amostra.count(";") > amostra.count(",") else ","
    print(f"[OK] Separador detectado: '{sep}'")

    linhas = list(csv.reader(bruto.splitlines(), delimiter=sep))
    linhas = [l for l in linhas if any(str(x).strip() for x in l)]
    if not linhas:
        print("[ERRO] CSV vazio.")
        sys.exit(1)

    cab = linhas[0]
    print(f"[OK] Cabecalho: {cab}")

    i_nome = achar_coluna(cab, "nome", "atleta", "corredor")
    i_pts = achar_coluna(cab, "ponto", "pts", "score", "total")
    i_pos = achar_coluna(cab, "posicao", "pos", "colocacao", "rank")
    i_cor = achar_coluna(cab, "corrida", "prova", "participac", "qtd")
    i_sex = achar_coluna(cab, "sexo", "genero", "gener", "categoria_sexo", "naipe")
    i_melhor = achar_coluna(cab, "melhorpos", "melhor")

    if i_nome is None or i_pts is None:
        print("[ERRO] Nao localizei as colunas de nome e/ou pontos.")
        print(f"       Colunas encontradas: {cab}")
        print("       Renomeie o cabecalho ou ajuste as palavras-chave em achar_coluna().")
        sys.exit(1)

    print(f"[OK] Colunas: nome={cab[i_nome]} | pontos={cab[i_pts]}"
          + (f" | posicao={cab[i_pos]}" if i_pos is not None else "")
          + (f" | corridas={cab[i_cor]}" if i_cor is not None else "")
          + (f" | sexo={cab[i_sex]}" if i_sex is not None else ""))

    if i_cor is None:
        print("[AVISO] Nao achei a coluna com o numero de corridas. A coluna 'Provas'")
        print("        do site vai ficar sem valor. Renomeie a coluna no CSV para")
        print("        algo com 'corridas' ou 'provas' e rode de novo.")
    if i_sex is None:
        print("[AVISO] Nao achei a coluna de sexo. As abas Feminino e Masculino ficam")
        print("        ocultas no site e so o ranking Geral aparece. Renomeie a coluna")
        print("        para algo com 'sexo' ou 'genero' e rode de novo.")

    atletas = []
    ignorados = 0
    cortados = 0
    for l in linhas[1:]:
        if len(l) <= max(i_nome, i_pts):
            ignorados += 1
            continue
        nome = (l[i_nome] or "").strip()
        pts = para_int(l[i_pts])
        if not nome or pts is None:
            ignorados += 1
            continue
        reg = {"n": nome, "pt": pts}
        if i_cor is not None and len(l) > i_cor:
            c = para_int(l[i_cor])
            # Regra do doc 08: quem tem menos de 2 provas nao entra no publicado
            if c is not None and c < MIN_CORRIDAS:
                cortados += 1
                continue
            if c:
                reg["c"] = c
        if i_sex is not None and len(l) > i_sex:
            s = normalizar_sexo(l[i_sex])
            if s:
                reg["s"] = s
        if i_melhor is not None and len(l) > i_melhor:
            m = para_int(l[i_melhor])
            if m:
                reg["_melhor"] = m
        atletas.append(reg)

    if not atletas:
        print("[ERRO] Nenhum atleta valido lido do CSV.")
        sys.exit(1)

    # Ordenacao conforme os criterios de desempate do doc 08:
    #   pontos (maior) > numero de corridas (maior) > melhor colocacao (menor)
    # O 3o e o 4o criterio (tempo na maior distancia e data da ultima corrida)
    # nao estao nesta base, entao o nome entra como ultimo desempate para a
    # ordem ficar estavel entre execucoes.
    atletas.sort(key=lambda a: (
        -a["pt"],
        -a.get("c", 0),
        a.get("_melhor", 9999),
        sem_acento(a["n"]),
    ))

    # O snapshot anterior cobre todos os classificados ou so o topo das listas?
    # Isso muda o significado de um atleta ausente dele: se cobria todo mundo,
    # ausente = estreante; se cobria so o Top 20, ausente nao diz nada e o
    # certo e nao mostrar seta nenhuma.
    historico_completo = bool(historico) and len(historico) >= len(atletas) * 0.8
    if historico and not historico_completo:
        print(f"[AVISO] O historico anterior tem {len(historico)} atletas para "
              f"{len(atletas)} classificados.")
        print("        A seta vai aparecer so para quem estava nele. Os demais")
        print("        ficam sem indicador, em vez de serem marcados como NOVO")
        print("        indevidamente. Grave o proximo snapshot com todos os")
        print("        classificados para resolver isso na proxima apuracao.")

    # Posicao renumerada de 1 a N entre os classificados. A base traz a
    # colocacao geral entre TODOS que correram na regiao, o que deixaria
    # buracos na tabela (42 e depois 60) e faria alguem ser 60o num ranking
    # de 731. Aqui o numero passa a significar posicao entre os publicados.
    final = []
    for i, a in enumerate(atletas, 1):
        reg = {"p": i, "n": a["n"], "pt": a["pt"]}
        if "c" in a:
            reg["c"] = a["c"]
        if "s" in a:
            reg["s"] = a["s"]
        if historico:
            anterior = historico.get(sem_acento(a["n"]))
            if anterior:
                # Posicao menor e melhor, entao subir significa anterior - atual
                reg["v"] = anterior - reg["p"]
            elif historico_completo:
                # So podemos afirmar "NOVO" quando o snapshot anterior cobria
                # todo mundo. Se ele cobria so o topo, ausencia nao prova nada.
                reg["v"] = "novo"
        final.append(reg)
    print(f"[OK] Posicoes renumeradas de 1 a {len(final)} entre os classificados.")

    saida = dict(META)
    saida["total_atletas"] = len(final)
    saida["atletas"] = final

    SAIDA.parent.mkdir(parents=True, exist_ok=True)
    SAIDA.write_text(json.dumps(saida, ensure_ascii=False, separators=(",", ":")),
                     encoding="utf-8")

    kb = SAIDA.stat().st_size // 1024
    n_f = sum(1 for a in final if a.get("s") == "F")
    n_m = sum(1 for a in final if a.get("s") == "M")
    n_c = sum(1 for a in final if a.get("c"))
    print(f"\n{'='*58}")
    print(f"Gerado: {SAIDA}")
    print(f"Atletas: {len(final)}   |   Ignorados: {ignorados}   |   Tamanho: {kb} KB")
    if cortados:
        print(f"Fora do publicado (menos de {MIN_CORRIDAS} provas): {cortados}")
    print(f"Feminino: {n_f}   |   Masculino: {n_m}   |   Com nº de provas: {n_c}")
    if historico:
        subiu = sum(1 for a in final if isinstance(a.get("v"), int) and a["v"] > 0)
        caiu = sum(1 for a in final if isinstance(a.get("v"), int) and a["v"] < 0)
        novos = sum(1 for a in final if a.get("v") == "novo")
        print(f"Subiram: {subiu}   |   Cairam: {caiu}   |   Novos no ranking: {novos}")
    print(f"Atualizado em: {META['atualizado_em']}  (edite META no topo se mudar)")
    print(f"{'='*58}")
    print("\nTop 5 para conferencia:")
    for a in final[:5]:
        print(f"  {a['p']:>3}º  {a['n']:<42} {a['pt']:>4} pts")
    print("\nAbra rankings.html no navegador e busque um nome para validar.")


if __name__ == "__main__":
    try:
        main()
    except SystemExit:
        raise
    except Exception as e:
        print(f"\n[ERRO INESPERADO] {type(e).__name__}: {e}")
    # Segura a janela aberta quando o script e rodado com duplo clique,
    # senao o console fecha antes de dar tempo de ler o resultado.
    try:
        input("\nPressione Enter para fechar...")
    except EOFError:
        pass
