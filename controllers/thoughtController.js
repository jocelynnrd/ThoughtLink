const Thought = require('/models/Thought'); // Import Thought model
const User = require('../models/User'); // Import User model

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findById(req.params.thoughtId)
      .then((thought) => (thought ? res.json(thought) : res.status(404).json({ message: 'No thought with that ID' })))
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        // Add the thought to the user's thoughts array
        return User.findByIdAndUpdate(
          req.body.userId,
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) => (user ? res.json({ message: 'Thought created!' }) : res.status(404).json({ message: 'User not found' })))
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true })
      .then((thought) => (thought ? res.json(thought) : res.status(404).json({ message: 'No thought with that ID' })))
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    Thought.findByIdAndDelete(req.params.thoughtId)
      .then((thought) =>
        thought
          ? User.findByIdAndUpdate(
              thought.userId,
              { $pull: { thoughts: thought._id } },
              { new: true }
            )
          : res.status(404).json({ message: 'No thought with that ID' })
      )
      .then(() => res.json({ message: 'Thought deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};
