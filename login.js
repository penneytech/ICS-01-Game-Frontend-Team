import { socket } from './script.js'


// Get the 'content' div element
const contentDiv = document.getElementById('content');

// Create a 'login' div element that holds all the elements below.
const loginDiv = document.createElement('div');
loginDiv.id = "logindiv";

// Create the username input element
const usernameInput = document.createElement('input');
usernameInput.setAttribute('type', 'text');
usernameInput.setAttribute('id', 'username');
usernameInput.setAttribute('placeholder', 'Enter Username...');
loginDiv.appendChild(usernameInput);

// Create the password input element
const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'text');
passwordInput.setAttribute('id', 'password');
passwordInput.setAttribute('placeholder', 'Enter Password...');
loginDiv.appendChild(passwordInput);

// Create the send button element & add an onclick event listener
const sendButton = document.createElement('button');
sendButton.setAttribute('id', 'sendButton');
sendButton.innerHTML = 'Connect';
loginDiv.appendChild(sendButton);

sendButton.onclick = function() {

    const usernameinput = document.getElementById("username");
    const username = usernameinput.value;
    const passwordinput = document.getElementById("password");
    const password = passwordinput.value;

    console.log("[login.js]: Sent Login Information:", username, password)

    socket.emit("login", {
        username: username,
        password: password
    })
}

// Make a div that displays a message if login fails
const loginMessageDiv = document.createElement('div');
loginMessageDiv.id = "loginmessagediv";

// Put the logindiv and messagediv into the contentdiv

contentDiv.appendChild(loginDiv);
contentDiv.appendChild(loginMessageDiv);