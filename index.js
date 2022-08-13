const settings = require("./config/settings.js");
const author = require("./config/author.js");
//packages
const Discord = require("discord.js-selfbot-v11");
const rpcGenerator = require("discordrpcgenerator");
const TOKEN = (settings.bot.token)
const CLIENT_ID = (settings.status.client)
const IMAGE_NAME = (settings.status.imageName)
const client = new Discord.Client({ checkUpdate: false })
const gradient = require('gradient-string');


//main settings
client.on("ready", () => {
    rpcGenerator.getRpcImage(CLIENT_ID, IMAGE_NAME)
    .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("twitch")
        .setUrl(process.env.twitchurl)
        .setType("STREAMING")
        .setApplicationId(CLIENT_ID)
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText(settings.text.lower)
        .setDetails(settings.text.upper)
        .setState(settings.text.middle)
 
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  
  console.log(gradient('red', 'orange', 'blue', 'green')(`
██████╗░░░██╗██╗███████╗  ░██████╗██████╗░
╚════██╗░██╔╝██║╚════██║  ██╔════╝██╔══██╗
░░███╔═╝██╔╝░██║░░░░██╔╝  ╚█████╗░██████╦╝
██╔══╝░░███████║░░░██╔╝░  ░╚═══██╗██╔══██╗
███████╗╚════██║░░██╔╝░░  ██████╔╝██████╦╝
╚══════╝░░░░░╚═╝░░╚═╝░░░  ╚═════╝░╚═════╝░
${client.user.tag} has sucessfully logined`))
})

/* Commands */
client.on('message', async (message) => {
  if (message.author.id === client.user.id) {
    const prefix = settings.bot.prefix
    const args = message.content.split(' ');

    // Ping Command
    if (message.content.startsWith(`${prefix}ping`)) {
      message.channel.send(`🏓 Ping - ${client.ping}ms`);
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
**Help Menu**\n\n${prefix}help\n :: shows help menu\n:: no usages\n\n${prefix}ping\n::shows selfbot latency\n:: no usages\n\n${prefix}about\n:: Shows credits and about section of bot\n:: no usages\n\n${prefix}spam\n:: spams a message\n:: \`${prefix}spam <amount> <message>\``);
    }

    // Spam Command
    if (message.content.startsWith(`${prefix}spam`)) {
      await message.delete();
      const amount = parseInt(args[1]);
      const spamMessage = message.content.split(`${amount}`)[1];
      if (amount && spamMessage) {
        for (let x = 0; x < amount; x++) {
          message.channel.send(`${spamMessage}`
          )
        }
      }
    }
  }
})



// login
client.login(TOKEN)

//express 
const express = require("express")
const app = express();
const port = process.env.PORT || 3000

app.get(`/`, (req, res) => res.send(`Yo!`))

app.listen(port, () =>
console.log(`ExpressApp is working`)
); 

          // #1
process.on("unhandledRejection", (reason, promise) => {
  console.log("[-]: " + reason)
});

// #2
process.on("uncaughtException", (err) => {
  console.log("[-]: " + err)
});

// #3
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log("[-]: " + err);
});

// #4
process.on('multipleResolves', (type, promise, reason) => {
  console.log("[-]: ", type, promise, reason);
});
