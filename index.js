// game.js

// Get the canvas element and its context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Square properties
const squareSize = 50;
let squareX = 100;
let squareY = 100;
const squareSpeed = 5;

// Set up the keyboard controls
const keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

// Listen for keydown and keyup events
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'w') {
        keys.up = true;
    }
    if (e.key === 'ArrowDown' || e.key === 's') {
        keys.down = true;
    }
    if (e.key === 'ArrowLeft' || e.key === 'a') {
        keys.left = true;
    }
    if (e.key === 'ArrowRight' || e.key === 'd') {
        keys.right = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'w') {
        keys.up = false;
    }
    if (e.key === 'ArrowDown' || e.key === 's') {
        keys.down = false;
    }
    if (e.key === 'ArrowLeft' || e.key === 'a') {
        keys.left = false;
    }
    if (e.key === 'ArrowRight' || e.key === 'd') {
        keys.right = false;
    }
});

// Game update function
function update() {
    // Move the square based on key press
    if (keys.up) {
        squareY -= squareSpeed;
    }
    if (keys.down) {
        squareY += squareSpeed;
    }
    if (keys.left) {
        squareX -= squareSpeed;
    }
    if (keys.right) {
        squareX += squareSpeed;
    }
jungle
    // Clear the canvas before drawing the square
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the square
    ctx.fillStyle = 'white';
    ctx.fillRect(squareX, squareY, squareSize, squareSize);

    // Request the next frame
    requestAnimationFrame(update);
}

// Start the game loop
update();
