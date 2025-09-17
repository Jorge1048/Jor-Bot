/**
 * Logs
 *
 * @author Dev Gui
 */
const { version } = require("../../package.json");
const chalk = require('chalk');

exports.sayLog = (message) => {
  console.log("\x1b[36m[JOR BOT | CHAT]\x1b[0m", message);
};

exports.inputLog = (message) => {
  console.log("\x1b[30m[JOR BOT | ENTRADA]\x1b[0m", message);
};

exports.infoLog = (message) => {
  console.log(chalk.hex('#9B30FF')("[JOR BOT | INFO]"), message);
};

exports.successLog = (message) => {
  console.log("\x1b[32m[JOR BOT | COMPLETADO]\x1b[0m", message);
};

exports.errorLog = (message) => {
  console.log("\x1b[31m[JOR BOT | ERROR]\x1b[0m", message);
};

exports.warningLog = (message) => {
  console.log("\x1b[33m[JOR BOT | PRECAUCIÓN]\x1b[0m", message);
};

exports.bannerLog = () => {
  const width = process.stdout.columns || 80; // ancho de la consola

  console.log("\n\n"); // espacio vertical

  const asciiArt = `
                                    
 ㅤㅤ__ _____ _____      _____ _____ _____ 
 ㅤ__|  |     | __  |    | __  |     |_   _|
  | |   |  |  |    -|    | __ -|  |  | | |  
|_____|_____|__|__|    |_____|_____| |_|  
                                        
                                  
                                  
`;
  const neonColors = [
  "#8A2BE2", // azul violeta
  "#5F9EA0", // azul cadete (tipo metalizado)
  "#7FFF00", // verde chartreuse suave
  "#00CED1", // turquesa profundo
  "#FF8C00", // naranja oscuro, cálido
  "#DA70D6", // orquídea suave
  "#20B2AA", // verde azulado
];

  // Centrar y colorear ASCII art
  const asciiLines = asciiArt.trim().split("\n");
  asciiLines.forEach(line => {
    const padding = Math.floor((width - line.length) / 2);

    const coloredLine = line
      .split("")
      .map((char, i) => chalk.hex(neonColors[i % neonColors.length]).bold(char))
      .join("");

    console.log(" ".repeat(padding > 0 ? padding : 0) + coloredLine);
  });

  console.log("\n\n"); // espacio vertical

  // Función para centrar texto normal
  const centerText = (text) => {
    const padding = Math.floor((width - text.length) / 2);
    return " ".repeat(padding > 0 ? padding : 0) + text;
  };

  console.log(centerText(chalk.hex("#8A2BE2").bold("                    Hecho por Jor 🦅"))); // texto neón rosa
  console.log(centerText(chalk.hex("#00FFFF").bold(`                     Versión: ${version}`))); // texto neón cyan
  console.log("\n\n"); // espacio vertical final
};
