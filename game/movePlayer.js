import { getGlobal, setGlobal } from '../globals.js';
import { food } from "./food.js";

//JoyStick
let jd;
let joystickPosition = "C";
let iscentered = true;

var Joy1 = new JoyStick('joy1Div', {}, function(stickData) {
    jd = stickData.cardinalDirection;
    console.log(jd);
    joystickPosition = jd;
});

// Directions

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let x = 100;
let y = 100;
let speed = 10;

let playerpositionold = {};

// Add event listeners for key presses
document.addEventListener("keydown", function(event) {

    if (event.code === "KeyA") {
        leftPressed = true;
    } else if (event.code === "KeyD") {
        rightPressed = true;
    } else if (event.code === "KeyW") {
        upPressed = true;
    } else if (event.code === "KeyS") {
        downPressed = true;
    }
});


document.addEventListener("keyup", function(event) {
    if (event.code === "KeyA") {
        leftPressed = false;
    } else if (event.code === "KeyD") {
        rightPressed = false;
    } else if (event.code === "KeyW") {
        upPressed = false;
    } else if (event.code === "KeyS") {
        downPressed = false;
    }
});

export function movePlayer() {

    // Call Joystick function

    switch (joystickPosition) {
        case "W":
            leftPressed = true;
            rightPressed = false;
            upPressed = false;
            downPressed = false;
            iscentered = false;
            break;
        case "SW":
            leftPressed = true;
            downPressed = true;
            rightPressed = false;
            upPressed = false;
              iscentered = false;
            break;
        case "S":
            downPressed = true;
            leftPressed = false;
            rightPressed = false;
            upPressed = false;
            iscentered = false;
            break;

        case "SE":
            rightPressed = true;
            downPressed = true;
            leftPressed = false;
            upPressed = false;
              iscentered = false;
            break;

        case "E":
            rightPressed = true;
            leftPressed = false;
            upPressed = false;
            downPressed = false;
              iscentered = false;
            break;

        case "NE":
            rightPressed = true;
            upPressed = true;
            leftPressed = false;
            downPressed = false;
              iscentered = false;
            break;

        case "N":
            upPressed = true;
            leftPressed = false;
            rightPressed = false;
            downPressed = false;
            console.log("NORTH")
              iscentered = false;
            break;

        case "NW":
            upPressed = true;
            leftPressed = true;
            rightPressed = false;
            downPressed = false;
              iscentered = false;
            break;

        case "C":
            if (iscentered == false) {
                upPressed = false;
                leftPressed = false;
                rightPressed = false;
                downPressed = false;
                console.log("CENTERED");
                iscentered = true;
            }
            break;
    }

    // Keyboard function//
    if (leftPressed && x > 0) {
        x -= speed;

    }
    if (rightPressed && x < 6000) {
        x += speed;

    }
    if (upPressed && y > 0) {
        y -= speed;

    }
    if (downPressed && y < 6000) {
        y += speed;

    }

    setGlobal('playerposition', { "x": x, "y": y })

    // Check to see if playerposition has updated. 

    if (JSON.stringify(playerpositionold) !== JSON.stringify({ "x": x, "y": y })) {
        let socket = getGlobal('socket');
        console.log("EMIT NEW POSITION", { "x": x, "y": y });
        playerpositionold = { "x": x, "y": y };
        socket.emit("updateclientposition", {'username': "testuser", "x": x, "y": x})
    }

    food();
}
