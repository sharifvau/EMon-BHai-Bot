module.exports.config = {
    name: "convert",
    version: "1.0.0",
    permssion: 0,
    credits: "EMon-BHai",
    prefix: 'awto',
    description: "video convert audio",
    category: "user",
    usages: "convert [video]",
    cooldowns: 5
};
module.exports.run = async function ({ api, args, event, Currencies, Users }) {
  try{
 const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
var audioss = []
  var audio = args.join(" ") || event.messageReply.attachments[0].url;
    var { data } = await axios.get(audio ,{  method: 'GET',  responseType: 'arraybuffer' });
                fs.writeFileSync(__dirname + "/cache/vdtoau.m4a", Buffer.from(data, 'utf-8'));
  audioss.push(fs.createReadStream(__dirname + "/cache/vdtoau.m4a"));
    var msg = { body : "───※ ·❆· ※───\n\n[⚜️]→ এই নিন আপনার অডিও!!!\n\n───※ ·❆· ※───\n🔰Rock-JyniX🔰", attachment: audioss}
  api.sendMessage(msg, event.threadID, event.messageID)
} catch(e){
    console.log(e)
}
}
