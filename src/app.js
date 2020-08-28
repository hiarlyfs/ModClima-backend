const express = require('express');
const cors = require('cors');
const routes = require('./routes/root.routes');

const { wss } = require('./websocket/wsServer');
const { addClient, removeClient } = require('./websocket/utils');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

wss.on('connection', (client) => {
  addClient(client);
  client.on('close', () => {
    removeClient(client);
  });
});

module.exports = app;

// CREATE EXTENSION IF NOT EXISTS postgis; CREATE EXTENSION IF NOT EXISTS postgis_topology;
