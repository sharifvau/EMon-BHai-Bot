const fs = require("fs");
module.exports.config = {
	name: "bye",
    version: "1.0.1",
	permssion: 0,
	credits: "Emon", 
  prefix: false,
	description: "no prefix",
	category: "user",
	usages: "Goodbye Grandpa",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("goodbye")==0 || (event.body.indexOf("by")==0 || (event.body.indexOf("bye")==0 || (event.body.indexOf("Bye")==0)))) {
		var msg = {
				body: "Take your time.",
				attachment: fs.createReadStream(__dirname + `/noprefix/bye.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
