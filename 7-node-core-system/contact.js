const fs = require('fs');
const chalk = require('chalk')
const validator = require('validator')

// Membuat directory jika tidak ada
const dirPath = './data'
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

// Membuat file json jika tidak ada
const filePath = './data/contacts.json'
if(!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
}

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)
    return contacts
}

const simpanContact = (nama, email, noHP) => {
    const contact = {nama, email, noHP}
    const contacts = loadContact()

    // Cek duplikat
    const duplikat = contacts.find((contact) => contact.nama === nama)
    if(duplikat) {
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar! Gunakan nama lain!'))
        return false
    }

    // Cek email
    if(email) {
        if(!validator.isEmail(email)) {
            console.log(chalk.red.inverse.bold('Email tidak valid!'))
            return false
        }
    }

    if(!validator.isMobilePhone(noHP, 'id-ID')) {
        console.log(chalk.red.inverse.bold('No HP tidak valid!'))
        return false
    }

    contacts.push(contact)

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

    console.log(chalk.green.inverse.bold('Terima kasih sudah memasukkan data.'))
}

const listContact = () => {
    const contacts = loadContact()
    console.log(chalk.cyan.inverse.bold('Daftar Kontak : '))
    contacts.forEach((contact, i) => {
        console.log(`${i+1}. ${contact.nama} - ${contact.noHP}`)
    })
}

const detailContact = (nama) => {
    const contacts = loadContact()
    console.log(chalk.cyan.inverse.bold('Detail Kontak : '))
    
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())

    if(!contact) {
        console.log(chalk.red.inverse.bold(`${nama} ini tidak ditemukan`))
        return false
    }

    console.log(chalk.cyan.inverse.bold(contact.nama))
    console.log(chalk.cyan.inverse.bold(contact.noHP))
    if(contact.email) {
        console.log(chalk.cyan.inverse.bold(contact.email))
    }
}

const deleteContact = (nama) => {
    const contacts = loadContact()

    const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase())

    if(contacts.length === newContacts.length) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan.`))
        return false
    }

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts))

    console.log(chalk.green.inverse.bold(`Data contact ${nama} berhasil dihapus!`))
}

module.exports = {simpanContact, listContact, detailContact, deleteContact}