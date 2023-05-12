import { getGlobal } from "../globals.js";

export function initopponents(message) {

    let userMap = getGlobal("userMap");

    userMap = new Map();

    let opponents = message;
    
    opponents.forEach((opponent) => {
        // add users to the map
        userMap.set(opponent.username, { x: opponent.x, y: opponent.y, type: opponent.type, score: opponent.score });
    });

    // delete a user by key
    // userMap.delete('john');

    // loop through all remaining users in the map
    // userMap.forEach((user, key) => {
    //   console.log(`${key}: ${user.x} (${user.type})`);
    // });
}