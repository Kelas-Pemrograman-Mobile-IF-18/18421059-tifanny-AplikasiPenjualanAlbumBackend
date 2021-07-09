const album = require('../model/Album.js')
const response = require('../config/response')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.inputDataAlbum = (data, gambar) =>
    new Promise(async (resolve, reject) => {

        const albumBaru = new album({
            kodeAlbum: data.kodeAlbum,
            namaGroup: data.namaGroup,
            namaAlbum: data.namaAlbum,
            tahunRilis: data.tahunRilis,
            hargaAlbum: data.hargaAlbum,
            gambar : gambar
        })

        await album.findOne({kodeAlbum: data.kodeAlbum})
            .then(album => {
                if(album){
                    reject(response.commonErrorMsg('Kode buku sudah ada'))
                } else {
                    albumBaru.save()
                      .then(r => {
                        resolve(response.commonSuccessMsg('Berhasil input data'))
                    }).catch(err => {
                      reject(response.commonErrorMsg('Gagal input data'))
                    })
                }
            }).catch(err =>{
            reject(response.commonErrorMsg('Terjadi kesalahan pada server kami'))
        })

    })


exports.lihatDataAlbum = () =>
    new Promise(async (resolve, reject) => {
        await album.find({})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject(response.commonErrorMsg('Terjadi kesalahan pada server kami')))
    })

exports.lihatDetailDataAlbum = (id) =>
    new Promise(async (resolve, reject) => {
        await album.findOne({_id: ObjectId(id)})
            .then(result => {
                resolve(response.commonResult(result))
            })
            .catch(() => reject(response.commonErrorMsg('Terjadi kesalahan pada server kami')))
    })

exports.updateAlbum = (id, data, gambar) =>
    new Promise(async (resolve, reject) => {
       await album.updateOne(
            {_id: ObjectId(id)},
            {
                $set: {
                    kodeAlbum: data.kodeAlbum,
                    namaGroup: data.namaGroup,
                    namaAlbum: data.namaAlbum,
                    tahunRilis: data.tahunRilis,
                    hargaAlbum: data.hargaAlbum,
                    gambar : gambar
                }
            }
        ).then(album => {
            resolve(response.commonSuccessMsg('Berhasil mengubah data'))
        }).catch(err => {
            reject(response.commonErrorMsg('Terjadi kesalahan pada server kami'))
        })
    })

exports.hapusAlbum = (_id) =>
    new Promise(async (resolve, reject) => {
        await album.remove({_id: ObjectId(_id)})
            .then(() => {
                resolve(response.commonSuccessMsg('Berhasil meghapus data'))
            }).catch(() => {
                reject(response.commonSuccessMsg('Gagal menghapus data'))
            })
    })