# Simon

## History
"Released in 1978, the memory game Simon became a pivotal part of the 1980s electronic-toy craze. A version of a previous Atari arcade game, Simon was a game with brain. The round device had four different color panels. Players would illuminate a series of colors by touching them in an order of their choosing. Opponents would then have to mimic the pattern exactly or lose. Milton Bradley unveiled the game at New York's famously cool Studio 54 — who'd have thought that Simon would be the one of the pair to survive the 1980s?"

[Time.com](https://content.time.com/time/specials/packages/article/0,28804,2049243_2048657_2049188,00.html) 


## Rules
The game will give a sequence of colors that the player must remember and input it back by pressing the four buttons in succession. The game starts with one color and adds another color for each subsequent sequence that the player correctly iputs. At some point, the game increases the speed of giving the new sequence

"Complete the longest sequence you can to hit a new high score!"

Link to get PDF of manual from official Hasbro webiste:
[Hasbro.com](https://instructions.hasbro.com/en-us/instruction/simon-game)

## Game

![First Page](/Assets/first-page)
![Player's Turn](/Assets/payer-turn)
![Computer Animation](/Assets/computer-animation)

[SIMON!](http://127.0.0.1:5500/zindex.html)

## Wireframe/UI

![Simon Wireframe](/Assets/simon-wireframe.jpeg)

1) Starting Page
    1) "Simon" should be in center as header
    2) Rules are stated
    3) History of game is optional; could just make an href link for users
    4) Taunt: "Test Your Memory!"
    5) Button below to start and initialize everything

2) Playing Page
    1) Simon header is still there.
    2) Rules, history, taunt, and button goes away.
    3) Center of page is depiction of Simon which is circle with quadrants (Q1=Red, Q2=Green, Q3= Yellow, Q4=Blue, counterclockwise starting at top right)
    4) Each color has a unique sound when activated or pressed
    5) Colors are dim when dormant but lights up when mouse is over it and even brighter when pressed or game giving sequence to remember.
    6) Counter is in some corner counting how many sequences remembered by player; could be simply labeled "Score"

3) Results Page
    1) No one has a losing score because no one has inifinite memory, but messages could change based on score 
        0-6 -> "You can do better!"
        7-15 -> "You're pretty good at this!"
        16+ -> "You have the memory of an elephant!"
    2) In actual game, score is shown by a flash from all lights for 10 pts and a flash from green light for 1 pt. (ex: 15 pts = 1 flash from all + 5 flashes from green)
    3) Under player's score should be a Try again button.


## Pseudocode
1) Define required constants
    1) Color and audio of quadrant buttons

2) Define required variables used to track the state of the game
    1) Board is essentially a 2x2 grid or array with 2 nested arrays
    2) Random sequence (mathrandom, mathnumber, indices 0-3) and player sequence should be continuously updated (touch) and not completely randomized. These will be compared to determine the game duration and score.
    3) Turn: 1 || -1: computer(1) starts everytime then player(-1) recites computer's pattern

3) Cache DOM elements
    1) Rules/history
    2) Start button
    3) Quadrants 
    4) Play again button
    5) Counter for score 

4) Upon loading the app should:
    1) Initialize computer going first and 2 nested arrays
    2) Render Simon game with dim colors; some lag time so first sequence won't be missed by player during initialization
    3) Counter should be set to zero
    4) Perhaps a message telling if computer is giving sequence and if it's time for player to recite.
    5) Wait for user to interact


5) Handle a player interaction
    1) When player recites sequence correctly, computer starts another sequence composed of previous with ONE added color.
    2) When player recites sequence inccorrectly, page loads the "Try Again" page. This should load as soon as player presses wrong color while trying to recite pattern. Make sure no unlimited inputs; limit inputs to length of computer pattern given(.length())
    3) Render play again button AFTER wrong guess.

6) Handle a player clicking the replay button
    1) Clear variables containing computer and player colors chosen
    2) Render inital page with rules (or just back to game itself?)

7) Check for a winner
    1) Game is over once the computer and player color patterns aren't the same. 
    2) There needs to be a comparison function always checking during the player's guess.
    2) It's all about geting the highest score possible

## Planned Future Enhancements
1) Get game to be fully functional
2) Optimize CSS for more realistic buttons and animations
3) Have quicker and more pleasant sounds
