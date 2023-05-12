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

let TizImageUrl = ["game/Characters/Tiz.png"];
let TizImageObj = new Image();
TizImageObj.src = TizImageUrl;

let PollyImageUrl = ["game/Characters/Polly.png"];
let PollyImageObj = new Image();
PollyImageObj.src = PollyImageUrl;

let HatsumeMikuImageUrl = ["game/Characters/Hatsume Miku.png"];
let HatsumeMikuImageObj = new Image();
HatsumeMikuImageObj.src = HatsumeMikuImageUrl;

let NikaImageUrl = ["game/Characters/Nika.png"];
let NikaImageObj = new Image();
NikaImageObj.src = NikaImageUrl;

let ArloImageUrl = ["game/Characters/Arlo.png"];
let ArloImageObj = new Image();
ArloImageObj.src = ArloImageUrl;

// let JimmieImageUrl = ["game/Characters/Jimmie.png"];
// let JimmieImageObj = new Image();
// JimmieImageObj.src = JimmieImageUrl;

export function playerOpponent() {

  let userMap = getGlobal("userMap");
  let ctx = getGlobal("ctx");

  userMap.forEach((user, key) => {

    if (key == getGlobal("player").username)
      return;

    let playerposition = getGlobal("playerposition");
    let playeroffset = getGlobal("playeroffset");
    let positionX = user.x + (playerposition.x - playeroffset.x) * -1;
    let positionY = user.y + (playerposition.y - playeroffset.y) * -1;
    let imageX = 150;
    let imageY = 150;

    let imageObj;
console.log(user)
    switch (user.type) {
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
      case "HatsumeMiku":
        imageObj = HatsumeMikuImageObj;
        break;
      case "Polly":
        imageObj = PollyImageObj;
        break;
      case "Nika":
        imageObj = NikaImageObj;
        break;
      case "Tiz":
        imageObj = TizImageObj;
        break;
      case "Arlo":
        imageObj = ArloImageObj;
        break;
      case '':
        imageObj = ArloImageObj;
        break;
      default:
        imageObj = ArloImageObj;
        break;
    }

    if (imageObj) {
      //console.log("DRAWING IMAGE FOR ", key, user, im)
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
    ctx.font = "20px Times New Roman";
    let scoreTextWidth = ctx.measureText(user.currentscore).width;
    ctx.fillText(user.score, positionX - scoreTextWidth / 2, positionY + 80);

    // Draw text for username with shadow effect
    ctx.save(); // Save current context state
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 5;
    ctx.shadowColor = "red";
    let userTextWidth = ctx.measureText(user.username).width;
    ctx.fillText(key, positionX - userTextWidth / 2, positionY - 80);
    ctx.restore(); // Restore previous context state without shadow effect
  });
}