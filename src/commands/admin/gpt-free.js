const { askOpenRouter } = require("../../services/openrouter");

module.exports = {
  name: "gpt-free",
  description: "IA gratuita com OpenChat (via OpenRouter)",
  type: "admin",
  commands: ["iasatohaki", "gptlibre", "openchat"],
  usage: "/iasatohaki cual es la capital de Japón?",
  handle: async (ctx) => {
    const { client, sendSuccessReply, sendWaitReply, args, message } = ctx;

    const prompt = args.join(" ");
    if (!prompt) {
      return sendSuccessReply(
        `¿Qué debo responder? 🤔\nUsa el comando así: \`/iasatohaki + tu pregunta\``
      );
    }

    const waitMsg = await sendWaitReply("𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎...");

    try {
      const resposta = await askOpenRouter(prompt);

      // Eliminar mensaje de espera si es posible
      if (client && waitMsg?.key) {
        try {
          await client.sendMessage(waitMsg.key.remoteJid, {
            delete: waitMsg.key,
          });
        } catch (err) {
          console.warn("No se pudo eliminar el mensaje de espera:", err.message || err);
        }
      }

      await sendSuccessReply(resposta);
    } catch (err) {
      console.error("Error GPT-Free:", err.response?.data || err.message);
      await sendSuccessReply("❌ Ocurrió un error al consultar con la IA");
    }
  },
};
