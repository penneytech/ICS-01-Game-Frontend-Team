import { getGlobal } from "../globals.js";
let ShilaImageUrl = "game/Characters/Shila.png";
let ShilaImageObj = new Image();

// ShilaImageObj.onload = function() {
//     // Only draw the image when it's fully loaded
//     playerPawn();
// }

ShilaImageObj.src = ShilaImageUrl;

export function playerPawn() {
  let ctx = getGlobal("ctx");
  let centerX = 300;
  let centerY = 300;
  let radius = 15;
  let scoreMultiplier = getGlobal("scoreMultiplier");
  let playeroffset = getGlobal("playeroffset")
  let player = getGlobal("player");

  let imageX = 150;
  let imageY = 150;

  let imageObj;
  imageObj = ShilaImageObj;
  if (imageObj) {
      ctx.drawImage(
        imageObj,
        playeroffset.x - imageX / 2,
        playeroffset.y - imageY / 2,
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
  ctx.font = "20px Times New Roman";
  let scoreTextWidth = ctx.measureText(player.playerScore).width;
  ctx.fillText(player.playerScore, centerX - scoreTextWidth / 2, centerY + 80);

  // Draw text for username with shadow effect
  ctx.save(); // Save current context state
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 5;
  ctx.shadowColor = "blue";
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.font = "20px Times New Roman";
  let userTextWidth = ctx.measureText(player.username).width;
  ctx.fillText(player.username, centerX - userTextWidth / 2, centerY - 80);
  ctx.restore(); // Restore previous context state without shadow effect

}