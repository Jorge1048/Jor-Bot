const { PREFIX } = require(`${BASE_DIR}/config`);

module.exports = {
  name: "ping",
  description: "Verificar si el bot está online y mostrar el tiempo de respuesta",
  commands: ["ping"],
  usage: `${PREFIX}ping`,

  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ sendReply, sendReact }) => {
    const start = Date.now();
    await sendReact("🏓");
    const end = Date.now();
    const ping = end - start;

    await sendReply(`🏓 Pong!\n> Tiempo ⴵ ${ping}ms`);
  },
};
