const WebSocket = require('ws');

const clients = {};

const wss = new WebSocket.Server({ port: 3030 });
console.log(`Websocket server is running on port: ${wss.address().port}`);

module.exports = { wss, clients };
