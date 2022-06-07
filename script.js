let userPromptInput = window.prompt("Do you choose Rock, Paper, or Scissors?");
let wrongInput = false;
    
inputLowerCase();
checkInput();


function wrongPrompt(){
    if (wrongInput === true) {
    userPromptInput = window.prompt("Not an available choice. Try again. Rock, Paper, or Scissors?");
    checkInput();
    }
} 

function inputLowerCase(){
   console.log(userPromptInput.toLowerCase());
}

function checkInput(){
if (userPromptInput !== "paper" && userPromptInput !== "rock" && userPromptInput !== "scissors"){
    wrongInput = true;
    console.log(wrongInput);
    wrongPrompt();
} else {
    wrongInput = false;
} 
} 




