import { getGlobal } from "../globals.js";
import { food } from "./food.js"
import {playerPawn } from "./player.js"

export function hitDetection(player, food) {
    
  let foodarr = getGlobal("foodarr");
  let foodwidth = getGlobal("foodwidth");
  let foodheight = getGlobal("foodheight");
//console.log(foodarr, foodwidth, foodheight )

  let playerheight = 30;
  let playerwidth = 30;
  foodarr.forEach((food, index) => {
    // check for collision with player
      let playerposition = getGlobal("playerposition");
      let player = playerPawn();
    if (
      playerposition.x < food.x + foodwidth &&
      playerposition.x + playerwidth > food.x &&
      playerposition.y < food.y + foodheight &&
      playerposition.y + playerheight > food.y
    ) {
      //console.log collision
      console.log("Collision between player and object", index);
      return true;
    }
  });
}
