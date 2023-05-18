/*
This code defines an object to hold the global variables and two functions to set and retrieve global variables.
*/

import { sampleleaderboarddata } from "./sampleleaderboarddata.js";

// Define an object to hold the global variables
const globals = {
  //starting up variables
  socket: [],
  canvas: [],
  ctx: [],
  sprinkles: [],
  minimapcanvas: [],
  ctxmm: [],
  userMap: [],
  characterimagesmap: {},

  //playerlocation variables
  playerposition: { "x": 100, "y": 100 }, // Position on the map
  playeroffset: { "x": 300, "y": 300 }, // Offset from the physical canvas
  playerwidth: 45,
  playerheight: 45,

  //multipier variables 
  scoreMultiplier: 0,
  player: { "username": "fivestar", "currentscore": 0, },

  //food variables
  foodarr: [],
  foodwidth: 45,
  foodheight: 45,
  opponents: [],
  userwidth: 45,
  userheight: 45,
  userstats: [290811, 2389901, 16782, 19, 'test'],
  leaderboarddata: sampleleaderboarddata,
  ingameleaderboard: [
    { name: "Player 1", score: 100 },
    { name: "Player 2", score: 200 },
    { name: "Player 3", score: 300 },
  ],
};

// Define a function to set a global variable
export function setGlobal(name, value) {
  //console.log(`Setting global variable '${name}' to '${value}'`);
  globals[name] = value;
}

// Define a function to get a global variable
export function getGlobal(name) {
  //console.log(`Getting global variable '${name}': '${globals[name]}'`);
  return globals[name];
}
