const express = require('express');
const router = express.Router();
const meController = require('../app/controller/MeController');

router.get('/stored/coffee', meController.storedCoffee);
// if /news/anything --> showw

module.exports = router;
