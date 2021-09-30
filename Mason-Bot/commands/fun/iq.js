exports.run = async (client, message, args, Discord) => {
try{
    const RandomNumber = require("../../scripts/mathRandom.js").run
    const target = message.mentions.users.first();
    if (target) {
        const memberTarget = message.guild.members.cache.get(target.id);

        if(enteries(memberTarget) == true) return
				const exampleEmbed = new Discord.MessageEmbed()
					.setColor(client.config.defcolor)
					.setTitle("Mason's IQ r8 machine:brain:")
					.setDescription(`<@${memberTarget.id}> has ${RandomNumber(0, 108)} IQ`)
					.setTimestamp()
					.setFooter('Felicity#0690', client.config.pfp);
					message.channel.send(exampleEmbed)
    } else {
    if(enteries(message.author) == true) return
				const exampleEmbed = new Discord.MessageEmbed()
					.setColor(client.config.defcolor)
					.setTitle("Mason's IQ r8 machine:brain:")
					.setDescription(`<@${message.author.id}> has ${RandomNumber(0, 108)} IQ`)
					.setTimestamp()
					.setFooter('Felicity#0690', client.config.pfp);
					message.channel.send(exampleEmbed)
  }
  message.react(client.emotes.success)

  function enteries(memberTarget){
        if (memberTarget.id == "808713472862978048") {
					const exampleEmbed = new Discord.MessageEmbed()
					.setColor(client.config.defcolor)
					.setTitle("Mason's IQ r8 machine:brain:")
					.setDescription('I have 109 IQ but you have 0 IQ')
					.setTimestamp()
					.setFooter('Felicity#0690', client.config.pfp);
					message.channel.send(exampleEmbed)
            return true
        }
        if (memberTarget.id == "635303930879803412") {
					const exampleEmbed = new Discord.MessageEmbed()
					.setColor(client.config.defcolor)
					.setTitle("Mason's IQ r8 machine:brain:")
					.setDescription('<@635303930879803412> has 9999 IQ')
					.setTimestamp()
					.setFooter('Felicity#0690', client.config.pfp);
					message.channel.send(exampleEmbed)
            return true
        }
        return false
  }
}

 catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args, Discord);
  }
}