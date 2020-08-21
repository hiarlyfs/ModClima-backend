const {
  createFieldsTable,
  enablePostgis,
} = require('./configQueries/createFields.queries');

const {
  createFarms,
  createFarmXFields,
} = require('./configQueries/createFarms.queries');

const {
  createHarvestsXFarms,
  createHarvests,
} = require('./configQueries/createHarvests.queries');

async function createTables(dbClient) {
  await dbClient.connect();
  await dbClient.query(enablePostgis);
  await dbClient.query(createFieldsTable);
  await dbClient.query(createFarms);
  await dbClient.query(createFarmXFields);
  await dbClient.query(createHarvests);
  await dbClient.query(createHarvestsXFarms);
  await dbClient.end();
}

module.exports = createTables;
