const { Op } = require('sequelize');
const sequelize = require('../../sequelizeClient');
const Harvest = require('../../../models/Harvest');
const Farm = require('../../../models/Farm');
const Field = require('../../../models/Field');
const serializeHarvests = require('../utils/serializeMultipleEntities');

const SearchByCode = function () {
  this.getHarvests = async ({ code }) => {
    try {
      const harvest = await Harvest.findOne({
        where: { code },
        include: [{model: Farm, as: 'farms', include: [{model: Field, as: 'fields' }] }],
      });

      return harvest.toJSON();
    } catch (err) {
      console.log(err);
      throw new Error('An error occurred trying to search a harvest by code');
    }
  };
};

const SearchByStartAndEndDate = function () {
  this.getHarvests = async ({ start, end }) => {
    const transaction = await sequelize.transaction();
    try {
      const harvests = await Harvest.findAll({
        where: {
          [Op.and]: [{ start }, { end }],
        },
        include: [{model: Farm, as: 'farms', include: [{model: Field, as: 'fields' }] }],
        transaction,
      });

      await transaction.commit();

      const harvestsSerialized = serializeHarvests(harvests);
      return harvestsSerialized;
    } catch (err) {
      console.log(err);
      await transaction.rollback();
      throw new Error(
        'An error occurred trying to search the harvest by start and end date.',
      );
    }
  };
};

const selectSearchHarvestStrategy = (fieldName) => {
  const strategies = {
    code: new SearchByCode(),
    start_end: new SearchByStartAndEndDate(),
  };

  return strategies[fieldName];
};

module.exports = { selectSearchHarvestStrategy };
