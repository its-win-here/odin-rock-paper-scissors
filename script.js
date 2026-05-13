console.log("Hello World");

let computerScore = 0;
let humanScore = 0;

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