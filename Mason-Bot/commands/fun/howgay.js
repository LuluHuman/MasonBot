exports.run = async (client, message, args, Discord) => {
  try {
    const RandomNumber = require("../../scripts/mathRandom.js").run
    const target = message.mentions.users.first();
    if (target) {
      const memberTarget = message.guild.members.cache.get(target.id);
      if(enteries(memberTarget) == true) return
      const exampleEmbed = new Discord.MessageEmbed()
        .setColor(client.config.defcolor)
        .setTitle("Mason's gay r8 machine")
        .setDescription(`<@${memberTarget.id}> is ${RandomNumber(0, 100)}% gay`)
        .setTimestamp()
        .setFooter('Felicity#0690', client.config.pfp);
      message.channel.send(exampleEmbed)
    } else if (args[0]) {
      const exampleEmbed = new Discord.MessageEmbed()
        .setColor(client.config.defcolor)
        .setTitle("Mason's gay r8 machine")
        .setDescription(`${args[0]} is ${RandomNumber(0, 100)}% gay`)
        .setTimestamp()
        .setFooter('Felicity#2171', client.config.pfp);
      message.channel.send(exampleEmbed)
  }else {
    const memberTarget = message.author
    if(enteries(memberTarget) == true) return
    const exampleEmbed = new Discord.MessageEmbed()
      .setColor(client.config.defcolor)
      .setTitle("Mason's gay r8 machine")
      .setDescription(`You are ${RandomNumber(0, 100)}% gay`)
      .setTimestamp()
      .setFooter('Felicity#2171', client.config.pfp);
    message.channel.send(exampleEmbed)
  }
  message.react(client.emotes.success)

  function enteries(memberTarget){
      if (memberTarget.id == "808713472862978048") {
        const exampleEmbed = new Discord.MessageEmbed()
          .setColor(client.config.defcolor)
          .setTitle("Mason's gay r8 machine :rainbow_flag:")
          .setDescription('I am 0% gay but you are 100% gay')
          .setTimestamp()
          .setFooter('Felicity#0690', client.config.pfp);
        message.channel.send(exampleEmbed)
        return true
      }
      if (memberTarget.id == "635303930879803412") {
        const exampleEmbed = new Discord.MessageEmbed()
          .setColor(client.config.defcolor)
          .setTitle("Mason's gay r8 machine :rainbow_flag: ")
          .setDescription('<@635303930879803412> 0% gay but 100% taken ||not like you||')
          .setTimestamp()
          .setFooter('Felicity#0690', client.config.pfp);
        message.channel.send(exampleEmbed)
        return true
      }
  }
}

 catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args, Discord);
  }
}