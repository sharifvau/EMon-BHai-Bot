module.exports.config = {
	name: "anime", 
  version: "1.0.0", 
  permission: 0,
  credits: "EMon-BHai",
  prefix: 'awto',
  description: "Random Anime video",
  category: "Media", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "fs":""
  }
};

const videoDATA = "http://fi3.bot-hosting.net:20536/video/anime";

module.exports.onLoad = ({}) => {
  if (!global.nodemodule["fs"].existsSync(__dirname + '/EMon-BHai')) {
    global.nodemodule["fs"].mkdirSync(__dirname + '/EMon-BHai');
  }
  global.nodemodule["fs"].readdirSync(__dirname + '/EMon-BHai').forEach(file => {
    global.nodemodule["fs"].unlinkSync(__dirname + `/EMon-BHai/${file}`);
  })
}

module.exports.run = async ({ api, event }) => {
  global.nodemodule["axios"]
    .get(videoDATA)
    .then(res => {
      global.nodemodule["axios"]
        .get(encodeURI(res.data.data), { responseType: "arraybuffer" })
        .then(ress => {
          let path = __dirname + `/EMon-BHai/${Date.now()}.mp4`;
          global.nodemodule["fs"].writeFileSync(path, Buffer.from(ress.data, 'utf-8'));
          api.sendMessage({
            body: "───※ ·❆· ※───\n☆《ANIME》☆\n 𝙀𝙈𝙤𝙣-𝘽𝙃𝙖𝙞\n───※ ·❆· ※───",
            attachment: global.nodemodule["fs"].createReadStream(path)
          }, event.threadID, () => global.nodemodule["fs"].unlinkSync(path), event.messageID);
          return;
        })
        .catch(e => {
          api.sendMessage("Something went wrong...", event.threadID, event.messageID);
          return;
        });
    })
  .catch(e => {
    api.sendMessage("Something went wrong...", event.threadID, event.messageID);
    return;
  });

  return;
}
