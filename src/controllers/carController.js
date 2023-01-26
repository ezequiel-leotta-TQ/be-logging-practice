import { getAllCars, getCarsByPatent, createCar, updateCarOwner, updateCarActualOwner } from "../services/carService"

export const getAllCarsController = async (_, res) => {
  try {
    await getAllCars(_, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const getCarsByPatentController = async (_, res) => {
  try {
    await getCarsByPatent(_, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const createCarController = async (_, res) => {
  try {
    const { patent, brand, model, year } = req.body
    if (patent && brand && model && year) await createCar(req, res)
    else res.status(400).send('Missing value')
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

export const updateCarOwnerController = async (_, res) => {
  try {
    await updateCarOwner(req, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}

/*export const updateCarActualOwnerController = async (_, res) => {
  try {
    await updateCarActualOwner(req, res)
    next()
  } catch (e) {
    console.log(`Error: ${e}`)
  }
}*/
