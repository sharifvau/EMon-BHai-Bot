const fs = require('fs');
const request = require('request');

module.exports.config = {
    name: "sendnoti",
    version: "1.0.0",
    permssion: 2,
    credits: "EMon-BHai",
    prefix: 'awto',
    description: "𝗦𝗲𝗻𝗱 𝗡𝗼𝘁𝗶𝗳 𝗔𝗹𝗹 𝗧𝗵𝗿𝗲𝗮𝗱𝘀",
    category: "𝗮𝗱𝗺𝗶𝗻",
    usages: "sendnoti [𝗜𝗻𝗽𝘂𝘁 𝗧𝗲𝘅𝘁]",
    cooldowns: 5
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Manila").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti": {
            let text = `====== [ 𝗨𝘀𝗲𝗿 𝗥𝗲𝗽𝗹𝘆 ] ======\n--------------\n✦𝗧𝗶𝗺𝗲✦: ${gio}\n\n--------------\n✦𝗥𝗲𝗽𝗹𝘆✦ : ${body}\n\n--------------\n𝗨𝘀𝗲𝗿 𝗡𝗮𝗺𝗲 ${name}  𝗙𝗿𝗼𝗺 𝗚𝗿𝗼𝘂𝗽 ${(await Threads.getInfo(threadID)).threadName || "𝗨𝗻𝗸𝗻𝗼𝘄𝗻"}`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `====== [ 𝗨𝘀𝗲𝗿 𝗥𝗲𝗽𝗹𝘆 ] ======\n--------------\n✦𝗧𝗶𝗺𝗲✦: ${gio}\n\n--------------\n✦𝗥𝗲𝗽𝗹𝘆✦ : ${body}\n\n--------------\n𝗨𝘀𝗲𝗿 𝗡𝗮𝗺𝗲: ${name} 𝗙𝗿𝗼𝗺 𝗚𝗿𝗼𝘂𝗽 ${(await Threads.getInfo(threadID)).threadName || "𝗨𝗻𝗸𝗻𝗼𝘄𝗻"}`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `==== [ ✦Announcement From Admin✦ ] ====\n--------------\n『Time』: ${gio}\n\n--------------\n『Message』 : ${body}\n\n--------------\n✦𝗥𝗲𝗽𝗹𝘆 𝘁𝗼 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗶𝗳 𝘆𝗼𝘂 𝘄𝗮𝗻𝘁 𝘁𝗼 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗔𝗻𝗻𝗼𝘂𝗻𝗰𝗲✦`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `${body}==== [ ✦Announcement From Admin✦ ] ====\n--------------\n『Time』: ${gio}\n\n--------------\n✦𝗥𝗲𝗽𝗹𝘆 𝘁𝗼 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗶𝗳 𝘆𝗼𝘂 𝘄𝗮𝗻𝘁 𝘁𝗼 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗔𝗻𝗻𝗼𝘂𝗻𝗰𝗲✦`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Manila").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("𝗠𝗶𝘀𝘀𝗶𝗻𝗴 𝗜𝗻𝗽𝘂𝘁 𝗘𝘅𝗮𝗺𝗽𝗹𝗲: 𝘀𝗲𝗻𝗱𝗻𝗼𝘁𝗶 <𝗺𝘀𝗴>", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `====== [ ✦𝗠𝗘𝗦𝗦𝗔𝗚𝗘 𝗙𝗥𝗢𝗠 𝗔𝗗𝗠𝗜𝗡✦ ] ======\n--------------\n『𝗧𝗶𝗺𝗲』: ${gio}\n\n--------------\n『𝗠𝗘𝗦𝗦𝗔𝗚𝗘』 : ${args.join(" ")}\n\n--------------\n『𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘』 ${await Users.getNameUser(senderID)} \n--------------\n✦𝗥𝗲𝗽𝗹𝘆 𝘁𝗼 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗶𝗳 𝘆𝗼𝘂 𝘄𝗮𝗻𝘁 𝘁𝗼 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗔𝗻𝗻𝗼𝘂𝗻𝗰𝗲✦`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `====== [ ✦𝗠𝗘𝗦𝗦𝗔𝗚𝗘 𝗙𝗥𝗢𝗠 𝗔𝗗𝗠𝗜𝗡✦ ] ======\n--------------\n『𝗧𝗶𝗺𝗲』: ${gio}\n\n--------------\n『𝗠𝗘𝗦𝗦𝗔𝗚𝗘』 : ${args.join(" ")}\n\n--------------\n『𝗔𝗗𝗠𝗜𝗡 𝗡𝗔𝗠𝗘』 ${await Users.getNameUser(senderID)}\n--------------\n✦𝗥𝗲𝗽𝗹𝘆 𝘁𝗼 𝘁𝗵𝗶𝘀 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝗶𝗳 𝘆𝗼𝘂 𝘄𝗮𝗻𝘁 𝘁𝗼 𝗿𝗲𝘀𝗽𝗼𝗻𝗱 𝗔𝗻𝗻𝗼𝘂𝗻𝗰𝗲✦`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`𝗦𝗲𝗻𝗱 𝘁𝗼 ${can} 𝘁𝗵𝗿𝗲𝗮𝗱, 𝗻𝗼𝘁 𝘀𝗲𝗻𝗱 𝘁𝗼 ${canNot} 𝘁𝗵𝗿𝗲𝗮𝗱`, threadID);
}
