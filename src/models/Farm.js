const { DataTypes } = require('sequelize');
const Field = require('./Field');
const sequelize = require('../database/sequelizeClient');

const Farm = sequelize.define(
  'farm',
  {
    code: { type: DataTypes.BIGINT, allowNull: false, unique: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: 'farms',
  },
);

module.exports = Farm;
