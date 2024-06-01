module.exports.config = {
    name: "goibot",
    version: "1.0.0",
    permssion: 1,
    credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
    description: "Call Bot No reply",
    prefix:'true',
    category: "ai",
    usages: "",
    cooldowns: 2,
    denpendencies: {}
}, module.exports.handleEvent = async ({
    event: e,
    api: o,
    Users: t,
    Threads: a
}) => {
    var {
        threadID: n,
        messageID: s,
        body: i,
        senderID: d
    } = e;
    const r = global.data.threadData.get(n) || {};
    if (void 0 !== r.goibot && 0 == r.goibot) return;
    if (d == global.data.botID) return;
    let g = await t.getNameUser(e.senderID),
        c = (await a.getData(e.threadID)).threadInfo;
    var h = e.threadID,
        l = ["𝗕𝗲𝘀𝗵𝗶 𝗱𝗮𝗸𝗹𝗲 𝗮𝗺𝗺𝘂 𝗯𝗼𝗸𝗮 𝗱𝗲𝗯𝗮 𝘁𝗼__🥺", "__বেশি বেবি বললে কামুর দিমু,,//🤭🤭", "𝗕𝗯𝘆 𝗻𝗮 𝗯𝗼𝗹𝗲 𝗕𝗼𝘄 𝗯𝗼𝗹𝗼😘","এই এই তোর পরীক্ষা কবে ? শুধু 𝗕𝗯𝘆 𝗯𝗯𝘆 𝗸𝗼𝗿𝗶𝘀😾","আমার সোনার বাংলা ,তারপরে লাইন কি ?🙈","আগে একটা গান বলো,☹নাহলে কথা বলবো না_🥺","বলো কি করতে পারি তোমার জন্য😚","°কথা দেও আমাকে পটাবা...!!😌","বার বার Disturb করেছিস কোনো😾,আমার জানু এর সাথে ব্যাস্ত আসি😋" , "আমাকে না দেকে একটু পড়তেও বসতে তো পারো🥺🥺 " , "বার বার ডাকলে মাথা গরম হয় কিন্তু😑😒 " , "𝗕𝗯𝘆 𝗕𝗯𝘆 না করে আমার বস মানে,,BADBOY ,BADBOY ও তো করতে পারো😑😒" , "বলো জানু 🌚 " , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈" , "আজকে আমার mন ভালো নেই🙉"]
        u = l[Math.floor(Math.random() * l.length)];
    ["bby","baby","bot oi","iove bot","maliha"].forEach((e => {
        let t = e[0].toUpperCase() + e.slice(1);
        if (i === e.toUpperCase() | i === e | t === i) {
            let t = c.threadName;
            return modules = "------ Call bots ------\n", console.log(modules, e + "|", t, h), a = u, void o.sendMessage(a, n, s)
        }
        var a
    }))
}, module.exports.languages = {
    vi: {
        on: "Turn on",
        off: "Turn off",
        successText: "goibot successful"
    },
    en: {
        on: "on",
        off: "off",
        successText: "goibot success!"
    }
}, module.exports.run = async function ({
    api: e,
    event: o,
    Threads: t,
    getText: a
}) {
    const {
        threadID: n,
        messageID: s
    } = o;
    let i = (await t.getData(n)).data;
    return void 0 === i.goibot || 1 == i.goibot ? i.goibot = !1 : i.goibot = !0, await t.setData(n, {
        data: i
    }), global.data.threadData.set(n, i), e.sendMessage(`${0==i.goibot?a("off"):a("on")} ${a("successText")}`, n, s)
};
