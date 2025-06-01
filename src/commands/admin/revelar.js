const { DEFAULT_PREFIX, TEMP_DIR } = require(`${BASE_DIR}/config`);
const { InvalidParameterError } = require(`${BASE_DIR}/errors`);
const path = require("node:path");
const fs = require("node:fs");
const ffmpeg = require("fluent-ffmpeg");
const { getRandomName } = require(`${BASE_DIR}/utils`);

module.exports = {
  name: "revelar",
  description: "Revela uma imagem ou vídeo com visualização única",
  commands: ["revelarrrr", "rvrrr", "revealllll"],
  usage: `${DEFAULT_PREFIX}revelar (marque a imagem/vídeo) ou ${DEFAULT_PREFIX}revelar (responda a imagem/vídeo).`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({
    isImage,
    isVideo,
    downloadImage,
    downloadVideo,
    webMessage,
    sendSuccessReact,
    sendWaitReact,
    sendImageFromFile,
    sendVideoFromFile,
  }) => {
    if (!isImage && !isVideo) {
      throw new InvalidParameterError(
        "Tienes que responder una imagen para revelar"
      );
    }

    await sendWaitReact();

    const mediaCaption =
      webMessage.message?.extendedTextMessage?.contextInfo?.quotedMessage?.[
        isImage ? "imageMessage" : "videoMessage"
      ]?.caption || `Aqui esta su ${isImage ? "imagen" : "video"} revelad@!`;

    const outputPath = path.resolve(
      TEMP_DIR,
      `${getRandomName()}.${isImage ? "jpg" : "mp4"}`
    );

    let inputPath;

    try {
      if (isImage) {
        inputPath = await downloadImage(webMessage, "input");

        await new Promise((resolve, reject) => {
          ffmpeg(inputPath)
            .outputOptions("-q:v 2")
            .on("end", async () => {
              await sendImageFromFile(outputPath, mediaCaption);
              await sendSuccessReact();
              resolve();
            })
            .on("error", (err) => {
              console.error("Erro FFmpeg:", err);
              reject(err);
            })
            .save(outputPath);
        });
      } else if (isVideo) {
        inputPath = await downloadVideo(webMessage, "input");

        await new Promise((resolve, reject) => {
          ffmpeg(inputPath)
            .outputOptions("-c copy")
            .on("end", async () => {
              await sendVideoFromFile(outputPath, mediaCaption);
              await sendSuccessReact();
              resolve();
            })
            .on("error", (err) => {
              console.error("Erro FFmpeg:", err);
              reject(err);
            })
            .save(outputPath);
        });
      }
    } catch (error) {
      console.error("Erro geral:", error);
      throw new Error("Se produjo un error al procesar el medio. Intentar otra vez.");
    } finally {
      const cleanFile = (filePath) => {
        if (filePath && fs.existsSync(filePath)) {
          try {
            fs.unlinkSync(filePath);
          } catch (cleanError) {
            console.error("Error al limpiar el archivo:", cleanError);
          }
        }
      };

      cleanFile(inputPath);
      cleanFile(outputPath);
    }
  },
};
