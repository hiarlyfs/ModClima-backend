const {
  searchMillByName,
  saveMillInDatabase,
} = require('../../../../src/database/useCases/mills.useCase');
const {
  saveHarvestInDatabase,
} = require('../../../../src/database/useCases/harvests.useCase');

describe('Test the search mills resources in the database', () => {
  test('Should be possible search mills by name without harvests', async () => {
    await saveMillInDatabase({ name: `Mill test ${Date.now()}` });
    await saveMillInDatabase({ name: `Mill test ${Date.now()}` });

    const mills = await searchMillByName('mill');

    return expect(mills.length).toBeGreaterThanOrEqual(2);
  });

  test('Should be possible search mills by name with harvests', async () => {
    const harvest = await saveHarvestInDatabase({
      code: Date.now().toString(),
      start: new Date(),
      end: new Date(),
    });

    const now = Date.now().toString();
    await saveMillInDatabase({
      name: `Mill test ${now}`,
      harvestIds: [harvest.id],
    });

    const mills = await searchMillByName(now);

    expect(mills.length).toBe(1);
    return expect(mills[0].harvests.length).toBe(1);
  });
});
