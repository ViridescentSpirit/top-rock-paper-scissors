//Declare variables for computer and player choices
let playerSelection = "None";
let computerSelection = "None";
//Determine the computers selection using random function to define option between 1-3
function getComputerChoice() {
    return Math.floor(Math.random()*3) + 1;
}

let computerRandomChoice = getComputerChoice();

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

console.log(computerRandomChoice);
console.log(computerSelection);
//Determine the players selection by collecting an input
function getPlayerChoice() {
    return prompt("Rock, Paper, or Scissors?")
}

playerSelection = getPlayerChoice();
console.log(playerSelection);
//guarantee that the player selection will match case with the computer selection regardless
//of actual user input
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);
//Compare the computers selection and the players selection to determine a winner
//If players select the same choice, replay the round until a winner is determined