const request = require('supertest');
const app = require('../../../src/app');
const {
  saveFarmInDatabase,
} = require('../../../src/database/useCases/farms.useCase');

describe('Test capacity of create harvests', () => {
  test('Should be possible create harvest without farms', async () => {
    const today = new Date();
    const response = await request(app)
      .post('/harvests')
      .send({
        code: Date.now(),
        start: today,
        end: new Date(
          today.getFullYear() + 1,
          today.getMonth(),
          today.getDate(),
        ),
      });

    expect(response.status).toBe(200);
    return expect(response.body.harvest).toBeDefined();
  });

  test('Should be possible create harvest with farms', async () => {
    const farm = await saveFarmInDatabase({
      code: Date.now(),
      name: `Farm test ${Date.now()}`,
    });

    const today = new Date();
    const response = await request(app)
      .post('/harvests')
      .send({
        code: Date.now(),
        start: today,
        end: new Date(
          today.getFullYear() + 1,
          today.getMonth(),
          today.getDate(),
        ),
        farmIds: [farm.id],
      });

    expect(response.status).toBe(200);
    return expect(response.body.harvest).toBeDefined();
  });
});
