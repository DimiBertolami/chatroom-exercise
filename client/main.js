console.log("Javascript is linked");
/* Defining the nodejs server socket clientside */
let socket = io.connect();
/*On click of a button, do an emit to the server.*/
/*Get all buttons*/
const btnSendToAll = document.getElementById("send-to-all");
const btnSendToMe = document.getElementById("send-to-me");
/*Get user input field*/
const userInput = document.getElementById("user-input");
/*Get the target field*/
const target = document.getElementById("target");
/*Add event listeners*/
btnSendToAll.addEventListener("click", () => {
    /*Get the message from the inputfield*/
    const message = userInput.value;
    /*Tell server we have a message to send to everyone :D*/
    socket.emit("sendToAll", message);
});
btnSendToMe.addEventListener("click", () => {
    /*Get the message from the inputfield*/
    const message = userInput.value;
    /*Tell server we have a message only ment for me!*/
    socket.emit("sendToMe", message);
});
/*Listen to the socket for a request called displayMessage*/
/*and execute an arrow function */
socket.on("displayMessage", (message) => {
    /*Show the returned message in the browser console*/
    console.log(`Received from server:${message}`);
    /*Create an element to hold the received message*/
    const messageParagraph = document.createElement("p");
    /*Put the received message within the <p> element */
    messageParagraph.innerText = message;
    /*Append the element to our target container */
    target.appendChild(messageParagraph);
});
/*Listen to the socket for a request called displayPrivateMessage and execute a funciton/ */
socket.on("displayPrivateMessage", (message) => {
    /*Show the returned message in the browser console*/
    console.log(`Received from the server ${message}`);
    /*Create an element to hold the received message*/
    const messageParagraph = document.createElement("p");
    /*Put the received message within the <p> element */
    messageParagraph.innerText = message + "  (This message is private)";
    /*Append the element to our target container */
    target.appendChild(messageParagraph);
});
