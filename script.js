let computerPicks = [];
let playerPicks = [];
let level = 0;

const playButton = document.querySelector('.start-game');
const playerMessage = document.querySelector('.message');
const showLevel = document.querySelector(".shows-level")
const board = document.querySelector('.game-area');

function restartGame() {
    computerPicks = [];
    playerPicks = [];
    level = 0;
    playButton.classList.remove('hide');
    showLevel.innerHTML = "Nice try! <span id='red'>Let's Do It</span> again!" 
    playerMessage.classList.add('hide');
    board.classList.add('no-click');
    setTimeout(() => { 
    playerTurn(level)}, 
    level*600 + 5000) 
}

function playerTurn(level) {
    board.classList.remove('no-click');
    playerMessage.innerHTML = `Your turn: ${level} Tap${level > 1 ? 's' : ''}`;
}

function pushColorButton(colors) {
    const color = document.querySelector(`[data-color='${colors}']`);
    const sound = document.querySelector(`[data-sound='${colors}']`);

    color.classList.add('pushed');
    sound.play();

    setTimeout(() => {
    color.classList.remove('pushed');
    }, 300);
}

function playLevel(nextComputerPicks) {
    nextComputerPicks.forEach((color, index) => {
    setTimeout(() => {
        pushColorButton(color);
    }, (index + 1) * 600);
    });
}

function nextColor() {
    const colors = ['green', 'red', 'yellow', 'blue'];
    const randomColor = colors[Math.floor(Math.random() * 4)];

    return randomColor;
}

function nextLevel() {
    level += 1;

    board.classList.add('no-click');
    playerMessage.innerHTML = "<p>Try to <span id='remember'>REMEMBER</span> this sequence!</p>";
    showLevel.innerHTML = `<h2>Level: <span id='red'>${level}</span></h2>`


    const nextComputerPicks = [...computerPicks];
    nextComputerPicks.push(nextColor());
    playLevel(nextComputerPicks);

    computerPicks = [...nextComputerPicks];
    setTimeout(() => {
    playerTurn(level);
    }, level * 600 + 1000);
}

function butPushed(color) {
    const index = playerPicks.push(color) - 1;
    const sound = document.querySelector(`[data-sound='${color}']`);
    sound.play();

    const remainingTaps = computerPicks.length - playerPicks.length;

    if (playerPicks[index] !== computerPicks[index]) {
    restartGame();
    return;
    }

    if (playerPicks.length === computerPicks.length) {
    if (playerPicks.length === 10) {
        restartGame();
        return
    }

    playerPicks = [];
    playerMessage.innerHTML = 'Nice!';
    setTimeout(() => {
        nextLevel();
    }, 1000);
    return;
    }

    playerMessage.innerHTML = `Your turn: ${remainingTaps} Tap${
    remainingTaps > 1 ? 's' : ''
    }`;
}

function runPlayButton() {
    playButton.classList.add('hide');
    playerMessage.classList.remove('hide');
    playerMessage.textContent = 'Wait for the computer';
    nextLevel();
}

playButton.addEventListener('click', runPlayButton);
board.addEventListener('click', event => {
    const { color } = event.target.dataset;

    if (color) butPushed(color);
});