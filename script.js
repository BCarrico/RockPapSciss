let wrongInput = false;
let gameArray = ["rock", "paper", "scissors"];
let computerAnswer = "string";
let playerScore = 0;
let computerScore = 0;
let noWinner = true;

const rockBtn = document.querySelector('.rockButton');
rockBtn.addEventListener('click', () => {
    console.log("rock clicked");
    userPromptInput = "rock";
    checkNoWinner();
})  

const paperBtn = document.querySelector('.paperButton');
paperBtn.addEventListener('click', () => {
    console.log("paper clicked");
    userPromptInput = "paper";
    checkNoWinner();
})

const scissorsBtn = document.querySelector('.scissorsButton');
scissorsBtn.addEventListener('click', () => {
    console.log("scissors clicked");
    userPromptInput = "scissors";
    checkNoWinner();
})

function computerPlay(){
    randomNumber = Math.floor(Math.random()*gameArray.length);
    computerAnswer = gameArray[randomNumber];
    console.log("Computer choice is " + computerAnswer);
    playRound();
    gameWinner();
}

function checkNoWinner(){
    console.log(noWinner);
    if (noWinner != false){
        computerPlay();
    } else {
        console.log('Game Over, try again?');
    }
}


function playRound(player, computer){
    if (userPromptInput === computerAnswer){
        roundResult.textContent = "You tied... " + userPromptInput + " is the same as " + computerAnswer
    } else if (userPromptInput === "rock" && computerAnswer === "scissors") {
        roundResult.textContent = "You win! Rock beats Scissors";
        playerScore++;
    } else if (userPromptInput === "paper" && computerAnswer === "rock"){
        roundResult.textContent = "You win! Paper beats Rock";
        playerScore++;
    } else if (userPromptInput === "scissors" && computerAnswer === "paper"){
        roundResult.textContent = "You win! Scissors beat paper";
        playerScore++;
    } else if (userPromptInput === "rock" && computerAnswer === "paper"){
        roundResult.textContent = "You lose! Paper beats rock";
        computerScore++;
    } else if (userPromptInput === "paper" && computerAnswer === "scissors"){
        roundResult.textContent = "You lose! Scissors beat rock";
        computerScore++;
    } else if (userPromptInput === "scissors" && computerAnswer === "rock"){
        roundResult.textContent = "You lose! Rock beats scissors";
        computerScore++;
    } else {
        console.log("playRound error")
    }
} 

function gameWinner(int, int){
    if (playerScore === 5){
        console.log("Nice job! You won best of 5! Score was Player " + playerScore +" v Computer score of " + computerScore); 
        resultsContainer.textContent = "Nice job! You won best of 5! Score was Player " + playerScore +" vs Computer score of " + computerScore;
        currentScoreContainer.textContent = "Player Score: " + playerScore + "                  vs                  Computer Score: " + computerScore;
        noWinner = false;
        
    } else if (computerScore === 5){
        console.log("Uh oh, sorry, but you lost. Score was Player " + playerScore +" v Computer score of " + computerScore); 
        resultsContainer.textContent = "Uh oh, sorry, but you lost. Score was Player " + playerScore +" v Computer score of " + computerScore
        currentScoreContainer.textContent = "Player Score: " + playerScore + "                  vs                  Computer Score: " + computerScore;
        noWinner = false;
        
    } else {
        currentScoreContainer.textContent = "Player Score: " + playerScore + "                  vs                  Computer Score: " + computerScore;
        noWinner = true;  
    }
}


/* DOM Text Events */
const resultsContainer = document.querySelector('.results');
const currentScoreContainer = document.querySelector('.currentScore');
const roundResult = document.querySelector('.roundResult');
/*const restartButton = document.createElement('button');
restartButton.textContent = "Play Again?";
restartButton.addEventListener('click', () => {
    console.log("restartClicked")
    noWinner = true;
    playerScore = 0;
    computerScore = 0;
    resultsContainer.removeChild(restartButton);
})*/