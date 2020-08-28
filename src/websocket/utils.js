const { v4: uuid } = require('uuid');
const { clients } = require('./wsServer');

function broadcastData(data) {
  try {
    Object.values(clients).forEach((client) => {
      client.send(data);
    });
  } catch (err) {
    console.log(err);
  }
}

const addClient = (client) => {
  client.uuid = uuid();
  clients[client.uuid] = client;
  console.log(`New client connected: ${client.uuid}`);
};

const removeClient = (client) => {
  delete clients[client.uuid];
  console.log(`Client removed: ${client.uuid}`);
};

module.exports = { broadcastData, addClient, removeClient };
