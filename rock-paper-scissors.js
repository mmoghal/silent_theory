// Initialize the win, tie, and loss counters to zero
let wins = 0;
let ties = 0;
let losses = 0;

// Define a function to play one round of the game
function playRound() {
  // Prompt the user to choose rock, paper, or scissors
  const userChoice = prompt("Choose rock (R), paper (P), or scissors (S):");
  
  // Generate a random choice for the computer
  const computerChoice = ["R", "P", "S"][Math.floor(Math.random() * 3)];

  // Determine the result of the game based on the choices made
  let result;
  if (userChoice === computerChoice) {
    result = "tie";
    ties++; // Increment the tie counter
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    result = "win";
    wins++; // Increment the win counter
  } else {
    result = "loss";
    losses++; // Increment the loss counter
  }

  // Display the result of the round to the user
  alert(`You chose ${userChoice}, computer chose ${computerChoice}. You ${result}!`);
}

// Define a function to start the game
function startGame() {
  // Play rounds of the game until the user chooses to stop
  do {
    playRound();
  } while (confirm(`Wins: ${wins}, Ties: ${ties}, Losses: ${losses}. Play again?`));
}

// Get a reference to the "Start Game" button
const startButton = document.getElementById("start");

// Add a click event listener to the "Start Game" button
startButton.addEventListener("click", startGame);
