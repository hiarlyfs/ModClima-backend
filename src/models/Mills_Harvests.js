const sequelize = require('../database/sequelizeClient');
const Mill = require('./Mill');
const Harvest = require('./Harvest');

const MillsHarvests = sequelize.define('mills_harvests', {});

Mill.belongsToMany(Harvest, {
  as: 'harvests',
  foreignKey: 'millId',
  through: MillsHarvests,
});

Harvest.belongsToMany(Mill, {
  as: 'mills',
  foreignKey: 'harvestId',
  through: MillsHarvests,
});

module.exports = MillsHarvests;
