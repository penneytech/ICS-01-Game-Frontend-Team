import { getGlobal } from "../globals.js";

//Collision Flags
let playerCollision = false;
let playerMessageSent = false;
let foodCollision = false
let foodMessageSent = false;

export function hitDetection() {
  let foodarr = getGlobal("foodarr");
  let foodwidth = getGlobal("foodwidth");
  let foodheight = getGlobal("foodheight");
  let opponentheight = getGlobal("opponentheight");
  let opponentwidth = getGlobal("opponentwidth");
  let opponents = getGlobal("opponents");
  let playerheight = getGlobal("playerheight");
  let playerwidth = getGlobal("playerwidth");
  let playerposition = getGlobal("playerposition");
  const socket = getGlobal('socket');
  let player = getGlobal("player");

  // Collisions between players and food

  foodarr.forEach((food, index) => {
    // check for collision with player
    if (
      playerposition.x < food.x + foodwidth &&
      playerposition.x + playerwidth > food.x &&
      playerposition.y < food.y + foodheight &&
      playerposition.y + playerheight > food.y
    ) {

      foodCollision = true;
      if (foodMessageSent == false) {
        // Send message
        console.log("Collision between player and food", index);
        socket.emit("foodcollision", index);
        // Set player message sent flag
        foodMessageSent = true;
        
      }
    }

  });
  if (foodCollision == false) {
    foodMessageSent = false;
  }
  // Reset Collision for next cycle
  foodCollision = false;
  // Collisions between players and players

  opponents.forEach((opponent, index) => {
    // check for collision with player

    if (
      playerposition.x < opponent.x + opponentwidth &&
      playerposition.x + opponentwidth > opponent.x &&
      playerposition.y < opponent.y + opponentheight &&
      playerposition.y + opponentheight > opponent.y
    ) {
      playerCollision = true;
      if (playerMessageSent == false) {
        // Send message
        console.log("Collision between player and opponent", index);
        socket.emit("playercollision", index);
        // Set player message sent flag
        playerMessageSent = true;
      }
    }

  });
  // Reset sent message flag if overall, the player has no collisions
  if (playerCollision == false) {
    playerMessageSent = false;
  }
  // Reset Collision for next cycle
  playerCollision = false;
} // End of hit detecting function
