const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    word:{
        type: String,
        required: true
    }
})

const Word = mongoose.model('WORD', wordSchema);

module.exports = Word;