
module.exports.config = {
  name: "😭",
  version: "2.0.0",
  prefix: false,
  permission: 0,
  credits: "Emon",
  description: "😭 emoji trigger with video",
  category: "fun",
  usages: "😭",
  cooldowns: 5
};

module.exports.handleEvent = function ({ api, event }) {
  const body = (event.body || "").trim();

  if (!body.startsWith("😭")) return;

  const fs = require("fs");
  const path = require("path");

  // Video location: noprefix/cry.mp4
  const video = path.join(__dirname, "noprefix", "cry.mp4");

  const msg = {
    body: "কাঁদিস না ভাই, সব ঠিক হয়ে যাবে 😭💔\nকষ্ট পেলে মনে রাখবি — ঝড়ের পরেই রোদ আসে 🌧️🌈"
  };

  if (fs.existsSync(video)) {
    msg.attachment = fs.createReadStream(video);
  }

  api.sendMessage(msg, event.threadID, (err) => {
    if (err) console.error("Cry video send error:", err);
  }, event.messageID);

  api.setMessageReaction(
    "😢",
    event.messageID,
    () => {},
    true
  );
};
