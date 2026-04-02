@echo off
chcp 65001 >nul
cd /d "%~dp0"

set MSG=
set /p "MSG=Commit message (Enter to use default): "
if "%MSG%"=="" set "MSG=Update content"

git add .
git commit -m "%MSG%"
git push origin main

if %errorlevel%==0 (
    echo [OK] Push success!
) else (
    echo [FAIL] Push failed.
)

pause
