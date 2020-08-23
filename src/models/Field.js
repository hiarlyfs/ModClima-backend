const { DataTypes } = require('sequelize');
const Farm = require('./Farm');
const sequelize = require('../database/sequelizeClient');

const Field = sequelize.define(
  'field',
  {
    code: { type: DataTypes.BIGINT, allowNull: false, unique: true },
    coordinates: { type: DataTypes.GEOMETRY('POINT'), allowFalse: null },
  },
  {
    tableName: 'fields',
  },
);

module.exports = Field;
