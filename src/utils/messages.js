/**
 * Mensagens do bot
 *
 * @author Dev Gui
 */
const { BOT_NAME, PREFIX } = require("../config");
const packageInfo = require("../../package.json");

exports.waitMessage = "Carregando dados...";

exports.menuMessage = () => {
  const date = new Date(); 

  return `
╭ 𝅄 ۪꒰ \`⡞᪲=͟͟͞𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊 ≼᳞\` ꒱ ۟𝅄┄
┊  
┊  • ${BOT_NAME}
┊  • Fecha: ${date.toLocaleDateString("pt-br")}
┊  • Hora: ${date.toLocaleTimeString("pt-br")}
┊  • Prefijo: ${PREFIX}
┊  • Versión: ${packageInfo.version}
┊
╰⸼ ┄ ─  ꒰  ׅ୭ 🦕 ୧ ׅ ꒱  ┄ ─ ┄ ⸼

╭  ┄ 𝅄 ۪꒰ \`⡞᪲=͟͟͞𝘿𝙐𝙀𝙉̃𝙊≼\`᳞ׄ ꒱ ۟ 𝅄 ┄
┊
┊  • ${PREFIX}get-id
┊  • ${PREFIX}off
┊  • ${PREFIX}on
┊
╰⸼ ┄  ─  ꒰  ׅ୭ ☕ ୧ ׅ ꒱  ┄  ─ ┄ ⸼

╭  ┄ 𝅄 ۪꒰ \`⡞᪲=͟͟͞𝘼𝘿𝙈𝙄𝙉𝙎≼\`᳞ׄ ꒱ ۟ 𝅄 ┄
┊
┊  • ${PREFIX}abrir
┊  • ${PREFIX}cerrar
┊  • ${PREFIX}anti-link (1/0)
┊  • ${PREFIX}auto-responder (1/0)
┊  • ${PREFIX}etiquetar
┊  • ${PREFIX}etiquetar1x1
┊  • ${PREFIX}iasatohaki
┊
╰⸼ ┄  ─  ꒰  ׅ୭ 🔥 ୧ ׅ ꒱  ┄  ─ ┄ ⸼

╭  ┄ 𝅄 ۪꒰ \`⡞᪲=͟͟͞𝙈𝙞𝙚𝙢𝙗𝙧𝙤𝙨≼\`᳞ׄ ꒱ ۟ 𝅄 ┄
┊
┊  • ${PREFIX}stiker
┊
╰⸼ ┄  ─  ꒰  ׅ୭ 👒 ୧ ׅ ꒱  ┄  ┄ ⸼`;
};
