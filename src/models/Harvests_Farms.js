const Harvest = require('./Harvest');
const Farm = require('./Farm');
const sequelize = require('../database/sequelizeClient');

const HarvestsFarms = sequelize.define('harvests_farms', {});

Harvest.belongsToMany(Farm, {
  as: 'farms',
  foreignKey: 'harvestId',
  through: HarvestsFarms,
});

Farm.belongsToMany(Harvest, {
  as: 'harvests',
  foreignKey: 'farmdId',
  through: HarvestsFarms,
});

module.exports = HarvestsFarms;
