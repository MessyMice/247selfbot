/* Config */
const dotenv = require("dotenv"),
  settings = require("./core/settings.js"),
  port = settings.express.port,
  client = require("./core/client.js"),
  CLIENT_ID = settings.bot.clientID,
  IMAGE_NAME = settings.bot.imageName;

/* Package */
const gradient = require("gradient-string"),
  chalk = require("chalk"),
  express = require("express"),
  path = require("path"),
  fs = require("fs"),
  rpcGenerator = require("discordrpcgenerator");

client.on("ready", () => {
  rpcGenerator
    .getRpcImage(CLIENT_ID, `logo`)
    .then((image) => {
      let presence = new rpcGenerator.Rpc()
        .setName("twitch")
        .setUrl(settings.url.twitch)
        .setType(settings.bot.type)
        .setApplicationId(CLIENT_ID)
        .setAssetsLargeImage(image.id)
        .setDetails(settings.text.upper)
        .setState(settings.text.middle)
        .setAssetsLargeText(settings.text.lower);
      client.user.setPresence(presence.toDiscord());
    })
    .catch(chalk.red(`Error☢\n` + console.error));
});
/* Handler */
const commandFolder = fs.readdirSync("./commands"),
  eventFolder = fs.readdirSync("./events");

/* Message Create */
client.on("message", (message) => {
  if ((message.author.id = client.user.id)) {
    commandFolder.forEach((file) => {
      const data = require(`./commands/${file}`);

      const prefix = settings.bot.prefix;
      const name = data.name;
      const aliases = data.aliases;

      if (message.content.toLowerCase().startsWith(prefix)) {
        const cmdName = message.content.split(" ")[0].split(prefix)[1];

        if (name === cmdName || aliases.includes(cmdName)) {
          const args = message.content.toLowerCase().split(" ").shift();
          data.run(client, message, args);
        }
      }
    });
  }
});

/* Events */
eventFolder.forEach((file) => {
  const data = require(`./events/${file}`);
  const name = data.name;
  const once = data.once;

  if (once === true) {
    client.once(name, async (x, y) => {
      data.run(client, x, y);
    });
  } else {
    client.on(name, async (x, y) => {
      data.run(client, x, y);
    });
  }
});

/* Spam Message */
client.on("message", async (message) => {
  if (message.author.id === client.user.id) {
    const prefix = settings.bot.prefix;
    const args = message.content.split(" ");

    if (message.content.startsWith(`${prefix}spam`)) {
      await message.delete();
      const amount = parseInt(args[1]),
        spamMessage = message.content.split(`${amount}`)[1];
      if (amount && spamMessage) {
        for (let x = 0; x < amount; x++) {
          message.channel.send(`${spamMessage}`);
        }
      }
    }
    if (message.content.startsWith(`${prefix}s`)) {
      await message.delete();
      const amount = parseInt(args[1]),
        spamMessage = message.content.split(`${amount}`)[1];
      if (amount && spamMessage) {
        for (let x = 0; x < amount; x++) {
          message.channel.send(`${spamMessage}`);
        }
      }
    }
  }
});

/* Client Login */
client.login(settings.bot.token);
console.log(chalk.bgGreen(`Prefix: *${settings.bot.prefix}*`));

/* express */
const app = express(),
  server = require("http").createServer(app);

app.use(express.static(path.join(__dirname + "/public")));
server.listen(port);

console.log(
  gradient(
    "green",
    "lime"
  )(`Express App is Working & Listening to http://localhost:${port}/`)
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