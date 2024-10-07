const router = require('express').Router();

const listController = require('../controllers/list/listController');


router.post('/register', listController.create);
router.post('/update/:id', listController.update);
router.delete('/delete/:id', listController.delete);
router.get('/list', listController.find);
// router.get('/listdrivers', listController.findDrivers);
//query params 





module.exports = router;

