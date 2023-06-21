const express = require('express')
const router = express.Router();

const newsController = require('../app/controller/NewController');

router.use('/bun', newsController.show);

router.use('/', newsController.index);
// if /news/anything --> showw

module.exports = router;