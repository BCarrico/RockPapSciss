let userPromptInput = window.prompt("Do you choose Rock, Paper, or Scissors?");
let wrongInput = false;
let gameArray = ["rock", "paper", "scissors"];
let computerAnswer = "string";
    
inputLowerCase();

function inputLowerCase(){
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
} 

function computerPlay(){
    randomNumber = Math.floor(Math.random()*gameArray.length);
    computerAnswer = gameArray[randomNumber];
    console.log("Computer choice is " + computerAnswer);
    playRound();
}

function wrongPrompt(){
    if (wrongInput === true) {
    userPromptInput = window.prompt("Not an available choice. Try again. Rock, Paper, or Scissors?");
    inputLowerCase();
    }
} 

function playRound(player, computer){
    if (userPromptInput === computerAnswer){
        console.log("You tied... " + userPromptInput + " is the same as " + computerAnswer)
    } else if (userPromptInput === "rock" && computerAnswer === "scissors") {
        console.log("You win! Rock beats Scissors")
    } else if (userPromptInput === "paper" && computerAnswer === "rock"){
        console.log("You win! Paper beats Rock")
    } else if (userPromptInput === "scissors" && computerAnswer === "paper"){
        console.log("You win! Scissors beat paper")
    } else if (userPromptInput === "rock" && computerAnswer === "paper"){
        console.log("You lose! Paper beats rock")
    } else if (userPromptInput === "paper" && computerAnswer === "scissors"){
        console.log("You lose! Scissors beat rock")
    } else if (userPromptInput === "scissors" && computerAnswer === "rock"){
        console.log("You lose! Rock beats scissors")
    } else {
        console.log("playRound error")
    }
} 




