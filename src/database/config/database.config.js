require('dotenv').config({
  path: process.env.MODE === 'TEST' ? '.env.test' : '.env',
});
const { Client } = require('pg');
const createTables = require('./createTables');

const client = new Client({
  connectionString: process.env.DB_STRING_CONNECTION,
});

(async () => {
  try {
    await client.connect();
    await createTables(client);
  } catch (err) {
    console.log(err);
  } finally {
    await client.end();
  }
})();
