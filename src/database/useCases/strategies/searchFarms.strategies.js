const dbClient = require('../../database.client');

const SearchByCode = function () {
  this.getFarm = async function (code) {
    try {
      const farm = await dbClient.query('SELECT * FROM farms WHERE code = $1', [
        code,
      ]);

      return farm.rows[0];
    } catch (err) {
      console.log(err);
      throw new Error(
        'An erro ocurred while trying to search in the database by code'
      );
    }
  };
};

const SearchByName = function () {
  this.getFarm = async function (name) {
    try {
      const farm = await dbClient.query(
        'SELECT * FROM farms WHERE LOWER(farms.name) LIKE $1;',
        [`%${String(name).toLowerCase()}%`]
      );

      return farm.rows;
    } catch (err) {
      console.log(err);
      throw new Error(
        'An erro ocurred while trying to search in the database by name'
      );
    }
  };
};

function selectStrategy(fieldName) {
  const strategies = {
    name: new SearchByName(),
    code: new SearchByCode(),
  };

  return strategies[fieldName];
}

module.exports = selectStrategy;
