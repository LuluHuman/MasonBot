exports.run = async (client, message, args, Discord) => {
  try {

    message.react(client.emotes.success)
  }

  catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args, Discord);
  }
}