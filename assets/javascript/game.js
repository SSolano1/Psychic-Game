// <!-- //Created an array of all possible options. -->
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u",
"v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties.  They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guessedLetters = [];
var letterToGuess = null;


// This function runs whenever the user presses a key 
document.onkeyup = function(event){
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess);

    if (check === false) {
        alert("That was not a valid guess, try again?");
        return false;
    } else if (check === true) {

        //When users choose an alphabet char then update guesses left and add users guess to the array of guessed letters
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                alert("Yes, you are psychic! " + userGuess);
                reset();
            }
        } else if (guessesLeft == 0) {
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic, try again?");

            // reset the game. 
            reset();
        }

};

// Determines which key pressed.
var userGuess = event.key;

// Randomly chooses a choice from the options array.  This is the Computer's guess.
var computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];

//Allows 10 guesses
function updateGuessesLeft() {
    document.querySelector('#guessesLeft')
    .innerHTML = "Guesses left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

function updateGuessesSoFar() {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
    totalGuesses = 10;
    guessesLeft = 10;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();



// HTML now keeps track of the user and computer guesses and wins and losses.
var html =
  "<p>You chose: " + userGuess + "</p>" +
  "<p>The computer chose: " + computerGuess + "</p>" +
  "<p>wins: " + wins + "</p>" +
  "<p>losses: " + losses + "</p>" +
  "<p>ties: " + ties + "</p>";

// document.querySelector("#game").innerHTML = html;  
document.querySelector("#game").innerHTML = html; 
}
