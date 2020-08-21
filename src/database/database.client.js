require('dotenv').config({
  path: process.env.MODE === 'TEST' ? '.env.test' : '.env',
});

const { Pool } = require('pg');

const dbClient = new Pool({
  connectionString: process.env.DB_STRING_CONNECTION,
});
dbClient.connect();

module.exports = dbClient;
