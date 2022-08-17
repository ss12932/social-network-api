const { Schema, model } = require('mongoose');
const formatDate = require('../utils');

const thoughtSchema = new Schema = ({
  username: {
    type: String,
    required: true
  }, 
  thoughtText : {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
  createdAt : {
    Date: Date,
    required: true,
    trim: true,
    default: Date.now,
    get: formatDate,
}, 
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reaction",
    }
  ],
},
{ toJSON: { virtuals: true, getters: true } },
{ toObject: { virtuals: true } }
);

thoughtSchema.virtual("reactionsCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;