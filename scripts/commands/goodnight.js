module.exports.config = {
	name: "good night",
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
	if (event.body.indexOf("night")==0 || event.body.indexOf("Night")==0 || event.body.indexOf("GN")==0 || event.body.indexOf("gn")==0 || event.body.indexOf("Gn")==0 || event.body.indexOf("Gd nyt")==0 || event.body.indexOf("Gd night")==0 || event.body.indexOf("Good Night")==0 || event.body.indexOf("good night")==0 || event.body.indexOf("GOOD NIGHT")==0 || event.body.indexOf("Good night")==0 || event.body.indexOf("nyt")==0 ) { 
		var msg = {
				body: `<3 𝙂𝙤𝙤𝙙 𝙉𝙞𝙜𝙝𝙩 𝙃𝙖𝙫𝙚 𝘼 𝙎𝙬𝙚𝙚𝙩 𝘿𝙧𝙚𝙖𝙢 😇😴 ${name} ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
