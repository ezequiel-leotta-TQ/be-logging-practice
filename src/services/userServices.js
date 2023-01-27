const {
  getAllUserRepository,
  getUserByDniRepository,
  createUserRepository,
  updateUserPasswordRepository,
} = require('../repository/userRepository');
const User = require('../models/user');

const getAllUsers = async (req, res) => {
  const users = await getAllUserRepository(req, res);
  if (users instanceof Error) {
    res.status(400).json({ message: users.message });
  } else {
    res.status(200).json(users);
  }
};

const getUserByDni = async (req, res) => {
  const user = await getUserByDniRepository(req, res);
  if (user instanceof Error) {
    res.status(400).json({ message: user.message });
  } else {
    res.status(200).json(user);
  }
};

const createUser = async (req, res) => {
  const user = await createUserRepository(req, res);
  if (user instanceof Error) {
    res.status(400).json({ message: user.message });
  } else {
    res.status(200).json(user);
  }
};

const updateUserPassword = async (req, res) => {
  const { lastPassword } = req.body;
  const { dni } = req.params;
  const user = await User.findOne({ where: { dni } });
  if (user.password == lastPassword) {
    const updatedUser = await updateUserPasswordRepository(req, res);
    if (updateUserPassword instanceof Error) {
      res.status(400);
    } else {
      res.status(200).json(updatedUser);
    }
  } else {
    throw new Error('Incorrect password');
  }
};

module.exports = { getAllUsers, getUserByDni, createUser, updateUserPassword };
