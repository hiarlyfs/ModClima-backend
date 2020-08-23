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
  farmId,
}) {
  try {
    const field = await Field.create({
      code,
      coordinates: { type: 'Point', coordinates: [latitude, longitude] },
      farmId,
    });

    return field.toJSON();
  } catch (err) {
    console.log(err);
    throw new Error('An erro ocurred');
  }
}

async function updateFarmId(fieldCode, farmId) {
  try {
    const field = await Field.update(
      { farmId },
      {
        where: {
          code: fieldCode,
        },
      },
    );

    return field;
  } catch (err) {
    console.log(err);
    throw new Error('An erro ocurred trying to update the farm id from field');
  }
}

module.exports = { searchFieldByCode, saveFieldInDatabase, updateFarmId };
