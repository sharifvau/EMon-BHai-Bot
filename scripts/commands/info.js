module.exports.config = {
    name: "info",
    version: "1.0.0",
    permission: 0,
    credits: "Emon",
    prefix: 'awto',
    description: "Admin Information",
    category: "admin",
    usages: "info",
    cooldowns: 5,
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
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:` আসালামু আলাইকুম ❤️জ্বি বলুন আমি সুনছি❤️ ইমন ভাইকে কিছু বলতে চান? 

--------------------------------------------

FACEBOOK :  EMON HAWLADAR 

GENDER : MALE

Age : 23+

Relationship : SINGLE 😓

Work : JOB Malaysia

FACEBOOK LINK : https://www.facebook.com/EMon.BHai.FACEBOOK

Wp : wa.me/+8801309991724

TELEGRAM : আ্ঁম্মু্ঁ এ্ঁগু্ঁলা্ঁ চা্ঁলা্ঁতে্ঁ মা্ঁনা্ঁ ক্ঁরে্ঁছে্ঁ🐰💦

Mail : আ্ঁব্বু্ঁ ব্ঁলে্ঁছে্ঁ জি্ঁমে্ঁল্ঁ দি্ঁলে্ঁ বি্ঁয়া্ঁ ক্ঁরা্ঁবে্ঁ না্ঁহ্ঁ🐰💦

➟ UPTIME

TODAY IS TIME : ${juswa} 

BOT IS RUNNING ${hours}:${minutes}:${seconds}.

THANKS FOR USING ${global.config.BOTNAME} 『🙅🖤』`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100075290587473/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
