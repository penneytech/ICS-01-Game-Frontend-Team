/*
This code connects to the server and sets the socket global variable using the io function from the 'socket.io-client' module.
*/

// File and function imports
import { getGlobal, setGlobal } from '../globals.js';
import loginFail from './loginFail.js';
import loginSucceed from './loginSucceed.js';

// Connect to the server and set the socket global variable

//const socket = io("https://ics-01-game-studio-backend-team-1.eliedagher.repl.co");
const socket = io('https://ics-01-game-backend-team.paulpenney.repl.co');
//const socket = io('http://localhost:3000');

import updateFood from './updateFood.js';
import foodInit from './foodInit.js';
import opponentMovement from '../opponent/opponentMovement.js';
import { generateLeaderboard } from '../pages/generateLeaderboard.js';
import { initopponents } from './initOpponents.js';
import opponentRemove from '../opponent/opponentRemove.js';
import generateUserStats from '../pages/generateUserStats.js'

// Set the socket global variable
setGlobal('socket', socket);

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

// When a login fails,  
socket.on("loginFailed", (message) => {
    loginFail(message);
});

// When a login succeeds, fetch the gameHTML and start the game
socket.on("loginSucceed", (message) => {
    loginSucceed(message);
});

// When a message is received from the server
socket.on("foodupdate", (message) => {
    console.log("Food Update:", message);
    updateFood(message);
});


// When the food is initialized,  
socket.on("foodinit", (message) => {
    //console.log("Food Init:", message);
    foodInit(message);
});

// When an opponent moves,  
socket.on("updateopponentposition", (message) => {
    opponentMovement(message);
});

// When the player's initial position is received,  
socket.on("initposition", (message) => {
    console.log("Recieved Initial Position:", message);
    let playerposition = getGlobal('playerposition');
    setGlobal('playerposition', { "x": message.x, "y": message.y });
});

// When the oppoment's initial position is received,  
socket.on("initopponents", (message) => {
    console.log("Inital opponents:", message);
    initopponents(message);
    console.log(JSON.stringify(message) + "opponents test");
});

// When an opponent is removed,  
socket.on("removeopponent", (message) => {
    console.log("Remove opponent:", message);
    opponentRemove(message);
});

// When the in-game leaderboard is received,  
socket.on("ingameleaderboard", (message) => {
    console.log("ingameleaderboard:", message);
    setGlobal('ingameleaderboard', message)
});

// When the leaderboard is received,  
socket.on("leaderboarddata", (message) => {
    console.log("Leaderboard data:", message);
    setGlobal('leaderboarddata', message);
    generateLeaderboard();
});

// When the user stats are received,  
socket.on("userstatsdata", (message) => {
    console.log("userstatsdata:", message);
    setGlobal('userstats', message);
    generateUserStats();
});

// When the score is recieved
socket.on("playerscoreupdate", (message) => {
    console.log("currentscore:", message);
    let player = getGlobal('player');
    player.currentscore = message;
    setGlobal('player', player);
});

// When the user connects, get time remaining
socket.on("timerleft", (message) => {
    console.log("timeleft:", message);
    setGlobal('timeleft', message);

});

// When the user connects, get time remaining
socket.on("resetscore", () => {
    console.log("reset score");
    let player = getGlobal('player');
    player.currentscore = 0;
    setGlobal('player', player);
});

// Get the round state
socket.on("betweenrounds", (message) => {
    console.log("betweenrounds:", message);
    if (message == true) {
        setGlobal('betweenrounds', true);
        setGlobal('timeleft', 10000)
    } else {
        setGlobal('betweenrounds', false);
        setGlobal('timeleft', 120000);
    }
});
