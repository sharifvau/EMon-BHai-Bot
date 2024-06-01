const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports.config = {
  name: "teach",
  version: "1.0.0",
  permssion: 0,
  credits: "Abdulla Tech 49",
  usePrefix: false,
  description: "Teach AI",
  commandCategory: " SIM ✅",
    cooldowns: 2,
};

  module.exports.run = async function({ api, event, args, Users, Threads, Currencies}) {
    const uid = event.senderID;
    const info = args.join(" ");
    var n = global.nayan_api
    var id = Object.keys(event.mentions)[0] || event.senderID;
  var nam = await Users.getNameUser(id);
  var ThreadInfo = await api.getThreadInfo(event.threadID);
    if (!info) {
      return api.sendMessage(`Please enter in the format:\n${global.config.PREFIX}teach hi - 𝙃𝙚𝙡𝙡𝙤 `, event.threadID);
    } else {
      const msg = info.split("-");
      const ask = msg[0].trim();
      const ans = msg[1].trim();
      

      const img = `http://ip.minehost.fun:25444/sim?type=teach&ask=${ask}&ans=${ans}`

      try {
        const response = await axios.get(img);
        

                api.sendMessage({ 
          body: `📝Your Data Added To Database Successfully\n1️⃣ASK: ${ask}\n2️⃣ANS: ${ans}`
                        }, event.threadID);
                      } catch (error) {
                        console.error(error);
                        api.sendMessage("An error occurred while  teach.", event.threadID);
                      }
                    }
                  };