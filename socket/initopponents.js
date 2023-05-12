import { getGlobal, setGlobal } from "../globals.js";

export function initopponents(message) {

    let userMap = getGlobal("userMap");

    userMap = new Map();

    // let opponents = message;
    let opponents;

    if (!message) {
        opponents = getGlobal('opponents');
    } else {
        opponents = message;
    }
    
    opponents.forEach((opponent) => {
        // add users to the map
        userMap.set(opponent.username, { x: opponent.x, y: opponent.y, type: opponent.type, currentscore: opponent.currentscore });
    });

    // delete a user by key
    // userMap.delete('john');

    // loop through all remaining users in the map
    userMap.forEach((user, key) => {
        console.log(`${key} ${user.x} ${user.y} ${user.type} ${user.currentscore}`);
    });

    setGlobal('userMap', userMap);
}