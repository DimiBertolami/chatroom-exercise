/*We will use express and http to make it easy to host our client*/
const express = require('express');
const http = require('http');

/*Defining WebApp*/
const app = express();

/*Give our client path to app*/
const clientPath = `${__dirname}/../client`;
/*Use express JS to host the client*/
app.use(express.static(clientPath));
/*Use http to serve the Express app*/
const server = http.createServer(app);
/*Make server listen on localhost*/
const PORT = 8080;
server.listen(PORT, () => {
    console.log("server running on " + PORT);
});
const io = require('socket.io')(server);

/* Execute arrow function on connection */
let counter = 0;
io.on('connection', (socket) => {
    console.log('The server received: ' + counter + ' connections so far.');
    counter++
});
25
i
/*React to buttons clicked on clientside*/
/*This is an observer that waits until the message "sendToAll" gets passed to the server.*/
socket.on("sendToAll", (message) => {
    /*Show the message in the server console*/
    console.log(`Received from client ${message}`);
    /*Send displayMessage to all clients and attach message*/
    io.emit("displayMessage", message);
});
socket.on("sendToMe", (message) => {
//Show the message in the server console
    console.log(`Received from client ${message}`);
    /*The user wants to keep this ""private"" so we return this message trough the socket the client gave us*/
    socket.emit("displayPrivateMessage", message);
});

