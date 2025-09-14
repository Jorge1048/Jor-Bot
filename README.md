> **Este proyecto está basado en [Takeshi Bot](https://github.com/guiireal/takeshi-bot), desarrollado por [Guilherme França (Dev Gui)](https://github.com/guiireal).**  
> **Distribuido bajo la licencia [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.html).**  
> **Este repositorio contiene modificaciones realizadas por Jorge1048.**

## Sobre este proyecto

Este proyecto no tiene ninguna vinculación oficial con WhatsApp. Fue desarrollado de forma independiente para interacciones automatizadas mediante la plataforma.

No nos hacemos responsables por el uso indebido de este bot. Es responsabilidad exclusiva del usuario asegurarse de que su uso cumpla con los términos de servicio de WhatsApp y la legislación vigente.


_¿No tienes Termux? [Haz clic aquí y descarga la última versión](https://www.mediafire.com/file/082otphidepx7aq/Termux_0.119.1_aldebaran_dev.apk)._


## Instalación en Termux

Abre Termux y ejecuta los siguientes comandos.<br/>

```sh
pkg upgrade -y && pkg update -y && pkg install git -y && pkg install nodejs-lts -y && pkg install ffmpeg -y
```


```sh
termux-setup-storage
```

```sh
cd /sdcard
```

```sh
git clone https://github.com/Jorge1048/Satohaki-bot.git
```

```sh
cd Satohaki-bot
```

```sh
chmod -R 755 ./*
```

```sh
yarn install
```

```sh
npm start
```

Ingresa el número de teléfono y presiona enter.
Ej: Si tú número es +57 XXX XXXXXXXX lo ingresas así: 57XXXXXXXXXXX

Ingresa el código que aparece en Termux en tu WhatsApp. 

Espera 10 segundos y luego presiona `CTRL + c` para detener el bot.

Para iniciar otra vez Ejecuta el bot.

```sh
npm start
```
 
En el administrador de tú dispositivo configura el archivo config.js que está dentro de la carpeta src para que lo personalices (Opcional)

En caso de que desvincules el bot de WhatsApp presiona `CTRL + c` y ejecuta:

```sh
rm -rf ./assets/auth/baileys && npm start
```

### Instructiones para activar la IA:

Ve a este enlace:
🔗 https://openrouter.ai/keys

2. Si no tienes cuenta, regístrate (puedes usar tu cuenta de Google, Discord, etc.).

3. Haz clic en "Create Key" (Crear Clave).

4. En el campo "Name your key" puedes poner cualquier nombre (por ejemplo: SatohakiBot).

5. En el campo de abajo, donde dice "Monthly Usage Limit", escribe:
100 (esto representa el límite mensual de tokens o usos, puedes dejarlo en 100 o más si deseas).

6. Haz clic en "Create Key".

7. Copia tu clave y pégala en el archivo de configuración de tu bot:
`exports.OPENROUTER_API_KEY = "Pon_clave_aquí";`

No sabes donde encontrar la configuración? 

Instala MT Manager desde la play store, entra al app y busca la carpeta `satohaki-bot` → `src` → `config.js`

