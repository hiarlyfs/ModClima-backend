const Field = require('../src/models/Field');
const Farm = require('../src/models/Farm');
const FarmFields = require('../src/models/Farms_Fields');
const Harvest = require('../src/models/Harvest');
const HarvestsFarms = require('../src/models/Harvests_Farms');
const Mill = require('../src/models/Mill');
const MillsHarvests = require('../src/models/Mills_Harvests');

(async () => {
  await Field.sync({ force: true });
  await Farm.sync({ force: true });
  await FarmFields.sync({ force: true });
  await Harvest.sync({ force: true });
  await HarvestsFarms.sync({ force: true });
  await Mill.sync({ force: true });
  await MillsHarvests.sync({ force: true });
})();
