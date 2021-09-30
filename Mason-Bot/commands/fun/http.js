exports.run = async (client, message, args, Discord) => {
  try {
    if(!args[0]){
      message.channel.send("Aaaah yes error code \" \"")
      return
    }
   
    let attach = new Discord.MessageAttachment(`https://http.cat/${args[0]}`, "cat.png");
    message.channel.send(attach)
    message.react(client.emotes.success)
  }

  catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args, Discord);
  }
}