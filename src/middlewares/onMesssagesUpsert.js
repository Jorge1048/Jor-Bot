/**
 * Evento llamado cuando se recibe un mensaje en WhatsApp
 * Optimizado para velocidad y sin errores de variables no definidas
 */
const {
  GROUP_PARTICIPANT_ADD,
  GROUP_PARTICIPANT_LEAVE,
  isAddOrLeave,
} = require("../utils");
const { dynamicCommand } = require("../utils/dynamicCommand");
const { loadCommonFunctions } = require("../utils/loadCommonFunctions");
const { onGroupParticipantsUpdate } = require("./onGroupParticipantsUpdate");

exports.onMessagesUpsert = async ({ socket, messages, groupCache }) => {
  if (!messages.length) return;

  for (const webMessage of messages) {
    const timestamp = webMessage.messageTimestamp;

    // 🔹 Omitimos el filtrado por antigüedad para velocidad
    // if (isAtLeastMinutesInPast(timestamp)) continue;

    if (isAddOrLeave.includes(webMessage.messageStubType)) {
      let action = "";
      if (webMessage.messageStubType === GROUP_PARTICIPANT_ADD) action = "add";
      else if (webMessage.messageStubType === GROUP_PARTICIPANT_LEAVE) action = "remove";

      await onGroupParticipantsUpdate({
        userJid: webMessage.messageStubParameters[0],
        remoteJid: webMessage.key.remoteJid,
        socket,
        groupCache,
        action,
      });
    } else {
      const commonFunctions = loadCommonFunctions({ socket, webMessage });
      if (!commonFunctions) continue;

      // Pasamos el socket como client
      commonFunctions.client = socket;

      await dynamicCommand(commonFunctions);
    }
  }
};
