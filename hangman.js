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

			if (Word.wordArray.indexOf(userGuess) > -1) {
			while (Word.wordArray.indexOf(userGuess, startValue) !== -1) {
  				newWord[Word.wordArray.indexOf(userGuess, startValue)] = userGuess;
  				startValue = Word.wordArray.indexOf(userGuess, startValue) + 1;
  				
  	// 			console.log(arrayOfBlanks);
 			
  				}
  				console.log(newWord.join(" "));
  				//remove letter
				//fill blanks
			};
		})
}
		 	//console.log('your letter is in place ', word.indexOf(userGuess));
// 			else {
// 			  wrongLetters.push(userGuess);
// 			  guesses--;
// 			  document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(", ");
// 			  document.getElementById("remaining").innerHTML = guesses
// 		}
// 		});
// }