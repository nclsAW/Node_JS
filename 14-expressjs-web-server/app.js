const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    //   res.send('Hello World')
    // res.json({
    //     nama: 'Okis',
    //     email: 'okis@student.ac.id',
    //     noHP: '085832412543'
    // })
    res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
//   res.send('Ini adalah halaman about!')
    res.sendFile('./about.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
    // res.send('Ini adalah halaman contat!')
    res.sendFile('./contact.html', {root: __dirname})
})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`)
})

app.use('/', (req, res) => {
    res.status(404)
    // res.send(`<h1> 404 Error Page not Found</h1>`)
    res.sendFile('./404.html', {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})