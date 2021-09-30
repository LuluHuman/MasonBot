exports.run = async (client, message, args, Discord) => {
try{
    if (args[0] || message.attachments.array()[0]) {

        var Output = ""
        args.forEach(function (word) {
            Output = Output + " " + word
        })

        message.delete()
        if(message.attachments.array()[0]){
          const image = message.attachments.array()[0].proxyURL
          const attachment = new Discord.MessageAttachment(image);
          message.channel.send(Output, attachment);
          return
        }
        message.channel.send(Output);
    }else{
      message.channel.send("Cannot send empty messages Just like how a person must have a brain")
    }
}

 catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args);
  }
}