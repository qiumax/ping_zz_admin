var express = require('express');
var router = express.Router();
var pingController = require("../controllers/PingController.js");

// admin
router.get('/pinging', pingController.pinging);
router.get('/toProcess', pingController.toProcess);
// router.get('/toRefund', pingController.toRefund);
router.get('/processed', pingController.processed);
// router.get('/refunded', pingController.refunded);

module.exports = router;