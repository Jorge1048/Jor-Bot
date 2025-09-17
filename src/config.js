const path = require("path");

// Prefijo de comando (Usa otro si lo prefieres)
exports.PREFIX = "/";

// Emoji/distintivo del bot (Puedes usar otro y puedes cambiarlo por palabras).
exports.BOT_EMOJI = "🦅";

// Nombre del bot
exports.BOT_NAME = "Jor bot";

// Número de bot. Introduzca el número del bot
// (solo números, tal como está en WhatsApp).
exports.BOT_NUMBER = "";

//clave para chatgpt 👇🏻
exports.OPENROUTER_API_KEY = "Pon_tu_clave_aquí";

// Número de propietario del bot. Introduzca el número del propietario del bot
// (solo números, tal como está en WhatsApp).
exports.OWNER_NUMBER = "573019580756";

// Diretorio de comandos
exports.COMMANDS_DIR = path.join(__dirname, "commands");

// Directorio de archivos multimedia.
exports.DATABASE_DIR = path.resolve(__dirname, "..", "database");

// Directorio de archivos multimedia.
exports.ASSETS_DIR = path.resolve(__dirname, "..", "assets");

// Directorio de archivos temporales.
exports.TEMP_DIR = path.resolve(__dirname, "..", "assets", "temp");

// Tiempo de espera en milisegundos por evento (evita la prohibición).
exports.TIMEOUT_IN_MILLISECONDS_BY_EVENT = 700;

// Plataforma de API's
exports.SPIDER_API_BASE_URL = "https://api.spiderx.com.br/api";

// Obtenga su token creando una cuenta en: https://api.spiderx.com.br.

exports.SPIDER_API_TOKEN = "No_dijitar_nada_aquíi";

// Si desea responder solo a un grupo específico, coloque su ID aquí (ej: 120363023799506419@g.us).
// Para averiguar el ID del grupo, utilice el comando <prefix>get-id
// Reemplace <prefix> con el prefijo del bot (por ejemplo, /get-id).
exports.ONLY_GROUP_ID = "";

// Directorio base del proyecto.
exports.BASE_DIR = path.resolve(__dirname);

// Si desea utilizar proxy.
exports.PROXY_PROTOCOL = "http";
exports.PROXY_HOST = "ip";
exports.PROXY_PORT = "porta";
exports.PROXY_USERNAME = "usuário";
exports.PROXY_PASSWORD = "seha";
