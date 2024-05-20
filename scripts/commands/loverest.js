const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: "lovetest",
  version: "6.0.0",
  permission: 0,
  credits: "EMon-BHai",
  prefix: 'awto',
  description: "Check your love tast % and chances of a successful love relationship!",
  category: "Fun",
  usages: ["lovetest [your_name] [partner_name]"],
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  try {
    if (args.length !== 2) {
      api.sendMessage("•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\nlove test করার জন্য আপনার নামের সাথে আপনার Girl friend এর নাম টি লিখে দিন\n\n•┄┅════❁🌺❁════┅┄•", event.threadID, event.messageID);
      return;
    }

    const [yourName, partnerName] = args;
    const compatibilityScore = calculateCompatibility(yourName, partnerName);
    const compatibilityMessage = getCompatibilityMessage(compatibilityScore);
    const additionalInfo = getAdditionalInfo(compatibilityScore);
    const passionLevel = getPassionLevel(compatibilityScore);
    const commitmentLevel = getCommitmentLevel(compatibilityScore);
    const communicationLevel = getCommunicationLevel(compatibilityScore);
    const humorLevel = getHumorLevel(compatibilityScore);
    const trustLevel = getTrustLevel(compatibilityScore);
    const emotionalIntimacy = getEmotionalIntimacy(compatibilityScore);
    const sharedValues = getSharedValues(compatibilityScore);
    const growthPotential = getGrowthPotential(compatibilityScore);

    const resultMessage = `╭•┄┅════❁🌺❁════┅┄•╮\n _𝐓𝐇𝐄 𝐑𝐄𝐀𝐋𝐋 𝐋𝐎𝐕𝐄 𝐓𝐄𝐒𝐓_ \n╰•┄┅════❁🌺❁════┅┄•╯\n\n•—»✨${yourName} + ${partnerName}✨«—•\n\n${compatibilityMessage}\n\n${additionalInfo}\n\nPassion Level: ${passionLevel}\nCommitment Level: ${commitmentLevel}\nCommunication Level: ${communicationLevel}\nHumor Level: ${humorLevel}\nTrust Level: ${trustLevel}\nEmotional Intimacy: ${emotionalIntimacy}\nShared Values: ${sharedValues}\nGrowth Potential: ${growthPotential}\n\n༊༅༎⊱প্রিয় তুমার আর আমার ভালোবাসা: ${compatibilityScore}% সত্য🧡😽🙈༊༅༎⊱`;

    const response = await axios.get("https://i.imgur.com/a0xBMX5.gif", { responseType: 'arraybuffer' });
    fs.writeFileSync(__dirname + "/cache/lovecompatibility.gif", Buffer.from(response.data, "utf-8"));

    api.sendMessage(
      {
        body: resultMessage,
        attachment: fs.createReadStream(__dirname + "/cache/lovecompatibility.gif"),
      },
      event.threadID, event.messageID
    );

    fs.unlinkSync(__dirname + "/cache/lovecompatibility.gif");
  } catch (error) {
    console.error("Error checking love compatibility:", error);
    api.sendMessage("•┄┅════❁🌺❁════┅┄•\n\nআপনার এই নাম টি সঠিক নাহ 🙂\nসঠিক নাম লিখে love  test করে নিন\n\n•┄┅════❁🌺❁════┅┄•", event.threadID, event.messageID);
  }
};

function calculateCompatibility(name1, name2) {

  const combinedNames = (name1 + name2).toLowerCase();
  const uniqueLetters = [...new Set(combinedNames)];
  const compatibilityScore = uniqueLetters.length * 10;

  return Math.min(compatibilityScore, 100);
}

function getCompatibilityMessage(score) {
  if (score >= 80) {
    return "_༊༅༎⊱তোমার ভালোবাসায়༊༅༎⊱\n༊༅༎⊱ আমি সীমাবদ্ধ প্রিয়༊༅༎⊱🥰🌸  _༊༅༎⊱তুমি রাখতে জানলে༊༅༎⊱༊༅༎⊱ আমি থাকতে বাধ্য༊༅༎⊱༏༏༅🥰❤️༊༅༎⊱দোয়া করি তুমার আর আমার ভালোবাসা সারাজীবন থাকুক༊༅༎⊱🤲❤️🌸\n🌺✨༊༅༎⊱আল্লাহ তুমি আমাদের দুজনের ভালোবাসা পবিত্র ও হালাল করে তোলার জন্য তৌফিক দান করো༊༅༎⊱💜😌🤲";
  } 
else if (score >= 60) {
    return "💑 Your love is strong and promising!";
  } else if (score >= 40) {
    return "🤔 There are some challenges, but love can conquer all!";
  } else {
    return "💔 Keep the faith, love has its ups and downs!";
  }
}

function getAdditionalInfo(score) {
  if (score >= 80) {
    return "✨✨✨✨✨✨✨✨✨✨✨✨";
  } else if (score >= 60) {
    return "💖 Communication is key to maintaining a healthy relationship.";
  } else if (score >= 40) {
    return "🔍 Understanding each other's differences is crucial.";
  } else {
    return "🌧️ Every storm in a relationship makes you stronger together.";
  }
}

function getPassionLevel(score) {
  if (score >= 80) {
    return "🙈🙈🙈🙈🙈🙈🙈🙈🙈🙈";
  } else if (score >= 60) {
    return "💓 Sincere and genuine affection.";
  } else if (score >= 40) {
    return "🌹 Steady and growing love.";
  } else {
    return "❤️ Love that withstands the tests of time.";
  }
}

function getCommitmentLevel(score) {
  if (score >= 80) {
    return "❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️";
  } else if (score >= 60) {
    return "🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍";
  } else if (score >= 40) {
    return "🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤";
  } else {
    return "⏳ Committed to facing challenges together.";
  }
}

function getCommunicationLevel(score) {
  if (score >= 80) {
    return "🫶🫶🫶🫶🫶🫶🫶";
  } else if (score >= 60) {
    return  "💬 Good communication, always express your feelings.";
  } else if (score >= 40) {
    return "🤐 Sometimes struggles with communication, work on expressing yourselves.";
  } else {
    return "🔇 Communication is a bit challenging, but there's room for improvement.";
  }
}

function getHumorLevel(score) {
  if (score >= 80) {
    return "😘😘😘😘😘😘😘😘😘";
  } else if (score >= 60) {
    return "😊 Share a good sense of humor, keep making each other laugh.";
  } else if (score >= 40) {
    return "😐 Humor may differ, find common ground and enjoy laughter together.";
  } else {
    return "😕 Humor can be a challenge, but find joy in other aspects of your relationship.";
  }
}

function getTrustLevel(score) {
  if (score >= 80) {
    return "🤍🤍🤍🤍🤍🤍🤍🤍🤍🤍";
  } else if (score >= 60) {
    return "🤔 Build trust by being honest and transparent with each other.";
  } else if (score >= 40) {
    return "🔍 Trust is a work in progress, focus on building a solid foundation.";
  } else {
    return "🚫 Trust may be a challenge, but with effort, you can overcome doubts.";
  }
}

function getEmotionalIntimacy(score) {
  if (score >= 80) {
    return "🙊🙊🙊🙊🙊🙊🙊🙊🙊🙊";
  } else if (score >= 60) {
    return "💗 Growing emotional intimacy, share your vulnerabilities and joys.";
  } else if (score >= 40) {
    return "💔 Emotional intimacy needs nurturing, open up to each other to strengthen it.";
  } else {
    return "💧 Emotional intimacy may require more effort, but it's worth building.";
  }
}

function getSharedValues(score) {
  if (score >= 80) {
    return "🤗🤗🤗🤗🤗🤗🤗🤗🤗";
  } else if (score >= 60) {
    return "💙💙💙💙💙💙💙💙💙💙";
  } else if (score >= 40) {
    return "🔄 Different values, find common ground and celebrate your differences.";
  } else {
    return "❓ Shared values might need exploration and discussion for a stronger connection.";
  }
}

function getGrowthPotential(score) {
  if (score >= 80) {
    return "🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤.";
  } else if (score >= 60) {
    return "🚀 Significant potential for growth, support each other's aspirations.";
  } else if (score >= 40) {
    return "🌧️ Some challenges in growth, work together to overcome obstacles.";
  } else {
    return "🔒 Growth potential may require focused efforts, but it's achievable.";
  }
}
