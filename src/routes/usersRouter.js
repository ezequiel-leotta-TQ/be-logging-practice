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

// fix this
router.post('/', async (req, res) => {
  const { name, email } = req.body;

  const user = await User.create({ name, email });
  res.json(user);
});

// patch

module.exports = router;
