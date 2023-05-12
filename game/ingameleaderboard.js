import { getGlobal } from "../globals.js";

export default function inGameLeaderboard(){
  let ctx = getGlobal("ctx");
  // Define an array of names and scores
let leaderboard = [
    { name: "Player 1", score: 100 },
    { name: "Player 2", score: 200 },
    { name: "Player 3", score: 300 },
];

// Sort the array by score in descending order
leaderboard.sort(function(a, b) {
    return b.score - a.score;
});

// Set the font and color for the leaderboard
ctx.font = "bold 20px times New Roman";
ctx.fillStyle = "#000";

// Loop through the sorted array and draw each name and score onto the canvas
for (let i = 0; i < leaderboard.length; i++) {
    let player = leaderboard[i];
    let text = (i + 1) + ". " + player.name + " - " + player.score;
    ctx.fillText(text, 440, 30 + (i * 30));
}
}