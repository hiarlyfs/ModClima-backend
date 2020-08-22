const request = require('supertest');
const app = require('../../../src/app');
const {
  saveFieldInDatabase,
} = require('../../../src/database/useCases/fields.useCase');

describe('Test capacity of create farms', () => {
  test('Should be possible create a farms withou fields', async () => {
    const response = await request(app).post('/farms').send({
      code: Date.now(),
      name: 'Farm Test',
    });

    return expect(response.status).toBe(200);
  });

  test('Should be possible create a farms with fields', async () => {
    const field1 = await saveFieldInDatabase({
      code: Date.now(),
      coordinates: { latitude: -7.0, longitude: -35.8 },
    });

    const field2 = await saveFieldInDatabase({
      code: Date.now(),
      coordinates: { latitude: -7.0, longitude: -35.8 },
    });

    const response = await request(app)
      .post('/farms')
      .send({
        code: Date.now(),
        name: 'Farm Test',
        fields: [field1.id, field2.id],
      });

    return expect(response.status).toBe(200);
  });
});
