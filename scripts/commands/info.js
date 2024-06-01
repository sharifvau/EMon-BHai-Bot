module.exports.config = {
	name: "inf",
	version: "1.0.1", 
	permssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	prefix:"true",
	category: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.postimg.cc/SxMdTCmz/20230531-224238.jpg","https://i.postimg.cc/TYGWMbjD/20230531-224325.jpg", "https://i.postimg.cc/BvDqnY4Q/20230531-224339.jpg",];
var callback = () => api.sendMessage({body:`➢🄾🅆🄽🄴🅁   🄰🄽🄳   🄱🄾🅃  🄸🄽🄵🄾

^𝗕𝗢𝗧 𝗡𝗔𝗠𝗘: ${global.config.BOTNAME}

^𝗕𝗢𝗧 𝗣𝗥𝗘𝗙𝗜𝗫: ${global.config.PREFIX}

^𝘽𝙊𝙏 𝙊𝙉𝙒𝙀𝙍 :𝗕𝗔𝗗𝗕𝗢𝗬,

^𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞: 𝘼𝘿𝘿 𝙆𝙊𝙍𝘼𝙍 𝙏𝙄𝙈𝗘 𝙉𝙔𝙔😺

➳✴️𝙈𝘼𝙎𝙏𝙀𝙍 𝙊𝙁 𝘽𝙊𝙏'𝙎 𝙄𝙉𝙎𝙄𝘿𝙀✴️

^𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 : 𝘽𝘼𝘿𝘽𝙊𝙔 

^𝗨𝗣𝗧𝗜𝗠𝗘 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 ✨: 30.0.1

^𝗧𝗢𝗗𝗔𝗬 𝗜𝗦📜: ${juswa} 

^𝗕𝗢𝗧 𝗜𝗦 𝗥𝗨𝗡𝗡𝗜𝗡𝗚⌚ ${hours}:${minutes}:${seconds}.

^𝐁𝐎𝐓 𝐔𝐍𝐃𝐄𝐑 𝐏𝐑𝐎𝐓𝐄𝐂𝐓𝐄𝐃 𝐁𝐘 𝐀𝐃𝐌𝐈𝐍𝐒 😘

^𝙏𝙝𝙖𝙣𝙠𝙨 𝙁𝙤𝙧 𝙐𝙨𝙞𝙣𝙜 ${global.config.BOTNAME} Bot!`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
