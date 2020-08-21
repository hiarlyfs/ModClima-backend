const {
  saveFieldInDatabase,
  searchFieldByCode,
} = require('../../database/useCases/fields.useCase');

async function createField(req, res) {
  const { code, coordinates } = req.body;
  try {
    const data = await saveFieldInDatabase({ code, coordinates });
    return res.send(data);
  } catch (err) {
    return res.status(400).send({ error: 'An error occurred' });
  }
}

async function getField(req, res) {
  const { code } = req.query;
  try {
    const field = await searchFieldByCode(code);
    return res.send({ field });
  } catch (err) {
    return res.status(400).send({ err });
  }
}

module.exports = { createField, getField };
