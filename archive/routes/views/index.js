var router = require('express').Router();

router.get('/', function (req, res) {
  res.render('home', {
    word: "lemons"
  })
});

module.exports = router;
