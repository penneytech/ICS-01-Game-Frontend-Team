import { getGlobal } from "../globals.js";

export function playerPawn() {
    let ctx = getGlobal("ctx");
  ctx.beginPath();
  ctx.arc(100, 100, 15, 0, 2 * Math.PI);
  ctx.fillStyle = "lightpink";
  ctx.fill();
}