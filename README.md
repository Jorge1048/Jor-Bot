<h1 align="center">=͟͟͞ 𝙅𝙤𝙧 𝘽𝙤𝙩 🦅</h1>

Jor-Bot: tu asistente todo en uno para WhatsApp, con gestión de grupos, chat inteligente y automatización rápida y segura. Ideal para quienes buscan un bot sencillo, sin demasiados comandos ni notificaciones molestas.

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Ribeye&size=50&pause=1000&color=33ff00&center=true&width=910&height=100&lines=Jor-Bot;Tu+Asistente+Todo+en+Uno;WhatsApp+Bot" alt="Typing SVG" />
</div>

<img src="./assets/images/jor.png">
</p>
</div>


### **`Información importante`**

<details>
 <summary><b> Sobre este bot</b></summary>

> Este proyecto no tiene ninguna vinculación oficial con WhatsApp. Fue desarrollado de forma independiente para interacciones automatizadas mediante la plataforma.

> No nos hacemos responsables por el uso indebido de este bot. Es responsabilidad exclusiva del usuario asegurarse de que su uso cumpla con los términos de servicio de WhatsApp y la legislación vigente.

> Este proyecto está basado en Takeshi Bot, desarrollado por Guilherme França (Dev Gui). Distribuido bajo la licencia GNU GPL v3. Este repositorio contiene modificaciones realizadas por Jorge1048.


</details>

<details>
 <summary><b> Funciones</b></summary>

- [x] Abrir y cerrar el grupo de WhatsApp con comandos 
- [x] Anti-link y autoresponder 
- [x] Etiquetar a cada uno con etiquetas visibles y no visibles 
- [x] IA 
- [x] Hacer stickers 

</details>


<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>


_¿No tienes Termux? [Haz clic aquí y descarga la última versión](https://www.mediafire.com/file/082otphidepx7aq/Termux_0.119.1_aldebaran_dev.apk)._



<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>


### Instalación en Termux

Abre Termux y ejecuta los siguientes comandos uno por uno:<br/>

```sh
pkg upgrade -y && pkg update -y && pkg install git -y && pkg install nodejs-lts -y && pkg install ffmpeg -y
```
```sh
termux-setup-storage
```
```sh
cd /storage/emulated/0 && git clone https://github.com/Jorge1048/jor-bot.git && cd jor-bot
```
```sh
chmod -R 755 ./*
```
```sh
yarn install --frozen-lockfile
```
```sh
npm start
```

Ingresa el número de teléfono y presiona enter.
Ej: Si tú número es +57 300 6000233 lo ingresas así: 573006000233

Ingresa el código que aparece en Termux en tu WhatsApp. 


<details>
 <summary><b>Otros pasos a considerar</b></summary> 


Presiona `CTRL + c` para detener el bot.

Para iniciar otra vez Ejecuta:

```sh
npm start
```
 
En caso de que desvincules el bot de WhatsApp presiona `CTRL + c` y ejecuta:

```sh
rm -rf ./assets/auth/baileys && npm start
```

Si cerraste la "session" en Termux o borraste los datos de esta app, en vez de hacer todo de nuevo puedes ejecutar:

```sh
cd /storage/emulated/0/Satohaki-bot/
```
```sh
npm start
```
</details>


<a><img src='https://i.imgur.com/LyHic3i.gif'/></a>


### Opciones Avanzadas (Opcional)

<details>
 <summary><b> Instrucciones para activar IA</b></summary>


1. Ve a este enlace:
🔗 https://openrouter.ai/keys

2. Si no tienes cuenta, regístrate (puedes usar tu cuenta de Google, Discord, etc.).

3. Haz clic en "Create Key" (Crear Clave).

4. En el campo "Name your key" puedes poner cualquier nombre (por ejemplo: SatohakiBot).

5. En el campo de abajo, donde dice "Monthly Usage Limit", escribe:
100 (esto representa el límite mensual de tokens o usos, puedes dejarlo en 100 o más si deseas).

6. Haz clic en "Create Key".

7. Copia tu clave y pégala en el archivo de configuración de tu bot:
`exports.OPENROUTER_API_KEY = "Pon_clave_aquí";`

Para encontrar y editar la configuración de tú bot instala MT Manager [Descargar MT Manager](https://www.mediafire.com/file/ba63tlfoahx78dc/MT+Manager_2.16.5.apk/file), entra al app y busca la carpeta `satohaki-bot` → `src` → `config.js`


</details>

<details>
<summary><b> Instrucciones de personalización</b></summary>


Instala MT Manager [Descargar MT Manager](https://www.mediafire.com/file/ba63tlfoahx78dc/MT+Manager_2.16.5.apk/file), entra al app y busca la carpeta `satohaki-bot` → `src` → `config.js`
para personalizar el bot

> Se recomienda usar MT Manager para editar config.js, ya que otras apps podrían bloquear la personalización.


</details> 
