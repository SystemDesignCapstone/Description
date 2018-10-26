const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/description');

const db = mongoose.connect(mongoUri)

module.exports.save = save;