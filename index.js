/* Configs */
const statusText = require("./config/statusText.js");
const bot = require("./config/bot.js");
const clientJS = require("./config/client.js");
const author = require("./config/author.js");
require("dotenv").config();

/* Packages */
const Discord = require("discord.js-selfbot-v11");
const rpcGenerator = require("discordrpcgenerator");
const gradient = require("gradient-string");

/* Main Client */
const client = new Discord.Client({ checkUpdate: false });
client.on("ready", () => {
  rpcGenerator
    .getRpcImage(clientJS.id, clientJS.image_name)
    .then((image) => {
      let presence = new rpcGenerator.Rpc()
        .setName("twitch")
        .setUrl(bot.twitchURL)
        .setType("STREAMING")
        .setApplicationId(clientJS.id)
        .setDetails(statusText.upper)
        .setState(statusText.middle)
        .setAssetsLargeText(statusText.lower);

      client.user.setPresence(presence.toDiscord());
    })
    .catch(console.error);
  console.log(
    gradient(
      "red",
      "orange",
      "blue",
      "green"
    )(`
    ██████╗░░░██╗██╗███████╗  ░██████╗██████╗░
    ╚════██╗░██╔╝██║╚════██║  ██╔════╝██╔══██╗
    ░░███╔═╝██╔╝░██║░░░░██╔╝  ╚█████╗░██████╦╝
    ██╔══╝░░███████║░░░██╔╝░  ░╚═══██╗██╔══██╗
    ███████╗╚════██║░░██╔╝░░  ██████╔╝██████╦╝
    ╚══════╝░░░░░╚═╝░░╚═╝░░░  ╚═════╝░╚═════╝░
    ${client.user.tag} has sucessfully logined
    Selfbot By @MessyMice
    GitHub Repo https://github.com/MessyMice/247selfbot`)
  );
});

/* Commands */
client.on("message", async (message) => {
  if (message.author.id === client.user.id) {
    const prefix = bot.prefix;
    const args = message.content.split(" ");

    // Ping Command
    if (message.content.startsWith(`${prefix}ping`)) {
      message.channel.send(`🏓 Pong - ${client.ping}ms`);
    }

    // About Command
    if (message.content.startsWith(`${prefix}about`)) {
      message.channel.send(`██████╗░░░██╗██╗███████╗  ░██████╗██████╗░
  ╚════██╗░██╔╝██║╚════██║  ██╔════╝██╔══██╗
  ░░███╔═╝██╔╝░██║░░░░██╔╝  ╚█████╗░██████╦╝
  ██╔══╝░░███████║░░░██╔╝░  ░╚═══██╗██╔══██╗
  ███████╗╚════██║░░██╔╝░░  ██████╔╝██████╦╝
  ╚══════╝░░░░░╚═╝░░╚═╝░░░  ╚═════╝░╚═════╝░
        ***__About Menu__***\n:: This selfbot is coded by ${author.name}\n:: It's repo is ${author.repo}\n:: Your ping is ${client.ping}ms right now\n:: Your prefix is \`${prefix}\``);
    }

    // Help Command
    if (message.content.startsWith(`${prefix}help`)) {
      message.channel.send(`
        ██████╗░░░██╗██╗███████╗  ░██████╗██████╗░
  ╚════██╗░██╔╝██║╚════██║  ██╔════╝██╔══██╗
  ░░███╔═╝██╔╝░██║░░░░██╔╝  ╚█████╗░██████╦╝
  ██╔══╝░░███████║░░░██╔╝░  ░╚═══██╗██╔══██╗
  ███████╗╚════██║░░██╔╝░░  ██████╔╝██████╦╝
  ╚══════╝░░░░░╚═╝░░╚═╝░░░  ╚═════╝░╚═════╝░
  **Help Menu**\n\n${prefix}help\n:: shows help menu\n:: no usages\n\n${prefix}ping\n::shows selfbot latency\n:: no usages\n\n${prefix}about\n:: Shows credits and about section of bot\n:: no usages\n\n${prefix}spam\n:: spams a message\n:: \`${prefix}spam <amount> <message>\``);
    }

    // Spam Command
    if (message.content.startsWith(`${prefix}spam`)) {
      await message.delete();
      const amount = parseInt(args[1]);
      const spamMessage = message.content.split(`${amount}`)[1];
      if (amount && spamMessage) {
        for (let x = 0; x < amount; x++) {
          message.channel.send(`${spamMessage}`);
        }
      }
    }
  }
});

/* Login */
client.login(bot.token);

/* Express */
const express = require("express");
const path = require("path");
const port = bot.port;

const app = express();
const server = require("http").createServer(app);

app.use(express.static(path.join(__dirname + "/public")));

server.listen(port);

console.log(
  `express app is working & listening to https://localhost:${port}/`
);

// #1
process.on("unhandledRejection", (reason, promise) => {
  console.log("[-]: " + reason);
});

// #2
process.on("uncaughtException", (err) => {
  console.log("[-]: " + err);
});

// #3
process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log("[-]: " + err);
});

// #4
process.on("multipleResolves", (type, promise, reason) => {
  console.log("[-]: ", type, promise, reason);
});
