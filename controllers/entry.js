const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Entry.find({ }).then(dbEntries => {
      res.json(dbEntries);
    }).catch(err => {
      res.json({
        type: 'error',
        message: err,
        source: 'mongoose'
      });
      console.err(err);
    });
  },
  create: (req, res) => {
    db.Entry.create(req.body).then(dbEntry => {
      res.json(dbEntry);
    }).catch(err => {
      res.json({
        type: 'error',
        message: err,
        source: 'mongoose'
      });
      console.err(err);
    });
  },
  delete: (req, res) => {
    db.Entry.remove({ _id: req.params.id }).then(function(dbEntry) {
      res.json(dbEntry);
    }).catch(err => {
      res.json({
        type: 'error',
        message: er,
        source: 'mongoose'
      });
      console.err(err);
    });
  },
  update: (req, res) => {
    db.Entry.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbEntry) {
      res.json(dbEntry);
    }).catch(err => {
      res.json({
        type: 'error',
        message: err,
        source: 'mongoose'
      });
      console.err(err);
    });
  },
  today: (req, res) => {
    db.Entry.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbEntry) {
      res.json(dbEntry);
    }).catch(err => {
      res.json({
        type: 'error',
        message: err,
        source: 'mongoose'
      });
      console.err(err);
    });
  },
  random: (req, res) => {
    db.Entry.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbEntry) {
      res.json(dbEntry);
    }).catch(err => {
      res.json({
        type: 'error',
        message: err,
        source: 'mongoose'
      });
      console.err(err);
    });
  }
};