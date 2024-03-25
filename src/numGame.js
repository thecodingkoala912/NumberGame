document.addEventListener("DOMContentLoaded", function () {
  let correctNumber;
  let gameWon = false;
  let scoreElement = document.querySelector(".score");
  let userInput = document.querySelector(".input");
  let messageElement = document.querySelector(".message");
  let guessBtn = document.querySelector(".btnGuess");
  let secretNumber = document.querySelector(".secretNumber");
  let bodyColor = document.querySelector("body");

  function resetStyles() {
    bodyColor.style.backgroundImage = "";
    secretNumber.style.width = "";
    secretNumber.textContent = "?";
    guessBtn.style.color = "#111111";
    guessBtn.style.backgroundColor = "#ffffff";
  }

  function OnClicKBtn(e) {
    // Restart game
    let score = 20;
    scoreElement.textContent = score;
    messageElement.textContent = "Make a guess!";
    correctNumber = Math.trunc(Math.random() * 20) + 1;
    userInput.value = "";
    guessBtn.disabled = false;
    gameWon = false;
    resetStyles();
  }

  document.querySelector(".btnRestart").addEventListener("click", OnClicKBtn);

  guessBtn.addEventListener("click", function () {
    const guess = Number(userInput.value);
    let score = Number(scoreElement.textContent);

    if (!guess) {
      messageElement.textContent = "You have not entered a number yet!";
      return;
    }
    if (guess === correctNumber) {
      messageElement.textContent =
        "Congratulations! You found the correct number!";
      guessBtn.disabled = true;
      gameWon = true;
      bodyColor.style.backgroundImage =
        "linear-gradient(110.7deg, rgb(255, 81, 47) 1.7%, rgb(255, 167, 47) 8.2%, rgb(218, 253, 1) 16.2%, rgb(98, 234, 20) 23.4%, rgb(69, 193, 42) 32.8%, rgb(7, 249, 149) 43.7%, rgb(6, 200, 217) 55.3%, rgb(18, 51, 233) 65.5%, rgb(122, 59, 202) 74.5%, rgb(231, 7, 249) 82.3%, rgb(202, 59, 163) 91.4%)";
      secretNumber.style.width = "30rem";
      secretNumber.textContent = correctNumber;
      guessBtn.style.color = "#808080";
      guessBtn.style.backgroundColor = "#c0c0c0";
    } else if (guess > correctNumber || guess < correctNumber) {
      if (score > 1) {
        const message =
          guess > correctNumber
            ? "Your guess is too high!"
            : "Your guess is too low!";
        messageElement.textContent = message;
        score--;
        scoreElement.textContent = score;
      } else {
        messageElement.textContent = "You lost the game!";
        guessBtn.disabled = true;
        setTimeout(function () {
          if (!gameWon) {
            alert("You already lost! Hit the Restart button.");
          }
        }, 100);
      }
    }
  });
  OnClicKBtn();
});
