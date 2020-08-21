const createMills = `CREATE TABLE IF NOT EXISTS mills (
  id serial,
  code bigint NOT NULL UNIQUE,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id)
  );`;

const createMillsXHarvests = `CREATE TABLE IF NOT EXISTS millsxharvests(
  IdMill INT NOT NULL,
  IdHarvest INT NOT NULL,
  CONSTRAINT PK_millsxharvests PRIMARY KEY (IdMill, IdHarvest),
  CONSTRAINT FK_millsxharvests2 FOREIGN KEY (IdMill)
                          REFERENCES mills (id),
  CONSTRAINT FK_millsxharvests3 FOREIGN KEY (IdHarvest)
                          REFERENCES harvests (id)
  );`;

module.exports = { createMills, createMillsXHarvests };
