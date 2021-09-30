const Discord = require("discord.js")
exports.fun = (client, guildId) => {
	const emb = new Discord.MessageEmbed()
		.setColor(client.config.defcolor)
		.setTitle("Help")
		.addFields(
			{ name: 'Fun Commands', value: '() is optional\n[] is required' },
			{ name: '-repeat[Phrase]', value: 'Lonely? Bored? no one to talk to? use this! it will repeat everything you say!' },
			{ name: '-fly', value: 'Ay Ay Ay im your little butterfly' },
			{ name: '-image [delete, gay, triggered, affectbaby, slap, monsterbed, hitler, doublestonk or trash]', value: 'Generate images' },
			{ name: '-howgay(user)', value: 'Why are you gay' },
			{ name: '-iq (user)', value: 'I am brainless' },
			{ name: '-yesno [Question]', value: 'Ask a simple yes no question like is my crush my soulmate and the result will me no' },
			{ name: '-flipacoin', value: 'yeah you get it' },
			{ name: '-meme', value: 'shows a post from r/memes subreddit' },
			{ name: '-Kill [user]', value: 'Sick of someone? Easy! Just kill them! (we do not endorse murder yet)' },
			{ name: '-roast (user)', value: 'Sick of someone? Easy! Just roast them!' },
			{ name: '-ship [user]', value: 'Ships two people!' },
      { name: '-http [code]', value: 'Returns the http.cat image for a specific status code. VARY ORIGNAL IDEA' },
      { name: '-aww', value: 'do youw want a cuwte pictuwwe? UwU Weww this commands gives youw that' },
      { name: '-owoify [Phrase]', value: 'i wiww dominate youw chat with owo and stuwff' },
		)
		.setDescription(` [[Invite](https://discord.com/oauth2/authorize?client_id=808713472862978048&permissions=-214438817&scope=bot)] | [[Website](https://Mason-Bot.xyz)] | [[Dashboard](https://Mason-Bot.xyz/dashboard/${guildId})]`)
		.setTimestamp()
		.setFooter('Felicity#0690', client.config.pfp);
	return emb
}

exports.general = (client, guildId) => {
	const emb = new Discord.MessageEmbed()
		.setColor(client.config.defcolor)
		.setTitle("Help")
		.addFields(
			{ name: 'General Commands', value: '() is optional\n[] is required\u200B' },
			{ name: '-ping', value: 'Ping me daddy' },
			{ name: '-help', value: 'Hello im under the water please help me' },
			{ name: '-Kick [User]', value: 'Kicks the user **Kick Members must me on**' },
			{ name: '-Ban [User]', value: 'Bans the user for ETHERNITY **Ban Members must me on**' },
      { name: '-Prefix [Prefix]', value: 'Changes the prefix if someone stole **Manage server must me on**' },
      { name: '-user info (user)', value: 'Cheak the user or you' },
		)
		.setDescription(` [[Invite](https://discord.com/oauth2/authorize?client_id=808713472862978048&permissions=-214438817&scope=bot)] | [[Website](https://Mason-Bot.xyz)] | [[Dashboard](https://Mason-Bot.xyz/dashboard/${guildId})]`)
		.setTimestamp()
		.setFooter('Felicity#0690', client.config.pfp);
	return emb
}