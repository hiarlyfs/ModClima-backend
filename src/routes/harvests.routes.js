const harvestsRoutes = require('express').Router();
const {
  createHarvest,
  getHarvest,
} = require('../controllers/harvest.controller');

harvestsRoutes.post('/harvests', createHarvest);
harvestsRoutes.get('/harvests', getHarvest);

module.exports = harvestsRoutes;
