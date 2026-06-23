let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastSlot = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();

        const guess = parseInt(userInput.value);

        validateGuess(guess);
    });
}

function validateGuess(guess) {

    if (isNaN(guess)) {
        alert("Please enter a valid number");
        return;
    }

    if (guess < 1) {
        alert("Please enter a number greater than 0");
        return;
    }

    if (guess > 100) {
        alert("Please enter a number less than or equal to 100");
        return;
    }

    if (numGuess === 11) {
        displayGuess(guess);
        displayMessage(`Game Over. Random number was ${randomNumber}`);
        endGame();
    } else {
        displayGuess(guess);
        checkGuess(guess);
    }
}

function checkGuess(guess) {

    if (guess === randomNumber) {
        displayMessage("🎉 You guessed it right!");
        endGame();
    }

    else if (guess < randomNumber) {
        if(guess + 10 < randomNumber){
            displayMessage("📉 Number is too low");
        } else{
            displayMessage("📉 Number is low");
        }
    }

    else {
        if(guess -10 > randomNumber){
            displayMessage("📈 Number is too high");
        } else{
            displayMessage("📈 Number is high");
        }
    }
}

function displayGuess(guess) {

    userInput.value = "";

    prevGuess.push(guess);

    guessSlot.textContent = prevGuess.join(" ");

    numGuess++;

    lastSlot.textContent = 10 - prevGuess.length;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {

    userInput.value = "";

    userInput.setAttribute("disabled", "");

    p.classList.add("button");

    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

    startOver.appendChild(p);

    playGame = false;

    newGame();
}

function newGame() {

    const newGameButton = document.querySelector("#newGame");

    newGameButton.addEventListener("click", function () {

        randomNumber = parseInt(Math.random() * 100 + 1);

        prevGuess = [];

        numGuess = 1;

        guessSlot.textContent = "";

        lastSlot.textContent = "10";

        lowOrHi.innerHTML = "";

        userInput.value = "";

        userInput.removeAttribute("disabled");

        startOver.removeChild(p);

        playGame = true;
    });
}