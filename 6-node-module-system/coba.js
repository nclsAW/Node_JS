// Synchronous

// const getUserSync = (id) => {
//     // let nama = ''
//     // if(id === 1) {
//     //     nama = 'Okis'
//     // } else {
//     //     nama = "Budi"
//     // }
//     const nama = id === 1 ? 'Okis' : "Budi"

//     return {id, nama}
// }

// const userSatu = getUserSync(1)
// console.log(userSatu)

// const userDua = getUserSync(2)
// console.log(userDua)

// const halo = 'Hello World'
// console.log(halo)

// Asynchronous

// const getUser = (id, callback) => {
//     const time = id === 1 ? 3000 : 2000
//     setTimeout(() => {
//         const nama = id === 1 ? 'Okis' : 'Budi'
//         callback({id, nama})
//     }, time)
// }

// const userSatu = getUser(1, (hasil) => {
//     console.log(hasil)
// })

// const userDua = getUser(2, (hasil) => {
//     console.log(hasil)
// })

// const halo = 'Hello World'
// console.log('selesai')

function cetakNama(nama, umur) {
    return  `Halo nama saya ${nama}, dan saya berumur ${umur} tahun.`
}

const PI = 3.14

const mhs = {
    nama: 'Okis',
    umur: 20,
    cetakMhs() {
        return `Halo nama saya ${this.nama}, saya berumur ${this.umur} tahun.`
    }
}

class Orang {
    constructor() {
        console.log('Objek orang telah dibuat')
    }
}

// module.exports.cetakNama = cetakNama
// module.exports.PI = PI
// module.exports.mhs = mhs
// module.exports.Orang = Orang

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mhs: mhs,
//     Orang: Orang
// }

module.exports = {cetakNama, PI, mhs, Orang}