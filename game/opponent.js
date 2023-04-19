import { getGlobal } from "../globals.js";

export function playerOpponent() {

    let playerposition = getGlobal('playerposition');
        let playeroffset = getGlobal('playeroffset');

    // let positionX = (100 - offsets.x);
    // let positionY = (25 - offsets.y);
    let positionX = (25 + (playerposition.x - playeroffset.x) * -1);
    let positionY = (25 + (playerposition.y - playeroffset.y) * -1);
    let ctx = getGlobal("ctx");
    ctx.beginPath();
    ctx.arc(positionX, positionY, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    
}