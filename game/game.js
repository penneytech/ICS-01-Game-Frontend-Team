import { getGlobal } from "../globals.js";

let ctx;
let canvas;
let count = 0;

export default function startGame() {
    ctx = getGlobal('ctx');
    canvas = getGlobal('canvas');
    gameLoop();
}

// Define a function to update the canvas
function gameLoop() {

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the count on the canvas
    ctx.font = "30px Arial";
    ctx.fillText(count, 50, 100);

    // Increment the count
    count++;

    // Loop this function
    requestAnimationFrame(gameLoop);
}