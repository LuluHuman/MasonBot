exports.run = async (client, message, _, Discord) => {
try{
    
    var update = client.info
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor(client.config.defcolor)
	.setTitle("Info"+client.emotes.success)
	.setDescription(`Ping: **${client.ws.ping}ms**\n Version: **v${update.Version}**\n Process Version: **${process.version}**`)
	.setTimestamp()
	.setFooter('Felicity#0690', client.config.pfp);
	message.channel.send(exampleEmbed)
  message.react(client.emotes.success)
}

 catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args, Discord);
  }
};
