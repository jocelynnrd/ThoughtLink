const router = require('express').Router(); 
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought } = require('../../controllers/thoughtController');

// Route to get all thoughts or add a new thought
router.route('/').get(getThoughts).post(createThought);

// Route to get, update, or delete one thought by ID
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router; 
