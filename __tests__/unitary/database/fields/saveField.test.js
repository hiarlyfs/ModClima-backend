const {
  saveFieldInDatabase,
} = require('../../../../src/database/useCases/fields.useCase');

describe('Test the save fields resources in database', () => {
  test('Should be possible create a new field in the database', async () => {
    const response = await saveFieldInDatabase({
      code: Date.now(),
      coordinates: { latitude: -7.0, longitude: -35.8 },
    });

    return expect(response).toMatchObject({
      id: expect.any(Number),
    });
  });
});
