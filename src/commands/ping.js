module.exports = {
  name: "ping",
  aliases: ["p"],
  run: (client, message, args) => {
    message.channel.send(`🏓 Pong - ${client.ping}ms!`);
  },
};
