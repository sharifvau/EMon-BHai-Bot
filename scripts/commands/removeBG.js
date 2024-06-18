module.exports.config = {
    name: "rbg",
    version: "1.0.0",
    permission: 0,
    credits: "Nayan",
    description: "",
    prefix: 'awto',
    category: "user",
    usages: "reply",
    cooldowns: 10,
    dependencies: {
       'nayan-server': ''
    }
};





module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const {removebg} = require('nayan-server')
          if (event.type !== "message_reply") return api.sendMessage("[⚜️]➜ You must reply to a photo", event.threadID, event.messageID);
        if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("[⚜️]➜ You must reply to a photo", event.threadID, event.messageID);
        if (event.messageReply.attachments[0].type != "photo") return api.sendMessage("[⚜️]➜ This is not an image", event.threadID, event.messageID);
  const content = (event.type == "message_reply") ? event.messageReply.attachments[0].url : args.join(" ");

const res = await removebg(content)
  console.log(res)
  const img1 = res.data
        var msg = [];
        
  let imgs1 = (await axios.get(`${img1}`, {
    responseType: 'arraybuffer'
  })).data;
  fs.writeFileSync(__dirname + "/cache/removebg.jpg", Buffer.from(imgs1, "utf-8"));
  var allimage = [];
  allimage.push(fs.createReadStream(__dirname + "/cache/removebg.jpg"));
  
        {
            msg += `🖼️=== [ REMOVING BACKGROUND ] ===🖼️`
        }

        return api.sendMessage({
            body: msg,
            attachment: allimage 

        }, event.threadID, event.messageID);
}
