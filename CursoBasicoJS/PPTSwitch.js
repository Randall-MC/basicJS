// Piedra, papel o tijera with SWITCH sentence

let options = ["rock", "paper", "scissors"];
let result;

function play(user) {
  let bot = options[Math.floor(Math.random() * options.length)];
  switch (true) {
    case user === "rock" && bot === "scissors":
      result = "You win";
      break;
    case user === "paper" && bot === "rock":
      result = "You win";
      break;
    case user === "scissors" && bot === "paper":
      result = "You win";
      break;
    case user === bot:
      result = "Draw";
      break;
    default:
      result = "You Lose";
      break;
  }
  console.log(result + " " + `${user} vs ${bot}`);
}

play("rock");
play("paper");
play("scissors");
