const rootRoutes = require('express').Router();

const fieldsRoutes = require('./fields.routes');
const farmsRoutes = require('./farms.routes');
const harvestsRoutes = require('./harvests.routes');
const millsRoutes = require('./mills.routes');

rootRoutes.use(fieldsRoutes);
rootRoutes.use(farmsRoutes);
rootRoutes.use(harvestsRoutes);
rootRoutes.use(millsRoutes);

module.exports = rootRoutes;
