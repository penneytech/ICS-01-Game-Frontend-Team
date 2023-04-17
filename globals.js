/*
This code defines an object to hold the global variables and two functions to set and retrieve global variables.
*/

// Define an object to hold the global variables
const globals = {
  socket: [],
  canvas: [],
  ctx: [],
};

// Define a function to set a global variable
export function setGlobal(name, value) {
  console.log(`Setting global variable '${name}' to '${value}'`);
  globals[name] = value;
}

// Define a function to get a global variable
export function getGlobal(name) {
  console.log(`Getting global variable '${name}': '${globals[name]}'`);
  return globals[name];
}
