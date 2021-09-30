exports.run = async (client, message, args, Discord) => {
  try {
    const RandomNumber = require("../../scripts/mathRandom.js").run
    const arrayCount = require("../../scripts/arrayCount.js").run
    const splash = require("../../arrays/kill.json")
    const foo = await arrayCount(splash)
    const chosenPhrase = splash[RandomNumber(0,foo)]

    const target = message.mentions.users.first();
    if (!target) {message.channel.send(`<@808713472862978048> strangles <@${message.author.id}> because he never mentions a person`); return; };
    const memberTarget = message.guild.members.cache.get(target.id);
    
    let guild = memberTarget.guild
    let member = guild.member(target);
    let nickname = member ? member.displayName : null;
    
    let member2 = guild.member(message.author);
    let nickname2 = member2 ? member2.displayName : null;
    message.channel.send(chosenPhrase.replace("$mention",`${nickname}`).replace("$author",`${nickname2}`))
    message.react(client.emotes.success)
  }

  catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args, Discord);
  }
}