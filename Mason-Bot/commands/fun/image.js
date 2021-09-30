exports.run = async (client, message, args, Discord) => {
try{
  if(!args[0]){
      message.channel.send(client.emotes.error+"Error invalid argument for list of commands go to https://mason-bot.felicity1l1.repl.co/commands/image")
      return
    }
    const DIG = require("discord-image-generation");
    // Get the avatarUrl of the user
    let user = message.mentions.users.first() || message.author;
    let avatar = user.avatarURL({ dynamic: false, format: 'png' });
    // Make the image
    var img 
    if(args[0].toLowerCase() == "delete"){
      img = await new DIG.Delete().getImage(avatar)
    }else if(args[0].toLowerCase() == "gay"){
      img = await new DIG.Gay().getImage(avatar);
    }else if(args[0].toLowerCase() == "triggered"){
      img = await new DIG.Triggered().getImage(avatar);
    }else if(args[0].toLowerCase() == "affectbaby"){
      img = await new DIG.Affect().getImage(avatar);
    }else if(args[0].toLowerCase() == "slap"){
      img = await new DIG.Batslap().getImage(message.author.avatarURL({ dynamic: false, format: 'png' }) ,avatar);
    }else if(args[0].toLowerCase() == "monsterbed"){
      img = await new DIG.Bed().getImage(message.author.avatarURL({ dynamic: false, format: 'png' }) ,avatar);
    }else if(args[0].toLowerCase() == "hitler"){
      img = await new DIG.Hitler().getImage(message.author.avatarURL({ dynamic: false, format: 'png' }) ,avatar);
    }else if(args[0].toLowerCase() == "doublestonk"){
      img = await new DIG.DoubleStonk().getImage(message.author.avatarURL({ dynamic: false, format: 'png' }) ,avatar);
    }else if(args[0].toLowerCase() == "trash"){
      img = await new DIG.Trash().getImage(avatar);
    }
    // Add the image as an attachement
    let attach = new Discord.MessageAttachment(img, "delete.png");
    if(!img){
      message.channel.send("Error"+client.emotes.error)
      return
    }
    message.channel.send(attach)
    message.react(client.emotes.success)
}

 catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args, Discord);
  }
}