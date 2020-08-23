const FarmField = require('../../models/Farms_Fields');
const sequelize = require('../sequelizeClient');

async function saveRelationships(fieldsId, farmId) {
  const transaction = await sequelize.transaction();
  console.log('Farm id', farmId);
  try {
    // eslint-disable-next-line no-restricted-syntax
    for (const fieldId of fieldsId) {
      // eslint-disable-next-line no-await-in-loop
      await FarmField.create({ farmId, fieldId }, { transaction });
    }
    await transaction.commit();
  } catch (err) {
    console.log(err);
    transaction.rollback();
    throw new Error(
      'An error occurred trying to save the relationship in the table farms_fields',
    );
  }
}

module.exports = { saveRelationships };
