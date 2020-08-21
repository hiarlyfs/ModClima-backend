const createHarvests = `CREATE TABLE IF NOT EXISTS harvests (
  id serial,
  code bigint NOT NULL UNIQUE,
  start_date date NOT NULL,
  final_date date NOT NULL,
  PRIMARY KEY (id)
  );`;

const createHarvestsXFarms = `CREATE TABLE IF NOT EXISTS harvestsxfarms(
  IdHarvest INT NOT NULL,
  IdFarm INT NOT NULL,
  CONSTRAINT PK_harvestsxfarms PRIMARY KEY (IdHarvest, IdFarm),
  CONSTRAINT FK_harvestsxfarms2 FOREIGN KEY (IdHarvest)
                          REFERENCES harvests (id),
  CONSTRAINT FK_harvestsxfarms3 FOREIGN KEY (IdFarm)
                          REFERENCES farms (id)
  );`;

module.exports = { createHarvests, createHarvestsXFarms };
