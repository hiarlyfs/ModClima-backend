const request = require('supertest');
const app = require('../../../src/app');
const {
  saveFarmInDatabase,
} = require('../../../src/database/useCases/farms.useCase');

describe('Test capacity of get farms', () => {
  test('Should be possible get a farms by code', async () => {
    const code = Date.now();

    await saveFarmInDatabase({ code, name: 'Farm test' });

    const response = await request(app).get(`/farms?code=${code}`);

    return expect(response.body).toMatchObject({
      farms: {
        id: expect.any(Number),
      },
    });
  });

  test('Should be possible get a farms by code', async () => {
    const code = Date.now();

    await saveFarmInDatabase({ code, name: 'Farm test' });

    const response = await request(app).get('/farms?name=far');

    return expect(response.body.farms.length).toBeGreaterThanOrEqual(1);
  });
});
