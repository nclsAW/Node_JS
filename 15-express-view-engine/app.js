const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const app = express()
const port = 3000

// Gunakan EJS
app.set('view engine', 'ejs')

// Third-party Middleware
app.use(expressLayouts)
app.use(morgan('dev'))

// Built-in Middleware
app.use(express.static('public'))

// Application Level Middeware
app.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

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
    res.render('contact', {
        layout: 'layouts/main',
        title: 'Ini halaman Contact'
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