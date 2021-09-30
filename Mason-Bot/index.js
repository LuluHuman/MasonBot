/*
Copyright Felicity#0690
*/

//Varables
const { encode, stringify } = require('querystring');
const express = require('express');
const path = require("path")
const favicon = require('serve-favicon');
const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client({ disableMentions: 'everyone' });
const app = express();
require('discord-buttons')(client);
/*---------------------------------------------------------*/
//ServerWebsite
app.listen(() => console.log("Website loaded"));
app.use(favicon(__dirname + '/website/assets/favicon.ico')); 
app.use(express.static(__dirname + '/website'));
app.use('/oauth', require('./routers/OAuth2.js'));
app.use('/dashboard', require('./routers/dashboard.js'));
app.use('/guilds', require('./routers/guilds.js').router(client));
app.use('/', (req, res) => {
    const url = req.url.toLowerCase();
    if (url == '/version'){ res.sendFile(path.join(__dirname + '/website/version.html')); return}
    if (url == '/developer'){ res.sendFile(path.join(__dirname + '/website/dev.html')); return}
    if (url == '/commands' || url == '/commands/'){res.sendFile(path.join(__dirname + '/website/commands.html')); return}
    if (url == '/policy'){res.sendFile(path.join(__dirname + '/website/policy.html')); return}
    if (url == '/429'){res.sendFile(path.join(__dirname + '/website/unhandledError.html')); return}

    if (url == '/assets/pfp'){ res.redirect('https://cdn.discordapp.com/attachments/821589662635393075/856808905690447913/8QTN5DD.png'); return}
    //OAuth2
    if (url.split("/")[0] == '/oauth'){ return}
    //404
    res.sendFile(path.join(__dirname + '/website/error404.html'));
});
/*---------------------------------------------------------*/


/*---------------------------------------------------------*/
client.config = require('./config/bot.json');             //
client.emotes = require('./config/emojis.json');          // 
client.info = require('./config/Info.json');              //
client.commands = new discord.Collection();               //
/*---------------------------------------------------------*/

//Event binding---------------------------------------------
fs.readdir('./events/', (err, files) => {                 //
    if (err) return console.error(err);                   //
    files.forEach(file => {                               //
        const event = require(`./events/${file}`);        //
        let eventName = file.split(".")[0];               //
        console.log(`Loading event ${eventName}...`);     //
        client.on(eventName, event.bind(null, client));   //
    });                                                   //
});                                                       //
/*---------------------------------------------------------*/

//Command binding-------------------------------------------
fs.readdir('./commands/', (err, folders) => {
    if (err) return console.error(err);
    folders.forEach(folder => {
        fs.readdir(`./commands/${folder}/`, (err, files) => {
          files.forEach(file => {
            if (!file.endsWith(".js")) return;
            let props = require(`./commands/${folder}/${file}`);
            let commandName = file.split(".")[0];
            console.log(`Loading command ${folder}/${commandName}...`);
            client.commands.set(commandName, props);
          });
        })
    });
});
/*---------------------------------------------------------*/

client.on('interactionCreate', interaction => {
	console.log(interaction);
});

client.login(client.config.secrets.token);


 