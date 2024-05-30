const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, 'response.json');

let simResponses = {};

module.exports.config = {
  name: 'sim',
  version: '1.0.0',
  hasPermssion: 0,
  credits: 'Rickciel',
  usePrefix: false,
  description: 'Talk with simsimi',
  commandCategory: 'Fun',
  usages: '[sim <input] [teach <input> - <response> / <input>]',
  cooldowns: 3
};

module.exports.run = ({ api, event, args }) => {
  const arg = args.join(' ').trim();

  if (!arg) {
    return api.sendMessage('Hi there', event.threadID);
  }

  if (arg.startsWith('teach ')) {
    const teachArgs = arg.slice(6).split(' - ');

    if (teachArgs.length === 2) {
      const input = teachArgs[0].trim().toLowerCase();
      const response = teachArgs[1].trim();

      if (!simResponses[input]) {
        simResponses[input] = [];
      }

      if (Array.isArray(simResponses[input])) {
        simResponses[input].push(response);
        saveSimResponses();

        const count = simResponses[input].length;
        const times = count === 1 ? 'time' : 'times';
        return api.sendMessage(`i learned how to respond to "${input}" with "${response}" for ${count} ${times}.`, event.threadID);
      } else {
        return api.sendMessage('An error occurred while teaching Sim.', event.threadID);
      }
    }
  } else {
    const responseArray = simResponses[arg.toLowerCase()];
    if (responseArray && responseArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * responseArray.length);
      const response = responseArray[randomIndex];
      return api.sendMessage(response, event.threadID);
    }
  }

  return api.sendMessage('i dont know know how to respond to that please teach me.', event.threadID);
};

function saveSimResponses() {
  const data = {
    responses: simResponses
  };

  fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2), 'utf-8');
}

function loadSimResponses() {
  try {
    const rawData = fs.readFileSync(jsonFilePath, 'utf-8');
    const data = JSON.parse(rawData);
    simResponses = data.responses || {};

  
    for (const input in simResponses) {
      if (typeof simResponses[input] === 'string') {
        simResponses[input] = [simResponses[input]];
      }
    }
  } catch (error) {
    
  }
}


loadSimResponses();
