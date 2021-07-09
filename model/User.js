const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nama: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    notlp: {
        type: String
    },
    role: {
        type: Number
    }
})

module.exports = mongoose.model( 'users', userSchema)