module.exports = {
  bot: {
    token: process.env.token,
    prefix: process.env.prefix || "enter-prefix"
  },
  url: {
    twitch: process.env.twitchurl || "https://twitch.tv/discord",
  },
  status: {
    client: process.env.clientid || "client-id-goes-here",
    imageName: "enter-your-image-name"
  },
  text: {
    upper: "Enter Upper Text",
    middle: "Middle Text",
    lower: "Lower Text"
  }
};
