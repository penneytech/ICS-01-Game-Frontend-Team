/*
The game.js file sets up the canvas context and contains the main loop that will drive the whole program. 
*/

// Imports
import { getGlobal } from "../globals.js";
import { playerPawn } from "./player.js";
import { playerOpponent } from "../opponent/opponent.js";
import { food } from "./food.js";
import { movePlayer } from "./movePlayer.js";
import { drawMapOutline } from "./drawMapOutline.js";
import { hitDetection } from "./hitDetection.js";
import { minimap } from "./minimap.js";
import { inGameLeaderboard } from "./ingameleaderboard.js";
import { playerCollisionDetection } from "./hitDetectionOpp.js";

// Global page variables 
let ctx;
let canvas;

export default function startGame() {
    // Get canvas and context
    ctx = getGlobal('ctx');
    canvas = getGlobal('canvas');
    // minimap();
    // Start the game loop
    gameLoop();
    movePlayer();
}

// Define frames per second (FPS)
let fps = 60; // Change this value to whatever frame rate you want your game to run at
let interval = 1000 / fps; // Calculate the interval in milliseconds
let lastTime = Date.now();

function gameLoop() {
    let now = Date.now();
    let elapsed = now - lastTime;
  
    // If enough time has passed, update the game
    if (elapsed > interval) {
        // Get ready for next frame by setting lastTime=now, but also adjust for your
        // specified fps interval not being a multiple of RAF's interval (16.7ms)
        lastTime = now - (elapsed % interval);

        let playerposition = getGlobal('playerposition');

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Call game state updates here
        drawMapOutline();
        movePlayer();
        food();
        playerOpponent();
        playerPawn();
        hitDetection();
        minimap();
        inGameLeaderboard();
        playerCollisionDetection();
    }

    // Request next frame
    requestAnimationFrame(gameLoop);
}

