const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const {loadContact, findContact, addContact, cekDuplikat} = require('./utils/contacts')
const {body, validationResult, check} = require('express-validator')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

const app = express()
const port = 3000

// Gunakan EJS
app.set('view engine', 'ejs')

// Third-party Middleware
app.use(expressLayouts)

// Built-in Middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// Konfigurasi flash
app.use(cookieParser('secret'))
app.use(session({
    cookie: {maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Okis',
            email: 'okis@student.ac.id'
        },
        {
            nama: 'Dodi',
            email: 'dodi@student.ac.id'
        },
        {
            nama: 'erik',
            email: 'erik@student.ac.id'
        }
    ]
    res.render('index', {
        layout: 'layouts/main',
        nama: 'Okis Sienah', 
        title: 'Halaman Index',
        mahasiswa
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main',
        title: 'Ini halaman About'
    })
})

app.get('/contact', (req, res) => {
    const contacts = loadContact()
    
    res.render('contact', {
        layout: 'layouts/main',
        title: 'Ini halaman Contact',
        contacts,
        msg: req.flash('msg')
    })
})

// Halaman form tambah data
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: 'Form Tambah Data Contact',
        layout: 'layouts/main'
    })
})

// Proses data contact
app.post('/contact', [
    body('nama').custom((value) => {
        const duplikat = cekDuplikat(value)
        if(duplikat) {
            throw new Error('Nama kontak sudah digunakan!')
        }
        return true
    }),
    check('email', 'Email tidak valid!').isEmail(),
    check('noHP', 'No HP tidak valid!').isMobilePhone('id-ID')
], (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(400).json({errors: errors.array()})
        res.render('add-contact', {
            title: 'Form Tambah Data Kontak',
            layout: 'layouts/main',
            errors: errors.array()
        })
    } else {
        addContact(req.body)
        // Kirim flash message
        req.flash('msg', 'Data kontak berhasil ditambahkan!')

        res.redirect('/contact')
    }
})

// Halaman detail kontak
app.get('/contact/:nama', (req, res) => {
    const contact = findContact(req.params.nama)
    
    res.render('detail', {
        layout: 'layouts/main',
        title: 'Halaman Detail Contact',
        contact
    })
})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`)
})

app.use('/', (req, res) => {
    res.status(404)
    res.render('404')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})