import { getGlobal } from "../globals.js";
//Initialize Food Images
// Define the image URL and preload the image
let CanRedImageUrl = ["./images/CanRed.png"];
let CanRedImageObj = new Image();
CanRedImageObj.src = CanRedImageUrl;

let CanCookieImageUrl = ["./images/CanCookie.png"];
let CanCookieImageObj = new Image();
CanCookieImageObj.src = CanCookieImageUrl;

let CanMacBlueImageUrl = ["./images/CanMacBlue.png"];
let CanMacBlueImageObj = new Image();
CanMacBlueImageObj.src = CanMacBlueImageUrl;

let CanRainbowImageUrl = ["./images/CanRainbow.png"];
let CanMacRainbowImageObj = new Image();
CanMacRainbowImageObj.src = CanRainbowImageUrl;

let CanMacRedimageUrl = ["./images/CanMacRed.png"];
let CanMacRedimageObj = new Image();
CanMacRedimageObj.src = CanMacRedimageUrl;

let CanGreenimageUrl = ["./images/CanGreen.png"];
let CanGreenImageObj = new Image();
CanGreenImageObj.src = CanGreenimageUrl;

export function food() {
  //SAMPLE FOOD ARRAY
  const foodarr = getGlobal("foodarr");

  let scoreMultiplier = getGlobal("scoreMultiplier");

  foodarr.forEach((food) => {
    let playerposition = getGlobal("playerposition");
    let playeroffset = getGlobal("playeroffset");

    let positionX = food.x + (playerposition.x - playeroffset.x) * -1;

    let positionY = food.y + (playerposition.y - playeroffset.y) * -1;
    let radius = 15;
    let ctx = getGlobal("ctx");

    let imageX = 25 - scoreMultiplier;
    let imageY = 25 - scoreMultiplier;
    let imageObj;
    switch (food.Type) {
      case "CanRed":
        imageObj = CanRedImageObj;
        break;
      case "CanCookie":
        imageObj = CanCookieImageObj;
        break;
      case "Canmacblue":
        imageObj = CanMacBlueImageObj;
        break;
      case "CanRainbow":
        imageObj = CanMacRainbowImageObj;
        break;
      case "CanMacRed":
        imageObj = CanMacRedimageObj;
        break;
      case "CanGreen":
        imageObj = CanGreenImageObj;
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
      ctx.arc(
        positionX,
        positionY,
        radius - scoreMultiplier * 0.5,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = "red";
      ctx.fill();
    }

  });
}
