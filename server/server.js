const express = require('express');
const http = require('http');

const app = express();
console.log( __dirname );
const clientPath = `client`;
app.use(express.static(clientPath));
const server = http.createServer(app);
const io = require('socket.io')(server);
let counter = 0;

server.listen(8080, () =>{
    console.log(counter+'someone connected on port 8080');
    // console.log("io ");
    // io.connect();
});

io.on('connection', (socket) => {
    console.log(counter+'someone connected');
    socket.on('sendToAll', (message) =>{
        io.emit("displayMessage", (message));
    });
});

