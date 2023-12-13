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
//Determine the players selection by collecting an input
function getPlayerChoice() {
    return prompt("Rock, Paper, or Scissors?")
}

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

let winCount = 0;
let lossCount = 0;
