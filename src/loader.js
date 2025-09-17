/**
 * Carga los eventos para el socket de WhatsApp
 * Optimizado para velocidad en grupos grandes
 * Ignora mensajes antiguos y limpia cache automáticamente
 * @author Dev Gui
 */
const path = require("path");
const { errorLog, infoLog } = require("./utils/logger");
const { onMessagesUpsert } = require("./middlewares/onMesssagesUpsert");
const NodeCache = require("node-cache");

// Cache para mensajes procesados
const processedMsgCache = new NodeCache({ stdTTL: 30, checkperiod: 10 }); // TTL 30s, check cada 10s

exports.load = (socket, groupCache) => {
  global.BASE_DIR = path.resolve(__dirname);

  // Marca el tiempo de inicio del socket
  if (!socket.startTime) socket.startTime = Math.floor(Date.now() / 1000);

  const safeEventHandler = async (callback, data, eventName) => {
    try {
      await callback(data);
    } catch (error) {
      errorLog(`Error al procesar evento ${eventName}: ${error.message}`);
    }
  };

  // 🔹 Messages.upsert optimizado
  socket.ev.on("messages.upsert", async ({ messages, type }) => {
    if (type !== "notify") return;

    const msg = messages[0];
    if (!msg.message) return;

    const nowInSeconds = Math.floor(Date.now() / 1000);

    // Ignorar mensajes antiguos al iniciar
    if (msg.messageTimestamp < socket.startTime) return;

    // Evitar duplicados
    if (processedMsgCache.get(msg.key.id)) return;
    processedMsgCache.set(msg.key.id, true);

    await safeEventHandler(
      () =>
        onMessagesUpsert({
          socket,
          messages: [msg],
          groupCache,
        }),
      msg,
      "messages.upsert"
    );
  });

  // Limpiar cache de mensajes cada 30 segundos
  setInterval(() => {
    processedMsgCache.flushAll();
    infoLog("Cache de mensajes procesados limpiada automáticamente.");
  }, 30 * 1000);

  process.on("uncaughtException", (error) => {
    errorLog(`Excepción no capturada: ${error.message}`);
  });

  process.on("unhandledRejection", (reason) => {
    errorLog(`Promesa rechazada no tratada: ${reason}`);
  });

  infoLog("Eventos cargados correctamente");
};
