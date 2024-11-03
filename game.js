//Define guess number
const secretNumber = 15;
let attempt = 3;

//Greeting the games
alert("Welcome to our Guess Number Game");

//Ask player if he is willing to play or not
let startGame = confirm("Would you like to play the Game");

//check the player response
if (startGame) {
  //Inform player the range of number player can choose
  alert("Guess a number between 1 and 100.Let's get is started!!!");
  alert(`You will have ${attempt} attempt`);
  alert("Let's get is started!!!");
  //Ask player enter guess number
  let guessNmuber = prompt("Enter the secret number");
  //check the guess number
  if (guessNmuber == secretNumber) {
    alert(
      `Congrats! You guessed the secret number on ${attempt} attempt.The secret number is ${guessNmuber}`
    );
  } else if (guessNmuber != secretNumber) {
    alert("Your guess was wrong!!!");
    attempt--;
    alert(`You have ${attempt} attempt left`);
    let replay = confirm("Would you like replay again?");
    console.log(replay);
    if (replay) {
      if (attempt > 0) {
        guessNmuber = prompt("Enter the secret number");
        if (guessNmuber == secretNumber) {
          alert(
            `Congrats! You guessed the secret number on ${attempt} attempt.The secret number is ${guessNmuber}`
          );
        } else if (guessNmuber != secretNumber) {
          alert("Your guess was wrong!!!");
          attempt--;
          alert(`You have ${attempt} attempt left`);
          replay = confirm("Would you like replay again?");
          if (replay) {
            if (attempt > 0) {
              guessNmuber = prompt("Enter the secret number again");
              if (guessNmuber == secretNumber) {
                alert(
                  `Congrats! You guessed the secret number on ${attempt} attempt.The secret number is ${guessNmuber}`
                );
              } else if (guessNmuber != secretNumber) {
                alert("Your guess was wrong!!!");
                attempt--;
                alert(`You have ${attempt} attempt left`);
                replay = confirm("Would you like replay again?");
                if (replay) {
                  if (attempt > 0) {
                    guessNmuber = prompt("Enter the secret number again");
                    if (guessNmuber == secretNumber) {
                      alert(
                        `Congrats! You guessed the secret number on ${attempt} attempt.The secret number is ${guessNmuber}`
                      );
                    }
                  }
                  if (attempt == 0) {
                    alert(`You run out of attemp.Come back next time`);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
} else if (!startGame) {
  alert("Sorry to hear you go. Come back whenever you want!!!");
}
