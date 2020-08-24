const {
  saveHarvestInDatabase,
  searchHarvests,
} = require('../../../../src/database/useCases/harvests.useCase.js');

describe('Test search harvest database resources', () => {
  test('Should be possible search for harvest by code', async () => {
    const hoje = new Date();
    const saveHarvest = await saveHarvestInDatabase({
      code: Date.now(),
      start: hoje,
      end: new Date(
        hoje.getFullYear() + 1,
        hoje.getMonth() + 1,
        hoje.getDate(),
      ),
    });

    const harvest = await searchHarvests('code', saveHarvest.code);
    console.log(harvest);
    return expect(harvest).toMatchObject({
      code: saveHarvest.code,
    });
  });
});
