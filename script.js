const options = ["Rock", "Paper", "Scissors"];
/*begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. */
function getComputerChoice() {
const compChoice = options[Math.floor(Math.random()*options.length)];
return compChoice;
}
/*Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).*/
const playerSelection = prompt("Choose your weapon");
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
const modPlayerSelection = playerSelection.toLowerCase();
const modComputerSelection = computerSelection.toLowerCase();
let msg ="";

if (modPlayerSelection === "rock" && modComputerSelection === "rock"){
    msg = "Stalemate! We have a draw.";
    } else if (modPlayerSelection === "rock" && modComputerSelection === "paper") {
    msg = "You Lose! Paper beats Rock."
    } else if (modPlayerSelection === "rock" && modComputerSelection === "scissors") {
    msg = "You Win! Rock beats Scissors."
    } else if (modPlayerSelection === "paper" && modComputerSelection === "paper") {
    msg = "Stalemate! We have a draw.";
    } else if (modPlayerSelection === "paper" && modComputerSelection === "scissors") {
    msg = "You Lose! Scissors beats Paper.";
    } else if (modPlayerSelection === "paper" && modComputerSelection === "rock") {
    msg = "You Win! Paper beats Rock.";
    } else if (modPlayerSelection === "scissors" && modComputerSelection === "scissors") {
    msg = "Stalemate! We have a draw.";
    } else if (modPlayerSelection === "scissors" && modComputerSelection === "rock") {
    msg = "You Lose! Rock beats Scissors.";
    } else if (modPlayerSelection === "scissors" && modComputerSelection === "paper") {
    msg = "You Win! Scissors beats Paper.";
    } else if (modPlayerSelection === "") {
    msg = "Enter something.";
    } else {
    msg = "";    
    }

return msg;
}

console.log(playerSelection.toLowerCase() + " : " + computerSelection.toLowerCase());
console.log(playRound(playerSelection, computerSelection));

/*Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end. Use prompt() to get input from the user.*/

function playGame(){

}