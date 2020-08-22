require('dotenv').config({
  path: process.env.MODE === 'TEST' ? '.env.test' : '.env',
});

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_STRING_CONNECTION);

module.exports = sequelize;
