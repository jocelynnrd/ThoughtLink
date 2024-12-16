const User = require('../models/User'); // Import User model

module.exports = {
  getUsers(req, res) {
    User.find().then((users) => res.json(users)).catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findById(req.params.userId).then((user) => res.json(user)).catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body).then((user) => res.json(user)).catch((err) => res.status(500).json(err));
  },
  updateUser(req, res) {
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  deleteUser(req, res) {
    User.findByIdAndDelete(req.params.userId).then(() => res.json({ message: 'User deleted' })).catch((err) => res.status(500).json(err));
  },
};
