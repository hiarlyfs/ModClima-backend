const express = require('express');
const cors = require('cors');
const routes = require('./routes/root.routes');
const dbClient = require('./config/database.config.js');
const createTables = require('./database/config/createTables');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

createTables(dbClient);

module.exports = app;
