const fetch = require("node-fetch");

module.exports = {
    shorten: async function (url) {
        const result = await fetch(`https://api.dotwood.media/app/url?url=${url}`).catch(err => { console.log(err) });

        const data = await result.json();
        return data.response;
    }
};