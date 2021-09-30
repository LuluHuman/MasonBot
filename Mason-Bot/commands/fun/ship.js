/*
 *80% of code made by
 * OwO Bot for Discord
 * Copyright (C) 2019 Christopher Thai
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md(https://github.com/ChristopherBThai/Discord-OwO-Bot/blob/master/README.md) and LICENSE(https://github.com/ChristopherBThai/Discord-OwO-Bot/blob/master/LICENSE)
 */

exports.run = async (client, message, args, Discord) => {
  try {
    var user1, user2;
    if (args.length == 2) {
      user1 = getMember("user1");
      if (user1 == undefined) {
        message.channel.send("Could not find that user!"+client.emotes.error);
        return;
      }
      user2 = getMember("user2");
      if (user2 == undefined) {
        message.channel.send("Could not find that user!"+client.emotes.error);
        return;
      }
    } else if (args.length == 1) {
      user1 = message.member;
      user2 = getMember("user1");
      if (user2 == undefined) {
        message.channel.send("Could not find that user!"+client.emotes.error)
        return;
      }
    } else {
      message.channel.send("Invalid arguments, Bruh!"+client.emotes.error);
      return;
    }

    var name1 = user1.nickname ? user1.nickname : user1.user.username;
    var name2 = user2.nickname ? user2.nickname : user2.user.username;
    var name = combinename(name1, name2);
    message.channel.send("**" + name1 + "** 💞 **" + name2 + "** = **" + name + "**");



    function combinename(name1, name2) {
      var count1 = -1, count2 = -1;
      var mid1 = Math.ceil(name1.length / 2) - 1;
      var mid2 = Math.ceil(name2.length / 2) - 1;
      var noVowel1 = false, noVowel2 = false;
      var vowels = "aeiou"
      for (i = mid1; i >= 0; i--) {
        count1++;
        if (vowels.includes(name1.charAt(i).toLowerCase())) {
          i = -1;
        } else if (i == 0) {
          noVowel1 = true;
        }
      }
      for (i = mid2; i < name2.length; i++) {
        count2++;
        if (vowels.includes(name2.charAt(i).toLowerCase())) {
          i = name2.length;
        } else if (i == name2.length - 1) {
          noVowel2 = true;
        }
      }

      var name = "";
      if (noVowel1 && noVowel2) {
        name = name1.substring(0, mid1 + 1);
        name += name2.substring(mid2);
      } else if (count1 <= count2) {
        name = name1.substring(0, mid1 - count1 + 1);
        name += name2.substring(mid2);
      } else {
        name = name1.substring(0, mid1 + 1);
        name += name2.substring(mid2 + count2);
      }
      return name;
    }
    function getMember(userNumber){
      var count = 0; 
        let user1;
        let user2;
        message.mentions.users.forEach(user => {
            count++;
            if (count === 1) user1 = message.guild.members.cache.get(user.id);
            else user2 = message.guild.members.cache.get(user.id);
        });
        if(userNumber == "user1"){ return user1;}
        if(userNumber == "user2"){ return user2;}
  }
    message.react(client.emotes.success)
  }

  catch (err) {
    require("./../../scripts/sendError").run(err, client, message, args, Discord);
  }
}