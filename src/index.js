/*
 * Si estás leyendo esto, probablemente ya usaste un bot lleno de "case" y con un "index.js" de 20 mil líneas...
 * Lo sé, ¡te entiendo!
 * ¿Qué es mejor? ¿Que dé error tu play, ir al archivo "play.js" y corregirlo,
 * o ir a la línea 71023 del "index.js" y arreglarlo?
 *
 * Imagina que pegas mal tu "case" y olvidas cerrar
 * o abrir un paréntesis, una llave...
 * Pones el bot a funcionar, da varios errores y no sabes cómo solucionarlo...
 * ¿Adivina qué haces?
 * Vuelves el "index.js" a como estaba antes, ¿verdad?
 *
 * ¡Eso es justo lo que no queremos! ¡Queremos un código limpio, legible y fácil de mantener!
 * ¡Nosotros creamos código para humanos, no para máquinas, así que cuanto más simple, mejor!
 *
 * A partir de ahora, vamos a cambiar la palabra "case" por "comando", ¿ok? ¡Vamos allá!
 *
 * ---------------- 🤖 ¿DÓNDE ESTÁN LOS COMANDOS? 🤖 ----------------
 *
 * Encontrarás los comandos dentro de la carpeta "src/commands"
 * ¿No entendiste? Vamos paso a paso:
 *
 * Abre la carpeta "src"
 * Luego, abre la carpeta "commands"
 *
 * Verás que dentro hay 3 carpetas:
 *
 * - 📁 admin
 * - 📁 member
 * - 📁 owner
 *
 * Dentro de la carpeta admin hay comandos administrativos.
 * Dentro de la carpeta member hay comandos para miembros.
 * Dentro de la carpeta owner hay comandos que solo pueden ser usados por el dueño del bot/grupo.
 *
 * Sencillo, ¿verdad? Ah, un detalle: no necesitas poner un "if" para saber si el comando es de admin o del dueño.
 * ¡El bot ya lo hace por ti! Solo pon el comando en la carpeta correspondiente.
 *
 * ---------------- 🤖 ¿DÓNDE MODIFICO EL MENÚ? 🤖 ----------------
 *
 * Abre la carpeta "src"
 * Ve al archivo "messages.js" y edita el menú.
 * Solo recuerda, ¡haz todo dentro de las comillas invertidas (`), porque es un template string!
 *
 * ¿No entendiste?
 * Mira:
 *
 * `Hola, ¿todo bien?` - ESTO ESTÁ CORRECTO ✅
 *
 * Hola `¿todo bien?` - ESTO ESTÁ INCORRECTO (fíjate que el "Hola" está fuera de las comillas) ❌
 *
 * ---------------- 🤖 ¿CÓMO CAMBIO LA FOTO DEL BOT? 🤖 ----------------
 *
 * Abre la carpeta "assets"
 * Luego abre la carpeta "images"
 * Sustituye la imagen "takeshi-bot.png" por otra de tu preferencia.
 * Solo no olvides mantener el nombre "takeshi-bot.png"
 *
 * ---------------- 🚀 IMPORTANTE 🚀 ----------------
 *
 * Lee el tutorial completo en: https://github.com/guiireal/takeshi-bot?tab=readme-ov-file#instala%C3%A7%C3%A3o-no-termux-
 *
 * ¡No te saltes pasos! Léelo completo, porque es muy importante para que entiendas cómo funciona el bot.
 *
 * By: Dev Gui
 *
 * ¡No modifiques nada de aquí hacia abajo, a menos que sepas lo que estás haciendo!
 */
const NodeCache = require("node-cache");
const { connect } = require("./connection");
const { load } = require("./loader");
const { infoLog, bannerLog, errorLog, warningLog } = require("./utils/logger");

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
