/*
This code defines an object to hold the global variables and two functions to set and retrieve global variables.
*/

// Define an object to hold the global variables
const globals = {
  socket: [],
  canvas: [],
  ctx: [],
  playerposition: {"x": 100, "y": 100}, // Position on the map
  playeroffset: {"x": 300, "y": 300}, // Offset from the physical canvas
    foodarr: [
        { "x": 454, "y": 199 },
        { "x": 100, "y": 143 },
        { "x": 174, "y": 200 },
        { "x": 234, "y": 50 },
        { "x": 200, "y": 123 },
    ],
  foodwidth: 30,
  foodheight: 30,
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
