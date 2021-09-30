exports.run = async (client, message, args, Discord) => {
  try{
    //-------------------Buttons/Embed-----------------------//
    const { MessageButton, MessageActionRow } = require("discord-buttons");

    let fun = new MessageButton()
      .setLabel("Fun Commands")
      .setID("Help.Fun")
      .setStyle("grey")
      .setDisabled();

    let general = new MessageButton()
      .setLabel("General Commands")
      .setID("Help.General")
      .setStyle("blurple");

    
    const exampleEmbed = require("./../../scripts/helpList.js").fun(client,message.guild.id)

    //-------------------Main code-----------------------//
    let row = new MessageActionRow()
      .addComponents(general, fun);

    message.channel.send(exampleEmbed, row)
      .then(msg => {
        setTimeout(function() {
          let fun = new MessageButton()
          .setLabel("Fun Commands")
          .setID("Help.Fun")
          .setStyle("grey")
          .setDisabled();

          let general = new MessageButton()
          .setLabel("General Commands")
          .setID("Help.General")
          .setStyle("grey")
          .setDisabled();
          let row = new MessageActionRow()
          .addComponents(general, fun);

          msg.edit(msg.embeds[0], row)
        }, 15000);
      })
  }

catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args, Discord);
  }
}