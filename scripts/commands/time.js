module.exports.config = {
	name: "time",
	version: "1.0.3",
	permission: 0,
	credits: "EMon-BHai",
	prefix: 'awto',
	description: "time",
	category: "user",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users }) {
	const moment = require("moment");
	var time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
	let data = await api.getUserInfo(event.senderID);
	let name = await data[event.senderID].name;
	
	// Video link to be sent
	const videoLink = "https://i.imgur.com/SXCMp2s.mp4";

	// Message with video and time
	const message = `👋 Hi ${name}! Have a nice day!\nIt's now: ${time} 🛎\n\nCheck out this video: ${videoLink}`;

	// Send message with video link
	return api.sendMessage(message, event.threadID, event.messageID);
};
