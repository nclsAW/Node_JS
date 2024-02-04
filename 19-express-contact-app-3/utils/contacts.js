const { filter } = require('benchmark');
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

// Menimpa file contacts.json dengan data yang baru
const saveContacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
}

// Add Function addContact()
const addContact = (contact) => {
    const contacts = loadContact()
    contacts.push(contact)
    saveContacts(contacts)
}

// Cek nama yang duplikat

const cekDuplikat = (nama) => {
    const contacts = loadContact()
    return contacts.find((contact) => contact.nama === nama)
}

// Menghapus kontak
const deleteContact = (nama) => {
    const contacts = loadContact()
    const filteredContacts = contacts.filter((contact) => contact.nama !== nama)

    saveContacts(filteredContacts)
}

// Mengubah Kontak
const updateContacts = (contactBaru) => {
    const contacts = loadContact()

    // Hilangkan kontak lama yang namanya sama dengan oldNama
    const filteredContacts = contacts.filter((contact => contact.nama !== contactBaru.oldNama))

    delete contactBaru.oldNama
    filteredContacts.push(contactBaru)
    saveContacts(filteredContacts)
}

module.exports = {loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts}