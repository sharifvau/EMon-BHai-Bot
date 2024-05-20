module.exports.config = {
	name: "album",
	version: "1.0.3",
	permssion: 0,
	credits: "EMon-BHai",
   prefix: 'awto',
	description: "video album",
	category: "user",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
	if (!n[0]) return a.sendMessage("====「 𝐕𝐈𝐃𝐄𝐎 」====\n━━━━━━━━━━━━━\n𝟙. 𝐋𝐎𝐕𝐄 𝐕𝐈𝐃𝐄𝐎 💞 \n𝟚. 𝐂𝐎𝐔𝐏𝐋𝐄 𝐕𝐈𝐃𝐄𝐎 💕\n𝟛. 𝐒𝐇𝐎𝐑𝐓 𝐕𝐈𝐃𝐄𝐎 📽\n𝟜. 𝐒𝐀𝐃 𝐕𝐈𝐃𝐄𝐎 😔\n𝟝. 𝐒𝐓𝐀𝐓𝐔𝐒 𝐕𝐈𝐃𝐄𝐎 📝\n𝟞. 𝐒𝐇𝐀𝐈𝐑𝐈\n𝟟. 𝐁𝐀𝐁𝐘 𝐕𝐈𝐃𝐄𝐎 😻\n𝟠. 𝐀𝐍𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎 \n𝟡. 𝐇𝐔𝐌𝐀𝐈𝐘𝐔𝐍 𝐅𝐎𝐑𝐈𝐃 𝐒𝐈𝐑 ❄\n𝟙𝟘. 𝐈𝐒𝐋𝐀𝐌𝐈𝐊 𝐕𝐈𝐃𝐄𝐎 🤲\n𝟙𝟙.𝐑𝐀𝐍𝐃𝐎𝐌 𝐕𝐈𝐃𝐄𝐎 🤩\n𝟙𝟚.𝐓𝐈𝐊𝐓𝐎𝐊 𝐕𝐈𝐃𝐄𝐎😓\n\n===「 𝟏𝟖+ 𝐕𝐈𝐃𝐄𝐎 」===\n━━━━━━━━━━━━━\n𝟙𝟛. 𝐇𝐎𝐑𝐍𝐘 𝐕𝐈𝐃𝐄𝐎 🥵\n𝟙𝟜. 𝐇𝐎𝐓 🔞\n𝟙𝟝. 𝐈𝐓𝐄𝐌\n\nTell me how many video numbers you want to see by replaying this message", e.threadID, ((a, n) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
}, module.exports.handleReply = async ({
	api: e,
	event: a,
	client: n,
	handleReply: t,
	Currencies: s,
	Users: i,
	Threads: o
}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.url;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: "✧˖° 𝐀𝐋𝐁𝐔𝐌 𝐕𝐈𝐃𝐄𝐎 °˖✧\n𝐌𝐀𝐈𝐍 𝐀𝐏𝐈 𝐄𝐌𝐨𝐧-𝐁𝐇𝐚𝐢 ",
			attachment: t
		}, a.threadID, a.messageID)
	}

    function linkanh() {
        const p = require("axios");
        if ("8" == a.body)
            var h = "http://fi3.bot-hosting.net:20536/EMon-BHai/anime";
        else if ("7" == a.body)
         var   h = "http://fi3.bot-hosting.net:20536/EMon-BHai/baby";
        else if ("2" == a.body)
         var   h = "http://fi3.bot-hosting.net:20536/EMon-BHai/cpl";
        else if ("13" == a.body)
          var  h = "http://fi3.bot-hosting.net:20536/EMon-BHai/horny";
        else if ("14" == a.body)
          var  h = "http://fi3.bot-hosting.net:20536/EMon-BHai/hot";
        else if ("9" == a.body)
          var  h = "http://fi3.bot-hosting.net:20536/EMon-BHai/humaiyun";
        else if ("10" == a.body)
          var  h = "http://fi3.bot-hosting.net:20536/EMon-BHai/islam";
        else if ("15" == a.body)
          var  h = "http://fi3.bot-hosting.net:20536/EMon-BHai/item";
        else if ("1" == a.body)
         var   h = "http://fi3.bot-hosting.net:20536/EMon-BHai/love";
        else if ("11" == a.body)
         var  h = "http://fi3.bot-hosting.net:20536/EMon-BHai/random";
        else if ("4" == a.body)
         var  h = "http://fi3.bot-hosting.net:20536/EMon-BHai/sad";
        else if ("6" == a.body)
         var  h = "http://fi3.bot-hosting.net:20536/EMon-BHai/shairi";
        else if ("3" == a.body)
         var  h = "http://fi3.bot-hosting.net:20536/EMon-BHai/short";
        else if ("5" == a.body)
         var  h = "http://fi3.bot-hosting.net:20536/EMon-BHai/status";
        else if ("12" == a.body)
         var  h = "http://fi3.bot-hosting.net:20536/EMon-BHai/tik";
        return { p, h };
    }
};
