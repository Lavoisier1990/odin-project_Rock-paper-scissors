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
let playerScore = 0;
let compScore = 0;

function myFunction(){
const playerSelection = prompt("Choose your weapon");
const computerSelection = getComputerChoice();
const modPlayerSelection = playerSelection.toLowerCase();
const modComputerSelection = computerSelection.toLowerCase();
let playerRoundScore = 0;
let computerRoundScore = 0;
let msg = "";

function playRound(playerSelection, computerSelection) {
if (modPlayerSelection === "rock" && modComputerSelection === "rock"){
    playerRoundScore += 1;
    computerRoundScore += 1;
    playerScore += 1; 
    compScore += 1; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n Stalemate! We have a draw.\nRound Score:\n ${playerRoundScore} : ${computerRoundScore}\nTotal:\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "rock" && modComputerSelection === "paper") {
        playerRoundScore;
        computerRoundScore += 3;
        playerScore; 
        compScore += 3; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n You Lose! Paper beats Rock.\nRound Score:\n ${playerRoundScore} : ${computerRoundScore}\nTotal:\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "rock" && modComputerSelection === "scissors") {
        playerRoundScore += 3;
        computerRoundScore;
        playerScore += 3; 
        compScore; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n You Win! Rock beats Scissors.\nRound Score:\n ${playerRoundScore} : ${computerRoundScore}\nTotal:\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "paper" && modComputerSelection === "paper") {
        playerRoundScore += 1;
        computerRoundScore += 1;
        playerScore += 1; 
        compScore += 1; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n Stalemate! We have a draw.\nRound Score:\n ${playerRoundScore} : ${computerRoundScore}\nTotal:\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "paper" && modComputerSelection === "scissors") {
        playerRoundScore;
        computerRoundScore += 3;
        playerScore; 
        compScore += 3;
    msg = `${modPlayerSelection} : ${modComputerSelection}\n You Lose! Scissors beats Paper.\nRound Score:\n ${playerRoundScore} : ${computerRoundScore}\nTotal:\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "paper" && modComputerSelection === "rock") {
        playerRoundScore += 3;
        computerRoundScore;
        playerScore += 3; 
        compScore; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n You Win! Paper beats Rock.\nRound Score:\n ${playerRoundScore} : ${computerRoundScore}\nTotal:\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "scissors" && modComputerSelection === "scissors") {
        playerRoundScore += 1;
        computerRoundScore += 1;
        playerScore += 1; 
        compScore += 1; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n Stalemate! We have a draw.\nRound Score:\n ${playerRoundScore} : ${computerRoundScore}\nTotal:\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "scissors" && modComputerSelection === "rock") {
        playerRoundScore;
        computerRoundScore += 3;
        playerScore; 
        compScore += 3;
    msg = `${modPlayerSelection} : ${modComputerSelection}\n You Lose! Rock beats Scissors.\nRound Score:\n ${playerRoundScore} : ${computerRoundScore}\nTotal:\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "scissors" && modComputerSelection === "paper") {
        playerRoundScore += 3;
        computerRoundScore;
        playerScore += 3; 
        compScore; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n You Win! Scissors beats Paper.\nRound Score:\n ${playerRoundScore} : ${computerRoundScore}\nTotal:\n ${playerScore} : ${compScore}`;
    } else if (modPlayerSelection === "") {
        playerRoundScore;
        computerRoundScore;
        playerScore;
        compScore; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n Enter something.\nRound Score:\n ${playerRoundScore} : ${computerRoundScore}\nTotal:\n ${playerScore} : ${compScore}`;
    } else {
        playerRoundScore;
        computerRoundScore;
        playerScore;
        compScore; 
    msg = `${modPlayerSelection} : ${modComputerSelection}\n Choose among 'rock', 'paper' or 'scissors'.\nRound Score:\n ${playerRoundScore} : ${computerRoundScore}\nTotal:\n ${playerScore} : ${compScore}`;    
    }
return msg;
}
console.log(playRound(playerSelection, computerSelection));
}



