const mongoose = require('mongoose');

var newsLetterEmail = new mongoose.Schema({
    email: { type: String },
})

module.exports = mongoose.model('NewsLetter', newsLetterEmail, 'newsLetterEmail');