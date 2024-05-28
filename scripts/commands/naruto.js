const API = "https://api.botcahx.biz.id/api/photooxy/naruto?apikey=Admin&text="
module.exports.config = {
	name: "naruto",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
	description: "naruto logo",
	commandCategory: "text maker",
	usages: "naruto<text>",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage("〠ↈ༽𝙆𝙪𝙘𝙝 𝘿𝙚𝙧 𝙍𝙪𝙠𝙤 𝙇𝙤𝙜𝙤 𝙈𝙞𝙡 𝙅𝙖𝙮𝙚𝙜𝙖 𝘼𝙥𝙠𝙤༼ↈ〠", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `ↈ⋈༽𝙔𝙚 𝙇𝙤 𝘼𝙥𝙠𝙖 𝙇𝙤𝙜𝙤༼⋈ↈ`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Error! An error occurred. Please try again later ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};
