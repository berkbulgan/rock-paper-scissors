const rps = ["rock", "paper", "scissors"];

function computerPlay(){
    return rps[Math.floor(Math.random()*3)]; 
}

function rockPaperScissors(playerInput, computerInput){
    if (playerInput == computerInput) return "draw";
    if ((playerInput == rps[0] && computerInput == rps[2]) ||
        (playerInput == rps[1] && computerInput == rps[0]) ||
        (playerInput == rps[2] && computerInput == rps[1])){
            return "win";
    }
    if ((playerInput == rps[0] && computerInput == rps[1]) ||
        (playerInput == rps[1] && computerInput == rps[2]) ||
        (playerInput == rps[2] && computerInput == rps[0])){
            return "lose";
    }
}
function game(){
    let first, second, result;
    let playerScore = 0, computerScore = 0;
    for(let i = 0; i<5; i++){
        first = prompt("Plaese enter; Rock, paper or scissors.").toLowerCase();
        if(rps.includes(first)){
            second = computerPlay();
            result = rockPaperScissors(first, second);
            if(result == "win"){
                playerScore++;
                console.log(`You Win.\nYou've selected ${first}, computer selected ${second}.${first} beats ${second}`);
                console.log(`Current Score:\n You-${playerScore} vs ${computerScore}-Computer`);
            }
            else if(result == "lose"){
                computerScore++;
                console.log(`You Lose.\nYou've selected ${second}, computer selected ${first}.${second} beats ${first}`);
                console.log(`Current Score:\n You-${playerScore} vs ${computerScore}-Computer`);
            }
            else if(result == "draw"){
                console.log(`It's a Draw.\nYou've and Computer've selected ${second}.`);
                console.log(`Current Score:\n You-${playerScore} vs ${computerScore}-Computer`);
                i--;
            }
        }
        else{
            console.log("Your input is invalid.");
            i--;
        }
    }
    console.log(`Final Score You-${playerScore} vs ${computerScore}-Computer`);
    if(playerScore>computerScore) console.log(`Congrats! We have a winner.`);
    else console.log(`You Lose. But don't worry. Theres always a different time.`);
}

game();