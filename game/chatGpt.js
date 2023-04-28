
import { getGlobal } from "../globals.js";

ctx.beginPath();
ctx.rect(centerX - radius, centerY - radius, radius*2, radius*2);
ctx.lineWidth = 1;
ctx.strokeStyle = "red";
ctx.stroke();

//Initialize Food Images
// Define the image URL and preload the image
let imageUrl = ["./game/CanRed.png"];
let imageObj = new Image();
imageObj.src = imageUrl;


// let foodnum;
export function food() {
    //SAMPLE FOOD ARRAY
    const foodarr = getGlobal('foodarr');
    
    let offsets = getGlobal('playeroffset');

    foodarr.forEach((food, index) => {
        let playerposition = getGlobal('playerposition');
        let playeroffset = getGlobal('playeroffset');

        let positionX = food.x + (playerposition.x - playeroffset.x) * -1;

        let positionY = food.y + (playerposition.y - playeroffset.y) * -1;
        let radius = 15;
        let ctx = getGlobal("ctx");
        ctx.beginPath();
        ctx.arc(positionX, positionY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.drawImage(imageObj, positionX - 25, positionY - 25, 50, 50);

        ctx.beginPath();
        ctx.rect(positionX - radius, positionY - radius, radius * 2, radius * 2);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "red";
        ctx.stroke();

    })

}
