const fetch = require("node-fetch");

module.exports = {
    shorten: async function (url) {
        const result = await fetch(`https://api.dotwood.media/app/url?url=${url}`).catch(err => {
            throw err;
        });

        const data = await result.json();
        return data.response;
    },
    
    custom: async function (url, code) {
        const result = await fetch(`https://api.dotwood.media/app/url?url=${url}&code=${code}`).catch(err => {
            throw err;
        });

        const data = await result.json();
        return data.response;
    }
};