@echo off
if exist "docs\" rd /q /s "docs"
npm run build && ren build docs && cd docs && echo F| xcopy index.html 404.html && cd ..
pause