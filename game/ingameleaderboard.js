import { getGlobal } from "../globals.js";

export function inGameLeaderboard(){
  let ctx = getGlobal("ctx");
  let ingameleaderboard = getGlobal('ingameleaderboard')


// Sort the array by score in descending order
ingameleaderboard.sort(function(a, b) {
    return b.score - a.score;
});

// Set the font and color for the leaderboard
ctx.font = "bold 20px times New Roman";
ctx.fillStyle = "#000";

// Loop through the sorted array and draw each name and score onto the canvas
for (let i = 0; i < ingameleaderboard.length; i++) {
    let player = ingameleaderboard[i];
    let text = (i + 1) + ". " + player.name + " - " + player.score;
    ctx.fillText(text, 440, 30 + (i * 30));
}
}