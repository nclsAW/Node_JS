// Mengambil argument dari command line


// const command = process.argv[2]
const yargs = require('yargs')

// SEBELUM MENGGUNAKAN YARGS
// if(command === 'add') {

// } else if(commandd === 'remove') {
    
// } else if(command === 'list') {

// }

console.log(yargs.argv)

// const contacts =  require('./contact')

// const main = async () => {
//     const nama = await contacts.tulisPertanyaan('Masukkan nama anda : ')
//     const email = await contacts.tulisPertanyaan('Masukkan email anda : ')
//     const noHP = await contacts.tulisPertanyaan('Masukkan no HP anda : ')

//     contacts.simpanContact(nama, email, noHP)
// }

// main()