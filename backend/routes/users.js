const express = require('express');
const { isAdmin } = require('../middleware/auth');
const Users = require('../services/users');

function users(app) {
  const router = express.Router();
  const usersService = new Users();
  app.use('/api/users', router);

  // get one user
  router.get('/:id', isAdmin, async (req, res) => {
    const { id } = req.params;
    const user = await usersService.get(id);
    return res.status(200).json(user);
  });

  // get all user
  router.get('/', isAdmin, async (req, res) => {
    const users = await usersService.getAll();
    return res.status(200).json(users);
  });

  // create user
  router.post('/', isAdmin, async (req, res) => {
    const user = await usersService.create(req.body);
    return res.status(201).json(user);
  });

  // update user
  router.put('/:id', isAdmin, async (req, res) => {
    const { id } = req.params;
    const user = await usersService.update(id, req.body);
    return res.status(200).json(user);
  });

  // delete user
  router.delete('/:id', isAdmin, async (req, res) => {
    const { id } = req.params;
    const user = await usersService.delete(id);
    return res.status(200).json(user);
  });
}

module.exports = users;
