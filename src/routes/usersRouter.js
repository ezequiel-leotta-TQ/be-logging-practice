const Car = require('../models/car');
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
  const cars = await Car.findAll({ where: dni });
  res.json({ user, cars });
});

// fix this
router.post('/', async (req, res) => {
  const { dni, name, surname, userName, password } = req.body;
  const user = await User.create({ dni, name, surname, userName, password });

  res.json(user);
});

// patch
router.patch('/:dni', async (req, res) => {
  const { dni } = req.params;
  const { lastPassword, password } = req.body;
  const user = await User.findOne({ where: dni });

  if (user.password == lastPassword) {
    const userUpdated = await User.update({ where: dni }, { password });
  } else {
    throw new Error('Incorrect password');
  }

  res.json(userUpdated);
});

module.exports = router;
