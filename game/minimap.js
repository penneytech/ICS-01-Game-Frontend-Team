import { getGlobal } from "../globals.js";
  
export function minimap() {
let canvas = getGlobal('canvas');
    let ctx = getGlobal("ctx");
    let opponents = getGlobal("opponents");
    let player = getGlobal("player");
    ctx.beginPath();
    ctx.rect(0, 0, canvas.height/4, canvas.width/4);
    ctx.fillStyle = "rgba(12, 24, 66, 0.5)";
    ctx.fill();

    let playerposition = getGlobal("playerposition");

    // Our position
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(mapValue(playerposition.x, [0, 6000], [0,canvas.height/4]), mapValue(playerposition.y, [0, 6000], [0,canvas.width/4]), 2, 0, 2 * Math.PI);
    ctx.fill();

    opponents.forEach((opponent) => {
        // let positionX = opponent.x + (playerposition.x) * -1;
        // let positionY = opponent.y ;
        ctx.beginPath();
       ctx.arc(mapValue(opponent.x, [0, 6000], [0,canvas.height/4]), mapValue(opponent.y, [0, 6000], [0,canvas.width/4]), 1, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "red";
        ctx.fill();
    });
}

function mapValue(inputValue, inputRange, outputRange) {
  const inputDiff = inputRange[1] - inputRange[0];
  const outputDiff = outputRange[1] - outputRange[0];

  const percent = (inputValue - inputRange[0]) / inputDiff;
  const outputValue = outputRange[0] + percent * outputDiff;

  return outputValue;
}