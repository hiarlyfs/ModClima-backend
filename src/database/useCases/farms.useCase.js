const Farm = require('../../models/Farm');
const FarmField = require('../../models/FarmsXFields');
const sequelize = require('../sequelizeClient');
const selectSearchFarmStrategy = require('./strategies/searchFarms.strategies');

async function saveFarmInDatabase({ code, name, fields }) {
  const transaction = await sequelize.transaction();
  try {
    const farm = await (
      await Farm.create({ code, name }, { transaction, include: 'fields' })
    ).toJSON();

    if (fields) {
      // eslint-disable-next-line no-restricted-syntax
      for (const fieldId of fields) {
        // eslint-disable-next-line no-await-in-loop
        await FarmField.create({ farmId: farm.id, fieldId }, { transaction });
      }
    }

    await transaction.commit();
    return farm;
  } catch (err) {
    console.log(err);
    transaction.rollback();
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
