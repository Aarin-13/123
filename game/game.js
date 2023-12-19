const characterContainer = document.getElementById('character-container');
let characterPosition = 50; // Starting position in percentage
let jumping = false;
let gameActive = true; 
let timer = 0; // Variable to store the timer value
let timerInterval; // Variable to store the interval ID for the timer

document.addEventListener('keydown', (event) => {
    if (gameActive && !jumping){
        if (event.key === 'ArrowUp') {
            //jump();
        } else if (event.key === 'ArrowLeft' && characterPosition > 30) {
            moveCharacter(-20);
        } else if (event.key === 'ArrowRight' && characterPosition < 65) {
            moveCharacter(20);
        }
    }
});

document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleTouchEnd);

function handleTouchStart(event) {
    if (gameActive && !jumping) {
        const touchX = event.touches[0].clientX;
        const screenWidth = window.innerWidth;

        if (touchX < screenWidth / 2) {
            moveCharacter(-20); // Move left
        } else {
            moveCharacter(20); // Move right
        }
    }
}

function handleTouchEnd() {
    // Release touch event handling
    if (gameActive && !jumping) {
        moveCharacter(0); // Stop horizontal movement
    }
}

function moveCharacter(offset) {
    characterPosition += offset;
    characterContainer.style.left = `${characterPosition}%`;
}

function jump() {
    jumping = true;
    let jumpHeight = 25;
    const jumpSpeed = 5;

    const jumpInterval = setInterval(() => {
        characterContainer.style.bottom = `${jumpHeight}%`;
        jumpHeight -= jumpSpeed;

        if (jumpHeight < 0) {
            clearInterval(jumpInterval);
            fall();
        }
    }, 20);
}


function fall() {
    let fallHeight = 5;
    const fallSpeed = 5;

    const fallInterval = setInterval(() => {
        characterContainer.style.bottom = `${fallHeight}%`;
        fallHeight += fallSpeed;

        if (fallHeight > 0) {
            clearInterval(fallInterval);
            characterContainer.style.bottom = '50';
            characterContainer.style.left = `${characterPosition}%`; // Adjusted line
            jumping = false;
        }
    }, 50);

    // Adjust the character's position based on the building width
    if (characterPosition < 25) {
        moveCharacter(10);
    } else if (characterPosition > 55) {
        moveCharacter(-10);
    }
}


// Rest of the code remains unchanged


function createBall() {
    const ball = document.createElement('div');
    ball.className = 'ball';
    const randomPosition = Math.random() * 100;
    ball.style.left = `${randomPosition}%`;
     if (gameActive ) {
    document.getElementById('game-container').appendChild(ball);
    }
    moveBall(ball);
}

function moveBall(ball) {
    let position = 0;
    const fallSpeed = 1;

    const intervalId = setInterval(() => {
        position += fallSpeed;
        ball.style.top = `${position}%`;

        if (checkCollision(ball)) {
            clearInterval(intervalId);
            ball.remove();
            //createBall();
            endGame(); // New line to end the game
        }

        if (position > 100) {
            clearInterval(intervalId);
            ball.remove();
            createBall();
        }
    }, 20);
}

function endGame() {
    gameActive = false;
    character.style.backgroundColor = 'red'; // Change character color to red
    const gameOverMessage = document.getElementById('game-over-message');
    jump();
    fall();
    stopTimer(); // New line to stop the timer
    // Display game over message with timer value
    //const gameOverMessage = document.getElementById('game-over-message');
    gameOverMessage.textContent = `Game Over! Your time: ${timer} seconds`;
    //gameOverMessage.textContent = 'Game Over!';
}

function checkCollision(ball) {
    const characterRect = character.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();

    return (
        characterRect.bottom > ballRect.top &&
        characterRect.top < ballRect.bottom &&
        characterRect.right > ballRect.left &&
        characterRect.left < ballRect.right
    );
}

function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        document.getElementById('timer').textContent = `Team 3's Game: Dodge using Left or right arrows or touch for mobile: Time: ${timer} seconds`; // Update the timer display
    }, 1000); // Increment the timer every 1000 milliseconds (1 second)
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Rest of the code remains unchanged

// Start the timer when the game begins
startTimer();

// Call createBall once to start the ball creation


setInterval(createBall,4000); // Create a new ball every 2 seconds

// Call createBall once to start the ball creation
//createBall();