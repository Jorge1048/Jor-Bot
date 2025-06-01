/**
 * Evento llamado cuando un mensaje
 * se envía al grupo de WhatsApp *
 * @author Dev Gui
 */
const {
  isAtLeastMinutesInPast,
  GROUP_PARTICIPANT_ADD,
  GROUP_PARTICIPANT_LEAVE,
  isAddOrLeave,
} = require("../utils");
const { dynamicCommand } = require("../utils/dynamicCommand");
const { loadCommonFunctions } = require("../utils/loadCommonFunctions");
const { onGroupParticipantsUpdate } = require("./onGroupParticipantsUpdate");

exports.onMessagesUpsert = async ({ socket, messages, groupCache }) => {
  if (!messages.length) {
    return;
  }

  for (const webMessage of messages) {
    const timestamp = webMessage.messageTimestamp;

    if (isAtLeastMinutesInPast(timestamp)) {
      continue;
    }

    if (isAddOrLeave.includes(webMessage.messageStubType)) {
      let action = "";
      if (webMessage.messageStubType === GROUP_PARTICIPANT_ADD) {
        action = "add";
      } else if (webMessage.messageStubType === GROUP_PARTICIPANT_LEAVE) {
        action = "remove";
      }

      onGroupParticipantsUpdate({
        userJid: webMessage.messageStubParameters[0],
        remoteJid: webMessage.key.remoteJid,
        socket,
        groupCache,
        action,
      });
   } else {
      const commonFunctions = loadCommonFunctions({ socket, webMessage });

      if (!commonFunctions) {
        continue;
      }

      // ✅ Se pasa el socket como client al comando
      commonFunctions.client = socket;

      await dynamicCommand(commonFunctions);
    }
  }
};
