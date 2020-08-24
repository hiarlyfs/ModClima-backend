const request = require('supertest');
const app = require('../../../src/app');
const {
  saveHarvestInDatabase,
} = require('../../../src/database/useCases/harvests.useCase');
const {
  saveFarmInDatabase,
} = require('../../../src/database/useCases/farms.useCase');

describe('Test the capacity of get harvests', () => {
  test('Should be possible get a harvest by code', async () => {
    const today = new Date();
    const farm = await saveFarmInDatabase({
      code: Date.now(),
      name: `farm test ${Date.now()}`,
    });
    const harvest = await saveHarvestInDatabase({
      code: Date.now(),
      start: today,
      end: today,
      farmIds: [farm.id],
    });

    const response = await request(app).get(`/harvests?code=${harvest.code}`);

    expect(response.status).toBe(200);
    expect(response.body.harvests).toBeDefined();
    return expect(response.body.harvests.farms.length).toBeGreaterThanOrEqual(
      1,
    );
  });

  test('Should be possible get a harvest by start and end date', async () => {
    const today = new Date();
    const farm = await saveFarmInDatabase({
      code: Date.now(),
      name: `farm test ${Date.now()}`,
    });

    await saveHarvestInDatabase({
      code: Date.now(),
      start: today,
      end: today,
      farmIds: [farm.id],
    });

    await saveHarvestInDatabase({
      code: Date.now(),
      start: today,
      end: today,
      farmIds: [farm.id],
    });

    const response = await request(app).get(
      `/harvests?start=${today}&end=${today}`,
    );

    expect(response.status).toBe(200);
    return expect(response.body.harvests.length).toBeGreaterThanOrEqual(2);
  });
});
