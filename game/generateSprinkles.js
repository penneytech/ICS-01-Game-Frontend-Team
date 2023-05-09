import { getGlobal, setGlobal } from "../globals.js";

export function generateSprinkles(canvasWidth, canvasHeight, circleRadius, numberOfCircles) {
  const sprinkles = []; // create an empty array to store the sprinkles

  for (let i = 0; i < numberOfCircles; i++) {
    // generate random x and y coordinates for the circle, within the canvas bounds
    const x = Math.floor(Math.random() * (canvasWidth - (circleRadius * 2))) + circleRadius;
    const y = Math.floor(Math.random() * (canvasHeight - (circleRadius * 2))) + circleRadius;

    // generate a random pastel color for the circle
    const r = Math.floor(Math.random() * 128) + 128;
    const g = Math.floor(Math.random() * 128) + 128;
    const b = Math.floor(Math.random() * 128) + 128;
    const color = `rgb(${r}, ${g}, ${b})`;

    // add the sprinkle to the array
    sprinkles.push({
      x,
      y,
      radius: circleRadius,
      color,
    });
  }

  setGlobal("sprinkles", sprinkles); // set the array as a global variable
}