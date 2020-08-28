const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = require('./app');

const swaggerDocumentation = require('../docs.json');

const swaggerOptions = {
  swaggerDefinition: swaggerDocumentation,
  apis: ['src/routes.js'],
};

const PORT = process.env.PORT || 3333;

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
  console.log(`Nodejs server is running on port: ${PORT}`);
});
