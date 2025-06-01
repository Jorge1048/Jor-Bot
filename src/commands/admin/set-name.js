const { errorLog } = require(`${BASE_DIR}/utils/logger`);
const { PREFIX } = require(`${BASE_DIR}/config`);
const { InvalidParameterError } = require(`${BASE_DIR}/errors`);
const { WarningError } = require(`${BASE_DIR}/errors`);

module.exports = {
  name: "set-name",
  description: "Altera o nome do grupo e salva o nome antigo",
  commands: ["set-name", "set-group-name", "mudar-nome-grupo", "nome-grupo"],
  usage: `${PREFIX}set-name novo nome do grupo`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({
    fullArgs,
    remoteJid,
    socket,
    sendErrorReply,
    sendSuccessReply,
    sendWaitReply,
    isGroup,
  }) => {
    if (!isGroup) {
      throw new WarningError("Este comandos solo puede ser usado en grupos.");
    }

    if (!fullArgs) {
      throw new InvalidParameterError(
        "Debes proporcionar un nuevo nombre para el grupo!"
      );
    }

    const minLength = 3;
    const maxLength = 40;

    if (fullArgs.length < minLength || fullArgs.length > maxLength) {
      throw new InvalidParameterError(
        `El nombre del grupo debe tener entre  ${minLength} y ${maxLength} carácteres!`
      );
    }

    try {
      await sendWaitReply("Cambiando el nombre del grupo...");

      const groupMetadata = await socket.groupMetadata(remoteJid);
      const oldName = groupMetadata.subject;

      await socket.groupUpdateSubject(remoteJid, fullArgs);

      await sendSuccessReply(
        `El nombre del grupo fué cambiado con éxito!\n\n*Antiguo*: ${oldName}\n\n*Nuevo*: ${fullArgs}`
      );
    } catch (error) {
      errorLog("Error al cambiar el nombre del grupo:", error);
      await sendErrorReply(
        "No se pudo cambiar el nombre del grupo. Vrifique si tiene el permiso del administrador."
      );
    }
  },
};
