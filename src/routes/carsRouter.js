const { getAllCarsController, getCarsByPatentController, createCarController, updateCarOwnerController } = require('../controllers/carsController')
const logger = require('../logs')

const cars = require('express').Router();

cars.get('/', getAllCarsController)
cars.get('/:patent', getCarsByPatentController)
cars.post('/', createCarController)
cars.patch('/:patent', updateCarOwnerController) 


module.exports = cars;
