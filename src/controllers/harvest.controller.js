const {
  saveHarvestInDatabase,
  searchHarvests,
} = require('../database/useCases/harvests.useCase');

const createHarvest = async (req, res) => {
  try {
    const harvest = await saveHarvestInDatabase(req.body);
    return res.send({ harvest });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: 'An error occured trying to create a harvest' });
  }
};

const getHarvest = async (req, res) => {
  const reqParamsKeys = Object.keys(req.query);
  try {
    const harvests = await searchHarvests(reqParamsKeys.join('_'), req.query);
    return res.send({ harvests });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: 'An error occured trying to get a harvest' });
  }
};

module.exports = { createHarvest, getHarvest };
