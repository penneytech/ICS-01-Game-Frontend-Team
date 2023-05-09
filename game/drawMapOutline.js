import { getGlobal } from "../globals.js";

export function drawMapOutline() {

    let playerposition = getGlobal('playerposition');
    let playeroffset = getGlobal('playeroffset');
    let positionX = (0 + (playerposition.x - playeroffset.x) * -1);
    let positionY = (0 + (playerposition.y - playeroffset.y) * -1);

    let scoreMultiplier = getGlobal("scoreMultiplier");
    let ctx = getGlobal("ctx");
    ctx.beginPath();
    ctx.rect(positionX, positionY, 6000 - scoreMultiplier * 20, 6000 - scoreMultiplier * 20);
    ctx.stroke();
    //const pattern = ctx.createPattern(img, "repeat");
    
renderSprinkles();
    

}

export function renderSprinkles() {
  const ctx = getGlobal("ctx");
  const sprinkles = getGlobal("sprinkles");

    let playerposition = getGlobal('playerposition');
    let playeroffset = getGlobal('playeroffset');
    let positionX = (0 + (playerposition.x - playeroffset.x) * -1);
    let positionY = (0 + (playerposition.y - playeroffset.y) * -1);
    
  sprinkles.forEach((sprinkle) => {
    ctx.beginPath();
    ctx.arc(sprinkle.x + positionX, sprinkle.y + positionY, sprinkle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = sprinkle.color;
    ctx.fill();
  });
    
}
