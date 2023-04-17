const options = ["rock", "paper", "scissors"];

function computerPlay() {
  const randomIndex = Math.floor(Math.random() *3);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie! The Computer Selected same";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win! The Computer Selected  "+  computerSelection ;
  } else {
    return "You lose!The Computer Selected  "+  computerSelection  ;
  }
}

function game() {
  const buttons = document.querySelectorAll(".btn");
  const resultElement = document.querySelector(".result");
  let playerScore = 0;
  let computerScore = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const playerSelection = button.id;
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);

      if (result === "You win! The Computer Selected  "+  computerSelection ) {
        playerScore++;
      } else if (result === "You lose!The Computer Selected  "+  computerSelection) {
        computerScore++;
      }
      else{
        playerScore=playerScore+0.5;
        computerScore=computerScore+0.5;
      }

      resultElement.textContent = `${result} Player: ${playerScore} Computer: ${computerScore}`;

      if(playerScore===5 && computerScore==5){
        resultElement.textContent = "IT's a Draw";
        playerScore = 0;
        computerScore = 0;
      }
      else if (playerScore >= 5) {
        resultElement.textContent = "Congratulations! You win!";
        playerScore = 0;
        computerScore = 0;
      } else if (computerScore >= 5) {
        resultElement.textContent = "Sorry, you lose!";
        playerScore = 0;
        computerScore = 0;
      }
    });
  });
}

game();
