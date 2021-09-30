module.exports = async (client) => {
  var channel = client.channels.cache.get("883190957825200168");
  let fetched;
  fetched = await channel.messages.fetch({ limit: 100 });
  fetched.get("883191348503650364").edit(`Loading`);
  var upTime = 0 
  async function tick(){
    upTime++

    fetched.get("883191348503650364").edit(`Uptime: ${upTime} Minute(s)!`);
    setTimeout(function(){tick()}, 60000);
  }

  tick()
}