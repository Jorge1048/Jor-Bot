const { PREFIX } = require(`${BASE_DIR}/config`);
const { errorLog } = require(`${BASE_DIR}/utils/logger`);

module.exports = {
  name: "abrir",
  description: "Abre o grupo.",
  type: "admin",
  commands: [
    "abrir", "seguimos",
    "abre",
    "abrir-grupo",
    "abri-grupo",
    "abre-grupo",
    "open",
    "open-group",
  ],
  usage: `${PREFIX}abrir`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ socket, remoteJid, sendSuccessReply, sendErrorReply }) => {
    try {
      await socket.groupSettingUpdate(remoteJid, "not_announcement");
      // await sendSuccessReply("Grupo abierto!");
    } catch (error) {
      await sendErrorReply(
        "Solo los administradores pueden abrir el grupo!"
      );
      errorLog(
        `Hubo un error al abrir el grupo! Causa: ${JSON.stringify(
          error,
          null,
          2
        )}`
      );
    }
  },
};
