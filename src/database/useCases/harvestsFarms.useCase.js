const HarvestsFarms = require('../../models/Harvests_Farms');
const sequelize = require('../sequelizeClient');

async function saveHarvestsFarmsRelationships(farmdIds, harvestId) {
  const transaction = await sequelize.transaction();

  try {
    // eslint-disable-next-line no-restricted-syntax
    for (const farmdId of farmdIds) {
      // eslint-disable-next-line no-await-in-loop
      await HarvestsFarms.create({ farmdId, harvestId }, { transaction });
    }

    await transaction.commit();
  } catch (err) {
    console.log(err);
    await transaction.rollback();
    throw new Error(
      'An error ocurred trying to save the harvests_farms relationship',
    );
  }
}

module.exports = { saveHarvestsFarmsRelationships };
