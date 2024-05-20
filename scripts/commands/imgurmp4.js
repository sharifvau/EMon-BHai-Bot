const imgur = require("imgur");
const fs = require("fs");

module.exports.config = {
  name: "imgurmp4",
  version: "1.0.0",
  permssion: 0,
  credits: "EMon-BHai",
  prefix: 'awto',
  description: "Imgur",
  category: "user",
  usages: "[reply]",
  cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "img.jpeg")) request("https://i.imgur.com/SJqI8jP.jpeg",  "file").pipe(fs.createWriteStream(dirMaterial + "img.jpeg"));
      }
module.exports.run = async ({ api, event }) => {
  const { threadID, type, messageReply, messageID } = event;
  const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Dhaka").format("DD/MM/YYYY || HH:mm:ss");
const fs = require("fs");
  const ClientID = "38db662ab2e22ad"
  if (type !== "message_reply" || messageReply.attachments.length == 0) return api.sendMessage("Bạn phải reply một video, ảnh nào đó", threadID, messageID);
  imgur.setClientId(ClientID);
  const attachmentSend = [];
  async function getAttachments(attachments) {
    let startFile = 0;
    for (const data of attachments) {
      const ext = data.type == "photo" ? "jpg" :
        data.type == "video" ? "mp4" :
          data.type == "audio" ? "m4a" :
            data.type == "animated_image" ? "gif" : "txt";
      const pathSave = __dirname + `/cache/${startFile}.${ext}`
      ++startFile;
      const url = data.url;
      await downloadFile(url, pathSave);
      attachmentSend.push(pathSave);
    }
  }
  await getAttachments(messageReply.attachments);
  let msg = "", Succes = 0, Error = [];
  for (const getImage of attachmentSend) {
    try {
      const getLink = await imgur.uploadFile(getImage)
      console.log(getLink);
      msg += `${++Succes}/ ${getLink.link}\n`
      fs.unlinkSync(getImage)
    } catch {
      Error.push(getImage);
      fs.unlinkSync(getImage)
    }
  }
  return api.sendMessage({body: `====『 𝗜𝗠𝗚𝗨𝗥 𝗨𝗣𝗟𝗢𝗔𝗗 』====\n━━━━━━━━━━━━━━━━━━━\n→ 𝗧𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴: ${Succes}\n→ 𝗧𝗵𝗮̂́𝘁 𝗯𝗮̣𝗶: ${Error.length}\n━━━━━━━━━━━━━━━━━━\n🌸 𝗟𝗶𝗻𝗸 𝗮̉𝗻𝗵 𝘃𝘂̛̀𝗮 𝘂𝗽:\n${msg}`, attachment: fs.createReadStream(__dirname + `/noprefix/video.mp4`)}, event.threadID, event.messageID);
}
