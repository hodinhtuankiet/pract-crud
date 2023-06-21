const express = require('express')
const router = express.Router();

const loginController = require('../app/controller/LoginController.js');

router.post('/refresh', loginController.requestRefreshToken);
router.post('/', loginController.loginUser);


// if /news/anything --> showw

module.exports = router;