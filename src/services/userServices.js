const {
  getAllUserRepository,
  getUserByDniRepository,
  createUserRepository,
  updateUserPasswordRepository,
} = require('../repository/userRepository');
const User = require('../models/user');
const log4js = require('../logs');

const logger = log4js.getLogger('carsService');

const getAllUsers = async (req, res) => {
  const users = await getAllUserRepository(req, res);
  if (users instanceof Error) {
    logger.error(users.message);
    res.status(400).json({ message: users.message });
  } else {
    logger.info('Getting all users.');
    res.status(200).json(users);
  }
};

const getUserByDni = async (req, res) => {
  const user = await getUserByDniRepository(req, res);
  if (user instanceof Error) {
    logger.error(cars.message);
    res.status(400).json({ message: user.message });
  } else {
    logger.info('User got by dni.');
    res.status(200).json(user);
  }
};

const createUser = async (req, res) => {
  const user = await createUserRepository(req, res);
  if (user instanceof Error) {
    logger.error(car.message);
    res.status(400).json({ message: user.message });
  } else {
    logger.info('User created.')
    res.status(200).json(user);
  }
};

const updateUserPassword = async (req, res) => {
  const { lastPassword } = req.body;
  const { dni } = req.params;
  const user = await User.findOne({ where: { dni } });
  if (user.password == lastPassword) {
    const updatedUser = await updateUserPasswordRepository(req, res);
    if (updateUserPasswordRepository instanceof Error) {
      logger.error('Incorrect password');
      res.status(400);
    } else {
      logger.info('Updating user´s password.');
      res.status(200).json(updatedUser);
    }
  } else {
    throw new Error('Incorrect password');
  }
};

module.exports = { getAllUsers, getUserByDni, createUser, updateUserPassword };
