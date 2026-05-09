@echo off
REM Opens About Us using this folder — not another copy elsewhere.
cd /d "%~dp0"
start "" "%CD%\about.html"
