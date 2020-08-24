const serializeMultipleEntities = (entities) => {
  const entitiesSerialized = entities.map((entitie) => entitie.toJSON());
  return entitiesSerialized;
};

module.exports = serializeMultipleEntities;
