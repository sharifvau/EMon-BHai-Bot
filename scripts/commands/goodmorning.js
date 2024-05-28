module.exports.config = {
	name: "good moring",
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
	if (event.body.indexOf("night")==0 || event.body.indexOf("Morning")==0 || event.body.indexOf("GM")==0 || event.body.indexOf("gm")==0 || event.body.indexOf("Good Morning")==0 || event.body.indexOf("Gd moring")==0 || event.body.indexOf("Gd mr9")==0 || event.body.indexOf("Good Morning")==0 || event.body.indexOf("good morning")==0 || event.body.indexOf("GOOD MORNING")==0 || event.body.indexOf("Good Morning")==0 || event.body.indexOf("morning")==0 ) { 
		var msg = {
				body: ` 𝙂𝙤𝙤𝙙 𝙈𝙤𝙧𝙣𝙞𝙣𝙜 𝙏𝙤𝙤 🐤🐤 ${name} `
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

		}
