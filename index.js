const express = require('express')
const app = express()
// const port = 3000
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);
// app.use(express.static(__dirname))
// app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// app.get('/style.css', function (req, res) {
//     res.sendFile(__dirname + "/" + '/style.css');
// })

io.on('connection', (socket) => {
    console.log(`a user connected`);
})

server.listen(5000, () => {
    console.log('Listening on *:5000')
})