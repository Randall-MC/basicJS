// Piedra, papel o tijera

let options = ["rock", "paper", "scissors"];

function play(user){
    let bot = options[Math.floor(Math.random() * options.length)];
    if (user != bot){
        if (
            (user === "rock" && bot === "scissors") ||
            (user === "paper" && bot === "rock") ||
            (user === "scissors" && bot === "paper")
        ){
            console.log(`You Win ${user} vs ${bot}`);
        }else {
            console.log(`You lose ${user} vs ${bot}`);
        }
    }else if (user === bot){
        console.log(`Draw ${user} vs ${bot}`);
    }
}

play('rock');
play('paper');
play('scissors');
