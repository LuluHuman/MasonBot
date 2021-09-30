module.exports = async (client) => {
	var update = client.info
	console.log(`[ ${client.user.username} ] is ready`);
	client.user.setActivity("-help https://mason-bot.xyz |version " + update.Version);
	if (update.Update !== "") {
		const Log = client.channels.cache.find(channel => channel.id === "856404093664886836")
		Log.send(`Version ${update.Version}, Update: ${update.Update}`)
	};

  require("../scripts/uptime.js")(client)
};
