const express = require('express');
const router = express.Router();
const pickupController = require('../Controllers/user');


router.post('/pickup', pickupController.createPickup);

module.exports = router;
