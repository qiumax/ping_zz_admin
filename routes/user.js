var express = require('express');
var router = express.Router();
var userController = require("../controllers/UserController.js");

router.get('/userlist', userController.userlist);

router.get('/edit', userController.edit);

router.post('/update', userController.update);

router.post('/search', userController.search);

router.get('/paid', userController.paid)

router.get('/interested', userController.interested)

module.exports = router;
