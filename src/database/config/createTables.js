const {
  createFieldsTable,
  enablePostgis,
} = require('./configTablesQueries/createFieldsTable.queries');

const {
  createFarms,
  createFarmXFields,
} = require('./configTablesQueries/createFarmsTable.queries');

const {
  createHarvestsXFarms,
  createHarvests,
} = require('./configTablesQueries/createHarvestsTable.queries');

const {
  createMills,
  createMillsXHarvests,
} = require('./configTablesQueries/createMillsTable.queries');

async function createTables(dbClient) {
  try {
    await dbClient.query(enablePostgis);
    await dbClient.query(createFieldsTable);
    await dbClient.query(createFarms);
    await dbClient.query(createFarmXFields);
    await dbClient.query(createHarvests);
    await dbClient.query(createHarvestsXFarms);
    await dbClient.query(createMills);
    await dbClient.query(createMillsXHarvests);
  } catch (err) {
    console.lg(err);
  } finally {
    await dbClient.end();
  }
}

module.exports = createTables;
