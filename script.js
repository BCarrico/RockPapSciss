let wrongInput = false;
let gameArray = ["rock", "paper", "scissors"];
let computerAnswer = "string";
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.rockButton');
rockBtn.addEventListener('click', () => {
    console.log("rock clicked");
    userPromptInput = "rock";
    computerPlay();
})  

const paperBtn = document.querySelector('.paperButton');
paperBtn.addEventListener('click', () => {
    console.log("paper clicked");
    userPromptInput = "paper";
    computerPlay();
})

const scissorsBtn = document.querySelector('.scissorsButton');
scissorsBtn.addEventListener('click', () => {
    console.log("scissors clicked");
    userPromptInput = "scissors";
    computerPlay();
})

/*game();*/
/*gameWinner();*/

/*function getUserInput(){
    
   
    userPromptInput = window.prompt("Do you choose Rock, Paper, or Scissors?");
    userPromptInput = userPromptInput.toLowerCase();
    checkInput();
}*/

/*function inputLowerCase(){
    userPromptInput = userPromptInput.toLowerCase();
    console.log("Your choice is " + userPromptInput);
    checkInput();
}

function checkInput(){
if (userPromptInput !== "paper" && userPromptInput !== "rock" && userPromptInput !== "scissors"){
    console.log(userPromptInput);
    wrongInput = true;
    console.log(wrongInput);
    wrongPrompt();
} else {
    wrongInput = false;
    computerPlay();
} 
} */

function computerPlay(){
    randomNumber = Math.floor(Math.random()*gameArray.length);
    computerAnswer = gameArray[randomNumber];
    console.log("Computer choice is " + computerAnswer);
    playRound();
}

/*function wrongPrompt(){
    if (wrongInput === true) {
    userPromptInput = window.prompt("Not an available choice. Try again. Rock, Paper, or Scissors?");
    inputLowerCase();
    }
} */

function playRound(player, computer){
    if (userPromptInput === computerAnswer){
        console.log("You tied... " + userPromptInput + " is the same as " + computerAnswer)
    } else if (userPromptInput === "rock" && computerAnswer === "scissors") {
        console.log("You win! Rock beats Scissors");
        playerScore++;
    } else if (userPromptInput === "paper" && computerAnswer === "rock"){
        console.log("You win! Paper beats Rock");
        playerScore++;
    } else if (userPromptInput === "scissors" && computerAnswer === "paper"){
        console.log("You win! Scissors beat paper");
        playerScore++;
    } else if (userPromptInput === "rock" && computerAnswer === "paper"){
        console.log("You lose! Paper beats rock");
        computerScore++;
    } else if (userPromptInput === "paper" && computerAnswer === "scissors"){
        console.log("You lose! Scissors beat rock");
        computerScore++;
    } else if (userPromptInput === "scissors" && computerAnswer === "rock"){
        console.log("You lose! Rock beats scissors");
        computerScore++;
    } else {
        console.log("playRound error")
    }
} 

function gameWinner(int, int){
    if (playerScore === computerScore){
        console.log("Wow, you tied after all that! Best of 7?");
    } else if (playerScore > computerScore){
        console.log("Nice job! You won best of 5! Score was Player " + playerScore +" v Computer score of " + computerScore); 
    } else {
        console.log("Uh oh, sorry, but you lost. Score was Player " + playerScore +" v Computer score of " + computerScore);
    }
}

/*function game(){
    for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) { 
        getUserInput();
        console.log(playerScore, computerScore);
    }
}*/





