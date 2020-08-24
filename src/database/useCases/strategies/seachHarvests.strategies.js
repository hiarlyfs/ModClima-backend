const Harvest = require('../../../models/Harvest');

const SearchByCode = function () {
  this.getHarvests = async function (code) {
    try {
      const harvest = await Harvest.findOne({
        where: { code },
        include: 'farms',
      });

      return harvest.toJSON();
    } catch (err) {
      console.log(err);
      throw new Error('An error occurred trying to search a harvest by code');
    }
  };
};

// TODO: Search method by start and end date

const selectSearchHarvestStrategy = (fieldName) => {
  const strategies = { code: new SearchByCode() };

  return strategies[fieldName];
};

module.exports = { selectSearchHarvestStrategy };
