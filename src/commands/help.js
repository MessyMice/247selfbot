const settings = require("../core/settings.js");
const prefix = settings.bot.prefix;
module.exports = {
  name: "help",
  aliases: ["h"],
  run: (client, message, args) => {
    message.channel.send(
      `▀█ █░█ ▀▀█ █▀ █▄▄\n█▄ ▀▀█ ░░█ ▄█ █▄█\n***__Help Menu__***\n\n:: ${prefix}help/${prefix}h\n:: Shows Help Menu\n:: No Usage\n\n:: ${prefix}about (aliases:- a, i, c, info, credits)\n:: Shows About Section\n:: No Usages\n\n:: ${prefix}ping/${prefix}p\n:: Shows Ping/Latency of sb in ms.\n:: No usage\n\n:: ${prefix}spam/${prefix}s\n:: Spams a Message\n:: **${prefix}spam <amount> <message>**\n:: **${prefix}s <amount> <message>**`
    );
  },
};
