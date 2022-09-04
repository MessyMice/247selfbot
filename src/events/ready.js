const gradient = require("gradient-string");
const chalk = require("chalk");
module.exports = {
  name: "ready",
  once: true,
  run: (client, channel) => {
    console.log(
      gradient(
        "red",
        "orange",
        "yellow"
      )(
        `██████╗░░░██╗██╗███████╗  ░██████╗██████╗░\n╚════██╗░██╔╝██║╚════██║  ██╔════╝██╔══██╗\n░░███╔═╝██╔╝░██║░░░░██╔╝  ╚█████╗░██████╦╝\n██╔══╝░░███████║░░░██╔╝░  ░╚═══██╗██╔══██╗\n███████╗╚════██║░░██╔╝░░  ██████╔╝██████╦╝\n╚══════╝░░░░░╚═╝░░╚═╝░░░  ╚═════╝░╚═════╝░`
      ),
      console.log(chalk.green(`${client.user.tag} has succesfully logged in!`)),
      console.log(
        chalk.red(
          "Selfbot By Github/MessyMice\nhttps://www.github.com/MessyMice/247selfbot"
        )
      )
    );
  },
};
