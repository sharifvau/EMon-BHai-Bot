module.exports.config = {
    name: "tec",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "EMon-BHai",
    prefix: 'awto',
    description: "Teach to sim",
    category: "user",
    usages: "tec [ask] => [answer]",
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    let { threadID, messageID } = event;
    const input = args.join(" ").split("=>");

    if (input.length < 2) {
        if (args.length === 0) {
            return api.sendMessage("Usage: teach [ask] => [answer]", threadID);
        } else if (args.join(" ").includes("=>")) {
            return api.sendMessage("Please provide both a question and an answer.", threadID);
        } else {
            return api.sendMessage("Please use '=>' character to separate the question and answer.", threadID);
        }
    }

    const teachQuery = input[0].trim();
    const ansQuery = input[1].trim();

    try {

        const response = await axios.get(`http://fi1.bot-hosting.net:5980/sim?teach=${teachQuery}&ans=${ansQuery}`);

        if (response.data && response.data.message) {
            api.sendMessage(response.data.message, threadID, messageID);
        } else {
            api.sendMessage("An error occurred while fetching the data.", threadID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data.", threadID);
    }
};
