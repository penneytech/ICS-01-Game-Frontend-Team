import { getGlobal, setGlobal } from "../globals.js";

const characterImages = [
    { type: "Shila", url: "game/Characters/Shila.png" },
    { type: "Jimmie", url: "game/Characters/Jimmie.png" },
    { type: "Aram", url: "game/Characters/Aram.png" },
    { type: "Bina", url: "game/Characters/Bina.png" },
    { type: "Dale", url: "game/Characters/Dale.png" },
    { type: "Jax", url: "game/Characters/Jax.png" },
    { type: "Jeal", url: "game/Characters/Jeal.png" },
    { type: "Mimi", url: "game/Characters/Mimi.png" },
    { type: "Seonie", url: "game/Characters/Seonie.png" },
    { type: "Tiz", url: "game/Characters/Tiz.png" },
    { type: "Polly", url: "game/Characters/Polly.png" },
    { type: "HatsumeMiku", url: "game/Characters/Hatsume Miku.png" },
    { type: "Nika", url: "game/Characters/Nika.png" },
    { type: "Arlo", url: "game/Characters/Arlo.png" },
];

const characterImagesMap = {};

characterImages.forEach(({ type, url }) => {
    const imageObj = new Image();
    imageObj.src = url;
    characterImagesMap[type] = imageObj;
});

setGlobal('characterimagesmap', characterImagesMap);

export function initopponents(message) {

    let userMap = getGlobal("userMap");

    // let opponents = message;
    let opponents;

    if (!message) {
        // opponents = getGlobal('opponents');
        return;
    } else {
        opponents = message;
    }

    opponents.forEach((opponent) => {
        // add users to the map
        console.log('initopponents', opponent)
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