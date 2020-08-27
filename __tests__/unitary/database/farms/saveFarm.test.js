const {
  saveFarmInDatabase,
} = require('../../../../src/database/useCases/farms.useCase');
const {
  saveFieldInDatabase,
} = require('../../../../src/database/useCases/fields.useCase');

describe('Test the farms save resources in database', () => {
  test('Should be possible create a new farm in the database', async () => {
    const field1 = await saveFieldInDatabase({
      code: Date.now().toString(),
      coordinates: { latitude: -7.0, longitude: -35.8 },
    });

    const field2 = await saveFieldInDatabase({
      code: Date.now().toString(),
      coordinates: { latitude: -7.0, longitude: -35.8 },
    });

    const response = await saveFarmInDatabase({
      code: Date.now().toString(),
      name: 'Farm test',
      fieldIds: [field1.id, field2.id],
    });

    return expect(response).toMatchObject({
      id: expect.any(Number),
    });
  });
});
