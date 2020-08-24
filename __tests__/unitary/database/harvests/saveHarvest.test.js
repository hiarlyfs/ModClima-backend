const {
  saveHarvestInDatabase,
} = require('../../../../src/database/useCases/harvests.useCase');

const {
  saveFarmInDatabase,
} = require('../../../../src/database/useCases/farms.useCase');

describe('Test harvest save database resources', () => {
  test('Should be possible save a harvest without farms', async () => {
    const hoje = new Date();
    const harvest = await saveHarvestInDatabase({
      code: Date.now(),
      start: hoje,
      end: new Date(
        hoje.getFullYear() + 1,
        hoje.getMonth() + 1,
        hoje.getDate(),
      ),
    });

    return expect(harvest).toMatchObject({
      id: expect.any(Number),
    });
  });

  test('Should be possible save a harvest with farms', async () => {
    const farm = await saveFarmInDatabase({
      code: Date.now(),
      name: 'Farm test',
    });

    const hoje = new Date();
    const harvest = await saveHarvestInDatabase({
      code: Date.now(),
      start: hoje,
      end: new Date(
        hoje.getFullYear() + 1,
        hoje.getMonth() + 1,
        hoje.getDate(),
      ),

      farmIds: [farm.id],
    });

    return expect(harvest).toMatchObject({
      id: expect.any(Number),
    });
  });
});
