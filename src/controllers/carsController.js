const {
  getAllCars,
  getCarsByPatent,
  createCar,
  updateCarOwner,
} = require('../services/carsService');
const log4js = require('../logs');

const logger = log4js.getLogger('carsController');

const patentRegex = /^[A-Z]{2}[0-9]{3}[A-Z]{2}$/g;
const isValidPatent = (patent) => patentRegex.test(patent);

const getAllCarsController = async (_, res, next) => {
  try {
    await getAllCars(_, res);
    next();
  } catch (e) {
    logger.error(e);
  }
};

const getCarsByPatentController = async (req, res, next) => {
  const { patent } = req.params;
  try {
    if (isValidPatent(patent)) await getCarsByPatent(req, res);
    next();
  } catch (e) {
    logger.error(e);
  }
};

const createCarController = async (req, res, next) => {
  try {
    const { patent, brand, model, year } = req.body;
    if (patent && brand && model && year && isValidPatent(patent))
      await createCar(req, res);
    else res.status(400).send('Invalid parameters');
    next();
  } catch (e) {
    logger.error(e);
  }
};

const updateCarOwnerController = async (req, res, next) => {
  try {
    const { patent } = req.body;
    if (isValidPatent(patent)) {
      await updateCarOwner(req, res);
    } else {
      logger.error('Invalid patent');
      res.status(400);
      res.json({ message: 'Invalid patent' });
    }
    next();
  } catch (e) {
    logger.error(e);
  }
};

module.exports = {
  getAllCarsController,
  getCarsByPatentController,
  createCarController,
  updateCarOwnerController,
};
