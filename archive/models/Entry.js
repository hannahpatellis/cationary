const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
  word: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  definition: {
    type: String,
    required: true
  },
  associatedCats: {
    type: String,
    required: false
  },
  timeAdded: {
    type: Date,
    required: true
  }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;