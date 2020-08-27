const request = require('supertest');
const app = require('../../../src/app');

describe('Test capacity of create fields', () => {
  test('Should be possible create a field', async () => {
    const response = await request(app)
      .post('/fields')
      .send({
        code: Date.now().toString(),
        coordinates: { latitude: -7.0808606, longitude: -34.8293001 },
      });

    return expect(response.status).toBe(200);
  });
});
