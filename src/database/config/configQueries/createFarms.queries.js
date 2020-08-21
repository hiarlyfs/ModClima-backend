const createFarms = `CREATE TABLE IF NOT EXISTS farms (
  id serial NOT NULL,
  name varchar(255),
  PRIMARY KEY (id)
  );
  `;

const createFarmXFields = `CREATE TABLE IF NOT EXISTS farmsXfields(
  IdFarm INT NOT NULL,
  IdField INT NOT NULL,
  CONSTRAINT PK_FarmsXFields PRIMARY KEY (IdFarm, IdField),
  CONSTRAINT FK_FarmsXFields2 FOREIGN KEY (IdFarm)
                          REFERENCES farms (id),
  CONSTRAINT FK_FarmsXFields3 FOREIGN KEY (IdField)
                          REFERENCES fields (id)
  );
  `;

module.exports = { createFarms, createFarmXFields };
