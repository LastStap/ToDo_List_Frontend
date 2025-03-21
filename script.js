"use strict";

let ready = confirm("Are you ready?");
while (!ready) {
    alert("You must be ready to play!");
    ready = confirm("Are you ready?");
}

let wins = 0;

while (wins < 3) {
    const target = Math.floor(Math.random() * 10);
    let guess = null;

    while (guess !== target) {
        guess = parseInt(prompt("Enter a guess number", ""), 10);

        if (isNaN(guess) || guess < 0 || guess > 9) {
            alert("Please enter a valid number between 0 and 9.");
        } else if (guess < target) {
            alert("Your guess number is SMALLER than the target number");
        } else if (guess > target) {
            alert("Your guess number is BIGGER than the target number");
        }
    }

    wins++;
    if (wins < 3) {
        alert(`You have won the round! Current wins: ${wins}/3`);
        confirm("Next round starts after you press OK.");
    }
}

alert("Congratulations! You won the game!");
