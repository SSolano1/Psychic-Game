// <!-- //Created an array of all possible options. -->
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u",
"v", "w", "x", "y", "z"];
console.log ("solon");
// Creating variables to hold the number of wins, losses, and ties.  They start at 0.
var wins = 0;
var losses = 0;
var ties = 0;

// <!-- This function runs whenever the user presses a key -->
document.onkeyup = function(event){

// Determines which key pressed.
var userGuess = event.key;

// Randomly chooses a choice from the options array.  This is the Computer's guess.
var computerGuess = computerChoices [Math.floor(Math.random() * computerChoices.length)];
}
// HTML now keeps track of the user and computer guesses and wins and losses.
var html =
  "<p>You chose: " + userGuess + "</p>" +
  "<p>The computer chose: " + computerGuess + "</p>" +
  "<p>wins: " + wins + "</p>" +
  "<p>losses: " + losses + "</p>" +
  "<p>ties: " + ties + "</p>";

// document.querySelector("#game").innerHTML = html;  
document.querySelector("#game").innerHTML = html; 

