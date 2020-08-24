const {
  saveHarvestInDatabase,
  searchHarvests,
} = require('../../../../src/database/useCases/harvests.useCase.js');
const {
  saveFarmInDatabase,
} = require('../../../../src/database/useCases/farms.useCase.js');

describe('Test search harvest database resources', () => {
  test('Should be possible search for harvest by code', async () => {
    const today = new Date();
    const saveHarvest = await saveHarvestInDatabase({
      code: Date.now(),
      start: today,
      end: new Date(
        today.getFullYear() + 1,
        today.getMonth() + 1,
        today.getDate(),
      ),
    });

    const harvest = await searchHarvests('code', { code: saveHarvest.code });
    return expect(harvest).toMatchObject({
      code: saveHarvest.code,
    });
  });

  test('Shoul be possible search harvests by start and end date', async () => {
    const today = new Date();
    const farm = await saveFarmInDatabase({
      code: Date.now(),
      name: 'Farm test',
    });
    await saveHarvestInDatabase({
      code: Date.now(),
      start: today,
      end: new Date(
        today.getFullYear() + 1,
        today.getMonth() + 1,
        today.getDate(),
      ),
      farmIds: [farm.id],
    });
    await saveHarvestInDatabase({
      code: Date.now(),
      start: today,
      end: new Date(
        today.getFullYear() + 1,
        today.getMonth() + 1,
        today.getDate(),
      ),
      farmIds: [farm.id],
    });

    await saveHarvestInDatabase({
      code: Date.now(),
      start: today,
      end: new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate() + 2,
      ),
    });

    const response = await searchHarvests('start_end', {
      start: today,
      end: new Date(
        today.getFullYear() + 1,
        today.getMonth() + 1,
        today.getDate(),
      ),
    });

    return expect(response.length).toBeGreaterThanOrEqual(2);
  });
});
