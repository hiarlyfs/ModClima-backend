const rootRoutes = require('express').Router();

const fieldsRoutes = require('./fields.routes');
const farmsRoutes = require('./farms.routes');

rootRoutes.use(fieldsRoutes);
rootRoutes.use(farmsRoutes);

module.exports = rootRoutes;
