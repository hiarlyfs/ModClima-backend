/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const MillsHarvests = require('../../models/Mills_Harvests');
const sequelize = require('../sequelizeClient');

async function saveMillsHarvestRelationships(harvestIds, millId) {
  const transaction = await sequelize.transaction();
  try {
    for (const harvestId of harvestIds) {
      await MillsHarvests.create({ harvestId, millId }, { transaction });
    }

    await transaction.commit();
  } catch (err) {
    console.log(err);
    await transaction.rollback();
    throw new Error(
      'An error occured trying to save the relationship between mills and harvests',
    );
  }
}

module.exports = { saveMillsHarvestRelationships };
