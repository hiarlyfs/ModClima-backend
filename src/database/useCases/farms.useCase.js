const Farm = require('../../models/Farm');
const FarmField = require('../../models/FarmsXFields');
const { searchFieldByCode } = require('./fields.useCase');
const sequelize = require('../sequelizeClient');
const selectSearchFarmStrategy = require('./strategies/searchFarms.strategies');

async function saveFarmInDatabase({ code, name, fields }) {
  const transaction = await sequelize.transaction();
  try {
    const farm = await (
      await Farm.create({ code, name }, { transaction })
    ).toJSON();

    await transaction.commit();

    // TODO: Salvar o relacionamento da tebale FarmsXFields
    if (fields) await FarmField.create({ farmId: farm.id, fieldId: 1 });

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
