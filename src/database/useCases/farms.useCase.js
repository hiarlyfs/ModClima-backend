const dbClient = require('../database.client');
const { querySaveRelationFarmField } = require('./utils/farms.utils');
const selectSearchFarmStrategy = require('./strategies/searchFarms.strategies');

async function saveFarmInDatabase({ code, name, fields }) {
  try {
    const data = await dbClient.query(
      'INSERT INTO farms(code, name) VALUES ($1, $2) RETURNING id;',
      [code, name]
    );

    const farmId = data.rows[0].id;

    if (fields) {
      await dbClient.query(querySaveRelationFarmField(fields, farmId));
    }

    return {
      id: farmId,
      code,
      name,
      fields,
    };
  } catch (err) {
    console.log(err);
    throw new Error('An erro ocurred trying to save in the database');
  }
}

// Seach Farm using Strategy Pattern -> avoid big conditional structures

const SearchFarm = function () {
  this.searchDb = '';
};

SearchFarm.prototype = {
  setSearchMethod(searchMethod) {
    this.searchMethod = searchMethod;
  },

  async getFarm(fieldValue) {
    const farms = await this.searchMethod.getFarm(fieldValue);
    return farms;
  },
};

async function searchFarms(fieldName, fieldValue) {
  try {
    const searchFarm = new SearchFarm();
    const searchMethod = selectSearchFarmStrategy(fieldName);

    searchFarm.setSearchMethod(searchMethod);
    const data = await searchFarm.getFarm(fieldValue);
    return data;
  } catch (err) {
    console.log(err);
    throw new Error('An erro ocurred while trying to get farm in the database');
  }
}

module.exports = {
  saveFarmInDatabase,
  searchFarms,
};
