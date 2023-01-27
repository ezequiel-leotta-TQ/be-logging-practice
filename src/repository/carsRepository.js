const Car = require('../models/car');
const CarOwner = require('../models/carOwner');

const getAllCarsRepository = async (req, res) => {
    try {
        return await car.findAll();
    }
    catch (e) {
        return e
    }
}

const getCarsByPatentRepository = async (req, res) => {
    const { patent } = req.params;
    try {
        return await Car.findOne({ where: { patent } });
    }
    catch (e) {
        return e
    }
}

const createCarRepository = async (req, res) => {
    const { patent, brand, model, year } = req.body;
    try {
        return await Car.create({ patent, brand, model, year });
    }
    catch (e) {
        return e
    }
}

const updateCarActualOwnerRepository = async (req, res) => {
    const { patent, dni} = req.body;

    try {
        return await Car.update({ where: { patent }}, { actualOwner: dni });
    }
    catch (e) {
        return e
    }
}

const updateCarOwnerRepository = async (req, res) => {
    const { patent, dni } = req.body;    
    try {
        return await CarOwner.create({ patent, dni });
    }
    catch (e) {
        return e
    }
}


module.exports = { getAllCarsRepository, getCarsByPatentRepository, createCarRepository, updateCarOwnerRepository, updateCarActualOwnerRepository }