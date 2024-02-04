const fs = require('fs');

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

// Ambil semua data di contacts.json
const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)
    return contacts
}

// Cari kontak berdasarkan nama
const findContact = (nama) => {
    const contacts = loadContact()
    
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
    return contact
}

module.exports = {loadContact, findContact}