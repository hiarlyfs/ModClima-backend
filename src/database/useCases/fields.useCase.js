const dbClient = require('../database.client');
const Field = require('../../models/Field');

async function searchFieldByCode(code) {
  try {
    const field = await Field.findOne({ where: { code } });
    return field.toJSON();
  } catch (err) {
    console.log(err);
    throw new Error('An error occurred trying to save in the database');
  }
}

async function saveFieldInDatabase({
  code,
  coordinates: { latitude, longitude },
}) {
  try {
    const field = await Field.create({
      code,
      coordinates: { type: 'Point', coordinates: [latitude, longitude] },
    });

    return field.toJSON();
  } catch (err) {
    console.log(err);
    throw new Error('An erro ocurred');
  }
}

module.exports = { searchFieldByCode, saveFieldInDatabase };
