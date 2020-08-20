const { Pool } = require('pg');

const dbClient = new Pool({
  connectionString: 'postgres://hiarlydb:knight8835@127.0.0.1/modclima',
});

module.exports = dbClient;
