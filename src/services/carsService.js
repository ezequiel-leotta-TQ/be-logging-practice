const { getAllCarsRepository, getCarsByPatentRepository, createCarRepository, updateCarOwnerRepository, updateCarActualOwnerRepository } = require('../repository/carsRepository');
const logger = require('../logs')

const getAllCars = async (req, res) => {
    const cars = await getAllCarsRepository(req, res)
    if (cars instanceof Error) {
        logger.error(cars.message)
        res.status(400).json({ message: cars.message })
    } else {
        logger.info("Getting all cars.")
        res.status(200).json(cars)
    }
}

const getCarsByPatent = async (req, res) => {
    const patent = await getCarsByPatentRepository(req, res)
    if (patent instanceof Error) {
        logger.error(cars.message)
        res.status(400).json({ message: patent.message })
    } else {
        logger.info("Car got by patent.")
        res.status(200).json(patent)
    }
}

const createCar = async (req, res) => {
    const car = await createCarRepository(req, res);
    if (car instanceof Error) {
        logger.error(car.message)
        res.status(400).json({ message: car.message })
    } else {
        logger.info("Car created.")
        res.status(200).json(car)
    }
}

const updateCarOwner = async (req, res) => {
    const newOwner = await updateCarOwnerRepository(req, res)
    const updatedOwner = await updateCarActualOwnerRepository(req, res)
    
    if (newOwner instanceof Error || updatedOwner instanceof Error) {
        logger.error("Not existing user.")
        logger.error(updatedOwner.message)
        res.status(400)
    } else {
        logger.info("Updating car's owner.")
        res.status(200).json(newOwner)
    }
}


module.exports = { getAllCars, getCarsByPatent, createCar, updateCarOwner }