const rps = ["rock", "paper", "scissors"];
const playerScore = document.querySelector("#humanScore");
const compScore = document.querySelector("#compScore");
const flavorText = document.querySelector("#flavor");
const gameStatus = document.querySelector("#gameStatus");
const scores = [0,0];

function computerPlay(){
    return rps[Math.floor(Math.random()*3)]; 
}

function rockPaperScissors(playerInput, computerInput){
    flavorText.classList.remove("greenText", "redText")
    flavorText.textContent = `You've selected ${playerInput}, computer selected ${computerInput}.`;
    if (playerInput == computerInput)   return "draw";
    if ((playerInput == rps[0] && computerInput == rps[2]) ||
        (playerInput == rps[1] && computerInput == rps[0]) ||
        (playerInput == rps[2] && computerInput == rps[1])){
            scores[0]++;
            flavorText.classList.add("greenText");
            return "win";
    }
    if ((playerInput == rps[0] && computerInput == rps[1]) ||
        (playerInput == rps[1] && computerInput == rps[2]) ||
        (playerInput == rps[2] && computerInput == rps[0])){
            scores[1]++;
            flavorText.classList.add("redText");
            return "lose";
    }
}
function updateScores(){
    playerScore.textContent = scores[0];
    compScore.textContent = scores[1];
}
function playGame(e){
    if (scores[0] > 4 || scores[1] > 4){
        gameStatus.textContent = "Please reset your game to continue.";
        return;
    }
    rockPaperScissors(this.id, computerPlay());
    updateScores();
    if (scores[0] > 4){
        flavorText.textContent += " Congrats. You Win.";
    } else if (scores[1] > 4){
        flavorText.textContent += " You Lose.";
    }
}

function resetGame(){
    flavorText.classList.remove("greenText", "redText")
    scores[0] = 0;
    scores[1] = 0;
    updateScores();
    flavorText.textContent = "Good Luck.";
    gameStatus.textContent = "."
}
const resetButton = document.querySelector("#reset");
const selections = document.querySelectorAll(".key")
selections.forEach(selection => selection.addEventListener('click', playGame));
resetButton.addEventListener("click", resetGame);
resetGame();