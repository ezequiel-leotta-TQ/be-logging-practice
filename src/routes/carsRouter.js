const Car = require('../models/car');
const CarOwner = require('../models/carOwner');

const router = require('express').Router();

router.get('/', async (req, res) => {
  const cars = await Car.findAll();
  res.json(cars);
});

router.get('/:patent', async (req, res) => {
  const { patent } = req.params;
  const car = await Car.findOne({ where: { patent } });
  res.json(car);
});

router.post('/', async (req, res) => {
  const { patent, brand, model, year } = req.body;
  const car = await Car.create({ patent, brand, model, year });
  res.json(car);
});

router.patch('/', async (req, res) => {
  const { patent, dni } = req.body;
  const carOwner = await CarOwner.create({ patent, dni });
  await Car.update({ where: { patent } }, { actualOwner: dni });
  res.json(carOwner);
});

module.exports = router;
