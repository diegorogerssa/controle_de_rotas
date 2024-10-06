const router = require('express').Router();
const listRouter = require('./listRouter');

router.use('/', listRouter);

module.exports = router;