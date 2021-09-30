exports.run = async (client, message, args, Discord) => {
    try {
        /*--------Cheak if the user have admin--------*/
        var admin = false
        if (message.member.permissions.has(Discord.Permissions.FLAGS.KICK_MEMBERS, { checkAdmin: true, checkOwner: true })) admin = true;
        if (!admin) {
            message.reply('You have no perm to use this command <:Bot_Angry:854557129133654027>')
                .then(msg => {
                    setTimeout(() => msg.delete(), 10000)
                })
            return
        }
        /*----------------*/
        const target = message.mentions.users.first();
        
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            if (memberTarget.id == "808713472862978048") {
                message.channel.send("What if i kicked you instead?");
                return
            }
            if (memberTarget.id == message.guild.owner.id) {
                message.channel.send("I think you don't want to kick... THE OWNER");
                return
            }
            var reason = message.content.slice(6 + args[0].length).trim() || "No reason"
            try {
                await memberTarget.kick();
            }
            catch (err) {
                message.channel.send("Cannot ban the member.You can try moving my role is higher then the user")
                return
            };
            var canMessage = true
            try {
                await target.send(`You have been kicked from ${message.guild.name} Reason: ${reason}\nIf they are your real friends tell them why they kicked you`)
            }
            catch (err) {
                canMessage = false
            };

            if (canMessage == true) message.channel.send("User has been kicked for " + reason); 
            if (canMessage == false) message.channel.send("User has been kicked for " + reason + "\nBut i could not DM the user");
        } else {
            message.channel.send(`You coudn't kick that member!/Could not kick empty air`);
        }
        message.react(client.emotes.success)
    }

    catch (err) {
        require("./../../scripts/sendError").run(err, client, message, args, Discord);
    }
}