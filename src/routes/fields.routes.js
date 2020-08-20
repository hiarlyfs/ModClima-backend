const fieldsRoutes = require('express').Router();
const { createField } = require('../controllers/field/field.controller');

fieldsRoutes.post('/fields', createField);

module.exports = fieldsRoutes;
