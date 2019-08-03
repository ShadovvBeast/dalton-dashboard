const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const sensor_data = require('./routes/sensor_data');

const app = express();
app.use(bodyParser.json());

const conf = require('./config');

app.use('/sensor_data', sensor_data);

mongoose.connect(conf.mongodb_url, {useNewUrlParser: true}).then(() => console.log('DB Connected')).catch(err => console.error(err));

app.listen(conf.server_port, () => console.log(`Server started on port ${conf.server_port}`));