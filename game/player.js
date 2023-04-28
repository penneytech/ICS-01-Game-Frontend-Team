import { getGlobal } from "../globals.js";

export function playerPawn() {
   let ctx = getGlobal("ctx");
let centerX = 300;
let centerY = 300;
let radius = 15;

// Draw the circle
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.fillStyle = "lightpink";
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.stroke();


ctx.beginPath();
ctx.rect(centerX - radius, centerY - radius, radius*2, radius*2);
ctx.lineWidth = 1;
ctx.strokeStyle = "red";
ctx.stroke();
}

