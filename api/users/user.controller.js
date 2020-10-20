'use strict';

const { user: User } = require('../../models');
const { buildPassword } = require('../../utils/utils');

exports.getOne = async ctx => {
  const { id } = ctx.params;
  const user = await User.findByPk(id);
  ctx.assert(user, 404, 'The requested user does not exist');
  ctx.status = 200;
  ctx.body = user;
};

exports.delete = async ctx => {
  const { id } = ctx.params;
  const user = await User.findByPk(id);
  await user.destroy();
  ctx.assert(user, 404, 'The requested user does not exist');
  ctx.status = 200;
  ctx.body = user;
};

exports.getAll = async ctx => {
  ctx.status = 200;
  ctx.body = await User.findAll();
};

exports.create = async ctx => {
  const { name, lastname, email, password } = ctx.request.body;
  ctx.assert(name, 400, 'Info for user is malformed');
  try {
    const user = await User.create({
      name,
      lastname,
      email,
      password: await buildPassword(password),
    });
    ctx.status = 201;
    ctx.body = user;
  } catch (error) {
    throw error;
  }
};

exports.update = async ctx => {
  const { id } = ctx.params;
  const { name, lastname } = ctx.request.body;
  const user = await User.findByPk(id);
  ctx.assert(user, 404, 'The requested user does not exist');
  user.name = name;
  user.lastname = lastname;
  await user.save({ fields: ['name, lastname'] });
  ctx.status = 200;
  ctx.body = user;
};
