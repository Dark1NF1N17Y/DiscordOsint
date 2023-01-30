var readline = require('readline-sync');

const code = readline.question("Invite Code Without Link : ");

let url = "https://discord.com/api/v6/invite/" + code;

const https = require('https');

console.clear();

https.get(url,(res) => {
    let body = "";

    res.on("data", (chunk) => {
        body += chunk;
    });

    res.on("end", () => {
        try {
            let json = JSON.parse(body);
            console.log(json);
        } catch (error) {
            console.error(error.message);
        };
    });

}).on("error", (error) => {
    console.error(error.message);
});
