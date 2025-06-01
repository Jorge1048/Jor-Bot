const { PREFIX } = require(`${BASE_DIR}/config`);
const { errorLog } = require(`${BASE_DIR}/utils/logger`);

module.exports = {
  name: "tagall",
  description: "Etiqueta a todos los miembros del grupo",
  type: "admin",
  commands: ["tagall", "etiquetar1x1", "todos"],
  usage: `${PREFIX}tagall`,

  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ socket, remoteJid, isGroup, sendErrorReply, sendReact }) => {
    if (!isGroup) {
      await sendErrorReply("❌ Este comando solo puede usarse en grupos.");
      return;
    }

    try {
    await sendReact("📢"); 
      const metadata = await socket.groupMetadata(remoteJid);
      const participantes = metadata?.participants || [];

      const menciones = participantes.map(p => p.id);

      // Dividir en bloques de 35
      const bloques = [];
      for (let i = 0; i < menciones.length; i += 35) {
        const bloque = menciones.slice(i, i + 35);
        const textoBloque = bloque.map(p => `• @${p.split("@")[0]}`).join("\n");

        bloques.push({ texto: textoBloque, menciones: bloque });
      }

      // Enviar bloque por bloque
      for (const b of bloques) {
        await socket.sendMessage(remoteJid, {
          text: `*— Mención general del grupo —*\n\n${b.texto}`,
          mentions: b.menciones,
        });

        await new Promise(resolve => setTimeout(resolve, 3000)); // Espera 3 segundos entre bloques
      }

    } catch (error) {
      errorLog(`Error en tagall: ${JSON.stringify(error, null, 2)}`);
      await sendErrorReply("❌ Ocurrió un error inesperado al intentar etiquetar.");
    }
  },
};
