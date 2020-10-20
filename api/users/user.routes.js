'use strict';

const controller = require('./user.controller');

module.exports = Router => {
  const router = new Router({
    prefix: `/users`,
  });

  router
    .get('/:id', controller.getOne)
    .delete('/:id', controller.delete)
    .put('/:id', controller.update)
    .get('/', controller.getAll)
    .post('/', controller.create);

  return router;
};
