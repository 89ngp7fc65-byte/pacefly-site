@echo off
:: PaceFly - Gera a imagem institucional de compartilhamento
:: Transforma og-institucional.html em assets\og-institucional.png (1200x630).
:: Essa e a imagem que aparece ao compartilhar as paginas que nao sao o ranking
:: (home, Joinville em numeros, evento, noticia, dica). Clique duas vezes.

title PaceFly - Gerar imagem institucional de compartilhamento
cd /d "%~dp0"

echo.
echo ============================================================
echo  PaceFly - Imagem institucional de compartilhamento
echo ============================================================
echo.

:: Procura o Chrome ou o Edge
set "NAVEGADOR="
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" set "NAVEGADOR=C:\Program Files\Google\Chrome\Application\chrome.exe"
if not defined NAVEGADOR if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" set "NAVEGADOR=C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
if not defined NAVEGADOR if exist "%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe" set "NAVEGADOR=%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe"
if not defined NAVEGADOR if exist "C:\Program Files\Microsoft\Edge\Application\msedge.exe" set "NAVEGADOR=C:\Program Files\Microsoft\Edge\Application\msedge.exe"
if not defined NAVEGADOR if exist "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" set "NAVEGADOR=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

if not defined NAVEGADOR (
    echo [ERRO] Nao encontrei o Chrome nem o Edge.
    echo.
    pause
    exit /b 1
)

echo Navegador: %NAVEGADOR%
echo.
echo Gerando assets\og-institucional.png ...

"%NAVEGADOR%" --headless=new --disable-gpu --hide-scrollbars ^
  --run-all-compositor-stages-before-draw --virtual-time-budget=8000 ^
  --user-data-dir="%TEMP%\pacefly_og_chrome" ^
  --window-size=1200,630 ^
  --screenshot="%~dp0assets\og-institucional.png" ^
  "file:///%~dp0og-institucional.html"

echo.
if exist "%~dp0assets\og-institucional.png" (
    echo [OK] Imagem gerada em assets\og-institucional.png
    echo.
    echo Abrindo para conferencia...
    start "" "%~dp0assets\og-institucional.png"
) else (
    echo [ERRO] A imagem nao foi criada. Confira as mensagens acima.
)

echo.
pause
