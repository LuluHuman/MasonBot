fetch(document.URL.replace('dashboard', 'guilds'))
  .then(response => {
    return response.blob()
  })
  .then(data => {
    return data.text()
  })
  .then(stringData => {
    const data = JSON.parse(stringData)
    if (data.errors) {
      document.getElementById("guildIcon").src = `https://mason-bot.xyz/assets/Angry.png`
      document.getElementById("guildIcon").width = "128"
      document.title = "Mason Bot - Invalid server id"
      document.getElementById("guildName").innerHTML = "Invalid server id"
      document.getElementById("info").innerHTML = ""
      return
    }
    if (!data.icon) {
      document.getElementById("guildIcon").src = `https://mason-bot.xyz/assets/guildIcon.png`
    } else {
      document.getElementById("guildIcon").src = `https://cdn.discordapp.com/icons/${data.id}/${data.icon}.png?size=128`
    }
    document.title = "Mason Bot - " + data.name
    document.getElementById("guildName").innerHTML = data.name
    document.getElementById("info").innerHTML = `
          Prefix: ${data.prefix} | Members: ${data.memberCount} | Region: ${data.region}
          `
  })