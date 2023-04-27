let computerPicks = [];
let playerPicks = [];
let level = 0;

const playButton = document.querySelector(".start-game");
const showLevel = document.querySelector(".shows-level")
const board = document.querySelector(".game-area")
const playerMessage = document.querySelector(".message");
    
function restartGame(sorry) {
    playerMessage.innerHTML = "<pan id='red'>'sorry'</span>" //fix this
    computerPicks = []
    playerPicks = []
    level = 0
    playButton.removeAttribute("id","hide-after-start")
    playerMessage.setAttribute("id","hide")
    board.setAttribute("id","no-click")
}
    
function playerTurn(level) {
    board.removeAttribute("id", "no-click")
    playerMessage.innerText = "Your turn!"
}

function pushColorButton (color) {
    const colorBut = document.querySelector(`[id="${color}-button"]`)
    const sound = document.querySelector(`[id="${color}-sound"]`)
    colorBut.setAttribute("class", "pushed");
    sound.play()
    setTimeout(() => {
        colorBut.removeAttribute("class", "pushed")},
        500)
}
        
function playLevel(nextComputerPicks) {
    nextComputerPicks.forEach((color, index) => {
        setTimeout(() => {
            pushColorButton(color)},
            (index + 1)*1000)
        })
}

function nextColor () {
    const colorButtons = ["green", "red", "yellow", "blue"]
    const randomColor = colorButtons[Math.floor(Math.random()*4)]
    return randomColor
}

function nextLevel () {
    level += 1
    board.setAttribute("id", "no-click")
    playerMessage.innerHTML = "<p>Try to <span id='remember'>REMEMBER</span> this sequence!</p>"
    showLevel.innerHTML = `<h2>Level: <span id='red'>${level}</span></h2>`
    
    const nextComputerPicks = [...computerPicks]
    nextComputerPicks.push(nextColor())
    playLevel(nextComputerPicks)

    computerPicks = [...nextComputerPicks];
    setTimeout(() => {
        playerTurn(level)},
        level*600 + 2000)
}

function butPushed(colorBut) {
    const colorIndex = playerPicks.push(colorBut) - 1
    const soundIndex = document.querySelector(`[id="${colorBut}-sound"]`)
    sound.play()
    
    if (computerPicks.length === playerPicks.length) {
        playerPicks = []
        playerMessage.innerText = "Nice!"
        setTimeout(() => {
            nextLevel()},
            2000)
            return
    } else if (playerPicks[colorIndex] !== computerPicks[colorIndex]) {
        restartGame("AGH! Wrong Color...try again!")
        return
    }
}
    
function runPlayButton () {
    playButton.setAttribute("id", "hide-after-start")
    playerMessage.removeAttribute("id")
    playerMessage.innerHTML = "<p>Try to <span id='remember'>REMEMBER</span> this sequence!</p>"
    nextLevel()
}
            
playButton.addEventListener("click", runPlayButton)
board.addEventListener("click", event => {
    const {colorBut} = event.target.dataset
    
    if (colorBut)
    butPushed(colorBut)
})
        
