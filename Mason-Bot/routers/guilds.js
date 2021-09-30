exports.router = (client) => {
  const { Router } = require('express');
  const Database = require("@replit/database")
  const db = new Database()

  const router = Router();

  router.use('/', (req, res) => {
    const url = req.url.toLowerCase().split("/")// result = db/something
    
    db.get(`${url[1]}/prefix`).then(value => {
    let guild = client.guilds.cache.get(url[1]);

    if (!guild) { res.send({ "errors": [{ "code": 404, "message": "NotFound" }] }) }

    else {
      if (value) {
        res.send({ status: 200, id: guild.id, "prefix": value, name: guild.name, memberCount: guild.memberCount, region: guild.region, icon: guild.icon })
      }else{
        res.send({ status: 200, id: guild.id, "prefix": "-", name: guild.name, memberCount: guild.memberCount, region: guild.region, icon: guild.icon })
      }
    }
    })
  });

  return router
}

