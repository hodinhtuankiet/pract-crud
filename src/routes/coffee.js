const express = require('express');
const router = express.Router();
const coffeeController = require('../app/controller/CoffeeController');

router.use('/create', coffeeController.create);

router.post('/store', coffeeController.store);


router.use('/:id/edit', coffeeController.edit);

router.put('/:id', coffeeController.update);

router.delete('/:id', coffeeController.delete);

router.use('/:slug', coffeeController.show);
// if /news/anything --> showw

module.exports = router;
