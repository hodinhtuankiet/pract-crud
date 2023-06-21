const express = require('express')
const router = express.Router();

const userController = require('../app/controller/UserController.js');
const middlewareController = require('../app/controller/middlewareController.js')


// GET all user 
router.get('/', middlewareController.verifyToken, userController.getAllUser);
// DELETE user by id 
// /user/:id
router.delete('/:id', middlewareController.verifyTokenAndAdminAuthen, userController.deleteUser);

module.exports = router;