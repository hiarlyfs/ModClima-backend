const enablePostgis =
  'CREATE EXTENSION IF NOT EXISTS postgis; CREATE EXTENSION IF NOT EXISTS postgis_topology;';

const createFieldsTable = `CREATE TABLE IF NOT EXISTS fields (
  code serial NOT NULL, 
  coordinates GEOGRAPHY(Point),
  PRIMARY KEY (code)
  );`;

module.exports = { createFieldsTable, enablePostgis };
