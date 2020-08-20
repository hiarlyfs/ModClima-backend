const rootRoutes = require('express').Router();

const fieldRoutes = require('./fields.routes');

rootRoutes.use(fieldRoutes);

module.exports = rootRoutes;
