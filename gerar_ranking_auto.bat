@echo off
cd /d "%~dp0"
python gerar_json_ranking.py > output_gerar_ranking.txt 2>&1
