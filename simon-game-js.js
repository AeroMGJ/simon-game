const colorButtons = ["green", "red", "yellow", "blue"]

let computerPicks = []; 
let playerPicks = []; 
let level = 0; 

const playButton = document.querySelector('.start-game'); 
const playerMessage = document.querySelector('.message'); 
const heading = document.querySelector('.js-heading'); 
const board = document.querySelector('.game-area'); 
const showLevel = document.querySelector(".shows-level")

function restartGame(sorry) { 
  playerMessage.innerHTML = "<span id='red'>AGH! Wrong Color...try again!</span>" 
  computerPicks = []; 
  playerPicks = []; 
  level = 0; 
  playButton.removeAttribute("id","hide-after-start") 
  playerMessage.setAttribute("id","hide") 
  board.setAttribute("id","no-click") 
  showLevel.innerHTML = ""
  setTimeout(() => { 
    playerTurn(level)}, 
    level*600 + 1000) 
}

function playerTurn(level) { 
    board.classList.remove('unclickable'); 
    playerMessage.innerText = "Your turn!" 
}

function pushColorButton(color) { 
  const colorBut = document.querySelector(`[id="${color}-button"]`) 
  const sound = document.querySelector(`[id="${color}-sound"]`) 

  colorBut.setAttribute("class", "pushed")
  sound.play(); 

  setTimeout(() => { 
    colorBut.removeAttribute("class", "pushed")}, 
    300);
}

function playLevel(nextComputerPicks) { 
    nextComputerPicks.forEach((color, colorIndex) => {
    setTimeout(() => { 
        pushColorButton(color);
    }, (colorIndex + 1) * 600);
  });
}

function nextColor() {
  const randomColor = colorButtons[Math.floor(Math.random()*4)]

  return randomColor; 
}

function nextLevel() { 
  level += 1;

  board.setAttribute("id", "no-click")
  playerMessage.innerHTML = "<p>Try to <span id='remember'>REMEMBER</span> this sequence!</p>"
  showLevel.innerHTML = `<h2>Level: <span id='red'>${level}</span></h2>`

  const nextComputerPicks = [...computerPicks];
  nextComputerPicks.push(nextColor()); 
  playLevel(nextComputerPicks);

  computerPicks = [...nextComputerPicks]; 
  setTimeout(() => {
    playerTurn(level);
  }, level * 600 + 1000);
}

function butPushed(colorBut) {
  const colorIndex = playerPicks.push(colorBut) - 1;
  const sound = document.querySelector(`[id="${colorButtons[colorIndex]}-sound"]`)
  sound.play();

  if (playerPicks[colorIndex] !== computerPicks[colorIndex]) {
    restartGame('AGH! Wrong Color...try again!');
    return;
  }

  if (playerPicks.length === computerPicks.length) {
    playerPicks = [];
    playerMessage.innerText = "Nice!"
    setTimeout(() => {
        nextLevel();
    }, 3000);
    return;
  }
}

function runPlayButton() {
    playButton.setAttribute("id", "hide-after-start")
    playerMessage.removeAttribute("id")
    playerMessage.innerHTML = "<p>Try to <span id='remember'>REMEMBER</span> this sequence!</p>"
    nextLevel();
}

playButton.addEventListener('click', runPlayButton);
board.addEventListener('click', event => {
  const  colorBut  = event.target.id.split("-")[0]

  if (colorBut) butPushed(colorBut); 
});