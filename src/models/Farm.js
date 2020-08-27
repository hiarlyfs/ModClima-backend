const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelizeClient');

const Farm = sequelize.define(
  'farm',
  {
    code: { type: DataTypes.STRING, allowNull: false, unique: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: 'farms',
  },
);

module.exports = Farm;
