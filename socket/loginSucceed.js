/*
This code defines a function that handles a successful login attempt. It takes in a message parameter, logs the message to the console, and calls the initGame function from the game module to start the game.
*/
import { TitlePage } from '../pages/titlePage.js';

export default function loginSucceed(message) {
  console.log("Received message:", message);
  
  // Call the initGame function to start playing the game
    TitlePage();
  //initGame();
}
