const WebSocket = require('ws');

const clients = {};

const createServer = (server) => {
  const wss = new WebSocket.Server({ server });
  console.log(`WebSocket server is running on port: ${wss.address().port}`);
  return wss;
};

module.exports = { clients, createServer };
