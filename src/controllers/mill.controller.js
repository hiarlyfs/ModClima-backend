const {
  saveMillInDatabase,
  searchMillByName,
} = require('../database/useCases/mills.useCase');

async function createMill(req, res) {
  try {
    const mill = await saveMillInDatabase(req.body);
    return res.send({ mill });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ erorr: 'An error occurred trying to create mill' });
  }
}

async function getMillByName(req, res) {
  const { name } = req.query;
  try {
    const mills = await searchMillByName(name);
    return res.send({ mills });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({ erorr: 'An error occurred trying to create mill' });
  }
}

module.exports = { createMill, getMillByName };
