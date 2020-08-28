const { broadcastData } = require('./utils');

const sendNewEntity = (data) => {
  broadcastData(JSON.stringify(data));
};

module.exports = sendNewEntity;
