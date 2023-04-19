import { getGlobal } from "../globals.js";
// let foodnum;
export function food() {
  //SAMPLE FOOD ARRAY
  const foodarr = [ 
    {"x": 454, "y": 199},
     {"x": 17, "y": 143},
    {"x": 174, "y": 3},
    {"x": 234, "y": 17},
    {"x": 200, "y": 123},
]
  let offsets = getGlobal('playeroffset');
    
  foodarr.forEach((food, index) => {
          
    let playerposition = getGlobal('playerposition');
    let playeroffset = getGlobal('playeroffset');
   
    let positionX = food.x + (playerposition.x - playeroffset.x) * -1;
    
    let positionY = food.y + (playerposition.y - playeroffset.y) * -1;
      
    let ctx = getGlobal("ctx");
    ctx.beginPath();
    ctx.arc(positionX,positionY, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
  })

    
}      


