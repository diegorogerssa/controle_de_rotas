const router = require('express').Router();

const listController = require('../controllers/list/listController');


router.post('/register-list', listController.create);
router.delete('/delete/:id', listController.delete);
router.get('/list', listController.findAll);
router.post('/list-update/:id', listController.update);
// router.get('/listdrivers', listController.findDrivers);
//query params 





module.exports = router;

