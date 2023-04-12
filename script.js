import './login.js'

// Connect to the server
export const socket = io(
    "https://ics-01-game-studio-backend-team.ics3uc-2023s-01.repl.co"
);

// Actions that happen when the connection is established
socket.on("connect", () => {
    console.log("Connected to server");

    // Identify with server
    socket.emit("ident", "client");
});

// When a message is received from the server
socket.on("message", (message) => {
    console.log("Received message:", message);
});

// When a login fails, receive a message from the server
socket.on("loginFailed", (message) => {
    console.log("Received message:", message);
    let loginMessageDiv = document.getElementById('loginmessagediv');
    loginMessageDiv.innerHTML = message;
});

// When a login succeeds, fetch the gameHTML and start the game
socket.on("loginSucceed", (message) => {
    console.log("Received message:", message);

    // Fetch the game to start playing
    
    fetch('game/game.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            console.error(error);
            document.getElementById('content').innerHTML = '<p>Sorry, we could not load the game at this time.</p>';
        });


});

