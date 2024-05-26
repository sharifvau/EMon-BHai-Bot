const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports.config = {
  name: "teach",
  version: "1.0.0",
  permssion: 0,
  credits: "EMon-BHai",
  prefix: 'awto',
  description: "sim",
  category: "user",
    cooldowns: 2,
};

  module.exports.run = async function({ api, event, args, Users, Threads, Currencies}) {
    const uid = event.senderID;
    const info = args.join(" ");
    var n = global.sim_api
    var id = Object.keys(event.mentions)[0] || event.senderID;
  var nam = await Users.getNameUser(id);
  var ThreadInfo = await api.getThreadInfo(event.threadID);
    if (!info) {
      return api.sendMessage(`wrong format try : teach (your ask) - (my answer):\nEx ${global.config.PREFIX}teach Hi - Hello Dear`, event.threadID);
    } else {
      const msg = info.split("-");
      const ask = msg[0].trim();
      const ans = msg[1].trim();


      const img = `http://fi3.bot-hosting.net:20536/sim?type=teach&ask=${ask}&ans=${ans}`
      try {
        const response = await axios.get(img);


                api.sendMessage({ 
          body: `ASK: ${ask}\nANS: ${ans}`
                        }, event.threadID);
                      } catch (error) {
                        console.error(error);
                        api.sendMessage("An error occurred while  teach.", event.threadID);
                      }
                    }
                  };
