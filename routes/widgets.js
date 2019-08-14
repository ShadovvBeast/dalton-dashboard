const express = require('express');
const router = express.Router();

// SensorData Model
const Widget = require('../models/Widget');


// @route GET sensor_data
// @desc Get sensor data
// @access Public
router.get('/', (req, res) => Widget.find().then(items => res.json(items)));
router.post('/', (req, res) => Widget.findById((err, widget) => {
    if(err)
        res.status(500).send(err);
    widget.size = req.body.size;
    widget.save((widget) => res.send(widget));
}))
module.exports = router;