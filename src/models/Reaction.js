const { Schema, model } = require('mongoose');
const { format } = require('date-fns');

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
    default: new Date(),
    get: (value) => format(new Date(value), "yyyy-MM-dd'T'HH:mm:ss"),
}
},
{ toJSON: { getters: true } }
);

const Reaction = model("Reaction", reactionSchema);

module.exports = Reaction;