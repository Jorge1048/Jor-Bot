const { PREFIX } = require(`${BASE_DIR}/config`);
const { errorLog } = require(`${BASE_DIR}/utils/logger`);

module.exports = {
  name: "cerrar",
  description: "Fecha o grupo.",
  type: "admin",
  commands: [
    "cerrar", "stop",
    "fechar-grupo",
    "stop",
    "close",
    "Stop",
  ],
  usage: `${PREFIX}cerrar`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ socket, remoteJid, sendSuccessReply, sendErrorReply }) => {
    try {
      await socket.groupSettingUpdate(remoteJid, "announcement");
      // await sendSuccessReply("Grupo cerrado!");
    } catch (error) {
      await sendErrorReply(
        "Solo los administradores pueden cerrar el grupo!"
      );
      errorLog(
        `Ocurrió un error al cerrar el grupo! Causa: ${JSON.stringify(
          error,
          null,
          2
        )}`
      );
    }
  },
};
