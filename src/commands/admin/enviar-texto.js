const { PREFIX } = require(`${BASE_DIR}/config`);
const { delay } = require("baileys");

module.exports = {
  name: "enviar-texto",
  description:
    "Ejemplo de cómo enviar mensajes de texto simples y con instrucciones",
  type: "admin",
  commands: ["instalar-bot"],
  usage: `${PREFIX}enviar-texto`,

  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ sendReply, sendText, sendReact, userJid }) => {
    await sendReact("💬");

    await delay(3000);
    await sendText(`\`𝐒𝐢 𝐪𝐮𝐢𝐞𝐫𝐞𝐬 𝐢𝐧𝐬𝐭𝐚𝐥𝐚𝐫 𝐒𝐚𝐭𝐨𝐡𝐚𝐤𝐢 𝐁𝐨𝐭, 𝐚𝐛𝐫𝐞 𝐓𝐞𝐫𝐦𝐮𝐱 𝐲 𝐞𝐣𝐞𝐜𝐮𝐭𝐚 𝐥𝐨𝐬 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐮𝐧𝐨 𝐩𝐨𝐫 𝐮𝐧𝐨:\``);

    await delay(3000);
    await sendText("pkg upgrade -y && pkg update -y && pkg install git -y && pkg install nodejs-lts -y && pkg install ffmpeg -y", null, { noPrefix: true });

    await delay(3000);
    await sendText("termux-setup-storage", null, { noPrefix: true });

    await delay(3000);
    await sendText("cd /sdcard", null, { noPrefix: true });

    await delay(3000);
    await sendText("git clone https://github.com/Jorge1048/Satohaki-bot.git", null, { noPrefix: true });

    await delay(3000);
    await sendText("cd Satohaki-bot", null, { noPrefix: true });

    await delay(3000);
    await sendText("chmod -R 755 ./*", null, { noPrefix: true });

    await delay(3000);
    await sendText("npm start", null, { noPrefix: true });

    await delay(3000);
    await sendText(`\`𝐓𝐞 𝐝𝐚𝐫á 𝐮𝐧 𝐜ó𝐝𝐢𝐠𝐨 𝐩𝐚𝐫𝐚 𝐪𝐮𝐞 𝐯𝐢𝐧𝐜𝐮𝐥𝐞𝐬 𝐞𝐥 𝐛𝐨𝐭 𝐜𝐨𝐦𝐨 𝐬𝐢 𝐟𝐮𝐞𝐫𝐚 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐖𝐞𝐛\``);

    await delay(3000);
    await sendText(`\`𝐏𝐚𝐫𝐚 𝐝𝐞𝐭𝐞𝐧𝐞𝐫 𝐞𝐥 𝐛𝐨𝐭 𝐞𝐧 𝐓𝐞𝐫𝐦𝐮𝐱, 𝐩𝐫𝐞𝐬𝐢𝐨𝐧𝐚 𝐂𝐓𝐑𝐋 + 𝐜\`\n\`𝐍𝐨𝐭𝐚: 𝐀𝐫𝐫𝐢𝐛𝐚 𝐝𝐞𝐥 𝐭𝐞𝐜𝐥𝐚𝐝𝐨 𝐝𝐞 𝐭𝐮 𝐭𝐞𝐥é𝐟𝐨𝐧𝐨 𝐬𝐚𝐥𝐞 𝐥𝐚 𝐨𝐩𝐜𝐢ó𝐧 𝐂𝐓𝐑𝐋.\`\n\n\`𝐏𝐚𝐫𝐚 𝐢𝐧𝐢𝐜𝐢𝐚𝐫 𝐨𝐭𝐫𝐚 𝐯𝐞𝐳, 𝐞𝐣𝐞𝐜𝐮𝐭𝐚:\``);

    await delay(3000);
    await sendText("npm start", null, { noPrefix: true });

    await delay(3000);
    await sendText(`\`𝐒𝐢 𝐝𝐞𝐬𝐯𝐢𝐧𝐜𝐮𝐥𝐚𝐬 𝐞𝐥 𝐛𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩, 𝐞𝐣𝐞𝐜𝐮𝐭𝐚:\``);

    await delay(3000);
    await sendText("rm -rf ./assets/auth/baileys && npm start", null, { noPrefix: true });
  }
};

 /**
    await sendText(
      `Olá! Esta mensagem menciona você: @${userJid.split("@")[0]}`,
      [userJid]
    );

    await delay(3000);

    await sendReply("Esta é uma resposta usando sendReply");

    await delay(3000);

    await sendText(
      "Você pode usar *negrito*, _itálico_, ~riscado~ e ```código``` no texto!"
    );

    await delay(3000);

    await sendText(
      "📝 *Diferenças entre as funções:*\n\n" +
        "• `sendText()` - Envia texto simples, com opção de mencionar usuários\n" +
        "• `sendReply()` - Envia texto como resposta à mensagem atual\n\n" +
        "Ambas suportam formatação do WhatsApp!"
    );
    
 */
