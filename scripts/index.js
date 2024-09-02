let humanScore = 0;
let computerScore = 0;

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

const displayHumanChoice = document.createElement('p');
const displayComputerChoice = document.createElement('p');
const result1 = document.createElement('p');
const score = document.createElement('p');
let humanScoreWinner = document.createElement('p');
let computerScoreWinner = document.createElement('p');



function playRound(humanChoice, computerChoice) {
    // console.log(humanChoice);
    // console.log(computerChoice);
    displayHumanChoice.textContent = humanChoice;
    displayComputerChoice.textContent = computerChoice;
    if (humanChoice === computerChoice) {
        // console.log('Its a Tie');
        result1.textContent = "It is a Tie";
    }

    else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'

    ) {
        humanScore++;
        result1.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    else {
        computerScore++;
        result1.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    score.textContent = `Score: Human - ${humanScore} and Computer - ${computerScore}`;

    if (humanScore === 5 ) {
        humanScoreWinner.textContent = `Player 1 Wins`;
    }
    if (computerScore === 5) {
        computerScoreWinner.textContent = `Player 2 Wins`;
    }
}

const rockBtn = document.createElement("button");
rockBtn.setAttribute("id", "rock");
const paperBtn = document.createElement("button");
paperBtn.setAttribute("id", "paper");
const scissorsBtn = document.createElement("button");
scissorsBtn.setAttribute("id", "scissors");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);

rockBtn.addEventListener("click", (event) => {
    let getHumanChoice = event.currentTarget.id;
    playRound(getHumanChoice, getComputerChoice());

});
paperBtn.addEventListener("click", (event) => {
    let getHumanChoice = event.currentTarget.id;
    playRound(getHumanChoice, getComputerChoice());

});
scissorsBtn.addEventListener("click", (event) => {
    let getHumanChoice = event.currentTarget.id;
    playRound(getHumanChoice, getComputerChoice());
});

const div = document.createElement("div");
document.body.appendChild(div);
div.appendChild(displayHumanChoice);
div.appendChild(displayComputerChoice);
div.appendChild(result1);
div.appendChild(score);
div.appendChild(humanScoreWinner);
div.appendChild(computerScoreWinner);

// The reset score added in future.
// Running score is going.
// When any one player reaches 5 points, then announce the Win player.
// when click a button, player Win will removed and both score set to 0 after that by setting condition 
