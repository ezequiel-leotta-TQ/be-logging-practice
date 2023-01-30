const {
  getAllUsers,
  getUserByDni,
  createUser,
  updateUserPassword,
} = require('../services/userServices');
const log4js = require('../logs');

const logger = log4js.getLogger('usersController');

const getAllUsersController = async (req, res, next) => {
  try {
    await getAllUsers(req, res);
    next();
  } catch (e) {
    logger.trace(e);
  }
};

const getUserByDniController = async (req, res, next) => {
  try {
    await getUserByDni(req, res);
    next();
  } catch (e) {
    logger.trace(e);
  }
};

const createUserController = async (req, res, next) => {
  try {
    const { dni, name, surname, userName, password } = req.body;
    if (dni && name && surname && userName && password)
      await createUser(req, res);
    else {
      logger.error('Missing value');
      res.status(400).send('Missing value');
    }
    next();
  } catch (e) {
    logger.trace(e);
  }
};

const updateUserPasswordController = async (req, res, next) => {
  try {
    await updateUserPassword(req, res);

    next();
  } catch (e) {
    logger.trace(e);
  }
};

module.exports = {
  getAllUsersController,
  getUserByDniController,
  createUserController,
  updateUserPasswordController,
};
