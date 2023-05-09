/*
This function initializes the canvas for the game by creating a canvas element and appending it to the content div. It also sets the canvas dimensions and creates the canvas context. Finally, it starts the game by calling the startGame() function.
*/

import { setGlobal } from "../globals.js";
import startGame from './game.js';
import { generateSprinkles } from "./generateSprinkles.js";

export default function initGame() {
    // Get a reference to the content div
    const contentDiv = document.getElementById("content");

    // Clear the content div
    contentDiv.innerHTML = "";
const canvas = document.createElement("canvas");

    // Set the canvas dimensions to 600 x 600
    canvas.width = 600;
    canvas.height = 600;

    // Give the canvas an id of "myCanvas"
    canvas.id = "myCanvas";

    // Append the canvas to the content div
    contentDiv.appendChild(canvas);
const ctx = canvas.getContext("2d");
      setGlobal('canvas', canvas);
    setGlobal('ctx', ctx);
  
    // Set the canvas and context as global variables
    // Generate Sprinkles
    generateSprinkles(6000, 6000, 2,5000)

    // Start the game
    startGame();

}
