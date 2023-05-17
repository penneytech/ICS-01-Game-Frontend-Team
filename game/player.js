import { getGlobal } from "../globals.js";

export function playerPawn() {
  let ctx = getGlobal("ctx");
  let canvas = getGlobal("canvas");
  let centerX = canvas.width / 2;
  let centerY = canvas.height / 2;
  let playeroffset = getGlobal("playeroffset")
  let player = getGlobal("player");
  let imageX = 150;
  let imageY = 150;

  let characterimagesmap = getGlobal('characterimagesmap');
  let userstats = getGlobal('userstats');

  let imageObj;
  imageObj = characterimagesmap[userstats.type];

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
    ctx.arc(playeroffset.x, playeroffset.y, 60, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "red";
    ctx.fill();
  }

  // Draw text for score
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.font = "20px Times New Roman";
  let scoreTextWidth = ctx.measureText(player.currentscore).width;
  ctx.fillText(player.currentscore, centerX - scoreTextWidth / 2, centerY + 80);

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