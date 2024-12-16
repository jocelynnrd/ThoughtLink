const router = require('express').Router(); 
const { getUsers, getSingleUser, createUser, updateUser, deleteUser } = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

// Route to get, update, or delete one user by ID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router; 
