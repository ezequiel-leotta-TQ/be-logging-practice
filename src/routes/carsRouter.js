import { getAllCarsController, getCarsByPatentController, createCarController, updateCarOwnerController } from '../controllers/carController'
import express from 'express'

const cars = express.Router()

cars.get('/', getAllCarsController)
cars.get('/:patent', getCarsByPatentController)
cars.post('/', createCarController)
cars.patch('/', updateCarOwnerController)

export default cars;