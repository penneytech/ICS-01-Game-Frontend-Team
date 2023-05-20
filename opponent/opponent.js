import { getGlobal, setGlobal } from "../globals.js";

export function playerOpponent() {
    const characterImagesMap = getGlobal('characterimagesmap');

    const userMap = getGlobal("userMap");
    const ctx = getGlobal("ctx");

    userMap.forEach((user, key) => {
        //console.log(user, key);

        let player = getGlobal("player");
        if (key === '' || key === player.username || key === 'frontendmonitor') {
            return;
        }

        const playerposition = getGlobal("playerposition");
        const playeroffset = getGlobal("playeroffset");
        const positionX = user.x + (playerposition.x - playeroffset.x) * -1;
        const positionY = user.y + (playerposition.y - playeroffset.y) * -1;
        const imageX = 150;
        const imageY = 150;

        const imageObj = characterImagesMap[user.type] || characterImagesMap['Arlo'];

        if (imageObj) {
            ctx.drawImage(
                imageObj,
                positionX - imageX / 2,
                positionY - imageY / 2,
                imageX,
                imageY
            );
        } else {
            ctx.beginPath();
            ctx.fillStyle = "blue";
            ctx.arc(positionX, positionY, 60, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = "red";
            ctx.fill();
        }

        // Draw text for score
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.font = "20px Times New Roman";
        const scoreTextWidth = ctx.measureText(user.currentscore).width;
        ctx.fillText(user.score, positionX - scoreTextWidth / 2, positionY + 80);

        // Draw text for username with shadow effect
        ctx.save();
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 5;
        ctx.shadowColor = "red";
        const userTextWidth = ctx.measureText(key).width;
        ctx.fillText(key, positionX - userTextWidth / 2, positionY - 80);
        ctx.restore();
    });
}

