const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const CatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  wordclass: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  color: String,
  breed: String,
  user: {
    type: ObjectId,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Cat', CatSchema);