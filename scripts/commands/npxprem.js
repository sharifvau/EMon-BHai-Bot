module.exports.config = {
	name: "datvange",
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
	if (event.body.indexOf("night")==0 || event.body.indexOf("😒")==0 || event.body.indexOf("😒")==0 || event.body.indexOf("😒😒😒")==0 || event.body.indexOf("😒😒😒😒")==0 || event.body.indexOf("😒😒😒")==0 || event.body.indexOf("😒😒😒")==0 || event.body.indexOf("😒😒😒")==0 || event.body.indexOf("😒😒😒")==0 || event.body.indexOf("😒😒😒")==0 || event.body.indexOf("😒😒😒")==0 || event.body.indexOf("😒")==0 ) { 
		var msg = {
				body: ` 𝘼𝙢𝙣𝙚 𝙏𝙖𝙠𝙞𝙨 𝙉𝙖𝙝 𝙋𝙧𝙚𝙢 𝙖 𝙅𝙖𝙢𝙪 𝙏𝙤𝙝 🥺😘 ${name} `
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
