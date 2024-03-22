document.addEventListener("DOMContentLoaded", function () {
  let correctNumber;
  let gameWon = false;
  2;

  function OnClicKBtn(e) {
    let score = Number(document.querySelector(".score").textContent);

    // Restart game
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Make a guess!";
    correctNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".input").value = "";
    document.querySelector(".btnGuess").disabled = false;
    gameWon = false;
  }

  document.querySelector(".Restart").addEventListener("click", OnClicKBtn);

  document.querySelector(".btnGuess").addEventListener("click", function () {
    const guess = Number(document.querySelector(".input").value);
    let score = Number(document.querySelector(".score").textContent);

    if (!guess) {
      document.querySelector(".message").textContent =
        "You have not entered a number yet!";
    } else {
      if (guess === correctNumber) {
        document.querySelector(".message").textContent =
          "Congratulations! You found the correct number!";
        document.querySelector(".btnGuess").disabled = true;
        gameWon = true;
      } else if (guess > correctNumber || guess < correctNumber) {
        if (score > 1) {
          const message =
            guess > correctNumber
              ? "Your guess is too high!"
              : "Your guess is too low!";
          document.querySelector(".message").textContent = message;
          score--;
          document.querySelector(".score").textContent = score;
        } else {
          document.querySelector(".message").textContent = "You lost the game!";
          document.querySelector(".btnGuess").disabled = true;
          setTimeout(function () {
            if (!gameWon) {
              alert("You already lost! Hit the Restart button.");
            }
          }, 100);
        }
      }
    }
  });
  OnClicKBtn();
});
