@echo off
echo ================================
echo  VocabMaster 本機伺服器啟動中...
echo ================================
echo.
echo 請用瀏覽器開啟：http://localhost:8080
echo 關閉此視窗即停止伺服器
echo.
cd /d "%~dp0"
python -m http.server 8080
pause
