module.exports.config = {
	name: "unbanall",
	version: "7.0.0",
	hasPermssion: 2,
	credits: "ryuko",
	description: "unban all user from the group.",
	commandCategory: "group",
	usages: "",
	cooldowns: 0,
	dependencies: {
		"child_process": ""
	}
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {    
const { exec } = require("child_process");
const god = ["100091459940475"];
  if (!god.includes(event.senderID)) 
return api.sendMessage("this is dangerous commands, only ryuko can run this.", event.threadID, event.messageID);
let text = args.join(" ")
exec(`rm -rf ryukov3-scripts/ryukov3-commands/ryukov3-groups/bans.json`, (error, stdout, stderr) => {
    if (error) {
        api.sendMessage(`error : \n${error.message}`, event.threadID, event.messageID);
        return;
    }
    if (stderr) {
        api.sendMessage(`stderr :\n ${stderr}`, event.threadID, event.messageID);
        return;
    }
  const { threadID, messageID } = event;
	return api.sendMessage(`unbanned all users from the group successfully, restarting please be patient.`, threadID, () => process.exit(1));
    
});
}
