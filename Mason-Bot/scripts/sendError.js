exports.run = (err, client, message, args, Discord, admin) => {
  message.channel.send(`An error has occurred${client.emotes.error}`)
    const whurl = client.config.secrets.errorWebhook
    const fetch = require('node-fetch');
    const msg = {
      "content": ` \`${err.toString()}\`\n Message: ${message.content}`
    }

    fetch(whurl + "?wait=true",
      {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify(msg)
      })
      .then(a => a.json()).then(
        message.react(client.emotes.error)
      )
}