const { PREFIX, TEMP_DIR } = require(`${BASE_DIR}/config`);
const NodeCache = require("node-cache");
const fs = require("fs");
const path = require("path");

// Cache global de miembros de grupos (1 día TTL)
const groupMembersCache = new NodeCache({ stdTTL: 86400, checkperiod: 3600 });

// Función para crear ruta temporal
const getTempFilePath = (ext = "dat") =>
  path.join(TEMP_DIR, `tag-${Date.now()}.${ext}`);

module.exports = {
  name: "etiquetar",
  description: "Etiqueta a todos con un mensaje o reenvía uno con etiquetas (texto o media)",
  type: "admin",
  commands: ["tag", "etiquetar"],
  usage: `${PREFIX}etiquetar tu mensaje aquí\nO responde un mensaje con: ${PREFIX}etiquetar`,

  handle: async ({
    fullArgs,
    socket,
    remoteJid,
    isGroup,
    webMessage,
    downloadImage,
    downloadVideo,
    sendErrorReply,
    sendSuccessReact,
  }) => {
    if (!isGroup) return sendErrorReply("❌ Este comando solo se puede usar en grupos.");

    try {
      if (sendSuccessReact) await sendSuccessReact();

      // --- Cache de miembros ---
      let participantes = groupMembersCache.get(remoteJid);
if (!participantes) {
  const metadata = await socket.groupMetadata(remoteJid);
  participantes = metadata.participants.map(p => p.id);
  groupMembersCache.set(remoteJid, participantes);
}
      const mentions = participantes;

      // --- Texto del comando ---
      const texto = fullArgs.trim();

      // --- Mensaje citado ---
      const quoted =
        webMessage.message?.extendedTextMessage?.contextInfo?.quotedMessage ||
        webMessage.message?.imageMessage?.contextInfo?.quotedMessage ||
        webMessage.message?.videoMessage?.contextInfo?.quotedMessage ||
        webMessage.message?.stickerMessage?.contextInfo?.quotedMessage;

      // --- Determinar texto final ---
      let textoFinal = texto; // si pusiste tu propio texto
      if (quoted) {
        // Revisar si la media tiene caption o conversation
        textoFinal = textoFinal || 
          quoted.imageMessage?.caption ||
          quoted.videoMessage?.caption ||
          quoted.extendedTextMessage?.text ||
          quoted.conversation ||
          "";
      }

      if (!textoFinal && !quoted) return sendErrorReply("❌ Escribe un mensaje o responde a uno con el comando.");

      // --- Enviar ---
      if (quoted) {
        let filePath;
        let messageType;

        if (quoted.imageMessage) {
          messageType = "image";
          filePath = await downloadImage(webMessage, "tag");
        } else if (quoted.videoMessage) {
          messageType = "video";
          filePath = await downloadVideo(webMessage, "tag");
        } else if (quoted.stickerMessage) {
          messageType = "sticker";
        }

        if (filePath) {
          const mediaBuffer = fs.readFileSync(filePath);
          await socket.sendMessage(remoteJid, {
            [messageType]: mediaBuffer,
            caption: textoFinal, // ✅ caption con el texto original + tu texto opcional
            mentions, // ✅ menciones invisibles
          });

          fs.unlinkSync(filePath);

        } else if (messageType === "sticker") {
          await socket.copyNForward(remoteJid, { message: quoted }, true, { mentions });
        }

      } else {
        // solo texto
        await socket.sendMessage(remoteJid, { text: textoFinal, mentions });
      }

    } catch (error) {
      console.error("etiquetar:\n", error);
      await sendErrorReply("❌ Error al intentar etiquetar.");
    }
  },
};
