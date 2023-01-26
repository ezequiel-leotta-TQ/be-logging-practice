const User = require('../models/user');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  res.json({});
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;

  const user = await User.create({ name, email });
  res.json(user);
});

module.exports = router;
