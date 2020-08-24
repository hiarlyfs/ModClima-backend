const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelizeClient');

const Mill = sequelize.define(
  'Mill',
  {
    name: { type: DataTypes.STRING, allowNull: false },
  },
  { tableName: 'mills' },
);

module.exports = Mill;
