const path = require("path");

// Prefijo de los dos comandos. 
exports.PREFIX = "/";

// Emoji del bot (cámbialo si lo prefieres).
exports.BOT_EMOJI = "🤖";

// Nombre del bot (cámbialo si lo prefieres).
exports.BOT_NAME = "Satohaki-bot";


exports.BOT_NUMBER = "558112345678";

// Número do bot. Coloque o número do bot
// (apenas números, exatamente como está no WhatsApp).
exports.OWNER_NUMBER = "573245451694";

// Diretorio de los comandos
exports.COMMANDS_DIR = path.join(__dirname, "commands");

// Diretório de arquivos de mídia.
exports.DATABASE_DIR = path.resolve(__dirname, "..", "database");

// Diretório de arquivos de mídia.
exports.ASSETS_DIR = path.resolve(__dirname, "..", "assets");

// Diretório de arquivos temporários.
exports.TEMP_DIR = path.resolve(__dirname, "..", "assets", "temp");

// Timeout em milissegundos por evento (evita banimento).
exports.TIMEOUT_IN_MILLISECONDS_BY_EVENT = 700;

// Plataforma de API's
exports.SPIDER_API_BASE_URL = "https://api.spiderx.com.br/api";

// Obtenha seu token, criando uma conta em: https://api.spiderx.com.br.
exports.SPIDER_API_TOKEN = "seu_token_aqui";

// Caso queira responder apenas um grupo específico, coloque o ID dele aqui (ex: 120363023799506419@g.us).
// Para saber o ID do grupo, use o comando <prefixo>getid
// Troque o <prefixo> pelo prefixo do bot (ex: /getid).
exports.ONLY_GROUP_ID = "";

// Diretório base do projeto.
exports.BASE_DIR = path.resolve(__dirname);

// Caso queira usar proxy.
exports.PROXY_PROTOCOL = "http";
exports.PROXY_HOST = "ip";
exports.PROXY_PORT = "porta";
exports.PROXY_USERNAME = "usuário";
exports.PROXY_PASSWORD = "seha";
