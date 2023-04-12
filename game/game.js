const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let lastTime = 0;
let counter = 0;

function gameLoop(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update game state
    update(deltaTime);

    // Draw game objects
    draw();

    // Request next frame
    requestAnimationFrame(gameLoop);
}

function update(deltaTime) {
    // Increment counter
    counter++;
}

function draw() {
    // Draw counter on canvas
    ctx.font = "30px Arial";
    ctx.fillText(`Counter: ${counter}`, 10, 50);
}

// Start game loop
requestAnimationFrame(gameLoop);
