const Harvest = require('../../models/Harvest');
const sequelize = require('../sequelizeClient');
const { saveHarvestsFarmsRelationships } = require('./harvestsFarms.useCase');
const {
  selectSearchHarvestStrategy,
} = require('./strategies/seachHarvests.strategies.js');

// eslint-disable-next-line object-curly-newline
async function saveHarvestInDatabase({ code, start, end, farmIds }) {
  const transaction = await sequelize.transaction();
  try {
    const harvest = await Harvest.create({ code, start, end }, { transaction });

    await transaction.commit();

    // The relationship has to be save in the table harvests_farms
    // after save the harvest in the harvest table. This void the harvestId
    // don't be found in the harvest table.
    if (farmIds) await saveHarvestsFarmsRelationships(farmIds, harvest.id);
    return harvest.toJSON();
  } catch (err) {
    console.log(err);
    await transaction.rollback();
    throw new Error(
      'An error occured trying to save a harvest in the database',
    );
  }
}

const SearchHarvests = function () {};

SearchHarvests.prototype = {
  setSearchMethod(searchMethod) {
    this.searchMethod = searchMethod;
  },

  async getHarvests(fieldValue) {
    const harvests = await this.searchMethod.getHarvests(fieldValue);
    return harvests;
  },
};

async function searchHarvests(fieldName, fieldValue) {
  try {
    const searchHarvest = new SearchHarvests();
    const searchMethod = selectSearchHarvestStrategy(fieldName);

    searchHarvest.setSearchMethod(searchMethod);
    const harvests = await searchHarvest.getHarvests(fieldValue);

    return harvests;
  } catch (err) {
    console.log(err);
    throw new Error('An error occured while trying to search harvests');
  }
}

module.exports = { saveHarvestInDatabase, searchHarvests };
