const farmsRoutes = require('express').Router();
const { createFarms, getFarms } = require('../controllers/farm.controller');

farmsRoutes.post('/farms', createFarms);
farmsRoutes.get('/farms', getFarms);

module.exports = farmsRoutes;
