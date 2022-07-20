
document.getElementById('sendAll').addEventListener('click', function (){
    // alert('you da man!');
    whut = document.getElementById('sayWut').value;
    console.log('You Da Man!', whut);
    let socket = io.connect();
    let newChild = document.createElement('h3');
    newChild.textContent=whut;
    let addTarget = document.getElementById('target').appendChild(newChild);
    socket.on('displayMessage', (message) => {
        target.innerHTML += '<br>'+message;
    });
})



function send(that){
    msg= document.createElement('span');
    msg.innerHTML = that.value;
    msg.innerText = that.value;
    msg.textContent = that.value;
    msg.value = that.value;
    document.getElementById('target').appendChild(msg);
}

function banana(){
    img= document.createElement('img');
    img.src   = "banana.gif";
    img.alt   = "bananaman";
    img.title = "here's your banana";
    alert(img.src);
    document.getElementById('target').appendChild(img);
}