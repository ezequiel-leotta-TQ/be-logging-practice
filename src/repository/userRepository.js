const User = require('../models/user');
const Car = require('../models/car');
const logger = require('../logs');

const getAllUserRepository = async (req, res) => {
  try {
    return await User.findAll();
  } catch (e) {
    logger.error(e);
    return error;
  }
};

const getUserByDniRepository = async (req, res) => {
  try { 
    const { dni } = req.params;
    const user = await User.findOne({ where: { dni } });
    const cars = await Car.findAll({ where: dni });
    return { user, cars };
  } catch (error) {
    logger.error(e);
    return error;
  }
};

const createUserRepository = async (req, res) => {
  try {
    const { dni, name, surname, userName, password } = req.body;
    return await User.create({ dni, name, surname, userName, password });
  } catch (error) {
    logger.error(error);
    return error;
  }
};

const updateUserPasswordRepository = async (req, res) => {
  try {
    const { dni } = req.params;
    const { password } = req.body;

    return await User.update({ where: { dni } }, { password });
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUserRepository,
  getUserByDniRepository,
  createUserRepository,
  updateUserPasswordRepository,
};
