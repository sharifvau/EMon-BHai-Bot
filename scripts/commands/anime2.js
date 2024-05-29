module.exports.config = {
  name: "anime2",
  version: "1.2.0",
  permssion: 0,
  credits: "Keyl",
  description: "random images of anime",
  prefix:'true',
  category: "Hình Ảnh",
  usages: "",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
}

module.exports.handleReply = async ({ api, event, handleReply }) => {
  const axios = require("axios");
const { threadID, messageID, body } = event;
    switch(handleReply.type) {
        case "reply": {
            switch(body) {

					case "1": {
                const res = await axios.get("https://APIURL.miraiofficials123.repl.co");
//lấy data trên web api
const data = res.data.url;
//tải ảnh xuống
let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
            api.unsendMessage(handleReply.messageID);
          return api.sendMessage({body: ` Anya <3`, attachment: download}, threadID, messageID);
          };
			break;

        case "2": {
                const res = await axios.get("https://apikanna.ngochan6666.repl.co");
//lấy data trên web api
const data = res.data.data;
//tải ảnh xuống
let download2 = (await axios.get(data, {
			responseType: "stream"
		})).data;
    api.unsendMessage(handleReply.messageID);
  
