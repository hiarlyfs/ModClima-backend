const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const http = require('http');
const app = require('./app');
const { createServer } = require('./websocket/wsServer');
const { addClient, removeClient } = require('./websocket/utils');

const swaggerDocumentation = require('../docs.json');

const swaggerOptions = {
  swaggerDefinition: swaggerDocumentation,
  apis: ['src/routes.js'],
};

const PORT = process.env.PORT || 3333;

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const server = app.listen(PORT, () => {
  console.log(`Nodejs server is running on port: ${PORT}`);
});

const wss = createServer(server);

wss.on('connection', (client) => {
  addClient(client);
  client.on('close', () => {
    removeClient(client);
  });
});
