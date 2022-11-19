const mongoose = require('mongoose');

const singerSchema = new mongoose.Schema({
    name: String,
    hometown: String
})

const Singer = mongoose.model('Singer', singerSchema);

module.exports = Singer;