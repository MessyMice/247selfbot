//packages
const Discord = require("discord.js-selfbot-v11");
const rpcGenerator = require("discordrpcgenerator");
const TOKEN = (process.env.token)
const CLIENT_ID = (process.env.clientid)
const client = new Discord.Client({ checkUpdate: false })
const gradient = require('gradient-string');


//main settings
client.on("ready", () => {
    rpcGenerator.getRpcImage(CLIENT_ID, `logo`)
    .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("twitch")
        .setUrl(process.env.twitchurl)
        .setType("STREAMING")
        .setApplicationId(CLIENT_ID)
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText("Bhagwaa")
        .setDetails("# Proud Sanatani")
 
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  
  console.log(gradient('red', 'orange', 'blue', 'green')(`
██████╗░░░██╗██╗███████╗
╚════██╗░██╔╝██║╚════██║
░░███╔═╝██╔╝░██║░░░░██╔╝
██╔══╝░░███████║░░░██╔╝░
███████╗╚════██║░░██╔╝░░
╚══════╝░░░░░╚═╝░░╚═╝░░░
${client.user.tag} has sucessfully logined`))
})

/* Commands */
client.on('message', async (message) => {
  if (message.author.id === client.user.id) {
    const prefix = process.env.prefix
    const args = message.content.split(' ');

    // Ping Command
    if (message.content.startsWith(`${prefix}ping`)) {
      message.channel.send(`🏓 Ping - ${client.ping}ms`);
    }

    // Help Command
    if (message.content.startsWith(`${prefix}help`)) {
      message.channel.send(`**Help Menu**\n\n${prefix}help\n :: shows help menu\n :: no usages\n\n${prefix}ping\n ::shows selfbot latency\n :: no usages\n\n${prefix}spam\n :: spams a message\n :: \`${prefix}spam <amount> <message>\``);
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
const port = 3000

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