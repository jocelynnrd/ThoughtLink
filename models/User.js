const { Schema, model } = require('mongoose'); // Use this to make models

// This is the User schema (template for users)
const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true }, // Username is required, must be unique
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ }, // Must be a valid email
  thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }], // Links to their thoughts
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Links to their friends
});


userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

module.exports = model('User', userSchema); // Exports the User model
