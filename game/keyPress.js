import { getGlobal, setGlobal } from '../globals.js';
//const canvas = document.getElementById("myCanvas");
// import { playerOpponent} from "./opponent.js";
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let x = 100;
let y = 100;

let speed = 10;



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

    let socket = getGlobal("socket");
    let playerposition = getGlobal("playerposition");

    if (leftPressed && x > 16) {
        x -= speed;

    }
    if (rightPressed && x < 5984) {
        x += speed;

    }
    if (upPressed && y > 16) {
        y -= speed;

    }
    if (downPressed && y < 5984) {
        y += speed;

    }

    if (playerposition.x != x || playerposition.y != y) {
        socket.emit('playerposition', { "x": x, "y": y });
    }


    setGlobal('playerposition', { "x": x, "y": y })

}
