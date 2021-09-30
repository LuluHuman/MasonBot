exports.run = async (client, message, args) => {
  try{
      message.channel.send("https://youtu.be/QzcvRDWgRIE");
      message.react(client.emotes.success)
  }

 catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args);
  }
}