const { getAllCarsController, getCarsByPatentController, createCarController, updateCarOwnerController } = require('../controllers/carsController')

const cars = require('express').Router();

cars.get('/', getAllCarsController)
cars.get('/:patent', getCarsByPatentController)
cars.post('/', createCarController)
cars.patch('/', updateCarOwnerController) 


module.exports = cars;
