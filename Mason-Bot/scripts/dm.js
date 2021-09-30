module.exports = (message,client) => {
  if (message.channel.type === 'text') return;
  var channel = client.channels.cache.get("856447795233816617");

  const {MessageEmbed} = require("discord.js")
  const exampleEmbed = new MessageEmbed()
	.setColor(client.config.defcolor)
	.setTitle("Author: "+message.author.username)
	.setDescription("Message: "+message.content)
  .setThumbnail(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256`)
	.setTimestamp()
	.setFooter('Felicity#0690', client.config.pfp);

  channel.send(exampleEmbed)
};
