const router = require('express').Router();
const entryController = require('../../../controllers/entry');

router.post('/create', entryController.create);
router.put('/update/:id', entryController.update);
router.delete('/delete/:id', entryController.delete);

router.get('/all', entryController.findAll);
router.get('/random', entryController.random);
router.get('/today', entryController.today);


module.exports = router;