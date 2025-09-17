/** ✓
 * Script de inicialización del bot.
 *
 * Este script es responsable por iniciar la conexión con WhatsApp.
 * No se recomienda modificar este archivo, a menos que sepas lo que haces.
 *
 * @author Dev Gui
 */

const path = require("path");
const { question, onlyNumbers } = require("./utils");
const {
  default: makeWASocket,
  DisconnectReason,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  isJidBroadcast,
  makeCacheableSignalKeyStore,
  isJidStatusBroadcast,
  isJidNewsletter,
} = require("baileys");
const pino = require("pino");
const { load } = require("./loader");
const {
  warningLog,
  infoLog,
  errorLog,
  sayLog,
  successLog,
} = require("./utils/logger");
const NodeCache = require("node-cache");
const { TEMP_DIR } = require("./config");
const chalk = require("chalk"); // ⚡ Importamos chalk para colores

// Logger
const logger = pino(
  { timestamp: () => `,"time":"${new Date().toJSON()}"` },
  pino.destination(path.join(TEMP_DIR, "wa-logs.txt"))
);
logger.level = "error";

// Cache globales
const msgRetryCounterCache = new NodeCache();
const processedMsgCache = new NodeCache({ stdTTL: 30, checkperiod: 30 }); // cache de mensajes procesados

// Limpiar cache automáticamente cada 30s
setInterval(() => {
  processedMsgCache.flushAll();
  // infoLog("Cache de mensajes procesados limpiada automáticamente."); // descomenta si quieres log
}, 1000 * 30);

async function connect(groupCache) {
  const baileysFolder = path.resolve(
    __dirname,
    "..",
    "assets",
    "auth",
    "baileys"
  );

  const { state, saveCreds } = await useMultiFileAuthState(baileysFolder);
  const { version } = await fetchLatestBaileysVersion();

  const socket = makeWASocket({
    version,
    logger,
    defaultQueryTimeoutMs: undefined,
    retryRequestDelayMs: 600 * 1000,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger),
    },
    shouldIgnoreJid: (jid) =>
      isJidBroadcast(jid) || isJidStatusBroadcast(jid) || isJidNewsletter(jid),
    keepAliveIntervalMs: 60 * 1000,
    maxMsgRetryCount: 5,
    markOnlineOnConnect: true,
    syncFullHistory: false,
    msgRetryCounterCache,
    shouldSyncHistoryMessage: () => false,
    cachedGroupMetadata: (jid) => groupCache.get(jid),
  });

  // Preguntar número si no hay credenciales
  if (!socket.authState.creds.registered) {
    warningLog("Credenciales aún no configuradas!");
    infoLog('Ingresa el número de teléfono del bot (ejemplo: "573245451694"):');

    const phoneNumber = await question("Ingresa el número de teléfono del bot: ");
    if (!phoneNumber) {
      errorLog(
        '¡Número de teléfono inválido! Intenta de nuevo con el comando "npm start".'
      );
      process.exit(1);
    }

    const code = await socket.requestPairingCode(onlyNumbers(phoneNumber));
    sayLog(`Código de emparejamiento: ${code}`);
  }

  // Listener de mensajes
  socket.ev.on("messages.upsert", async ({ messages, type }) => {
    if (type !== "notify") return;

    const msg = messages[0];
    if (!msg.message) return;

    if (processedMsgCache.get(msg.key.id)) return; // ya procesado
    processedMsgCache.set(msg.key.id, true); // marcar como procesado

    await load(socket, groupCache, msg);
  });

  // Listener de conexión
  socket.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "close") {
      const statusCode = lastDisconnect.error?.output?.statusCode;

      if (statusCode === DisconnectReason.loggedOut) {
        errorLog("Bot desconectado!");
      } else {
        switch (statusCode) {
          case DisconnectReason.badSession:
            warningLog("Sesión inválida!");
            break;
          case DisconnectReason.connectionClosed:
            warningLog(chalk.hex('#DAA520').italic("Conexión cerrada!"));
            break;
          case DisconnectReason.connectionLost:
            warningLog(chalk.hex('#DAA520')("Conexión perdida!"));
            break;
          case DisconnectReason.connectionReplaced:
            warningLog(chalk.hex('#DAA520')("Conexión sustituida!"));
            break;
          case DisconnectReason.multideviceMismatch:
            warningLog(chalk.hex('#DAA520')("Dispositivo incompatible!"));
            break;
          case DisconnectReason.forbidden:
            warningLog(chalk.hex('#DAA520')("Conexión prohibida!"));
            break;
          case DisconnectReason.restartRequired:
            infoLog('Para reiniciar el bot digite "npm start".');
            break;
          case DisconnectReason.unavailableService:
            warningLog("Servicio indisponible!");
            break;
        }

        // Reconectar sin duplicar listeners
        const newSocket = await connect(groupCache);
        load(newSocket, groupCache);
      }
    } else if (connection === "open") {
      successLog(chalk.hex('#006400').italic("Conectando con éxito!"));
    } else {
      infoLog(chalk.hex('#708090').italic("Actualizando conexión..."));
    }
  });

  socket.ev.on("creds.update", saveCreds);

  return socket;
}

exports.connect = connect;
