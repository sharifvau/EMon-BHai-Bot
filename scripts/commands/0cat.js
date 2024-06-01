/**
* @EMON HAWLADAR
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "dog",
  version: "1.0.0",
  permssion: 0,
  credits: "EMon-BHai",
  prefix: false,
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  usages: "[ask]",
  category: "SIM ✅",
  cooldowns: 2
};

module.exports.run = async ({ api, event,args }) => {
const axios = require("axios");
let query = args.join(" ");
if (!query)
    return api.sendMessage(`Wrong Command\nUse this: ${global.config.PREFIX}${this.config.name} Ki koros \n\n[ Teach: ${this.config.name} \n example : teach Tmr Name Ki - ${this.config.name} \n\n support language English - Banglish ✅ ]`, event.threadID, event.messageID);
const res = await axios.get(`http://ip.minehost.fun:25444/sim?type=ask&ask=${query}`);
var plaintext = res.data.answer;
api.sendMessage(plaintext, event.threadID, event.messageID)
}
