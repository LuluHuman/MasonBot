exports.run = async (client, message, args) => {
try{
    if (args[0]) {

        var Output = ""
        args.forEach(function (rawWord) {
            var chars = rawWord.split("") 
            var word = ""
            chars.forEach(function (char) {
              if (char == "l"){ word = word + "w"; return}
              if (char == "r"){ word = word + "w"; return}
              if (char == "?"){ word = word + "? UwU"; return}
              if (char == "u"){ word = word + "uw"; return}
              word = word + char
            })
            Output = Output + " " + word
        })

        message.channel.send(Output);
    }else{
      message.channel.send("Cannot send empty messages Just like how a person must have a brain")
    }
}

 catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args);
  }
}