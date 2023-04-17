import { setGlobal } from "../globals.js";
import startGame from './game.js'

export default function initGame() {
    // Get a reference to the content div
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    
    // Create a canvas element
    const canvas = document.createElement("canvas");

    // Set the canvas dimensions to 200 x 200
    canvas.width = 200;
    canvas.height = 200;

    // Give the canvas an id of "myCanvas"
    canvas.id = "myCanvas";

    // Append the canvas to the content div
    contentDiv.appendChild(canvas);

    // Create the canvas context
    const ctx = canvas.getContext("2d");

    setGlobal('canvas', canvas)
    setGlobal('ctx', ctx);

    startGame()
}