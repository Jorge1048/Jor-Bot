> **Este proyecto está basado en [Takeshi Bot](https://github.com/guiireal/takeshi-bot), desarrollado por [Guilherme França (Dev Gui)](https://github.com/guiireal).**  
> **Distribuido bajo la licencia [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.html).**  
> **Este repositorio contiene modificaciones realizadas por Jorge1048.**

## Sobre este proyecto

Este proyecto no tiene ninguna vinculación oficial con WhatsApp. Fue desarrollado de forma independiente para interacciones automatizadas mediante la plataforma.

No nos hacemos responsables por el uso indebido de este bot. Es responsabilidad exclusiva del usuario asegurarse de que su uso cumpla con los términos de servicio de WhatsApp y la legislación vigente.

## Instalación en Termux

1 - Abre Termux y ejecuta los siguientes comandos.<br/>
_¿No tienes Termux? [Haz clic aquí y descarga la última versión](https://www.mediafire.com/file/082otphidepx7aq/Termux_0.119.1_aldebaran_dev.apk)._

```sh
pkg upgrade -y && pkg update -y && pkg install git -y && pkg install nodejs-lts -y && pkg install ffmpeg -y
```

2 - Habilita el acceso a la carpeta de almacenamiento en Termux.

```sh
termux-setup-storage
```

3 - Entra a la carpeta sdcard.

```sh
cd /sdcard
```

4 - Clona el repositorio.

```sh
git clone https://github.com/Jorge1048/Satohaki-bot.git
```

5 - Entra en la carpeta que se clonó.

```sh
cd takeshi-bot
```

6 - Habilita permisos de lectura y escritura (haz este paso solo una vez).

```sh
chmod -R 755 ./*
```

7 - instala axios para IA

```sh
npm install axios
```

8 - Ejecuta el bot.

```sh
npm start
```

8 - Ingresa el número de teléfono y presiona enter.
Ej: Si tú número es +57 XXX XXXXXXXX lo ingresas así: 57XXXXXXXXXXX

9 - Ingresa el código que aparece en Termux en tu WhatsApp. 

10 - Espera 10 segundos y luego presiona `CTRL + c` para detener el bot.

11 - Para iniciar otra vez Ejecuta el bot.

```sh
npm start
```
 
12 - En el administrador de tú dispositivo configura el archivo config.js que está dentro de la carpeta src para que lo personalices (Opcional)

En caso de que desvincules el bot de WhatsApp presiona `CTRL + c` y ejecuta:

```sh
rm -rf ./assets/auth/baileys && npm start
```
