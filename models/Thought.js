const { Schema, model } = require('mongoose'); // Use this to make models
const reactionSchema = require('./Reaction'); // Bring in the Reaction schema


const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 }, // Text must be between 1-280 characters
  createdAt: { type: Date, default: Date.now }, // Saves the time when the thought is made
  username: { type: String, required: true }, 
  reactions: [reactionSchema],
});

// Adds a reactionCount field that counts how many reactions the thought has
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

module.exports = model('Thought', thoughtSchema); 
