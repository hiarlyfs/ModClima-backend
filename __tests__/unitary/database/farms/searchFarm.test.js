const {
  saveFarmInDatabase,
  searchFarms,
} = require('../../../../src/database/useCases/farms.useCase');

describe('Test the farms search resources in database', () => {
  test('Should be possible get a farms in the database by code', async () => {
    const code = Date.now().toString();

    await saveFarmInDatabase({ code, name: `Farm test ${code}` });

    const response = await searchFarms('code', code);
    return expect(response).toMatchObject({
      id: expect.any(Number),
      code: expect.any(String),
      name: expect.any(String),
    });
  });

  test('Should be possible get a farms in the database by name', async () => {
    await saveFarmInDatabase({
      code: Date.now().toString(),
      name: `Farm test ${Date.now().toString()}`,
    });
    await saveFarmInDatabase({
      code: Date.now().toString(),
      name: `Farm test ${Date.now().toString()}`,
    });

    const response = await searchFarms('name', 'farm');
    return expect(response.length).toBeGreaterThanOrEqual(1);
  });
});
