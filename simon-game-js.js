
// const colorButtons = ["green", "red", "yellow", "blue"]

// let computerPicks = [];
// let playerPicks = [];
// let level = 0;

// const playButton = document.querySelector(".start-game");
// const showLevel = document.querySelector(".shows-level")
// const board = document.querySelector(".game-area")
// const playerMessage = document.querySelector(".message");
    
// //Restarts game and variables after loss; play button comes back; player message area hides; can't click board 
// function restartGame() {
//     playerMessage.innerHTML = "<span id='red'>AGH! Wrong Color...try again!</span>"
//     computerPicks = []
//     playerPicks = []
//     level = 0
//     playButton.removeAttribute("id","hide-after-start")
//     playerMessage.setAttribute("id","hide")
//     board.setAttribute("id","no-click")
//     setTimeout(() => {
//         playerTurn(level)},
//         level*600 + 700)
// }

// //During player's turn, board is clickable and message says it's their turn
// function playerTurn(level) {
//     board.removeAttribute("id", "no-click")
//     playerMessage.innerText = "Your turn!"
// }

// //What happens when a color is clicked by computer; appropriate sound is played; color is activated to pushed state; unactivated afterwards
// function pushColorButton (color) {
//     const colorBut = document.querySelector(`[id="${color}-button"]`)
//     const sound = document.querySelector(`[id="${color}-sound"]`)
//     colorBut.setAttribute("class", "pushed");
//     sound.play()
//     setTimeout(() => {
//         colorBut.removeAttribute("class", "pushed")},
//         500)
// }
    
// //For each level, the computer clicks appropriate buttons with delay for player
// function playLevel(nextComputerPicks) {
//     computerPicks.forEach((color, index) => {
//         setTimeout(() => {
//             pushColorButton(color)},
//             (index + 1)*1000)
//         })
// }

// //Used to choose random computer picked color
// function nextColor () {
//     const randomColor = colorButtons[Math.floor(Math.random()*4)]
//     return randomColor
// }

// //proceeds to next level; makes board unclickable while computer gives sequence with respective messages; computer adds a color to current picks; delay for user 
// function nextLevel () {
//     level += 1
//     board.setAttribute("id", "no-click")
//     playerMessage.innerHTML = "<p>Try to <span id='remember'>REMEMBER</span> this sequence!</p>"
//     showLevel.innerHTML = `<h2>Level: <span id='red'>${level}</span></h2>`

//     // const nextComputerPicks = [...computerPicks]
//     // nextComputerPicks.push(nextColor())

//     console.log("nextPicks", computerPicks)
//     computerPicks.push(nextColor())
//     playLevel(computerPicks)

//     // computerPicks = [...nextComputerPicks];
//     setTimeout(() => {
//         playerTurn(level)},
//         level*600 + 700)
// }

// //what happens when color is clicked by player; sound plays; comparison ensues with results
// function butPushed(colorOfButton) {
//     const colorIndex = colorButtons.indexOf(colorOfButton) //problem is here
//     //colorButtons.push(colorOfButton) - 1
//     console.log("colorIndex", colorIndex)
//     const sound = document.querySelector(`[id="${colorButtons[colorIndex]}-sound"]`)
//     console.log("sound", sound)
//     sound.play()
    
//     if (computerPicks.toString() === playerPicks.toString()) {
//         playerPicks = []
//         playerMessage.innerText = "Nice!"
//         setTimeout(() => {
//             nextLevel()},
//             2000)
//             return
//     } else {
//         restartGame()
    
//     }
// }
    
// //what happens when play button is pressed; button hides; player messages show instead; starts next level function
// function runPlayButton () {
//     playButton.setAttribute("id", "hide-after-start")
//     playerMessage.removeAttribute("id")
//     playerMessage.innerHTML = "<p>Try to <span id='remember'>REMEMBER</span> this sequence!</p>"
//     nextLevel()
// }
    
// //listens to clcik of play button and game starts
// playButton.addEventListener("click", runPlayButton)

// //listens to click on color and runs function of button pushed
// board.addEventListener("click", event => {
//     const colorBut = event.target.id.split("-")[0] //gets color we need from the id of div el clicked
//     console.log("colorBut", colorBut)

//     const colorIndexList = colorButtons.indexOf(colorBut)
//     console.log("colorIndexList", colorIndexList)
//     playerPicks.push(colorBut)

//     butPushed(colorBut)
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const colorButtons = ["green", "red", "yellow", "blue"]

let computerPicks = []; 
let playerPicks = []; 
let level = 0; 

const playButton = document.querySelector('.start-game'); 
const playerMessage = document.querySelector('.message'); 
const heading = document.querySelector('.js-heading'); 
const board = document.querySelector('.game-area'); 
const showLevel = document.querySelector(".shows-level") //LOOK OVER

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
//   const tiles = ['red', 'green', 'blue', 'yellow'];
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
    restartGame('AGH! Wrong Color...try again!');//done
    return;
  }

  if (playerPicks.length === computerPicks.length) {
    // if (playerPicks.length === 20) {
    //     restartGame('Congrats! You completed all the levels');
    //     return
    // }

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