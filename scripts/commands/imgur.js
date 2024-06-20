const axios = require("axios");
class Imgur {
  constructor() {
    this.clientId = "fc9369e9aea767c", this.client = axios.create({
      baseURL: "https://api.imgur.com/3/",
      headers: {
        Authorization: `Client-ID ${this.clientId}`
      }
    })
  }
  async uploadImage(url) {
    return (await this.client.post("image", {
      image: url
    })).data.data.link
  }
}
class Modules extends Imgur {
  constructor() {
    super()
  }
  get config() {
    return {
      name: "imgur",
      description: "Upload image to imgur",
      version: "1.0.0",
      credits: "Emon",
      prefix: 'awto',
      cooldown: 5,
      usage: "imgur <url>",
      category: "Tools ✅",
      permssion: 0
    }
  }
  run = async ({ api, event }) => {
    var array = [];
    if ("message_reply" != event.type || event.messageReply.attachments.length < 0) return api.sendMessage("🌸একটি ফটো রিপ্লাই করুন✅", event.threadID, event.messageID);
    for (let { url } of event.messageReply.attachments) await this.uploadImage(url).then((res => array.push(res))).catch((err => console.log(err)));
    return api.sendMessage(`» 👉 ${array.length} টি ছবি আপলোড করা হয়েছে৷✅\nব্যর্থতা :👉 ${array.length - event.messageReply.attachments.length}❌\n» ছবির লিঙ্ক:👉\n${array.join("\n")}✅`, event.threadID, event.messageID)
  }
}
module.exports = new Modules;
