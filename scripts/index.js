let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {

    let Choice = prompt(`Please choose: rock, paper, or scissors`).toLowerCase();
    if (Choice === 'rock' || Choice === 'paper' || Choice === 'scissors') {
        return Choice;
    }
    else {
        console.log('Invalid choice. Please choose Rock, Paper, or Scissors.');
        return getHumanChoice();
    }
}

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'rock';
    }
    else if (randomNum === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }

}

    function playRound(humanChoice, computerChoice) {
        console.log(humanChoice);
        console.log(computerChoice);

        if (humanChoice === computerChoice) {
            console.log('Its a Tie');
        }

        else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice === 'scissors' && computerChoice === 'paper'

        ) {
            humanScore++;
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        }
        else {
            computerScore++;
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        }
        console.log(`Score: Human - ${humanScore} and Computer - ${computerScore}`);
    }
    
function playGame() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

console.log("Round 1:");
playGame();

console.log("Round 2:");
playGame();

console.log("Round 3:");
playGame();

console.log("Round 4:");
playGame();

console.log("Round 5:");
playGame();