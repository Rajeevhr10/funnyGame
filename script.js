const imgs = document.querySelectorAll("img");
const results = document.querySelector(".result");
const userChoices = document.querySelector(".User-choice");
const computerChoices = document.querySelector(".Computer-choice");
const userPoints = document.querySelector(".User-Points");
const computerPoints = document.querySelector(".Computer-Points");

let userPoint= 0;
let computerPoint = 0;

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    const computerTurn = computerChoice();
    const result = gamePlay(img.id, computerTurn);
    userChoices.textContent = img.id;
    computerChoices.textContent = computerTurn;
    results.textContent = result;
  });
});

// Computer randomly pick one choice from the given choices
function computerChoice() {
  const choices = ["rock", "paper", "scissor"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

// it return result by checking user and computer selection
function gamePlay(userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    return "It is a tie..!";
  } else if (
    (userSelection === "rock" && computerSelection === "scissor") ||
    (userSelection === "paper" && computerSelection === "rock") ||
    (userSelection === "scissor" && computerSelection === "paper")
  ) {
    userPoint++;
    userPoints.textContent = userPoint;
    return "Hurrah! You win..! " + userSelection + " beats " + computerSelection;
  } else {
    computerPoint++;
    computerPoints.textContent = computerPoint;
    return "Oops! You lose...! " + computerSelection + " beats " + userSelection;
  }
}