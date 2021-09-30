const Database = require("@replit/database")
const db = new Database()

module.exports = (client, message) => {
  require("../scripts/dm.js")(message,client)
  const Discord = require('discord.js');
  
  if (message.author.bot) return;

  function x(prefix){
    if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);
  var dm = false
  if (!cmd) return;

  if (!message.channel.type === 'text'){
    dm = true
  }
    cmd.run(client, message, args, Discord);
  
  if (message.author.id == 635303930879803412) { return }
  var Log
  if (dm == true){
    Log = `@${message.author.username} (<@${message.author.id}>) is using ${command} with aguments of (${args.toString()}) in DMs`
  }else{
    Log = `@${message.author.username} (<@${message.author.id}>) is using ${command} with aguments of (${args.toString()}) in ${message.guild.name}, #${message.channel.name}`
  }

  const whurl = client.config.secrets.commandWebhook
    const fetch = require('node-fetch');
    const msg = {
      "content": Log
    }

    fetch(whurl + "?wait=true",
      {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify(msg)
      })
      .then(a => a.json())
  }
  if(message.channel.type == "dm"){
     x(client.config.prefix); 
     return
  }else{
      db.get(`${message.guild.id}/prefix`).then(value => {
        if(value == null){
          x(client.config.prefix)
        }else{
          x(value)
        }
    });
  }
};
