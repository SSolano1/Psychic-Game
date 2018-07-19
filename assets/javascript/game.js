// <!-- //Created an array of all possible options. -->
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, and ties.  They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guessedLetters = [];
var letterToGuess = null;
console.log ("solon")

  

    // Randomly chooses a choice from the options array.  This is the Computer's guess.
   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //Allows 10 guesses
    function updateGuessesLeft() {
        document.querySelector('#guessesLeft').innerHTML = "guesses left: " + guessesLeft;
    };

    function updateLetterToGuess() {
        this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
    };


    function updateGuessesSoFar() {
    // Display the letters selected by the user. 
        document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
    };

    // Function will be called when we reset everything
    var reset = function () {
        totalGuesses = 10;
        guessesLeft = 10;
        guessedLetters = [];

        updateLetterToGuess();
        updateGuessesLeft();
        updateGuessesSoFar();
    }

        updateLetterToGuess();
        updateGuessesLeft();

    // This function runs whenever the user presses a key 
    document.onkeyup = function (event) {
    var userGuess = event.key; 
    // var lowerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    
    if (userGuess === computerGuess) {
        alert("That was Correct!");
        
    }
    else if (userGuess !== computerGuess) {
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

    if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                alert("Yes, you are psychic!");
                reset();    
    }        } else if (guessesLeft === 0) {
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Sorry, you're not psychic, try again?");

        // Start Over. 
        reset();
    }

};
}
     
      





 








//     // HTML now keeps track of the user and computer guesses and wins and losses.
//     var html =
//         "<p>You chose: " + userGuess + "</p>" +
//         "<p>The computer chose: " + computerGuess + "</p>" +
//         "<p>wins: " + wins + "</p>" +
//         "<p>losses: " + losses + "</p>" +
//         "<p>ties: " + ties + "</p>";

//     // document.querySelector("#game").innerHTML = html;  
//     document.querySelector("#game").innerHTML = html;
// }
