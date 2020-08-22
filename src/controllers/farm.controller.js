const {
  saveFarmInDatabase,
  searchFarms,
} = require('../database/useCases/farms.useCase');

async function createFarms(req, res) {
  const { code, name, fields } = req.body;
  try {
    const data = await saveFarmInDatabase({ code, name, fields });
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
    return res.send({ farms });
  } catch (err) {
    return res.status(400).send({ error: 'An error occurred' });
  }
}

module.exports = { createFarms, getFarms };
