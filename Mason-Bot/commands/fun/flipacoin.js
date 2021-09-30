exports.run = async (client, message, args, Discord) => {
  try {
    const RandomNumber = require("../../scripts/mathRandom.js").run
    var Coin = RandomNumber(0, 1)
    console.log(Coin)
    if (Coin == 0) {
      const exampleEmbed = new Discord.MessageEmbed()
        .setColor(client.config.defcolor)
        .setTitle("Mason's coin flipper")
        .setDescription('Tails')
        .setTimestamp()
        .setFooter('Felicity#0690', client.config.pfp);
      message.channel.send(exampleEmbed)
    } else {
      const exampleEmbed = new Discord.MessageEmbed()
        .setColor(client.config.defcolor)
        .setTitle("Mason's coin flipper")
        .setDescription('Heads')
        .setTimestamp()
        .setFooter('Felicity#0690', client.config.pfp);
      message.channel.send(exampleEmbed)

    }
    message.react(client.emotes.success)
  }

  catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args, Discord);
  }
};