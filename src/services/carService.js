import { getAllCarsRepository, getCarsByPatentRepository, createCarRepository, updateCarOwnerRepository, updateCarActualOwnerRepository } from "../repository/carRepository";

export const getAllCars = async (req, res) => {
  const cars = await getAllCarsRepository(req, res)
  if (cars instanceof Error) {
    res.status(400).json({ message: cars.message })
  } else {
    res.status(200).json(cars)
  }
}

export const getCarsByPatent = async (req, res) => {
  const patent = await getCarsByPatentRepository(req, res)
  if (patent instanceof Error) {
    res.status(400).json({ message: patent.message })
  } else {
    res.status(200).json(patent)
  }
}

export const createCar = async (req, res) => {
  const car = await createCarRepository(req, res);
  if (car instanceof Error) {
    res.status(400).json({ message: car.message })
  } else {
    res.status(200).json(car)
  }
}

export const updateCarOwner = async (req, res) => {
  const newOwner = await updateCarOwnerRepository(req, res)
  const updatedOwner = await updateCarActualOwnerRepository(req, res)
  if (newOwner instanceof Error || updatedOwner instanceof Error) {
    res.status(400)
  } else {
    res.status(200).json(newOwner)
  }
}

/*export const updateCarActualOwner = async (req, res) => {
  const updatedOwner = await updateCarActualOwnerRepository(req, res)
  if (updatedOwner instanceof Error) {
    res.status(400).json({ message: updatedOwner.message })
  } else {
    res.status(200).json(updatedOwner)
  }
}*/