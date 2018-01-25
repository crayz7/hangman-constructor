// Run node hangman.js
// Only works up to displaying blanks and asking for a guess. Does nothing with the guess.
// This homework was difficult to grasp for me. I understood the constructor examples in class but couldn't wrap my head around constructors for the hw.
// Recursion works
// Initially installed npm prompt but don't know how to delete it
var inquirer = require('inquirer');
var Letter = require('./letters.js');
var Word = require('./word.js');

inquirer
	.prompt([
		{
		  type: "input",
		  message: "Start game? (yes or no)",
		  name: "start"
		}
		])
		.then(function(response) {
			if (response.start === "yes") {
				game();
			} else {
				return;
			}

	});

function game() {
	// Grabs word to guess and prints
	var newWord = new Word(this.blanks);

	console.log("Word to guess:");
	newWord.printInfo();

	guessLetter();

};

var guessesLeft = 10;

function guessLetter() {
	if (guessesLeft != 0) {

	inquirer
	.prompt([
		{
		  type: "input",
		  message: "Guess a letter.",
		  name: "guess"
		}
		])
		.then(function(response) {
			var startValue = 0;
			var userGuess = response.guess;
			//console.log(response.guess);

			
			
			guessesLeft--;

			guessLetter();
		});
	} else {
		console.log("No more guesses left!");
		return; //end game
  }
}
