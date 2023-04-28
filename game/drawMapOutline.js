import { getGlobal } from "../globals.js";

export function drawMapOutline() {

    let playerposition = getGlobal('playerposition');
    let playeroffset = getGlobal('playeroffset');

    let positionX = (0 + (playerposition.x - playeroffset.x) * -1);
    let positionY = (0 + (playerposition.y - playeroffset.y) * -1);
  
  
    let ctx = getGlobal("ctx");
    
    ctx.beginPath();
    ctx.rect(positionX, positionY, 6000, 6000);
    ctx.stroke();
    
  
}