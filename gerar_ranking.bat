@echo off
:: PaceFly - Gera o JSON do ranking para o site
:: Clique duas vezes neste arquivo. A janela fica aberta no final
:: para voce conferir o resultado antes de fechar.
title PaceFly - Gerar ranking do site
cd /d "%~dp0"

echo.
echo ============================================================
echo  PaceFly - Gerando o ranking do site
echo ============================================================
echo.

python gerar_json_ranking.py
if %errorlevel% neq 0 (
    echo.
    echo [ERRO] O Python retornou erro. Confira as mensagens acima.
)

echo.
pause
