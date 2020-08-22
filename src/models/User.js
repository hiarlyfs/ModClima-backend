const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelizeClient');

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
  },
  { sequelize, modelName: 'user' }
);

module.exports = User;
