// This is the entrypoint file that ties every other file together, and calls the initial modules
import { getGlobal, setGlobal } from './globals.js';

// // Run the socket module to establish a connection with the server
import './socket/socket.js';

// Start the internal timer
import { timer } from './game/showTimer.js';
timer();

// Hide the joystock
let joy1Div = document.getElementById('joy1Div');
joy1Div.style.display = "none";

// Initialize User Map
let userMap = getGlobal("userMap");
userMap = new Map();
setGlobal('userMap', userMap)

import { LoginDialogue } from './pages/loginDialogue.js'
LoginDialogue();

import { initopponents } from './socket/initOpponents.js';
initopponents();

import initGame from './game/initGame.js';
// initGame();

import { TitlePage } from './pages/titlePage.js';
//TitlePage();