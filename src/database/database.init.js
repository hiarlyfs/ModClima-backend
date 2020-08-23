const Field = require('../models/Field');
const Farm = require('../models/Farm');
const FarmFields = require('../models/Farms_Fields');

(async () => {
  await Field.sync({ force: true });
  await Farm.sync({ force: true });
  await FarmFields.sync({ force: true });
})();
