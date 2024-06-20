module.exports.config = {
    name: 'imgur2',
    version: '1.1.1',
    permssion: 0,
    credits: 'EMon-BHai',
    prefix: 'awto',
    description: 'imgur.com',
    category: 'Tools',
    usages: 'Reply [ photo | video]',
    dependencies: {
        'image-downloader': '',
        'tslib': '',
        'imgur': '',
        'request': ''
    }
};
const {ImgurClient} = require('imgur');
const {image} = require('image-downloader');
const {createReadStream, unlinkSync} = require('fs-extra');
const {get} = require('request');
module.exports.run = async function({ api, event }){
  try {
    const client = new ImgurClient({ clientId: 'd191da1e2b3ede' + 8});
    if (event.type != 'message_reply') return api.sendMessage(`🌸 Reply video ✅`, event.threadID, event.messageID);
    const arr = [];
    for (const {url} of event.messageReply.attachments) {
    const dest = `${__dirname}/${get(url).uri.pathname.replace(/\/|-|_/g, '')}`;
    await image({ url, dest });
    const res = await client.upload({ image: createReadStream(dest), type: 'stream' });
     arr.push(res.data.link);
     unlinkSync(dest);
    };
    api.sendMessage(arr.join('\n'), event.threadID, event.messageID);
  } catch(e){
     api.sendMessage(e, event.threadID, event.messageID); 
  };
};
