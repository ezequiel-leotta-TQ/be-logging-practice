import Car from '../models/car';
import CarOwner from '../models/carOwner'

export const getAllCarsRepository = async (req, res) => {
    try {
        return await car.findAll();
    }
    catch (e) {
        return e
    }
}

export const getCarsByPatentRepository = async (req, res) => {
    const { patent } = req.params;
    try {
        return await Car.findOne({ where: { patent } });
    }
    catch (e) {
        return e
    }
}

export const createCarRepository = async (req, res) => {
    const { patent, brand, model, year } = req.body;
    try {
        return await Car.create({ patent, brand, model, year });
    }
    catch (e) {
        return e
    }
}

export const updateCarOwnerRepository = async (req, res) => {
    const { patent, dni } = req.body;    
    try {
        return await CarOwner.create({ patent, dni });
    }
    catch (e) {
        return e
    }
}

export const updateCarActualOwnerRepository = async (req, res) => {
    const { patent, dni } = req.body;
    try {
        return await CarOwner.update({ where: { patent }, dni });
    }
    catch (e) {
        return e
    }
}