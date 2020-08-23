const Farm = require('./Farm');
const Field = require('./Field');
const sequelize = require('../database/sequelizeClient');

const FarmsFields = sequelize.define('farms_fields', {});
Farm.belongsToMany(Field, {
  as: 'fields',
  foreignKey: 'farmId',
  through: FarmsFields,
});
Field.belongsToMany(Farm, {
  as: 'farms',
  foreignKey: 'fieldId',
  through: FarmsFields,
});

module.exports = FarmsFields;
