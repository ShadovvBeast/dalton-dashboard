const mongoose = require('mongoose');

const WidgetSchema = new mongoose.Schema({
    widget_name: {
        type: String,
    },
    sensor_ids: {
        type: Array
    },
    graph_type: {
        type: String
    },
    size: {
        type: Object
    },
    location: {
        type: Object
    }
});

module.exports = Widget = mongoose.model('widget', WidgetSchema);