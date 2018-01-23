var Hangman = require("./hangman.js");

var Letter = function(userGuess) {
	//console.log(Word);
	this.userGuess = userGuess;
	this.show = false;
	if (this.userGuess == ' '){
		this.show = true;
	}

}

Letter.prototype.printInfo = function() {
	if (this.show = true) {
		console.log(this.userGuess);
	} else {
	console.log("_");
 }
}

Letter.prototype.printInfo();

module.exports = Letter;