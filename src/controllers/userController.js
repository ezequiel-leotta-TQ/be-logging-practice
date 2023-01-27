const {
  getAllUsers,
  getUserByDni,
  createUser,
  updateUserPassword,
} = require('../services/userServices');

const getAllUsersController = async (req, res, next) => {
  try {
    await getAllUsers(req, res);
    next();
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

const getUserByDniController = async (req, res, next) => {
  try {
    await getUserByDni(req, res);
    next();
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

const createUserController = async (req, res, next) => {
  try {
    const { dni, name, surname, userName, password } = req.body;
    if (dni && name && surname && userName && password)
      await createUser(req, res);
    else res.status(400).send('Missing value');
    next();
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

const updateUserPasswordController = async (req, res, next) => {
  try {
    await updateUserPassword(req, res);

    next();
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

module.exports = {
  getAllUsersController,
  getUserByDniController,
  createUserController,
  updateUserPasswordController,
};
