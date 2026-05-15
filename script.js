console.log("Hello World");

let computerScore = 0;
let humanScore = 0;
let rounds = 1;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 10);
    if (randomIndex < 3) {
        return "rock";
    } else if (randomIndex < 6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, scissors):");
    if (choice === null || !["rock", "paper", "scissors"].includes(choice.toLowerCase())) {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) { 
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }   
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        console.log(result);
    }
    console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

// Dom manipulation
const computerScoreElement = document.getElementById("computerScore");
const humanScoreElement = document.getElementById("humanScore");
const roundsElement = document.getElementById("rounds");
const resultElement = document.getElementById("result");
const finalResult = document.getElementById("finalResult");

function updateScores() {
    computerScoreElement.textContent = `Computer Score: ${computerScore}`;
    humanScoreElement.textContent = `Your Score: ${humanScore}`;
    roundsElement.textContent = `Number of rounds: ${rounds++}`;
}

function displayResult(result) {
    resultElement.textContent = "Current Round: " + result;
    if (rounds >= 5) {
        if (humanScore > computerScore) {
            finalResult.textContent = "Congratulations! You won the game!";
        } else if (computerScore > humanScore) {
            finalResult.textContent = "Sorry! The computer won the game!";
        } else {
            finalResult.textContent = "It's a tie game!";
        }
    }
}

document.getElementById("rock").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("rock", computerChoice);
    displayResult(result);
    updateScores();
}); 

document.getElementById("paper").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("paper", computerChoice);
    displayResult(result);
    updateScores();
});

document.getElementById("scissors").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound("scissors", computerChoice);
    displayResult(result);
    updateScores();
});

    