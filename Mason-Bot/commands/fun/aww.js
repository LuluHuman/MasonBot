exports.run = async (client, message, args, Discord) => {
    //try {
    const RandomNumber = require("./../../scripts/mathRandom.js").run
    const msg = await message.channel.send("...");
    //picks the url
    var url = 'https://www.reddit.com/r/aww/top/.json?sort=top&t=day&limit=500'

    const response = await require("./../../scripts/reddit.js").run(url, msg)

    const posts = response.data.data.children
    const arrayCount = require('../../scripts/arrayCount.js').run
    const post = posts[RandomNumber(0, 100)]
    if (!post) {
        msg.edit("Err")
        return
    }
    const title = post.data.title
    const image = post.data.url
    const link = "https://www.reddit.com" + post.data.permalink
    if (post.data.is_video == true) {
        msg.edit("Err")
        return
    }
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor(client.config.defcolor)
        .setTitle(title)
        .setURL(link)
        .setImage(image)
        .setTimestamp()
        .setFooter('Felicity#0690', client.config.pfp);
    msg.edit("‍‍‍‍");
    msg.edit(exampleEmbed)
    message.react(client.emotes.success)
    //}

    /*catch (err) {
      require("./../../scripts/sendError").run(err, client, message, args, Discord);
    }*/
};
