const Field = require('../models/Field');

(async () => {
  await Field.sync({ force: true });
})();
