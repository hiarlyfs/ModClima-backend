const {
  searchFieldByCode,
  saveFieldInDatabase,
} = require('../../../../src/database/useCases/fields.useCase');

describe('Test the search fields resources in database', () => {
  test('Should be possible to get field by code in the database', async () => {
    const code = Date.now().toString();
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
