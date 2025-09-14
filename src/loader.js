/**
 * Carga los eventos para el socket de WhatsApp
 * Optimizado para velocidad en grupos grandes
 * @author Dev Gui
 */
const path = require("path");
const { errorLog, infoLog } = require("./utils/logger");
const { onMessagesUpsert } = require("./middlewares/onMesssagesUpsert");

exports.load = (socket, groupCache) => {
  global.BASE_DIR = path.resolve(__dirname);

  const safeEventHandler = async (callback, data, eventName) => {
    try {
      await callback(data);
    } catch (error) {
      errorLog(`Error al procesar evento ${eventName}: ${error.message}`);
    }
  };

  // 🔹 Messages.upsert sin timeout innecesario
  socket.ev.on("messages.upsert", async (data) => {
    safeEventHandler(
      () =>
        onMessagesUpsert({
          socket,
          messages: data.messages,
          groupCache,
        }),
      data,
      "messages.upsert"
    );
  });

  process.on("uncaughtException", (error) => {
    errorLog(`Excepción no capturada: ${error.message}`);
  });

  process.on("unhandledRejection", (reason) => {
    errorLog(`Promesa rechazada no tratada: ${reason}`);
  });

  infoLog("Eventos cargados correctamente");
};
