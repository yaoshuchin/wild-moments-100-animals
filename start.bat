@echo off
chcp 65001 >nul
title 此刻野境・100種世界動物觀察站
echo =======================================================
echo   此刻野境 WILD MOMENTS · 100 種世界動物觀察站
echo =======================================================
echo 正在啟動本地伺服器 (http://localhost:3000)...
start http://localhost:3000
python -m http.server 3000
pause
