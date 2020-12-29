const mongoose = require('mongoose');

var contact = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    message: { type: String },
})

module.exports = mongoose.model('Contact', contact, 'contact');