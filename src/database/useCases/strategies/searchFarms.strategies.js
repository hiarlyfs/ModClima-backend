const Farm = require('../../../models/Farm');
const Field = require('../../../models/Field');

const SearchByCode = function () {
  this.getFarm = async function (code) {
    try {
      const farms = await Farm.findOne({
        where: { code },
      });

      console.log(farms);
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
      const farms = await Farm.findOne({
        where: { name },
      });
      console.log(farms);
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
