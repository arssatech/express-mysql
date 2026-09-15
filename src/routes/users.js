const express = require('express');
const UsersController = require('../controller/users.js');
const router = express.Router();

router.get('/', UsersController.getAllUsers);

router.post('/', UsersController.createNewUser);

module.exports = router;