const rootRoutes = require('express').Router();

const fieldsRoutes = require('./fields.routes');
const farmsRoutes = require('./farms.routes');
const harvestsRoutes = require('./harvests.routes');

rootRoutes.use(fieldsRoutes);
rootRoutes.use(farmsRoutes);
rootRoutes.use(harvestsRoutes);

module.exports = rootRoutes;
