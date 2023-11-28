//Declare variables for computer and player choices
let playerSelection = "None";
let computerSelection = "None";
//Determine the computers selection using random function to define option between 1-3
function getComputerChoice() {
    computerRandomChoice = Math.floor(Math.random()*3) + 1;

    switch (computerRandomChoice) {
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "paper";
            break;
        case 3:
            computerSelection = "scissors";
            break;
    }
}

getComputerChoice();
//Determine the players selection by collecting an input
function getPlayerChoice() {
    return prompt("Rock, Paper, or Scissors?")
}

playerSelection = getPlayerChoice();
//guarantee that the player selection will match case with the computer selection regardless
//of actual user input
playerSelection = playerSelection.toLowerCase();
console.log("Computer Chose: " + computerSelection);
console.log("Player Chose: " + playerSelection);
//Compare the computers selection and the players selection to determine a winner
let gameResult = "None";

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie! Replay round!");
        return gameResult = "tie";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "rock") ) {
        console.log("Player Wins! Good Job!");
        return gameResult = "win";
    } else {
        console.log("Computer wins, you're an idiot!");
        return gameResult = "loss";
    }
}

gameResult = playRound(playerSelection, computerSelection);
console.log(gameResult);
//If players select the same choice, replay the round until a winner is determined