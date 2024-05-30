module.exports.config = {
	name: "amnepr",
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
				body: ` 𝘼𝙢𝙣𝙚 𝙏𝙖𝙠𝙖𝙞𝙡𝙚 𝙋𝙧𝙚𝙢 𝙖 𝙋𝙤𝙧𝙚 𝙅𝙖𝙢𝙪 𝙩𝙤𝙝 🥺😘 `
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
