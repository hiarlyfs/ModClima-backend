const WebSocket = require('ws');

const clients = {};

const wss = new WebSocket.Server({ port: 3030 });

module.exports = { wss, clients };
