// Mengambil argument dari command line
const yargs = require('yargs')
const contacts = require('./contact')

yargs.command({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'No HP',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP)
    }
}).demandCommand()

yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama & no HP contact',
    handler() {
        contacts.listContact()
    }
})

// Menampilkan detail kontak

yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah kontak',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.detailContact(argv.nama)
    }
})

// Menghapus kontak berdasarkan nama

yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.deleteContact(argv.nama)
    }
})

yargs.parse()