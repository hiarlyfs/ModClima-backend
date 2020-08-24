const Field = require('../src/models/Field');
const Farm = require('../src/models/Farm');
const FarmFields = require('../src/models/Farms_Fields');
const Harvest = require('../src/models/Harvest');
const HarvestsFarms = require('../src/models/Harvests_Farms');

(async () => {
  await Field.sync({ force: true });
  await Farm.sync({ force: true });
  await FarmFields.sync({ force: true });
  await Harvest.sync({ force: true });
  await HarvestsFarms.sync({ force: true });
})();
