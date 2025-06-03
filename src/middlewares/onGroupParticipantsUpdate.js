/**
 * evento llamado cuando un membro
 * entra y sale de un grupo de WhatsApp.
 *
 * @author Dev Gui
 */
exports.onGroupParticipantsUpdate = async ({
  userJid,
  remoteJid,
  socket,
  groupCache,
  action,
}) => {
  try {
    // No hacer nada cuando alguien entra o sale del grupo
    return;
  } catch (error) {
    console.error("Erro ao processar evento onGroupParticipantsUpdate:", error);
    process.exit(1);
  }
};
