function createField(req, res, next) {
  const {
    cordinates: { latitude, longitude },
  } = req.body;
  try {
  } catch (err) {
    return res.status(400).send({ error: 'An error occurred' });
  }
}

module.exports = { createField };
