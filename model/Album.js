const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    kodeAlbum: {
        type: String
    },
    namaGroup: {
        type: String
    },
    namaAlbum: {
        type: String
    },
    tahunRilis: {
        type: String
    },
    hargaAlbum: {
        type: String
    },
    gambar :{
        type: String
    }
})

module.exports = mongoose.model( 'album', userSchema)