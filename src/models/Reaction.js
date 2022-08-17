const { Schema, model } = require('mongoose');
const formatDate = require('../utils');


const reactionSchema = new Schema = ({
  username: {
    type: String,
    required: true
  }, 
  reactionBody : {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
    trim: true,
  },
  createdAt : {
    Date: Date,
    required: true,
    trim: true,
    default: Date.now,
    get: formatDate,
}
},
{ toJSON: { getters: true } }
);

const Reaction = model("Reaction", reactionSchema);

module.exports = Reaction;