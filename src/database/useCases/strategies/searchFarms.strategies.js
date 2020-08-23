const { Op } = require('sequelize');
const Farm = require('../../../models/Farm');
const Field = require('../../../models/Field');

const SearchByCode = function () {
  this.getFarm = async function (code) {
    try {
      const farms = await Farm.findOne({
        where: { code },
        include: 'fields',
      });

      return farms.toJSON();
    } catch (err) {
      console.log(err);
      throw new Error(
        'An erro ocurred while trying to search in the database by code',
      );
    }
  };
};

const SearchByName = function () {
  this.getFarm = async function (name) {
    try {
      const farms = await Farm.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: 'fields',
      });
      const farmsSerialized = farms.map((farm) => farm.toJSON());
      return farmsSerialized;
    } catch (err) {
      console.log(err);
      throw new Error(
        'An erro ocurred while trying to search in the database by name',
      );
    }
  };
};

function selectStrategy(fieldName) {
  const strategies = {
    name: new SearchByName(),
    code: new SearchByCode(),
  };

  return strategies[fieldName];
}

module.exports = selectStrategy;
