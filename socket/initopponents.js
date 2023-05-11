import { getGlobal } from "../globals.js";

export default function initopponents (message){
let userMap = getGlobal("userMap");
  let opponents = message;
opponents.forEach((opponent) => {
// add users to the map
userMap.set(opponent.username, {x: opponent.x, y: opponent.y, type: opponent.type, score: opponent.score});
 });
  return userMap;
  
// delete a user by key
// userMap.delete('john');

// loop through all remaining users in the map
// userMap.forEach((user, key) => {
//   console.log(`${key}: ${user.x} (${user.type})`);
// });
}