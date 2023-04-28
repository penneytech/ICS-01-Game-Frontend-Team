
import { getGlobal, setGlobal } from '../globals.js';
import { food } from "./food.js";

console.log("IS KEYPRESS WORKING?");
//const canvas = document.getElementById("myCanvas");
// import { playerOpponent} from "./opponent.js";
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;


let x = 100;
let y = 100;

let speed = 3;

// let opponent = playerOpponent();
// Add event listeners for key presses
document.addEventListener("keydown", function(event) {
 
    if (event.code === "KeyA") {
        leftPressed = true;
        onKeyPress();
    } else if (event.code === "KeyD") {
        rightPressed = true;
        onKeyPress();
    } else if (event.code === "KeyW") {
        upPressed = true;
        onKeyPress();
    } else if (event.code === "KeyS") {
        downPressed = true;
        onKeyPress();
    }
});

document.addEventListener("keyup", function(event) {
    if (event.code === "KeyA") {
        leftPressed = false;
        onKeyPress();
    } else if (event.code === "KeyD") {
        rightPressed = false;
        onKeyPress();
    } else if (event.code === "KeyW") {
        upPressed = false;
        onKeyPress();
    } else if (event.code === "KeyS") {
        downPressed = false;
        onKeyPress();
    }
});

export function onKeyPress() {
    if (leftPressed && x>0) {
        x -= speed;
       
    }
    if (rightPressed && x <6000) {
        x += speed;
      
    }
    if (upPressed && y>0) {
        y -= speed;
       
    }
    if (downPressed && y<6000) {
        y += speed;
        
    }
  
// console.log("x:", x, "y:", y);
    setGlobal('playerposition', { "x": x, "y": y })
    //console.log("Player Pos Set:", getGlobal('playerposition'))
  food();
}
