const {
  searchFieldByCode,
  saveFieldInDatabase,
} = require('../../../../src/database/useCases/fields.useCase');

describe('Test the fields resources in database', () => {
  test('Should be possible create a new field in the database', async () => {
    const code = Date.now();
    await saveFieldInDatabase({
      code,
      coordinates: { latitude: -7.0, longitude: -35.8 },
    });

    const response = await searchFieldByCode(code);

    return expect(response).toMatchObject({
      id: expect.any(Number),
    });
  });
});
