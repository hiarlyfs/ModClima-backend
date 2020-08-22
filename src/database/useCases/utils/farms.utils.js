function querySaveRelationFarmField(fields, farmId) {
  const query = fields.reduce(
    (acc, field) =>
      `${acc}INSERT INTO farmsxfields VALUES(${farmId}, ${field}); `,
    ''
  );
  return query;
}

module.exports = { querySaveRelationFarmField };
