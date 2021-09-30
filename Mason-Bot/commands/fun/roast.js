exports.run = async (client, message, args, Discord) => {
  try {
    const RandomNumber = require("../../scripts/mathRandom.js").run
    const arrayCount = require("../../scripts/arrayCount.js").run
    const splash = require("../../arrays/roasts.json")
    const foo = await arrayCount(splash)
    const chosenPhrase = splash[RandomNumber(0,foo)]
    message.channel.send(chosenPhrase)
    message.react(client.emotes.success)
  }

  catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args, Discord);
  }
}