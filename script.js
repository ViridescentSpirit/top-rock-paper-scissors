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

let gameActive = `true`;
let gameResult = `None`;
let winCount = 0;
let lossCount = 0;

let game = document.querySelector(`.game`);

game.addEventListener(`click`, event => {
    if(gameActive === `true`) {
        let target = event.target;

        switch(target.id) {
            case `rock`:
                playerSelection = `rock`;
                break;
            case `paper`:
                playerSelection = `paper`;
                break;
            case `scissors`:
                playerSelection = `scissors`;
                break;
        }

        getComputerChoice();
        playRound(playerSelection,computerSelection);
        scoreRound(gameResult);
        gameOverCheck(winCount, lossCount);
    }
});

function scoreRound(gameResult) {
    let playerScore = document.querySelector(`#playerScore`);
    let computerScore = document.querySelector(`#computerScore`);

    if (gameResult === `win`) {
        ++winCount;
        playerScore.textContent = `Player: ${winCount}`;
    } else if (gameResult === `loss`) {
        ++lossCount;
        computerScore.textContent = `Computer: ${lossCount}`;
    }
}

function playRound(playerSelection, computerSelection) {
    let roundResult = document.querySelector(`#roundResult`);
    roundResult.textContent = `You chose ${playerSelection}, computer chose ${computerSelection}! `;

    if (playerSelection === computerSelection) {
        roundResult.textContent += `Tie! Replay round!`;
        return gameResult = "tie";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "rock") ) {
        roundResult.textContent += `Player Wins! Good Job!`;
        return gameResult = "win";
    } else {
        roundResult.textContent += `Computer wins, you're an idiot!`;
        return gameResult = "loss";
    }
    
}

function gameOverCheck() {
    if (winCount === 5 || lossCount === 5) {
        let results = document.querySelector(`.results`);
        const gameOver = document.createElement(`p`);
        const resetButton = document.createElement('button');

        if (winCount === 5) {
            gameOver.textContent = `Congratulations! You beat the Computer!!`;
        } else {
            gameOver.textContent = `Wow... can't even beat a silly computer... disappointing.`;
        }

        gameOver.id = `gameOver`;
        resetButton.id = `reset`;
        resetButton.textContent = `Play Again!`;
        resetButton.style.position = `absolute`;
        resetButton.style.left = `50%`;
        resetButton.style.transform = `translateX(-50%)`;
        
        results.appendChild(gameOver);
        results.appendChild(resetButton);

        document.getElementById(`reset`).addEventListener(`click`, reset);

        gameActive = `false`;
    }
}


function reset()  {
    winCount = 0;
    lossCount = 0;

    let gameOver = document.querySelector(`#gameOver`);
    let resetButton = document.querySelector(`#reset`);

    gameOver.remove();
    resetButton.remove();

    roundResult.textContent = ``;
    playerScore.textContent = `Player: ${winCount}`;
    computerScore.textContent = `Computer: ${lossCount}`;

    gameActive = `true`;
};