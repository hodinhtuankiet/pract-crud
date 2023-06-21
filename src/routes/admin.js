const express = require('express')
const router = express.Router();

const AdminController = require('../app/controller/AdminController.js');

router.post('/', AdminController.store);


// if /news/anything --> showw

module.exports = router;