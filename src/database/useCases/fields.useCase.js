const dbClient = require('../database.client');

async function searchFieldByCode(code) {
  try {
    const data = await dbClient.query(
      'SELECT id, code, ST_X(coordinates::geometry) as longitude, ST_Y(coordinates::geometry) as latiude FROM fields WHERE code = $1',
      [code]
    );

    return data.rows[0];
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
    const data = await dbClient.query({
      text:
        'INSERT INTO fields(code, coordinates) VALUES($1, $2) returning id;',
      values: [code, `Point(${longitude} ${latitude})`],
    });

    return {
      id: data.rows[0].id,
      code,
      coordinates: { latitude, longitude },
    };
  } catch (err) {
    throw new Error('An erro ocurred');
  }
}

module.exports = { searchFieldByCode, saveFieldInDatabase };
