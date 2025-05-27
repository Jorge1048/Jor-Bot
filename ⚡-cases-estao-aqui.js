/*
 * Si hiciste clic aquí, probablemente ya usaste un bot de "case" con un "index.js" de 20 mil líneas...
 * Lo sé, ¡te entiendo!
 * ¿Qué es mejor? ¿Que dé error tu play, ir al archivo "play.js" y corregirlo
 * o ir a la línea 71023 del "index.js" y corregir?                                                                                                                
 *
 * Imagina que pegas tu "case" mal y se te olvida cerrar
 * o abrir un paréntesis, una llave...
 * Pones el bot a funcionar, da varios errores y no sabes cómo resolver...
 * ¿Adivina qué haces?
 * Vuelves el "index.js" a como estaba antes, ¿verdad?
 *
 * ¡Eso es lo que no queremos! ¡Queremos un código limpio, legible y fácil de mantener!
 * ¡Creamos código para humanos, no para máquinas, así que, cuanto más simple, mejor!
 *
 * A partir de ahora, cambiemos la palabra "case" por "comando", ¿ok? ¡Vamos allá!
 *
 * ---------------- 🤖 ¿DÓNDE ESTÁN LOS COMANDOS? 🤖 ----------------
 *
 * Los comandos están dentro de la carpeta "src/commands"
 * ¿No entendiste? Vamos paso a paso:
 *
 * Abre la carpeta "src"
 * Luego abre la carpeta "commands"
 *
 * Verás que dentro hay 3 carpetas:
 *
 * - 📁 admin
 * - 📁 member
 * - 📁 owner
 *
 * Dentro de la carpeta admin hay comandos administrativos.
 * Dentro de la carpeta member hay comandos para miembros.
 * Dentro de la carpeta owner hay comandos que solo el dueño del bot/grupo puede usar.
 *
 * Sencillo, ¿verdad? Ah, un detalle, no necesitas poner un "if" para saber si el comando es de admin o del dueño.
 * ¡El bot ya lo hace por ti! Solo pon el comando en la carpeta correspondiente.
 *
 * ---------------- 🤖 ¿DÓNDE MODIFICO EL MENÚ? 🤖 ----------------
 *
 * Abre la carpeta "src" y luego la carpeta "utils"
 * Ve al archivo "messages.js" y edita el retorno de la función "menuMessage"!
 * Solo recuerda, ¡haz todo dentro de comillas invertidas (`), ya que es un template string!
 *
 * ¿No entendiste?
 * Mira:
 *
 * `Hola, ¿todo bien?` - ESTO ESTÁ CORRECTO ✅
 *
 * Hola `¿todo bien?` - ESTO ESTÁ INCORRECTO (mira que el "Hola" está fuera de las comillas) ❌
 *
 * ---------------- 🤖 ¿CÓMO CAMBIO LA FOTO DEL BOT? 🤖 ----------------
 *
 * Abre la carpeta "assets"
 * Luego abre la carpeta "images"
 * Sustituye la imagen "takeshi-bot.png" por otra de tu preferencia.
 * Solo no olvides mantener el nombre "takeshi-bot.png"
 *
 * ---------------- 🚀 IMPORTANTE 🚀 ----------------
 *
 * Lee el tutorial completo en: https://github.com/guiireal/takeshi-bot?tab=readme-ov-file#instala%C3%A7%C3%A3o-no-termux-
 *
 * ¡No saltes pasos! Léelo completo, porque es muy importante para entender cómo funciona el bot.
 *
 * By: Dev Gui
 */
