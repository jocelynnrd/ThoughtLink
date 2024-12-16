const { Schema, Types } = require('mongoose'); // Use this to make schemas

// This is the Reaction schema (used inside thoughts)
const reactionSchema = new Schema({
  reactionId: { type: Types.ObjectId, default: () => new Types.ObjectId() }, 
  reactionBody: { type: String, required: true, maxlength: 280 }, // Reaction text (max 280 chars)
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }, // Time when the reaction was made
});

module.exports = reactionSchema; 
