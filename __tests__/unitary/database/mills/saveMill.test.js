const {
  saveMillInDatabase,
} = require('../../../../src/database/useCases/mills.useCase');
const {
  saveHarvestInDatabase,
} = require('../../../../src/database/useCases/harvests.useCase');

describe('Save mill in database resources', () => {
  test('Should be possible save a mill without harvest in the database', async () => {
    const mill = await saveMillInDatabase({ name: `Mill test ${Date.now()}` });

    return expect(mill).toMatchObject({
      id: expect.any(Number),
    });
  });

  test('Should be possible save a mill with harvest in the database', async () => {
    const harvest = await saveHarvestInDatabase({
      code: Date.now().toString(),
      start: new Date(),
      end: new Date(),
    });
    const mill = await saveMillInDatabase({
      name: `Mill test ${Date.now().toString()}`,
      harvestIds: [harvest.id],
    });

    return expect(mill).toMatchObject({
      id: expect.any(Number),
    });
  });
});
