const express = require('express')
const app = express()
// const port = 3000
const http = require('http')
const server = http.createServer(app)

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

server.listen(5000, () => {
    console.log('Listening on *:5000')
})