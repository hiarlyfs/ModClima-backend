const {
  saveFarmInDatabase,
  searchFarms,
} = require('../database/useCases/farms.useCase');
const sendNewEntity = require('../websocket/sendNewEntity');

async function createFarms(req, res) {
  try {
    const data = await saveFarmInDatabase(req.body);
    sendNewEntity({ entityName: 'farm', entityData: data });
    return res.send({ data });
  } catch (err) {
    return res.status(400).send({ error: 'An error occurred' });
  }
}

async function getFarms(req, res) {
  try {
    const fieldName = Object.keys(req.query)[0];
    const fieldValue = req.query[fieldName];
    const farms = await searchFarms(fieldName, fieldValue);
    return Array.isArray(farms)
      ? res.send({ farms })
      : res.send({ farms: [farms] });
  } catch (err) {
    return res.status(400).send({ error: 'An error occurred' });
  }
}

module.exports = { createFarms, getFarms };
