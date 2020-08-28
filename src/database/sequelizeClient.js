require('dotenv').config({
  path: process.env.MODE === 'TEST' ? '.env.test' : '.env',
});

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize;
