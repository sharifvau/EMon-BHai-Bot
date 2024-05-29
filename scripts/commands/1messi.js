/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "rules",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MrTomXxX",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "rules",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["🌺🌺 Assalamu Walaikum 🌺🌺\n\n❕❕❗••••••••••••𝗔𝗱𝗺𝗶𝗻 𝗽𝗼𝘀𝘁❗❕❕\n\n꧁҈⃟⃝ࣩࣩࣩࣩࣩࣩࣩ❥༓͚͚͚͚͚͚͚̿̊♡𝙰∂∂α ԋσυʂҽ♡Box50༓͚͚͚͚͚͚͚̿̊ꕀ⃘⃜⃟ؖؖؖ░⃟̎̎̎̎̐▒̎̎̎̎̐ꔹ⃟𝄞\n\n     👉‼️  ⚠️🔰 গ্রুপ রুলস 🔰⚠️‼️👈\n\n1️⃣পার্মানেন্ট থাকতে পারলে এড করা হবে❗\n2️⃣সবার সাথে ভালো ব্যাবহার করতে হবে❗\n3️⃣গ্রুপে কোন ছেলে অথবা মেয়ে, উভয় কারো ইনবক্সে ম্যাসেজ, ফ্রেন্ড রিকুয়েস্ট দেওয়া+ঝামেলা করা যাবে না ❗❌❌\n\n👉🔰❗এবার আসি কিক এর বিষয়❗🔰👈\n\n1️⃣গালি দিয়ে মেম্বার এর সাথে কথা বল্লে কিক❗\2️⃣গুটি বাজ ফাপর বাজ হলে কিক❗\n3️⃣2 দিনের বেশি active না থাকলে কিক❗\n4️⃣রুলস না মানলে কিক❗\n☑️প্রতিদিন কলে ২/৩ ঘন্টা সময় দিতে হবে ❗\n\n✅ গ্রুপে কোন ধরনের সমস্যা হলে এডমিনের সাথে যোগাযোগ করবেন❗\n💙❤️(ধন্যবাদ)❤️💙"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/tTP60T9Y/received-3490876521168490.jpg",
"https://i.postimg.cc/4yjtj997/received-597187325597866.jpg",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };