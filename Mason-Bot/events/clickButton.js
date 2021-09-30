module.exports = async (client, button) => {
  const { MessageButton, MessageActionRow } = require("discord-buttons");
  const Discord = require("discord.js")
  if (button.id == "Help.General") {
    let fun = new MessageButton()
    .setLabel("Fun Commands")
    .setID("Help.Fun")
    .setStyle("blurple");

    let general = new MessageButton()
    .setLabel("General Commands")
    .setID("Help.General")
    .setStyle("grey")
    .setDisabled();

   const exampleEmbed = require("../scripts/helpList.js").general(client,button.guild.id)

    let row = new MessageActionRow()
     .addComponents(general, fun);

    button.message.edit(exampleEmbed,row)
    button.reply.defer()
  }else if (button.id == "Help.Fun") {
    let fun = new MessageButton()
    .setLabel("Fun Commands")
    .setID("Help.Fun")
    .setStyle("grey")
    .setDisabled();

    let general = new MessageButton()
    .setLabel("General Commands")
    .setID("Help.General")
    .setStyle("blurple");
    
     const exampleEmbed = require("../scripts/helpList.js").fun(client,button.guild.id)

    let row = new MessageActionRow()
     .addComponents(general, fun);

    button.message.edit(exampleEmbed,row)
    button.reply.defer()
  }
};