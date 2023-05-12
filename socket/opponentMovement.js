import { getGlobal, setGlobal } from "../globals.js";

export default function updateFood(message) {
  let opponents = getGlobal("opponent");

  try {
    opponents[message.opponentnumber].x = message.x;
    opponents[message.opponentnumber].y = message.y;
  } catch (e) {
    console.log(e);
  }

  setGlobal("opponents", opponents);

}
