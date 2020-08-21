const fieldsRoutes = require('express').Router();
const {
  createField,
  getField,
} = require('../controllers/field/field.controller');

fieldsRoutes.post('/fields', createField);
fieldsRoutes.get('/fields', getField);

module.exports = fieldsRoutes;
