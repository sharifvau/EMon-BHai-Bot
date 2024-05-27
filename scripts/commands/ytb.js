module.exports.config = {
  name: "ytdl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓", //thanks for 𝙍𝙖𝙩𝙪𝙡 𝙃𝙖𝙨𝙨𝙖𝙣 for reference
  description: "Play video from youtube",
  commandCategory: "...",
  usages: "[title]",
  cooldowns: 10,
  dependencies: {
            
  }
};

module.exports.run = async({api, event, args}) => {
	const axios = require("axios");
    const fs = require("fs-extra");
    const Innertube = require("youtubei.js");
    const request = require("request");
    //let input = event.body;
   // var text = input;     text = text.substring(6)
//let data = input.split(" ");
  
/*if (data.length < 2) {               return api.sendMessage(`Wrong format\nUse: ${global.config.PREFIX}${this.config.name} ${this.config.usages}`, event.threadID);
}*/
  

//data.shift()

let text = args.join(" ");
  const youtube = await new Innertube();
 
  const search = await youtube.search(text);
if (search.videos[0] === undefined){
api.sendMessage("Error: Invalid request.",event.threadID,event.messageID)
api.setMessageReaction("😢", event.messageID, (err) => {}, true)
}else{
api.sendMessage(`Searching for "${text}"...`,  event.threadID,event.messageID);
api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
var timeleft = 3;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);

    }
  timeleft -= 1;
}, 1000);
  const stream = youtube.download(search.videos[0].id, {
    format: 'mp4',
    type: 'video',
    audioQuality: 'lowest',
    loudnessDB: '20',
    audioBitrate: '320',
    fps: '30'
  });
  
stream.pipe(fs.createWriteStream(__dirname + `/cache/${search.videos[0].title}.mp4`))


  stream.on('start', () => {
    console.info('[DOWNLOADER]', 'Starting download now!');
  }); 
  stream.on('info', (info) => {
    console.info('[DOWNLOADER]',`Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
    console.log(info)
  });

  
  stream.on('end', () => {
  // process.stdout.clearLine();
  // process.stdout.cursorTo(0);
    console.info(`[DOWNLOADER] Downloaded`)
    
    
    var message = {
          body:("Here's your request\n\nTitle: "+search.videos[0].title),
         attachment:[ 
fs.createReadStream(__dirname + `/cache/${search.videos[0].title}.mp4`)]}
           api.sendMessage(message, event.threadID,event.messageID);
  }); 
stream.on('error', (err)=> console.error('[ERROR]',err))

         stream.on('end', async () => {  
           
           if (fs.existsSync(__dirname + `/cache/${search.videos[0].title}.mp4`)) {
                                    fs.unlink(__dirname + `/cache/${search.videos[0].title}.mp4`, function (err) {
                                  if (err) console.log(err);                                        
                                  console.log(__dirname + `/cache/${search.videos[0].title}.mp4 is deleted!`);
                                                        });
                                                     }
             })
}
      } 