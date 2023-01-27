const User = require('../models/user');
const Car = require('../models/car');

const getAllUserRepository = async (req, res) => {
  try {
    return await User.findAll();
  } catch (e) {}
};

const getUserByDniRepository = async (req, res) => {
  try {
    const { dni } = req.params;
    const user = await User.findOne({ where: { dni } });
    const cars = await Car.findAll({ where: dni });
    return { user, cars };
  } catch (error) {}
};

const createUserRepository = async (req, res) => {
  try {
    const { dni, name, surname, userName, password } = req.body;
    return await User.create({ dni, name, surname, userName, password });
  } catch (error) {}
};

const updateUserPasswordRepository = async (req, res) => {
  try {
    const { dni } = req.params;
    const { password } = req.body;

    return await User.update({ where: { dni } }, { password });
  } catch (error) {}
};

module.exports = {
  getAllUserRepository,
  getUserByDniRepository,
  createUserRepository,
  updateUserPasswordRepository,
};
