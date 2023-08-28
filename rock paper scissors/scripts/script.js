function getComputerChoice(computerChoice) {
    const rndInt = Math.floor(Math.random() * 3) + 1;
    if (rndInt === 1) {
        return computerChoice = "Rock";
    } else if 
        (rndInt === 2) {
        return computerChoice = "Paper";
    } else if 
        (rndInt === 3) {
         return computerChoice = "Scissors";
        }
    }

console.log(getComputerChoice());
