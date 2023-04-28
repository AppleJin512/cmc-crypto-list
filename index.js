import fetch from "node-fetch";
import fs from "fs";

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map', {
    method: 'GET',
    headers: {
        'X-CMC_PRO_API_KEY': "9e39d8b1-4421-4fbf-8866-c7157735e169"
    },
})
.then(async (data) => {
    const cryptolist = await data.json();
    const cryptoNames = cryptolist.data.map((v, k) => ({full: v.name, short: v.symbol}));
    fs.writeFile("cryptoNames.js", "exports.cryptoNames = " + JSON.stringify(cryptoNames), (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Successfully Saved! Enjoy!");
    })
})
.catch((err) => {
    throw err;
});
