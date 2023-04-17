import initGame from '../game/initGame.js';
import { getGlobal } from '../globals.js';

export default function loginSucceed(message) {
    console.log("Received message:", message);
    
    // Fetch the game to start playing
    initGame();
}