const {
  saveHarvestInDatabase,
  searchHarvests,
} = require('../database/useCases/harvests.useCase');
const sendNewEntity = require('../websocket/sendNewEntity');

const createHarvest = async (req, res) => {
  try {
    const harvest = await saveHarvestInDatabase(req.body);
    sendNewEntity({ entityName: 'harvest', entityData: harvest });
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
    return Array.isArray(harvests)
      ? res.send({ harvests })
      : res.send({ harvests: [harvests] });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ error: 'An error occured trying to get a harvest' });
  }
};

module.exports = { createHarvest, getHarvest };
