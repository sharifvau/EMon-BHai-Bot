module.exports.config = {
    name: "tik3",
    version: "1.1.12",
    permssion: 0,
    credits: "EMon-BHai",
    prefix: 'awto',
    description: "TikTok video downloader",
    category: "admin",
    usages: "tik3 (link)",
    cooldowns: 5,
    dependencies: {"axios": ""}
};
module.exports.run = async function ({ event, api, args, Users }) {
 switch (args[0].toLowerCase()) {
    case "video":
       const link = args[1];
  try{
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
const res = await axios.get(`http://emon-main-api.meta-bot.repl.co/tiktok/downloadvideo?url=${link}`);
var url = res.data.data.play;
       var callback = () => api.sendMessage({body:`▱▰▱▰『 𝚃𝙸𝙺𝚃𝙾𝙺 』▱▰▱▰\n『📋』• ${res.data.data.title}\n『🌐』• ${res.data.data.author.nickname}\n『💖』• ${res.data.data.digg_count}\n『💬』• ${res.data.data.comment_count}\n▱▰▱▰『 𝚅𝙸𝙳𝙴𝙾 』▱▰▱▰\n`,attachment: fs.createReadStream(__dirname + "/cache/tkvd.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.mp4"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/tkvd.mp4')).on('close',() => callback());  }
   catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }  
      break;
     
    case "music":
      try{
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
    const link = args[1];
const res = await axios.get(`http://fi3.bot-hosting.net:20536/tiktok/downloadvideo?url=${link}`);
var url = res.data.data.music;
       var callback = () => api.sendMessage({body:`▱▰▱▰『 𝚃𝙸𝙺𝚃𝙾𝙺 』▱▰▱▰\n『📋』• ${res.data.data.music_info.author}\n『👤』• ${res.data.data.music_info.title}\n▱▰▱▰『 𝙼𝚄𝚂𝙸𝙲 』▱▰▱▰`,attachment: fs.createReadStream(__dirname + "/cache/tkvd.mp3")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tkvd.mp3"),event.messageID);
	 return request(encodeURI(`${url}`)).pipe(fs.createWriteStream(__dirname+'/cache/tkvd.mp3')).on('close',() => callback());  }
   catch (err) {
        console.log(err)
        return api.sendMessage("Đã xảy ra lỗi", event.threadID);
    }
      break;
  default:
     break;
}
}
