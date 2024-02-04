const http = require('http')
const fs = require('fs')
const port = 3000

const html = (path, res) => {
    fs.readFile(path , (err, data) => {
        if(err) {
            res.writeHead(404)
            res.write('Error: File not found!')
        } else {
            res.write(data)
        }
        res.end()
    })
}

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    
    const url = req.url
    if(url === '/about') {
        html(`./about.html`, res)
    } else if(url === '/contact') {
        html(`./contact.html`, res)
    } else {
        // res.write(`Hello World!`)
        html(`index.html`, res)
    }

}).listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})