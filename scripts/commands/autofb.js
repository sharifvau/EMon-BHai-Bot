const axios = require("axios");
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");

module.exports.config = {
  name: "autofb",
  version: "1.0.0",
  permission: 2,
  credits: "Emon",
  prefix: 'awto',
  description: "Automatically create a Facebook account and send the details to the user",
  category: "admin",
  cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
  let { threadID, messageID } = event;

  try {
    // Delay for a short period before making the request
    await delay(3000); // Adjust the delay time as needed

    // Make a request to the auto-create Facebook API
    const response = await axios.post("https://auto-gen-fb.replit.app/create");
    const data = response.data;

    if (data.message === "Successfully created Facebook account!") {
      // Extract account details from the response
      const { email, password, access_token } = data;

      // Send the account details to the user
      const message = `Facebook account created successfully!\nEmail: ${email}\nPassword: ${password}\nAccess Token: ${access_token}`;
      api.sendMessage(message, threadID);

    } else {
      // Log detailed error information
      console.error("Error creating Facebook account:", data);
      api.sendMessage("Failed to create Facebook account. Please try again later.", threadID, messageID);
    }

  } catch (error) {
    // Log detailed error information
    console.error("Error:", error);
    api.sendMessage("An error occurred while processing your request. Please try again later.", threadID, messageID);
  }
};

// Function to create a delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
