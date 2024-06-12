
module.exports = {
  config: {
    name: "gpt",
    version: "2.0.1",
    permission: 0,
    credits: "Emon",
    description: "",
    prefix: false,
    category: "gpt",
    usages: "query",
    cooldowns: 5,
    dependencies: {
      "nayan-server": "Emon-Server"
    }
  },

  run: async function({ api, event }) {
    const axios = require("axios");
    const prompt = event.body || "Hello, GPT!";
    
    try {
      const res = await axios.get(`http://de1.bot-hosting.net:20149/emon/gpt?text=${prompt}`);
      
      const data = res.data;
      const answer = data.gpt;
      
      await api.sendMessage(answer, event.threadID);

    } catch (error) {
      console.error("Error while processing GPT request:", error);
    }
  }
};
