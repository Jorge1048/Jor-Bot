/*
 * Este archivo index.js es el mismo que existe en "src/index.js", solo está aquí
 * para facilitar la ejecución del bot en algunos hosts.
 *
 * Si llegaste aquí es porque probablemente ya usaste un bot de "case" con un "index.js" de 20 mil líneas...
 * Lo sé, te entiendo.
 * ¿Qué es mejor? ¿Que dé error en tu play, que vayas al archivo "play.js" y corrijas
 * o que vayas a la línea 71023 del "index.js" y corrijas?
 *
 * Imagina que pegas tu "case" mal y olvidas cerrar
 * o abrir un paréntesis, una llave...
 * Pones el bot a correr, da muchos errores y no sabes cómo resolver...
 * ¿Adivina qué haces?
 * Vuelves al "index.js" a como estaba antes, ¿verdad?
 *
 * ¡Eso es lo que no queremos! Queremos un código limpio, legible y fácil de mantener.
 * Creamos código para humanos, no para máquinas, así que, mientras más simple, mejor.
 *
 * De ahora en adelante, vamos a cambiar la palabra "case" por "comando", ¿ok? ¡Vamos!
 *
 * ---------------- 🤖 ¿DÓNDE ESTÁN LOS COMANDOS? 🤖 ----------------
 *
 * Encontrarás los comandos dentro de la carpeta "src/commands"
 * ¿No entendiste? Vamos:
 *
 * Abre la carpeta "src"
 * Luego, abre la carpeta "commands"
 *
 * Fíjate que dentro hay 3 carpetas:
 *
 * - 📁 admin
 * - 📁 member
 * - 📁 owner
 *
 * Dentro de la carpeta admin hay comandos administrativos.
 * Dentro de member hay comandos para miembros.
 * Dentro de owner hay comandos accesibles solo para el dueño del bot/grupo.
 *
 * ¿Simple, no? Ah, detalle, no necesitas poner un "if" para saber si el comando es de admin o dueño.
 * El bot ya hace eso por ti. Solo coloca el comando en la carpeta correspondiente.
 *
 * ---------------- 🤖 ¿DÓNDE MODIFICO EL MENÚ? 🤖 ----------------
 *
 * Abre la carpeta "src"
 * Ve al archivo "messages.js" y edita el menú.
 * Solo recuerda, haz todo dentro de las comillas invertidas (`), pues es un template string.
 *
 * ¿No entendiste?
 * Mira:
 *
 * `Hola, ¿todo bien?` - Esto está CORRECTO ✅
 *
 * Hola `¿todo bien?` - Esto está INCORRECTO (fíjate que el "Hola" está fuera de las comillas) ❌
 *
 * ---------------- 🤖 ¿CÓMO CAMBIO LA FOTO DEL BOT? 🤖 ----------------
 *
 * Abre la carpeta "assets"
 * Luego, abre la carpeta "images"
 * Sustituye la imagen "takeshi-bot.png" por otra que prefieras.
 * Solo no olvides mantener el nombre "takeshi-bot.png"
 *
 * ---------------- 🚀 IMPORTANTE 🚀 ----------------
 *
 * Lee el tutorial completo en: https://github.com/guiireal/takeshi-bot?tab=readme-ov-file#instalaci%C3%B3n-en-termux-
 *
 * ¡No te saltes pasos! Lée todo completo, porque es muy importante para entender cómo funciona el bot.
 *
 * By: Dev Gui
 *
 * No modifiques nada de aquí para abajo, a menos que sepas lo que haces.
 */
const NodeCache = require("node-cache");
const { connect } = require("./src/connection");
const { load } = require("./src/loader");
const {
  infoLog,
  bannerLog,
  errorLog,
  warningLog,
} = require("./src/utils/logger");

const safeLoad = async (socket, groupCache, retryCount = 0) => {
  const MAX_RETRIES = 5;
  const RETRY_DELAY = 10000;

  try {
    load(socket, groupCache);
    return true;
  } catch (error) {
    errorLog(`Erro ao carregar o bot: ${error.message}`);

    if (retryCount < MAX_RETRIES) {
      warningLog(
        `Tentativa ${retryCount + 1}/${MAX_RETRIES} - Recriando conexão em ${
          RETRY_DELAY / 1000
        } segundos...`
      );

      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));

      const newSocket = await connect(groupCache);

      return await safeLoad(newSocket, groupCache, retryCount + 1);
    } else {
      errorLog(
        `Número máximo de tentativas (${MAX_RETRIES}) atingido. O bot será encerrado.`
      );
      return false;
    }
  }
};

async function start() {
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    process.setMaxListeners(1500);

    bannerLog();
    infoLog("Iniciando meus componentes internos...");

    const groupCache = new NodeCache({ stdTTL: 5 * 60, useClones: false });
    const socket = await connect(groupCache);

    const loadSuccess = await safeLoad(socket, groupCache);

    if (!loadSuccess) {
      errorLog("Não foi possível iniciar o bot após múltiplas tentativas.");
    }
  } catch (error) {
    errorLog(`Erro fatal: ${error.message}`);
    console.error(error);
  }
}

start();
