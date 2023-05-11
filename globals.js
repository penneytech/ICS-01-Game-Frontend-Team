/*
This code defines an object to hold the global variables and two functions to set and retrieve global variables.
*/

// Define an object to hold the global variables
const globals = {
  //starting up variables
  socket: [],
  canvas: [],
  ctx: [],
  sprinkles:[],
  minimapcanvas: [],
  ctxmm: [],
  userMap: new Map(),
  
  
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
    "x": 780,
    "y": 300,
     "oppscore":6,
     "type": "Shila",
    },
    {"username": "zebra",
    "x": 700,
    "y": 120,
     "oppscore":5478,
     "type": "Tiz",
    },
     {"username": "shrimp",
    "x": 2000,
    "y": 200,
     "oppscore":19,
      "type": "Jeal",
    },

    {"username": "cupcake",
    "x": 334,
    "y": 1904,
     "oppscore":19,
     "type": "Seonie",
    },
    {"username": "giraffe",
    "x": 2247,
    "y": 1003,
     "oppscore":19,
     "type": "Bina",
    },
     {"username": "fox",
    "x": 300,
    "y": 3200,
     "oppscore":19,
      "type": "Dale",
    },
     {"username": "chicken",
    "x": 270,
    "y": 2060,
     "oppscore":19,
      "type": "Jax",
    },
     {"username": "shrek",
    "x": 2437,
    "y": 3200,
     "oppscore":19,
      "type": "Mimi",
    },
     {"username": "dolphin",
    "x": 4300,
    "y": 2040,
     "oppscore":19,
      "type": "Aram",
    },
    {"username": "donkey",
    "x": 3200,
    "y": 3540,
     "oppscore":19,
      "type": "Jimmie",
    },
    {"username": "stay4life",
    "x": 4300,
    "y": 440,
     "oppscore":19,
      "type": "Nika",
    },
    {"username": "otter",
    "x": 4300,
    "y": 4000,
     "oppscore":19,
      "type": "HatsumeMiku",
    },
    {"username": "doglover123",
    "x": 500,
    "y": 2040,
     "oppscore":19,
      "type": "Tiz",
    },
    {"username": "miroh",
    "x": 4300,
    "y": 700,
     "oppscore":19,
      "type": "Polly",
    },
  ],
  opponentwidth: 30,
  opponentheight: 30,
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
