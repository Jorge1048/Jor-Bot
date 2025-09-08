const { PREFIX } = require(`${BASE_DIR}/config`);

module.exports = {
  name: "etiquetar",
  description: "Etiqueta a todos con un mensaje o reenvía uno con etiquetas (texto o media)",
  type: "admin",
  commands: ["tag"],
  usage: `${PREFIX}etiquetar tu mensaje aquí\nO responde un mensaje con: ${PREFIX}etiquetar`,

  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ fullArgs, socket, remoteJid, isGroup, sendReact, sendErrorReply, msg }) => {
    if (!isGroup) {
      return sendErrorReply("❌ Este comando solo se puede usar en grupos.");
    }

    try {
      await sendReact("📢");

      const metadata = await socket.groupMetadata(remoteJid);
      const participantes = metadata.participants || [];
      const menciones = participantes.map(p => p.id);

      const texto = fullArgs.trim();
      const ctxInfo = msg?.message?.extendedTextMessage?.contextInfo;
      const quoted = ctxInfo?.quotedMessage;

      if (texto) {
        // Caso 1: /etiquetar hola → manda el texto con menciones
        await socket.sendMessage(remoteJid, {
          text: texto,
          mentions: menciones,
        });

      } else if (quoted) {
        // Caso 2: responder a un mensaje con /etiquetar → reenviar (texto o media) con menciones
        await socket.copyNForward(remoteJid, { message: quoted }, true, {
          mentions: menciones,
        });

      } else {
        return sendErrorReply("❌ Escribe un mensaje o responde a uno con el comando.");
      }

    } catch (error) {
      console.error("[BOT ERROR] etiquetar:\n", error);
      await sendErrorReply("❌ Error al intentar etiquetar.");
    }
  },
};
