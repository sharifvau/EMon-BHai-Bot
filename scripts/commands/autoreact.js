const fs = require('fs-extra');
const pathFile = __dirname + '/autoreact/autoreact.txt';

module.exports = {
config: {
  name: "autoreact",
  version: "1.0.0",
  permission: 0,
  credits: "Emon",
  description: "",
  prefix: 'awto', 
  category: "auto", 
  usages: "[off]/[on]",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
},

  languages: {
  "vi": {},
      "en": {
          "off": 'the autoreact function has been disabled for new messages.',
          "on": 'the autoreact function is now enabled for new messages.',
        "error": 'incorrect syntax'
      }
  },

handleEvent: async ({ api, event, Threads }) => {

  if (!fs.existsSync(pathFile))
   fs.writeFileSync(pathFile, 'false');
   const isEnable = fs.readFileSync(pathFile, 'utf-8');
   if (isEnable == 'true') {

  const reactions = ["💀", "🙄", "🤭","🥺","😶","😝","👿","🤓","🥶","🗿","😾","🤪","🤬","🤫","😼","😶‍🌫️","😎","🤦","💅","👀","☠️","🧠","👺","🤡","🤒","🤧","😫","😇","🥳","😭"];
  var emon = reactions[Math.floor(Math.random() * reactions.length)];

  api.setMessageReaction(emon, event.messageID, (err) => {
    if (err) {
      console.error("Error sending reaction:", err);
    }
  }, true);
}
},

start: async ({ emon, events, args, lang }) => {
   try {

     const logger = require("../../Emon/catalogs/Emonc.js");
     if (args[0] == 'on') {
       fs.writeFileSync(pathFile, 'true');
       emon.sendMessage(lang("on"), events.threadID, events.messageID);
     } else if (args[0] == 'off') {
       fs.writeFileSync(pathFile, 'false');
       emon.sendMessage(lang("off"), events.threadID, events.messageID);
     } else {
       emon.sendMessage(lang("error"), events.threadID, events.messageID);
     }
   }
   catch(e) {
     logger("unexpected error while using autoseen function", "system");
   }
}
}
