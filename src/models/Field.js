const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelizeClient');

const Field = sequelize.define(
  'field',
  {
    code: { type: DataTypes.STRING, allowNull: false, unique: true },
    coordinates: { type: DataTypes.GEOMETRY('POINT'), allowFalse: null },
  },
  {
    tableName: 'fields',
  },
);

module.exports = Field;
