const { Op } = require('sequelize');
const Mill = require('../../models/Mill');
const Farm = require('../../models/Farm');
const Harvest = require('../../models/Harvest');
const Field = require('../../models/Field');
const { saveMillsHarvestRelationships } = require('./millsHarvests.useCase');
const sequelize = require('../sequelizeClient');
const serializeMills = require('./utils/serializeMultipleEntities');

async function saveMillInDatabase({ name, harvestIds }) {
  const transaction = await sequelize.transaction();
  try {
    const mill = await Mill.create({ name }, { transaction });
    await transaction.commit();

    // The relationship has to be save in the table mills_harvests
    // after save the mill in the mill table. This void the millId don't
    // be found in the mill table.
    if (harvestIds) await saveMillsHarvestRelationships(harvestIds, mill.id);
    return mill.toJSON();
  } catch (err) {
    console.log(err);
    await transaction.rollback();
    throw new Error('An error occurred trying to save a mill in database');
  }
}

async function searchMillByName(name) {
  try {
    const mills = await Mill.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
	    include: [{model: Harvest, as: 'harvests', include: [{ model:Farm, as: 'farms', include: [{model: Field, as: 'fields'}] }]}],
    });

    const millsSerialized = serializeMills(mills);
    return millsSerialized;
  } catch (err) {
    console.log(err);
    throw new Error(
      'An error occured trying to search a mill by name in the database',
    );
  }
}

module.exports = { saveMillInDatabase, searchMillByName };
