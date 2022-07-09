//packages
const Discord = require("discord.js-selfbot-v11");
const rpcGenerator = require("discordrpcgenerator")
const TOKEN = (process.env.token)
const CLIENT_ID = (process.env.clientid)
const client = new Discord.Client()

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
        .setAssetsLargeText("lower text")
        .setDetails("upper text")
 
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  console.log(`${client.user.username} Successfully Logged in!`)
})

//messages
client.on("message", message => {
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0].replace(process.env.prefix, "")
  let args = messageArray.slice(1)
  if(!message.content.startsWith(process.env.prefix)) return;
  if (cmd === "ping") {
    message.channel.send(`🏓 - Pong! ${client.ping}ms! `)
  }
});

client.on('messageCreate', async (message) => {
  const userId = message.author.id;
  const myId = client.user.id;
  if (userId === myId) {
    //command code
  } 
});



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