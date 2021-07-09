const mongoose = require('mongoose')

const TransaksiSchema = mongoose.Schema({
  username: {
    type: String
  },
  namaAlbum: {
    type: String
  },
  namaGroup: {
    type: String
  },
  Harga: {
    type: String
  },
  Jumlah: {
    type: String
  },
  Total: {
    type: String
  }
})

module.exports = mongoose.model('transaksi', TransaksiSchema)