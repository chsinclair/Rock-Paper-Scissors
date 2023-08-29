function getComputerChoice() {
    const rndInt = Math.floor(Math.random() * 3) + 1;
    if (rndInt === 1) {
        return "ROCK";
    } else if 
        (rndInt === 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
        }
    }
    
let playerWins = 0;
let computerWins = 0;       

function game() {
    for (i = 0; i <= 4; i++) {
        function playRound() {
                let computerSelection = getComputerChoice();
                let playerChoice = prompt('Please enter either "Rock" "Paper" or "Scissors"');
                let playerSelection = playerChoice.toUpperCase();
                if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
                    console.log("You win! Rock beats Scissors!")
                     playerWins++;
                } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
                    console.log("You lose! Paper beats Rock!"); 
                     computerWins++;
                } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
                    console.log("You win! Scissors beats Paper!");
                     playerWins++; 
                } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
                    console.log("You lose! Rock beats Scissors!"); 
                     computerWins++;         
                } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
                    console.log("You win! Paper beats Rock!");
                     playerWins++;   
                } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
                    console.log("You lose! Scissors beats Paper!"); 
                     computerWins++;       
                } else if (playerSelection === computerSelection) {
                     console.log("It's a tie!");
                }           
             }
            playRound();
        }
    }
game();

    if (playerWins > computerWins) {
        console.log(`You won ${playerWins} ${playerWins > 1 ? 'games' : 'game'} and the computer won ${computerWins} ${computerWins > 1 ? 'games' : 'game'}. You win!`)
    } else if (playerWins === computerWins) {
        console.log(`You won ${playerWins} ${playerWins > 1 ? 'games' : 'game'} and the computer won ${computerWins} ${computerWins > 1 ? 'games' : 'game'}. It's a tie!`)
    } else {
        console.log(`You won ${playerWins} ${playerWins > 1 ? 'games' : 'game'} and the computer won ${computerWins} ${computerWins > 1 ? 'games' : 'game'}. You lose!`)
    }

