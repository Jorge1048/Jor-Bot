/**
 * Menu del bot
 *
 * @author Dev Gui
 */
const { BOT_NAME, PREFIX } = require("../config");
const packageInfo = require("../../package.json");

exports.waitMessage = "Carregando dados...";

exports.menuMessage = () => {
  const date = new Date();

    return `╭  ┄ 𝅄 ۪꒰ ⡞᪲=͟͟͞𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊 ≼᳞ׄ ꒱ ۟ 𝅄 ┄
┊  
┊ • ${BOT_NAME}
┊ • Fecha: ${date.toLocaleDateString("pt-br")}
┊ • Hora: ${date.toLocaleTimeString("pt-br")}
┊ • Prefijo: ${PREFIX}
┊ • Versión: ${packageInfo.version}
┊
╰⸼ ┄ ┄ ┄ ─  ꒰  ׅ୭ 🦕 ୧ ׅ ꒱  ┄ ┄ ─ ┄ ⸼

╭  ┄ 𝅄 ۪꒰ ⡞᪲=͟͟͞𝘿𝙐𝙀𝙉̃𝙊≼᳞ׄ ꒱ ۟ 𝅄 ┄
┊
┊ • ${PREFIX}get-id
┊ • ${PREFIX}off
┊ • ${PREFIX}on
┊
╰⸼ ┄  ─  ꒰  ׅ୭ ☕ ୧ ׅ ꒱  ┄  ─ ┄ ⸼

╭  ┄ 𝅄 ۪꒰ ⡞᪲=͟͟͞𝘼𝘿𝙈𝙄𝙉𝙎≼᳞ׄ ꒱ ۟ 𝅄 ┄
┊
┊ • ${PREFIX}abrir
┊ • ${PREFIX}anti-link (1/0)
┊ • ${PREFIX}auto-responder (1/0)
┊ • ${PREFIX}cerrar
┊ • ${PREFIX}etiquetar
┊ • ${PREFIX}etiquetar1x1 
┊
╰⸼ ┄  ─  ꒰  ׅ୭ 🔥 ୧ ׅ ꒱  ┄  ─ ┄ ⸼

╭  ┄ 𝅄 ۪꒰ ⡞᪲=͟͟͞𝙈𝙞𝙚𝙢𝙗𝙧𝙤𝙨≼᳞ׄ ꒱ ۟ 𝅄 ┄
┊
┊ • ${PREFIX}stiker
┊
╰⸼ ┄  ─  ꒰  ׅ୭ 👒 ୧ ׅ ꒱  ┄  ┄ ⸼`;
};

/**
Comandos admis quitandos:
▢ • ${PREFIX}ban
▢ • ${PREFIX}exit (1/0)
▢ • ${PREFIX}promover
▢ • ${PREFIX}revelar
▢ • ${PREFIX}rebaixar
▢ • ${PREFIX}anti-link (1/0)
▢ • ${PREFIX}salida (1/0)
▢ • ${PREFIX}bienvenido (1/0)


╭━━⪩ PRINCIPAL ⪨━━
▢
▢ • ${PREFIX}attp
▢ • ${PREFIX}cep
▢ • ${PREFIX}exemplos-de-mensagens
▢ • ${PREFIX}google-search
▢ • ${PREFIX}perfil
▢ • ${PREFIX}ping
▢ • ${PREFIX}raw-message
▢ • ${PREFIX}sticker
▢ • ${PREFIX}to-image
▢ • ${PREFIX}ttp
▢ • ${PREFIX}yt-search
▢
╰━━─「🚀」─━━

╭━━⪩ DOWNLOADS ⪨━━
▢
▢ • ${PREFIX}play-audio
▢ • ${PREFIX}play-video
▢ • ${PREFIX}tik-tok
▢ • ${PREFIX}yt-mp3
▢ • ${PREFIX}yt-mp4
▢
╰━━─「🎶」─━━

╭━━⪩ BRINCADEIRAS ⪨━━
▢
▢ • ${PREFIX}abracar
▢ • ${PREFIX}beijar
▢ • ${PREFIX}jantar
▢ • ${PREFIX}lutar
▢ • ${PREFIX}matar
▢ • ${PREFIX}socar
▢
╰━━─「🎡」─━━

╭━━⪩ IA ⪨━━
▢
▢ • ${PREFIX}gpt-4
▢ • ${PREFIX}ia-sticker
▢ • ${PREFIX}pixart
▢ • ${PREFIX}stable-diffusion-turbo
▢
╰━━─「🚀」─━━

╭━━⪩ CANVAS ⪨━━
▢
▢ • ${PREFIX}bolsonaro
▢ • ${PREFIX}cadeia
▢ • ${PREFIX}inverter
▢ • ${PREFIX}rip
▢
╰━━─「❇」─━━
*/


