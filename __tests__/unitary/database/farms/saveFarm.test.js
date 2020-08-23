const {
  saveFarmInDatabase,
} = require('../../../../src/database/useCases/farms.useCase');
const {
  saveFieldInDatabase,
} = require('../../../../src/database/useCases/fields.useCase');

describe('Test the farms save resources in database', () => {
  test('Should be possible create a new farm in the database', async () => {
    const field1 = await saveFieldInDatabase({
      code: Date.now(),
      coordinates: { latitude: -7.0, longitude: -35.8 },
    });

    const field2 = await saveFieldInDatabase({
      code: Date.now(),
      coordinates: { latitude: -7.0, longitude: -35.8 },
    });

    const response = await saveFarmInDatabase({
      code: Date.now(),
      name: 'Farm test',
      fields: [field1.code, field2.code],
    });

    return expect(response).toMatchObject({
      id: expect.any(Number),
    });
  });
});
