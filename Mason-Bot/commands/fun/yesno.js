exports.run = async (client, message, args, Discord) => {
try{
	const RandomNumber = require("../../scripts/mathRandom.js").run
	if (args[0]) {

		var Output = ""
		args.forEach(function(word) {
			Output = Output + " " + word
		})

		if(RandomNumber(0,3) == 3){
			var res = "no"
		}else{
			var res = "yes"
		}
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor(client.config.defcolor)
		.setTitle("Question: "+Output)
		.setDescription(res)
		.setTimestamp()
		.setFooter('Felicity#0690', client.config.pfp);
	message.channel.send(exampleEmbed)
  message.react(client.emotes.success)
}

}
 catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args, Discord);
  }
}