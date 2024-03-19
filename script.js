const options = ["Rock", "Paper", "Scissors"];
/*begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. */
function getComputerChoice() {
const compChoice = options[Math.floor(Math.random()*options.length)];
return compChoice;
}
/*Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).*/

function playGame(){
    myFunction();
    myFunction();
    myFunction();
    myFunction();
    myFunction();
}

function reset(){location.reload();
}
/*Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end. Use prompt() to get input from the user.*/

function myFunction(){
const playerSelection = prompt("Choose your weapon");
const computerSelection = getComputerChoice();
const modPlayerSelection = playerSelection.toLowerCase();
const modComputerSelection = computerSelection.toLowerCase();
let playerScore = 0;
let compScore = 0;
let msg = "";

function playRound(playerSelection, computerSelection) {
if (modPlayerSelection === "rock" && modComputerSelection === "rock"){
        playerScore += 1; 
        compScore += 1; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n Stalemate! We have a draw.\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "rock" && modComputerSelection === "paper") {
        playerScore; 
        compScore += 3; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n You Lose! Paper beats Rock.\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "rock" && modComputerSelection === "scissors") {
        playerScore += 3; 
        compScore; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n You Win! Rock beats Scissors.\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "paper" && modComputerSelection === "paper") {
        playerScore += 1; 
        compScore += 1; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n Stalemate! We have a draw.\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "paper" && modComputerSelection === "scissors") {
        playerScore; 
        compScore += 3;
    msg = `${modPlayerSelection} : ${modComputerSelection}\n You Lose! Scissors beats Paper.\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "paper" && modComputerSelection === "rock") {
        playerScore += 3; 
        compScore; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n You Win! Paper beats Rock.\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "scissors" && modComputerSelection === "scissors") {
        playerScore += 1; 
        compScore += 1; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n Stalemate! We have a draw.\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "scissors" && modComputerSelection === "rock") {
        playerScore; 
        compScore += 3;
    msg = `${modPlayerSelection} : ${modComputerSelection}\n You Lose! Rock beats Scissors.\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "scissors" && modComputerSelection === "paper") {
        playerScore += 3; 
        compScore; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n You Win! Scissors beats Paper.\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "") {
        playerScore;
        compScore; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n Enter something.\n ${playerScore} : ${compScore}`;
    } else {
        playerScore;
        compScore; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n Choose among 'rock', 'paper' or 'scissors'.\n ${playerScore} : ${compScore}`;    
    }
return msg;
}
console.log(playRound(playerSelection, computerSelection));
}



