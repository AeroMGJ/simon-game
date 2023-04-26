let computerPicks = [];
let playerPicks = [];
let level = 0;

const playButton = doucment.querySelector(".start-game");
const prompt = document.querySelector(".prompts");

function playButton () {
    playButton.setAttribute("id", "hide-after-start")
    prompt.removeAttribute("id")
    prompt.innerHTML = "<p>Try to <span id="remember">REMEMBER</span> this sequence!</p>"

}

function nextLevel () {
    level += 1
    const nextSequence = [...sequence]
}

playButton.addEventListener("click", playButton)