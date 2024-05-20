module.exports.config = {
  name: 'rbg',
  version: '1.1.1',
  permssion: 0,
  credits: 'EMon-BHai',
  prefix: 'awto',
  description: 'Remove Photo Background',
  category: 'user',
  usages: 'rbg ( Reply images or url images )',
  cooldowns: 2,
  dependencies: {
       'form-data': '',
       'image-downloader': ''
    }
};

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs-extra');
const path = require('path');
const {image} = require('image-downloader');
module.exports.run = async function({
    api, event, args
}){
    try {
        if (event.type !== "message_reply") return api.sendMessage("You must reply to a photo", event.threadID, event.messageID);
        if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("You must reply to a photo", event.threadID, event.messageID);
        if (event.messageReply.attachments[0].type != "photo") return api.sendMessage("This is not an image", event.threadID, event.messageID);

        const content = (event.type == "message_reply") ? event.messageReply.attachments[0].url : args.join(" ");
        const KeyApi = ["yxBXi5jTsbax38KauCMFU4bJ","Rh8giMHqNDFwx3CZRW6iJcoF","ke4vcFaSkRAFju2aB9uzmSge","YFobnEtrch553rL5ydKvLeMS","gsHprNw2huCMjc1Vje1nFhTy","rp7if4rdrzkwtvF1ygyJXkJg","Xj9grNLoTFmULT1jRjU62EWb"]
        const inputPath = path.resolve(__dirname, 'cache', `photo.png`);
         await image({
        url: content, dest: inputPath
    });
        const formData = new FormData();
        formData.append('size', 'auto');
        formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));
        axios({
            method: 'post',
            url: 'https://api.remove.bg/v1.0/removebg',
            data: formData,
            responseType: 'arraybuffer',
            headers: {
                ...formData.getHeaders(),
                'X-Api-Key': KeyApi[Math.floor(Math.random() * KeyApi.length)],
            },
            encoding: null
        })
            .then((response) => {
                if (response.status != 200) return console.error('Error:', response.status, response.statusText);
                fs.writeFileSync(inputPath, response.data);
                return api.sendMessage({ attachment: fs.createReadStream(inputPath) }, event.threadID, () => fs.unlinkSync(inputPath));
            })
            .catch((error) => {
                return console.error('Request failed:', error);
            });
     } catch (e) {
        console.log(e)
        return api.sendMessage(`có cái nịt`, event.threadID, event.messageID);
  }
};
