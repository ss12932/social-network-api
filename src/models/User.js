const { Schema, model } = require('mongoose');
const { validateEmail } = require('../utils');
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please enter a valid Email Address'],
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    toJSON: { virtuals: true },
  },
  { toObject: { virtuals: true } }
);

userSchema.virtual('friendsCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
