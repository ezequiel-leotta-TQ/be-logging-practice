/*import User from '../models/user';
//const CarOwner = require('..models/carOwner')

import express from 'express';


const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get('/:dni', async (req, res) => {
  const { dni } = req.params;
  const userOwns = await carOwner.findAll({ where: { dni } });
  res.json(userOwns);
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

export default router*/
