let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// A function to generate random Target Number
const generateTarget = () => targetNumber = Math.floor(Math.random() * 10);

// Bonus: This function returns distance of the two numbers and return absolute number

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

// This function determine who wins based on which guess is closet to the target. 
function compareGuesses (humanGuess, computerGuess, target) {
    // Bonus Method 

    let humanGuessDistance = getAbsoluteDistance (humanGuess, target);
    let computerGuessDistance = getAbsoluteDistance (computerGuess, target);
    // First method
    /*let humanGuessDistance = Math.abs(target-human);
    let computerGuessDistance = Math.abs(target-computer); */
    if (humanGuessDistance === computerGuessDistance) {
        return 'It is a tie. Play Again';
    } else if (humanGuess < 0 || humanGuess > 9) {
        return alert('The input number is out of range. It should be between 0 - 9.')
    } else if (humanGuessDistance < computerGuessDistance) {
        return true;
    } else {
        return false;
    }
}
// This function will update the player's score. Each player scores one each game they win.
const updateScore = winner => {
    if (winner === 'human') {
        humanScore ++;
    } else if (winner === 'computer') {
        computerScore ++;
    }
}

// This function will update and show which rounds of the game players are in. 
const advanceRound = () => currentRoundNumber ++;
