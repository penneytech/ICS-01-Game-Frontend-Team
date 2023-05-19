import { getGlobal, setGlobal } from "../globals.js";

export function playerCollisionDetection() {
  const playerposition = getGlobal("playerposition");
  const player = getGlobal("player");
  const userMap = getGlobal("userMap");
  const socket = getGlobal("socket");
  const opponents = getGlobal("opponents");
  const username = getGlobal('player');

  userMap.forEach((user, key) => {
    if (key === player.username) {
      return;
    }

    const opponentPosition = {
      x: user.x,
      y: user.y,
      width: 45,
      height: 45,
    };

    const playerPosition = {
      x: playerposition.x,
      y: playerposition.y,
      width: 45,
      height: 45,
    };

    // Check for overlapping bounding boxes
    const isColliding =
      opponentPosition.x < playerPosition.x + playerPosition.width &&
      opponentPosition.x + opponentPosition.width > playerPosition.x &&
      opponentPosition.y < playerPosition.y + playerPosition.height &&
      opponentPosition.y + opponentPosition.height > playerPosition.y;

    if (isColliding) {
      // Check if the opponent was previously colliding
      if (!user.colliding) {
        // Handle the collision only once
        user.colliding = true;
        console.log("playercollision", key);
        console.log("score that works?", user.currentscore);
        socket.emit("playercollision", {"user": player.username, "hit": key});
        // Do something to handle the hit, such as decrease player health or opponent health
      }
    } else {
      // Reset the collision state if no longer colliding
      user.colliding = false;
    }
  });
}
