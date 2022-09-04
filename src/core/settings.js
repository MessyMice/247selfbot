const dotenv = require("../index.js");
require("dotenv").config();

module.exports = {
  bot: {
    token: process.env.token || "your-token-goes-here",
    prefix: "247sb ",
    clientID: process.env.CLIENT_ID || "client-id",
    imageName: "image-name",
    type: "STREAMING",
  },
  url: {
    twitch: "https://twitch.tv/discord",
  },
  express: {
    port: process.env.PORT || "6969",
  },
  text: {
    upper: "UpperText",
    middle: "MiddleText",
    lower: "LowerText",
  },
};
