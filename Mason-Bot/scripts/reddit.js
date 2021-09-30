exports.run = async (url, msg) => {
    try {
        //If fails retry me daddy
        function retry(url, msg) {
            msg.edit("...")
            require("./reddit.js").run(url, msg)
        }
        const RandomNumber = require("./mathRandom.js").run

        const axios = require('axios');
        try {
           return axios({
                method: 'get',
                url: url,
            })
        } catch (err) {
            retry(url, msg)
            return
        }
    }

    catch (err) {
        return new Error(err)
    }
};
