const request = require('supertest');
const app = require('../../../src/app');
const {
  saveFieldInDatabase,
} = require('../../../src/database/useCases/fields.useCase');

describe('Test capacity of create fields', () => {
  test('Should be possible create a field', async () => {
    const code = Date.now();
    await saveFieldInDatabase({
      code,
      coordinates: { latitude: -7.0, longitude: -35.8 },
    });

    const response = await request(app).get(`/fields?code=${code}`);

    return expect(response.status).toBe(200);
  });
});
