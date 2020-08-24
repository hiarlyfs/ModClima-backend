const request = require('supertest');
const app = require('../../../src/app');
const {
  saveMillInDatabase,
} = require('../../../src/database/useCases/mills.useCase');
const {
  saveHarvestInDatabase,
} = require('../../../src/database/useCases/harvests.useCase');

describe('Verify the get mills resourcers', () => {
  test('Should be possible get mill', async () => {
    const harvest = await saveHarvestInDatabase({
      code: Date.now(),
      start: new Date(),
      end: new Date(),
    });

    await saveMillInDatabase({
      name: 'Mill test api',
      harvestIds: [harvest.id],
    });

    const response = await request(app).get('/mills?name=api');
    expect(response.status).toBe(200);
    expect(response.body.mills.length).toBe(1);
    return expect(response.body.mills[0].harvests.length).toBe(1);
  });
});
