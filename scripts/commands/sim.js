/**
* @EMON HAWLADAR
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "bby1",
  version: "1.0.0",
  permssion: 3,
  credits: "EMon-BHai",
  prefix: 'awto',
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  usages: "sim (ask) reply simsimi",
  category: "admin",
  cooldowns: 2
};

module.exports.run = async ({ api, event,args }) => {
const axios = require("axios");
let query = args.join(" ");
if (!query)
    return api.sendMessage('𝙃𝙖𝙮 𝘽𝙗𝙮 𝘽𝙤𝙡𝙤 𝙏𝙢𝙠 𝙆𝙞𝙫𝙖𝙗𝙚 𝙃𝙚𝙡𝙥 𝙆𝙤𝙧𝙩𝙚 𝙋𝙖𝙧𝙞', event.threadID, event.messageID);
const res = await axios.get(`http://fi3.bot-hosting.net:20536/sim?type=ask&ask=${query}`);
var plaintext = res.data.answer;
api.sendMessage(plaintext, event.threadID, event.messageID)
}
