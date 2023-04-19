/*
The game.js file sets up the canvas context and contains the main loop that will drive the whole program. 
*/

// Imports
import { getGlobal } from "../globals.js";
import { playerPawn } from "./player.js";
import { playerOpponent } from "./opponent.js";
import { food } from "./food.js";
import { onKeyPress } from "./keyPress.js";
import { drawMapOutline } from "./drawMapOutline.js"


// import { playerOpponentTwo } from "./opponent 2.js";
// Global page variables 
let ctx;
let canvas;
/********************
Initialize the canvas and start the game loop
********************/

export default function startGame() {
    // Get canvas and context
    ctx = getGlobal('ctx');
    canvas = getGlobal('canvas');

    // Start the game loop
    gameLoop();


}

/********************
The main gameLoop example: 
- Clear the canvas
- Draw the count on the canvas
- Increment the count
- Repeat the process using requestAnimationFrame()
********************/

function gameLoop() {
    // Clear the canvas (This always stays at the top)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the count on the canvas
    // ctx.font = "30px Arial";
    // ctx.fillText(count, 50, 100);

    // player = playerPawn("ctx");
    // Increment the count
    drawMapOutline();
    playerOpponent();
    playerPawn();
    onKeyPress();
    
    // playerOpponentTwo();
    // Loop this function (this always stays at the bottom)
    requestAnimationFrame(gameLoop);
}