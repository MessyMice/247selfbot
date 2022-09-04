const settings = require("../core/settings.js");
const prefix = settings.bot.prefix;
module.exports = {
  name: "about",
  aliases: ["a", "info", "i", "credits", "c"],
  run: (client, message, args) => {
    message.channel.send(
      `▀█ █░█ ▀▀█ █▀ █▄▄\n█▄ ▀▀█ ░░█ ▄█ █▄█\n***__About Section__***\n:: This 24/7 streamer/sb is coded by MessyMice\n:: Get SB from https://www.github.com/messymice/247streamer\n:: Ping: ${client.ping}ms\n:: Prefix: **${prefix}**`
    );
  },
};
