const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelizeClient');

const Field = sequelize.define('field', {
  code: { type: DataTypes.BIGINT, allowNull: false, unique: true },
  coordinates: { type: DataTypes.GEOMETRY('POINT'), allowFalse: null },
});

module.exports = Field;
