/*
The game.js file sets up the canvas context and contains the main loop that will drive the whole program. 
*/

// Imports
import { getGlobal } from "../globals.js";
import { playerPawn } from "./player.js";
import { playerOpponent } from "./opponent.js";
import { food } from "./food.js";
import { movePlayer } from "./movePlayer.js";
import { drawMapOutline } from "./drawMapOutline.js";
import { hitDetection } from "./hitDetection.js";
// import { minimap } from "./minimap.js";

// import { playerOpponentTwo } from "./opponent 2.js";
// Global page variables 
let ctx;
let canvas;

export default function startGame() {
    // Get canvas and context
    ctx = getGlobal('ctx');
    canvas = getGlobal('canvas');

    // Start the game loop
    gameLoop();
  onKeyPress();
}

function gameLoop() {
    // Clear the canvas (This always stays at thsee top)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawMapOutline();
    
    movePlayer();
    food();
    playerOpponent();
    playerPawn();
    hitDetection();

    // Loop this function (this always stays at the bottom)
    requestAnimationFrame(gameLoop);
}