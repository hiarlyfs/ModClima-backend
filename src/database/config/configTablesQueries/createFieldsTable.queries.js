const enablePostgis =
  'CREATE EXTENSION IF NOT EXISTS postgis; CREATE EXTENSION IF NOT EXISTS postgis_topology;';

const createFieldsTable = `CREATE TABLE IF NOT EXISTS fields (
  id serial, 
  code bigint NOT NULL UNIQUE,
  coordinates GEOGRAPHY(Point),
  PRIMARY KEY (id)
  );`;

module.exports = { createFieldsTable, enablePostgis };
