@echo off
call tsc
call dts-bundle --configJson ".\dts-bundle.json"
call xcopy "package.json" ".\dist\package.json" /Y
call echo Por favor acondicionar el archivo package.json de la carpeta dist, antes de distribuir.