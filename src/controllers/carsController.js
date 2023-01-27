const { getAllCars, getCarsByPatent, createCar, updateCarOwner, updateCarActualOwner } = require('../services/carsService')
const logger = require('../logs')


const patentRegex = /^[A-Z]{2}[0-9]{3}[A-Z]{2}$/g
const isValidPatent = (patent) => patentRegex.test(patent)

const getAllCarsController = async (_, res) => {
    try {
        await getAllCars(_, res)
        next()
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

const getCarsByPatentController = async (req, res) => {
    try {
        if (isValidPatent(patent)) await getCarsByPatent(req, res)
        next()
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}


const createCarController = async (req, res) => {
    try {
        const { patent, brand, model, year } = req.body
        if (patent && brand && model && year && isValidPatent(patent)) await createCar(req, res)
        else res.status(400).send('Invalid parameters')
        next()
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

const updateCarOwnerController = async (req, res) => {
    try {
        if (isValidPatent(patent)) await updateCarOwner(req, res)
        next()
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

module.exports = { getAllCarsController, getCarsByPatentController, createCarController, updateCarOwnerController }