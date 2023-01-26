const User = require('../models/user');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get('/:dni', async (req, res) => {
  const { dni } = req.params;
  const user = await User.findOne({ where: { dni } });
  // fetch cars also
  res.json(user);
});

router.post('/', async (req, res) => {
  const { dni, name, surname, userName, password } = req.body;
  const user = await User.create({ dni, name, surname, userName, password });
  res.json(user);
});

router.patch('/', async (req, res) => {
  const { dni, newPassword } = req.body;
  const user = await User.findOne({ where: { dni } });
  user.password = newPassword
  res.json(user);
});

module.exports = router;
