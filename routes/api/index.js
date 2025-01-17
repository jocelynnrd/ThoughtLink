const router = require('express').Router(); 
const userRoutes = require('./userRoutes'); 
const thoughtRoutes = require('./thoughtRoutes'); 

router.use('/users', userRoutes); // Routes for /api/users
router.use('/thoughts', thoughtRoutes);

module.exports = router; 
