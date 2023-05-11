/*
This code connects to the server and sets the socket global variable using the io function from the 'socket.io-client' module.
*/

// File and function imports
import { getGlobal, setGlobal } from '../globals.js';
import loginFail from './loginFail.js';
import loginSucceed from './loginSucceed.js';
import updateFood from './updateFood.js';
import foodInit from './foodInit.js';
import opponentMovement from './opponentMovement.js';
// Connect to the server and set the socket global variable
const socket = io("https://matts-game-studio-20.matthewschulte1.repl.co");
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

// When a login fails, receive a message from the server
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

socket.on("foodinit", (message) => {
  console.log("Food Init:", message);
  foodInit(message);
});
socket.on("opponentmovement", (message) => {
  console.log("Opponent movement:", message);
  opponentMovement(message);
});

socket.on("initopponents", (message) => {
  console.log("Inital opponents:", message);
  initopponents(message);
});