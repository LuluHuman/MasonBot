exports.run = async (client, message, args, Discord) => {
    try {
        /*--------Cheak if the user have admin--------*/
        var admin = false
        if (message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_GUILD, { checkAdmin: true, checkOwner: true })) admin = true;
        if (!admin) {
            message.reply('You have no perm to use this command <:Bot_Angry:854557129133654027>')
                .then(msg => {
                    setTimeout(() => msg.delete(), 10000)
                })
            return
        }
        /*----------------*/
        if (!args[0]) {
            message.channel.send("No argument")
            return
        }
        const Database = require("@replit/database")
        const db = new Database()
        db.set(`${message.guild.id}/prefix`, args[0]).then(() => {
            db.list().then(keys => { console.log(keys) });
            message.channel.send("prefix chaned to " + args[0])
        });
    }

    catch (err) {
        require("./../../scripts/sendError").run(err, client, message, args, Discord);
    }
}