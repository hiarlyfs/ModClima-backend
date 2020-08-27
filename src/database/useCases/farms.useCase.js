const Farm = require('../../models/Farm');
const { saveRelationships } = require('./farmsFields.useCase');
const sequelize = require('../sequelizeClient');
const selectSearchFarmStrategy = require('./strategies/searchFarms.strategies');

async function saveFarmInDatabase({ code, name, fieldIds }) {
  const transaction = await sequelize.transaction();
  try {
    const farm = await (
      await Farm.create({ code, name }, { transaction })
    ).toJSON();

    await transaction.commit();

    // The relationship has to be save in the table farms_fields
    // after save the farm in the farm table. This void the farmId don't
    // be found in the farm table.
    if (fieldIds) await saveRelationships(fieldIds, farm.id);
    return farm;
  } catch (err) {
    console.log(err);
    transaction.rollback();
    throw new Error('An erro ocurred trying to save in the database');
  }
}

// Seach Farm using Strategy Pattern -> avoid big conditional structures

const SearchFarm = function () {};

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
