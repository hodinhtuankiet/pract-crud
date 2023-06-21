const express = require('express')
const router = express.Router();

const siteController = require('../app/controller/SiteController');

router.use('/search', siteController.show);

// router.use('/register', siteController.register); 

router.use('/', siteController.index);

// if /news/anything --> showw

module.exports = router;