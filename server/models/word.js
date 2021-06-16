const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const WordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true
  },
  definition: {
    type: String,
    required: true
  },
  cats: Array,
  user: {
    type: ObjectId,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Word', WordSchema);