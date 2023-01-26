import { getAllCarsController, getCarsByPatentController, createCarController, updateCarOwnerController } from '../../controllers/carController'

const cars = Router()

cars.get('/', getAllCarsController)
cars.get('/:patent', getCarsByPatentController)
cars.post('/', createCarController)
cars.patch('/', updateCarOwnerController)

export default cars