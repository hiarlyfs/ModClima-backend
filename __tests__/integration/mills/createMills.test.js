const request = require('supertest');
const app = require('../../../src/app');
const {
  saveHarvestInDatabase,
} = require('../../../src/database/useCases/harvests.useCase');

describe('Verifiy the ability of create mill', () => {
  test('Should be possible create a mill without harvest', async () => {
    const response = await request(app)
      .post('/mills')
      .send({
        name: `Mill test ${Date.now().toString()}`,
      });

    expect(response.status).toBe(200);
    return expect(response.body.mill).toMatchObject({
      id: expect.any(Number),
    });
  });

  test('Should be possible create a mill with harvest', async () => {
    const harvest = await saveHarvestInDatabase({
      code: Date.now().toString(),
      start: new Date(),
      end: new Date(),
    });

    const response = await request(app)
      .post('/mills')
      .send({
        name: `Mill test ${Date.now().toString()}`,
        harvestIds: [harvest.id],
      });

    expect(response.status).toBe(200);
    return expect(response.body.mill).toMatchObject({
      id: expect.any(Number),
    });
  });
});
