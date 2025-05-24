'use strict';
/*
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number!";
// console.log(document.querySelector(".message").textContent);
// select message
// document.querySelector(".number").textContent = 13; // select number when clicked to show in middel 
// document.querySelector(".score").textContent = 10; // select score when clicked he muins one of score
// document.querySelector('.guess').value = 10; // select input to get value when check 
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;




document.querySelector(".check").addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess, secretNumber);
    // when there is no input
    if (!guess) {

        document.querySelector(".message").textContent = "⛔ No Number!";

        // when player wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        document.body.style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = '30rem'
        document.querySelector(".number").textContent = secretNumber;
        // when player guess the number is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📈 Too High!";
            score-- // score = score- 1
            document.querySelector(".score").textContent = score  // change to value of score
        } else {
            document.querySelector(".score").textContent = 0;
            document.querySelector(".message").textContent = "🔥 Too lost The Game";


        }

        // when player guess the number is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "📉 Too Low!";
            score-- // score = score- 1
            document.querySelector(".score").textContent = score // change to value of score
        } else {
            document.querySelector(".score").textContent = 0;
            document.querySelector(".message").textContent = "🔥 Too lost The Game";

        }

    }

})



document.querySelector('.again').addEventListener('click', function () {
    document.body.style.backgroundColor = '#222';
    document.querySelector(".number").style.width = '15rem'
    document.querySelector('.guess').value = '';
    document.querySelector(".number").textContent = '?';
    document.querySelector(".score").textContent = 20;
    document.querySelector(".message").textContent = "Start guessing...";
})
*/
let secretNumber = Math.floor(Math.random() * 20 + 1);
let scoreNumber = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector(".message").textContent = message
}

function displayScore(score) {
    document.querySelector(".score").textContent = score
}
function displaySecretNumber(secretNumber) {
    document.querySelector(".number").textContent = secretNumber
}


document.querySelector('.check').addEventListener('click', function () {
    let guessNumber = Number(document.querySelector(".guess").value);
    console.log(guessNumber, typeof guessNumber);
    // when user no data in input
    if (!guessNumber) {
        // document.querySelector(".message").textContent = "⛔ No Number!";
        displayMessage("⛔ No Number!");

        // when user entry guessNumber == secretNumber
    } else if (guessNumber === secretNumber) {
        // document.querySelector(".message").textContent = "🎉 Correct Number!";
        displayMessage("🎉 Correct Number!");
        document.body.style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = '30rem';
        // document.querySelector(".number").textContent = secretNumber;
        displaySecretNumber(secretNumber)
        if (scoreNumber > highScore) {
            highScore = scoreNumber;
            document.querySelector(".highscore").textContent = highScore;
        }

    } else if (guessNumber !== secretNumber) {
        if (scoreNumber > 1) {
            displayMessage(guessNumber > scoreNumber ? "📈 Too High!" : "📉 Too Low!")
            scoreNumber--;
            // document.querySelector(".score").textContent = scoreNumber;
            displayScore(scoreNumber);
        } else {
            displayMessage("🔥 Too lost The Game"); // refactor
            // document.querySelector(".message").textContent = "🔥 Too lost The Game";
            // document.querySelector(".score").textContent = 0;
            displayScore(0);

        }



    }
    // else if (guessNumber > secretNumber) {
    //     if (scoreNumber > 1) {
    //         document.querySelector(".message").textContent = "📈 Too High!";
    //         scoreNumber--;
    //         document.querySelector(".score").textContent = scoreNumber;
    //     } else {
    //         document.querySelector(".message").textContent = "🔥 Too lost The Game";
    //         document.querySelector(".score").textContent = 0;
    //     }

    // } else if (guessNumber < secretNumber) {
    //     if (scoreNumber > 1) {
    //         document.querySelector(".message").textContent = "📉 Too Low!";
    //         scoreNumber--;
    //         document.querySelector(".score").textContent = scoreNumber;
    //     } else {
    //         document.querySelector(".message").textContent = "🔥 Too lost The Game";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
})
document.querySelector('.again').addEventListener('click', function () {
    document.body.style.backgroundColor = "#222";
    document.querySelector(".number").style.width = '15rem';
    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...")
    document.querySelector(".guess").value = "";
    scoreNumber = 20;
    secretNumber = Math.floor(Math.random() * 20 + 1);
    // document.querySelector(".score").textContent = scoreNumber;
    displayScore(scoreNumber);
    // document.querySelector(".number").textContent = "?";
    displaySecretNumber("?")


})



