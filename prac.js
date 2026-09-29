let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")



const playerScorePara = document.querySelector("#playerScore")
const computerScorePara = document.querySelector("#computerScore")

const computerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
};

const drawGame = () => {
//   console.log("It's a draw!");
  msg.innerText = "Game was Draw.Play again."
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    playerScore++;
    playerScorePara.innerText = playerScore;
    // console.log("you win");
    msg.innerText = `You Win. Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "Green";
    

  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    // console.log("you lose");
    msg.innerText = `You Lose ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "Red";
  }
};

const playGame = (userChoice) => {
//   console.log("User choice is :" + userChoice);
  const computerChoiceValue = computerChoice();
//   console.log("Computer choice is :" + computerChoiceValue);

  if (userChoice === computerChoiceValue) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //sissors, paper
      userWin = computerChoiceValue === "paper" ? false :true ;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = computerChoiceValue === "scissors" ? false :true;
    } else {
      //paper, rock
      userWin = computerChoiceValue === "rock" ? false :true;
    }

    showWinner(userWin,userChoice,computerChoiceValue);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
