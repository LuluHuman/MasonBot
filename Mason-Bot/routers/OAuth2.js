const { encode, stringify } = require('querystring');
const { get, post } = require('axios');
const { Router } = require('express');
const bot = require("./../config/bot.json")
//const { encrypt, decrypt } = require('../util/crypt.js');

const router = Router();

const OAuthScope = ['identify', 'email', 'guilds'].join(' ');
const OAuthData = encode({
    response_type: 'code',
    client_id: bot.client_id,
    redirect_uri: bot.redirect_uri,
    scope: OAuthScope
});

router.get('/login', (req, res) => {
    req.redirect = req.query.redirect;
    res.redirect(`https://discordapp.com/oauth2/authorize?${OAuthData}`);
});
//------------------------------------------------------------------
router.get('/callback', async (req, res) => {
    //res.status(429).redirect('/429');
    if (!req.query.code) return res.status(404).redirect('/404');
    const { data } = await post('https://discordapp.com/api/v7/oauth2/token', stringify({
        client_id: bot.client_id,
        client_secret: bot.secrets.client_secret,
        grant_type: 'authorization_code',
        code: req.query.code,
        redirect_uri: bot.redirect_uri
    }), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    if (data.scope !== OAuthScope) return res.status(403).send(`Expected scope "${OAuthScope}" but received scope "${data.scope}"`);

    const userData = await get('https://discordapp.com/api/v7/users/@me', {
        headers: {
            'Authorization': `Bearer ${data.access_token}`
        }
    });
    const user = userData.data
    var Cookies = require('cookies')

    var cookies = new Cookies(req, res)
    const time = Date.now() + (10 * 365 * 24 * 60 * 60)
    cookies.set('username', user.username, { httpOnly: false, expires: new Date(time)})
    cookies.set('discriminator', user.discriminator, { httpOnly: false, expires: new Date(time)})
    cookies.set('id', user.id, { httpOnly: false, expires: new Date(time)})
    cookies.set('avatar', user.avatar, { httpOnly: false, expires: new Date(time)})
    res.redirect(req.redirect || '/');
});
//------------------------------------------------------------
router.get('/logout', (req, res) => {
    var Cookies = require('cookies')

    var cookies = new Cookies(req, res);
    cookies.set('username', "LAMBSAUCE", { expires: new Date(Date.now()) });
    cookies.set('discriminator', "LAMBSAUCE", { expires: new Date(Date.now()) });
    cookies.set('id', "LAMBSAUCE", { expires: new Date(Date.now()) });
    cookies.set('avatar', "LAMBSAUCE", { expires: new Date(Date.now()) });
    res.redirect('/');
});

module.exports = router;