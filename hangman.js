// Initially installed npm prompt but don't know how to delete it
var inquirer = require('inquirer');
var Letter = require('./letters.js');

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

// function displayWordToGuess() {
// 	Letter.prototype.printInfo = function() {
// 	  if (this.show = true) {
// 		console.log(this.input);
// 	    } else {
// 	  	console.log("__");
// 		}
//   	};
// };

function game() {
	Letter.prototype.printInfo();

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

			if (word.indexOf(userGuess) > -1) {
			while (word.indexOf(userGuess, startValue) !== -1) {
  				arrayOfBlanks[word.indexOf(userGuess, startValue)] = userGuess;
  				startValue = word.indexOf(userGuess, startValue) + 1;
  				
  				console.log(arrayOfBlanks);

  				// replace letter
  				//arrayOfBlanks.replaceAt=function(word.indexOf(userGuess), userGuess) {
  				//	return this.substr(0, index + userGuess+ this.substr(index + replacement.length);)
  				}
  				document.getElementById("currentword").innerHTML = arrayOfBlanks.join(" ");
  				// remove letter
 				// fill blanks
			}

		 	
		 
		
			
			//console.log('your letter is in place ', word.indexOf(userGuess));
			else {
			  wrongLetters.push(userGuess);
			  guesses--;
			  document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(", ");
			  document.getElementById("remaining").innerHTML = guesses
		}
		});
}
