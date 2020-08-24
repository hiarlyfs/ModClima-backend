const Field = require('../models/Field');
const Farm = require('../models/Farm');
const FarmFields = require('../models/Farms_Fields');
const Harvest = require('../models/Harvest');
const HarvestsFarms = require('../models/Harvests_Farms');

(async () => {
  await Field.sync({ force: true });
  await Farm.sync({ force: true });
  await FarmFields.sync({ force: true });
  await Harvest.sync({ force: true });
  await HarvestsFarms.sync({ force: true });
})();
