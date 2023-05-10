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
  sprinkles:[],
  minimapcanvas: [],
  ctxmm: [],
 //playerlocation variables
  playerposition: {"x": 100, "y": 100}, // Position on the map
  playeroffset: {"x": 300, "y": 300}, // Offset from the physical canvas
  playerwidth: 30,
  playerheight: 30,
  //multipier variables 
  scoreMultiplier: 0,
  player:  {"username": "five star", "playerScore": 3287},
    //food variables
  foodarr: [],
  foodwidth: 30,
  foodheight: 30,
  
  opponents: [
    {"username": "hippo",
    "x": 78,
    "y": 300,
     "oppscore":6,
     "type": "Shila",
    },

    {"username": "zebra",
    "x": 70,
    "y": 120,
     "oppscore":5478,
     "type": "Jimmie",
    },
     {"username": "shrimp",
    "x": 200,
    "y": 200,
     "oppscore":19,
      "type": "Jeal",
    },

    {"username": "cupcake",
    "x": 34,
    "y": 194,
     "oppscore":19,
     "type": "Seonie",
    },
    {"username": "giraffe",
    "x": 247,
    "y": 100,
     "oppscore":19,
     "type": "Bina",
    },
     {"username": "fox",
    "x": 300,
    "y": 300,
     "oppscore":19,
      "type": "Dale",
    },
     {"username": "chicken",
    "x": 270,
    "y": 200,
     "oppscore":19,
      "type": "Jax",
    },
     {"username": "shrek",
    "x": 247,
    "y": 300,
     "oppscore":19,
      "type": "Mimi",
    },
     {"username": "aRAM",
    "x": 400,
    "y": 200,
     "oppscore":19,
      "type": "Aram",
    },
  ],
  opponentwidth: 30,
  opponentheight: 30,
  userstats: [290811, 2389901, 16782, 19, 'test'],
  leaderboarddata: sampleleaderboarddata,
};

// Define a function to set a global variable
export function setGlobal(name, value) {
  //console.log(`Setting global variable '${name}' to '${value}'`);
  globals[name] = value;
}

// Define a function to get a global variable
export function getGlobal(name) {
 // console.log(`Getting global variable '${name}': '${globals[name]}'`);
  return globals[name];
}
