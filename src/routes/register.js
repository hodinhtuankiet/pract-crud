const express = require('express')
const router = express.Router();

const registerController = require('../app/controller/RegisterController.js');

router.post('/', registerController.registerUser);
// if /news/anything --> showw

module.exports = router;