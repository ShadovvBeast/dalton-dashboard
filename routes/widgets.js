const express = require('express');
const router = express.Router();

// SensorData Model
const Widget = require('../models/Widget');


// @route GET sensor_data
// @desc Get sensor data
// @access Public
router.get('/', (req, res) => Widget.find().then(items => res.json(items)));
router.post('/', (req, res) => Widget.findByIdAndUpdate(req.body.id, 
                                                        {$set: {size: req.body.size}}, 
                                                        {upsert: true, new: true},
                                                        (err, widget) => err ? res.status(500).send(err) : 
                                                                               res.send(widget)));
module.exports = router;