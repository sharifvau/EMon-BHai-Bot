module.exports.config = {
	name: "o",
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
			if (event.body.indexOf("night")==0 || event.body.indexOf("😁")==0 || event.body.indexOf("😁😁")==0 || event.body.indexOf("😁😁😁")==0 || event.body.indexOf("😁😁")==0 || event.body.indexOf("😁😁😁")==0 || event.body.indexOf("😁😁😁")==0 || event.body.indexOf("😁😁😁😁")==0 || event.body.indexOf("😁😁😁😁😁")==0 || event.body.indexOf("😁😁😁😁😁😁")==0 || event.body.indexOf("😁😁😁😁😁😁")==0 || event.body.indexOf("😁😁😁😁")==0 ) { 
					var msg = {
									body: ` 𝙏𝙤𝙧 𝘿𝙖𝙩 𝙑𝙖𝙣𝙜𝙜𝙚 𝘿𝙞𝙗𝙤 😾🤭${} `
												}
															api.sendMessage(msg, threadID, messageID);
															    api.setMessageReaction("😐", event.messageID, (err) => {}, true)
															    		}
															    			}
															    				module.exports.run = function({ api, event, client, __GLOBAL }) {
      }
      
