/**
* @Emon Hawladar
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "ludu",
  version: "1.0.0",
  permssion: 2,
  credits: "EMon-BHai",
  prefix: 'awto',
  category: "user",
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  usages: "emon [ask]",
  cooldowns: 2
};

module.exports.run = async ({ api, event,args }) => {
const axios = require("axios");
let query = args.join(" ");
if (!query)
    return api.sendMessage(`Wrong format\nPlease use: ${global.config.PREFIX}${this.config.name} [text]`, event.threadID, event.messageID);
const res = await axios.get(`http://fi1.bot-hosting.net:5980/sim?reply=${query}`);
var plaintext = res.data.message;
api.sendMessage(plaintext, event.threadID, event.messageID)
}
