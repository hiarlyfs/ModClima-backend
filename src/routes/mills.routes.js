const millRoutes = require('express').Router();
const { createMill, getMillByName } = require('../controllers/mill.controller');

millRoutes.post('/mills', createMill);
millRoutes.get('/mills', getMillByName);

module.exports = millRoutes;
