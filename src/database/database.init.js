const Field = require('../models/Field');
const Farm = require('../models/Farm');
const FarmFields = require('../models/Farms_Fields');
const Harvest = require('../models/Harvest');
const HarvestsFarms = require('../models/Harvests_Farms');

(async () => {
  await Field.sync();
  await Farm.sync();
  await FarmFields.sync();
  await Harvest.sync();
  await HarvestsFarms.sync();
})();
