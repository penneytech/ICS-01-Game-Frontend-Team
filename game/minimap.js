import { getGlobal } from "../globals.js";
  
export function minimap() {
let canvas = getGlobal('canvas');
    let ctx = getGlobal("ctx");
    let userMap = getGlobal("userMap");
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

    userMap.forEach((user) => {
        // let positionX = user.x + (playerposition.x) * -1;
        // let positionY = user.y ;
        ctx.beginPath();
       ctx.arc(mapValue(user.x, [0, 6000], [0,canvas.height/4]), mapValue(user.x, [0, 6000], [0,canvas.width/4]), 1, 0, 2 * Math.PI);
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