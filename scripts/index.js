function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'Rock';
    }
    if (randomNum === 1) {
        return 'Paper';
    }
    if (randomNum === 2) {
        return 'Scissors';
    }

}
console.log(getComputerChoice());

function getHumanChoice() {

    const Choice = prompt(`Sir please write one of these: Rock, Paper or Scissors`);
    if (Choice === 'Rock') {
        return 'Rock';
    }
    if (Choice === 'Paper') {
        return 'Paper';
    }
    if (Choice === 'Scissors') {
        return 'Scissors';
    }
}

console.log(getHumanChoice());