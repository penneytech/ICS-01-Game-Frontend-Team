import { getGlobal, setGlobal } from "../globals.js";

export default function updateFood (message){
let foodarr = getGlobal("foodarr");
  foodarr = message;
  setGlobal("foodarr", foodarr);
}
