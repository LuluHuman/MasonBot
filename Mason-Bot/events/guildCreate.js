module.exports = async (client,guild) => {
  const discord = require('discord.js')
const exampleEmbed = new discord.MessageEmbed()
	.setColor(client.config.defcolor)
	.setTitle('Thanks for adding me to your server!'+client.emotes.success)
	.setDescription('If you need to stop it, get some help, use `-help` for the list of commands\n\n if you need help or have any questions join our Discord server [here](https://discord.com/invite/N5hf3tnvwr)\n\nWe have  no premium subscription. Have fun!')
	.setTimestamp()
	.setFooter('Felicity#2171', client.config.pfp);

    let defaultChannel = "";
    guild.channels.cache.forEach((channel) => {
            if (channel.type == "text" && defaultChannel == "") {
                if (channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                    defaultChannel = channel;
                }
            }
        })
        //defaultChannel will be the channel object that the bot first finds permissions for
    defaultChannel.send(exampleEmbed)

    const whurl = client.config.secrets.guildCreateWebhook
    const fetch = require('node-fetch');
    const msg = {
      "content": `I have been added to ${guild.name}`
    }

    fetch(whurl + "?wait=true",
      {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify(msg)
      })
      .then(a => a.json()).then(console.log)
};
