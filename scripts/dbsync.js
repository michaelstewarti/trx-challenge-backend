const { sequelize } = require('../models');

/**
 * Script to be run to synchronize de models with the db for he first time.
 * The outputted SQL should be used within the first migration. From that point
 * on, normal sequelize migrations should be used.
 */

sequelize
  .authenticate()
  .then(() => console.log('Connection ok... ✅'))
  .catch(console.error);

sequelize
  .sync({ force: true, logging: console.log })
  .then(() => console.log('Sync ok... ✅'))
  .catch(console.error);
