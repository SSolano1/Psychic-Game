// <!-- //Created an array of all possible options. -->
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties.  They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = null;
console.log("solon")

// Randomly chooses a choice from the options array.  This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows 10 guesses
function updateGuessesLeft() {

    document.querySelector('#guessesLeft').innerHTML = "guesses left: " + guessesLeft;
};

function updateGuessesSoFar() {
    // Display the letters selected by the user. 
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var reset = function () {
    guessesLeft = 10;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesSoFar();

}

// This function runs whenever the user presses a key 
document.onkeyup = function (event) {
    var userGuess = event.key;

    if (userGuess === computerGuess) {
        alert("That was Correct!");
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        guessedLetters.push(userGuess);
        updateGuessesSoFar(); //This prints out the array
        reset();
    }

    else {
        guessesLeft--;
        guessedLetters.push(userGuess);
        // document.querySelector('#losses').innerHTML = "Losses: " + losses;
        updateGuessesSoFar();
        updateGuessesLeft();
        if (guessesLeft === 0) {
            losses++;
            document.querySelector('#losses').innerHTML = "losses: " + losses;
            reset();
        } else {

        }
    }
}


























