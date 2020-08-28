const express = require('express');
const cors = require('cors');
const routes = require('./routes/root.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;

// CREATE EXTENSION IF NOT EXISTS postgis; CREATE EXTENSION IF NOT EXISTS postgis_topology;
