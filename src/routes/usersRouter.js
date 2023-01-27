const {
  getAllUsersController,
  getUserByDniController,
  createUserController,
  updateUserPasswordController,
} = require('../controllers/userController');

const router = require('express').Router();

router.get('/', getAllUsersController);
router.get('/:dni', getUserByDniController);
router.post('/', createUserController);
router.patch('/:dni', updateUserPasswordController);

module.exports = router;
