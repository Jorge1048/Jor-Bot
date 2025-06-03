const { PREFIX, ASSETS_DIR } = require(`${BASE_DIR}/config`);
const { menuMessage } = require(`${BASE_DIR}/utils/messages`);
const path = require("path");
const { delay } = require("baileys");

module.exports = {
  name: "menu",
  description: "Menú de comandos",
  type: "admin",
  commands: ["menu", "helppppp"],
  usage: `${PREFIX}menu`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ sendImageFromFile, sendReply, sendReact }) => {
    // Reacciona para indicar recepción de comando
    await sendReact("✅");

    // Envía la imagen junto con el texto del menú
    await sendImageFromFile(
      path.join(ASSETS_DIR, "images", "satohaki.png"),
      `\n\n${menuMessage()}`
    );

    // Espera 2 segundos y luego envía el mensaje reflexivo como respuesta
    setTimeout(async () => {
      await sendReply(
        "¡Hola! Usar el bot sin motivo puede afectar su funcionamiento. Te pedimos que lo uses solo cuando sea necesario.\n\nGracias por tu comprensión. 😊"
      );
    }, 15000);
  },
};
