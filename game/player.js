import { getGlobal } from "../globals.js";
let ShilaImageUrl = "game/Characters/Shila.png";
let ShilaImageObj = new Image();

ShilaImageObj.onload = function() {
    // Only draw the image when it's fully loaded
    playerPawn();
}

ShilaImageObj.src = ShilaImageUrl;

export function playerPawn() {
  let ctx = getGlobal("ctx");
  let centerX = 300;
  let centerY = 300;
  let radius = 15;
  let scoreMultiplier = getGlobal("scoreMultiplier");
  let playerposition = getGlobal("playerposition")
  let player = getGlobal("player");

  // Draw the circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius + scoreMultiplier, 0, 2 * Math.PI);
  ctx.fillStyle = "lightpink";
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "black";

  let imageX = 80;
  let imageY = 80;

  let imageObj;
  imageObj = ShilaImageObj;
  if (imageObj) {
      ctx.drawImage(
        imageObj,
        player.x - imageX / 2,
        player.y - imageY / 2,
        imageX,
        imageY
      );
  } else {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(positionX, positionY, 60, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "red";
    ctx.fill();
  }

  // Draw text for score
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.font = "12px Arial";
  let scoreTextWidth = ctx.measureText(player.playerScore).width;
  ctx.fillText(player.playerScore, centerX - scoreTextWidth / 2, centerY);

  // Draw text for username with shadow effect
  ctx.save(); // Save current context state
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 5;
  ctx.shadowColor = "blue";
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.font = "12px Arial";
  let userTextWidth = ctx.measureText(player.username).width;
  ctx.fillText(player.username, centerX - userTextWidth / 2, centerY - 25);
  ctx.restore(); // Restore previous context state without shadow effect
}