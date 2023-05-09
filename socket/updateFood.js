import { getGlobal, setGlobal } from "../globals.js";

export default function updateFood(message) {
  let foodarr = getGlobal("foodarr");

  try {
    foodarr[message.foodnumber].x = message.x;
    foodarr[message.foodnumber].y = message.y;
  } catch (e) {
    console.log(e);
  }

  setGlobal("foodarr", foodarr);

}
