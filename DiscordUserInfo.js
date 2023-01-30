console.clear();

const { Discord } = require("discord-id");
const prompt = require('prompt-sync')();
const fs = require("fs");
const Client = new Discord("TOKEN");

const id = prompt("User ID : ");

console.clear();

Client.grabProfile(id).then(User =>
    {
        const creationdate = new Date(User.creation_stamp);
        let Badges = [];
        for (var i = 0; i < User.badges.length; i++){
        Badges.push(User.badges[i].name);
      }
        console.log("===========================");
        console.log("Username : " + User.username + "#" + User.discriminator);
        console.log("ID : " + User.id);
        console.log("Creation Date : " + creationdate);
        console.log("Avatar : " + User.avatar.url);
        console.log("Avatar Format : " + User.avatar.format);
        console.log("Avatar Hash : " + User.avatar.hash);
        console.log("Banner : " + User.banner);
        console.log("Banner Color : " + User.banner_color);
        console.log("User Badges : " + Badges.join(", "));
        console.log("Token First Part : " + Buffer.from(id).toString('base64'));
        console.log("===========================");

        console.log(" ");


const hmenureturn = prompt('Type  - another - To Osint Another ID : ');

switch (hmenureturn) {
  case 'another':
  console.clear();
eval(fs.readFileSync('DiscordUserOsint.js').toString());
}

    }).catch(Error => {
    console.log(Error);
    });
