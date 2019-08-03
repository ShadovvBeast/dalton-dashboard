const mongoose = require('mongoose');

const SensorDataSchema = new mongoose.Schema({
    sensor_type: {
        type: String,
        required: true
    },
    sensor_id: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    data: {
        type: Object
    }
});

module.exports = SensorData = mongoose.model('sensor_data', SensorDataSchema);