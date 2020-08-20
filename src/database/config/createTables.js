const {
  createFieldsTable,
  enablePostgis,
} = require('./configQueries/createFields.queries');

async function createTables(dbClient) {
  await dbClient.connect();
  await dbClient.query(enablePostgis);
  await dbClient.query(createFieldsTable);
  await dbClient.end();
}

module.exports = createTables;
