const express = require('express');
const router = express.Router();

// SensorData Model
const SensorData = require('../models/SensorData');


// @route GET sensor_data
// @desc Get sensor data
// @access Public
router.get('/', (req, res) => {
    SensorData.find().sort({timestamp: -1}).then(items => res.json(items));
});

module.exports = router;