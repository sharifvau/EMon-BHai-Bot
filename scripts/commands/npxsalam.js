module.exports.config = {
	name: "salam",
  version: "7.3.1",
	permssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓", 
	prefix: 'awto',
	description: "Just Respond",
	category: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("night")==0 || event.body.indexOf("Assalamualaikum")==0 || event.body.indexOf("Assalamualaikum")==0 || event.body.indexOf("asslamulaikum")==0 || event.body.indexOf("bby assalamualaikum")==0 || event.body.indexOf("bby Assalamualaikum")==0 || event.body.indexOf("Asslamulaikum")==0 || event.body.indexOf("asslamulaikum")==0 || event.body.indexOf("Asslamulaikum")==0 || event.body.indexOf("Assalamu alaikum")==0 || event.body.indexOf("আসসালামুআলাইকুম")==0 || event.body.indexOf("আসসালামু আলাইকুম")==0 ) { 
		var msg = {
				body: ` 𝘄𝗮𝗹𝗮𝗶𝗸𝘂𝗺 𝗮𝘀𝘀𝗹𝗮𝗺🐤🐤 `
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
