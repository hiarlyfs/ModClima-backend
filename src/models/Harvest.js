const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelizeClient');

const Harvest = sequelize.define(
  'Harvest',
  {
    code: { type: DataTypes.BIGINT, allowNull: false, unique: true },
    start: { type: DataTypes.DATEONLY, allowNull: false },
    end: { type: DataTypes.DATEONLY, allowNull: false },
  },
  {
    tableName: 'harvests',
  },
);

module.exports = Harvest;
