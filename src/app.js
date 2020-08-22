const express = require('express');
const cors = require('cors');
const routes = require('./routes/root.routes');
const sequelize = require('./database/sequelizeClient');
const Field = require('./models/Field');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;

// CREATE EXTENSION IF NOT EXISTS postgis; CREATE EXTENSION IF NOT EXISTS postgis_topology;
