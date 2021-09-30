exports.run = async (client, message, args, Discord) => {

    var user = message.mentions.users.first();

    if (!user) {
        user = message.author;
    }

    let member = message.guild.members.cache.get(user.id);
    const creation = new Date(user.createdAt);
    const join = new Date(member.joinedAt);
    const nickname = member.nickname ? member.nickname : 'No Nickname'
    const embed = new Discord.MessageEmbed()
        .setColor(client.config.defcolor)
        .setTitle(`${user.username}#${user.discriminator} - ${user.id}`)
        .setThumbnail(user.avatarURL())
        .addFields(
            { name: 'Created at', value: creation.toDateString(), inline: true },
            { name: 'Joined at', value: join.toDateString(), inline: true },
            { name: 'Avatar URL', value: `[Click Here](${user.avatarURL()})`, inline: true },
            { name: 'Nickname', value: nickname, inline: true }
        )

    message.channel.send(embed)
};