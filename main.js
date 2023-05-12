// This is the entrypoint file that ties every other file together, and calls the initial modules

// // Run the socket module to establish a connection with the server
import './socket/socket.js';

import { LoginDialogue } from './pages/loginDialogue.js'
LoginDialogue();

import { initopponents } from './socket/initopponents.js';
initopponents();

import initGame from './game/initGame.js';
initGame();

