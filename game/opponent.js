import { getGlobal } from "../globals.js";
let ShilaImageUrl = ["game/Characters/Shila.png"];
let ShilaImageObj = new Image();
ShilaImageObj.src = ShilaImageUrl;

let JimmieImageUrl = ["game/Characters/Jimmie.png"];
let JimmieImageObj = new Image();
JimmieImageObj.src = JimmieImageUrl;

let AramImageUrl = ["game/Characters/Aram.png"];
let AramImageObj = new Image();
AramImageObj.src = AramImageUrl;

let BinaImageUrl = ["game/Characters/Bina.png"];
let BinaImageObj = new Image();
BinaImageObj.src = BinaImageUrl;

let DaleImageUrl = ["game/Characters/Dale.png"];
let DaleImageObj = new Image();
DaleImageObj.src = DaleImageUrl;

let JaxImageUrl = ["game/Characters/Jax.png"];
let JaxImageObj = new Image();
JaxImageObj.src = JaxImageUrl;

let JealImageUrl = ["game/Characters/Jeal.png"];
let JealImageObj = new Image();
JealImageObj.src = JealImageUrl;

let MimiImageUrl = ["game/Characters/Mimi.png"];
let MimiImageObj = new Image();
MimiImageObj.src = MimiImageUrl;

let SeonieImageUrl = ["game/Characters/Seonie.png"];
let SeonieImageObj = new Image();
SeonieImageObj.src = SeonieImageUrl;

export function playerOpponent() {
  
  let ctx = getGlobal("ctx");

  let opponents = getGlobal("opponents");
  let player = getGlobal("player");
  
  opponents.forEach((opponent) => {
     let playerposition = getGlobal("playerposition");
  let playeroffset = getGlobal("playeroffset");
    let positionX = opponent.x + (playerposition.x - playeroffset.x) * -1;
    let positionY = opponent.y + (playerposition.y - playeroffset.y) * -1;
      let imageX = 80;
  let imageY = 80;


    let imageObj;
    switch (opponent.type) {
      case "Shila":
        imageObj = ShilaImageObj;
        break;
      case "Jimmie":
        imageObj = JimmieImageObj;
        break;
      case "Dale":
        imageObj = DaleImageObj;
        break;
      case "Jax":
        imageObj = JaxImageObj;
        break;
      case "Mimi":
        imageObj = MimiImageObj;
        break;
      case "Seonie":
        imageObj = SeonieImageObj;
        break;
        case "Aram":
        imageObj = AramImageObj;
        break;
        case "Bina":
        imageObj = BinaImageObj;
        break;
        case "Jeal":
        imageObj = JealImageObj;
        break;
      default:
        imageObj = null;
        break;
    }

     if (imageObj) {
      ctx.drawImage(
        imageObj,
        positionX - imageX / 2,
        positionY - imageY / 2,
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
    ctx.fillStyle = "black";
    ctx.font = "15px Times New Roman";
    let scoreTextWidth = ctx.measureText(opponent.oppscore).width;
    ctx.fillText(opponent.oppscore, positionX - scoreTextWidth / 2, positionY + 60);
    
    // Draw text for username with shadow effect
    ctx.save(); // Save current context state
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 5;
    ctx.shadowColor = "red";
    let userTextWidth = ctx.measureText(opponent.username).width;
    ctx.fillText(opponent.username, positionX - userTextWidth / 2, positionY - 40);
    ctx.restore(); // Restore previous context state without shadow effect
  });
}