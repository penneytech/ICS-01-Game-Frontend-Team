import { getGlobal, setGlobal } from '../globals.js';

export function betweenRounds() {
    let betweenrounds = getGlobal("betweenrounds");
    let timeleft = getGlobal("timeleft");
    let player  = getGlobal("player");
    let canvas = getGlobal("canvas");
    let ctx = canvas.getContext("2d");
    let boxSize = 300;
    let boxX = (canvas.width - boxSize) / 2; // Calculate the x-coordinate of the box
    let boxY = (canvas.height - boxSize) / 2; // Calculate the y-coordinate of the box

    if (betweenrounds == true) {
        ctx.font = "bold 40px comic sans";
        ctx.fillStyle = "rgba(0, 0, 0, 0.6";

        // Draw the box
        ctx.fillRect(0, 0, 600, 600);

        // Set the text alignment to center
        ctx.textAlign = "center";

        // Draw the messages inside the box
        ctx.fillStyle = "white";
        ctx.fillText("Round Over!", canvas.width / 2, canvas.height / 2 - 100);
        ctx.fillStyle = "red";
        ctx.fillText(`${player.currentscore} Points Gained!`, canvas.width / 2, canvas.height / 2);
        ctx.fillStyle = "white";
        ctx.fillText(`Next Round in ${timeleft / 1000}  seconds...`, canvas.width / 2, canvas.height / 2 + 100);
    }
}