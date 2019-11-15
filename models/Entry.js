const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
  word: {
    type: String,
    required: true
  }
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;