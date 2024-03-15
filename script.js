const options = ["Rock", "Paper", "Scissors"];
/*begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. */
function getComputerChoice() {
const choice = options[Math.floor(Math.random()*options.length)];
return choice;
}

console.log(getComputerChoice());