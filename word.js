// Constructor function for creating Word objects
var Word = function() {
  // holds all of our words
  this.wordBank = ["austin", "longhorns", "football", "burntorange", "hookem"];
  
  // random word
  this.wordToGuess = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];

  this.wordArray = this.wordToGuess.split('');

  this.blanks = this.wordArray.map(function(){
	return "_";
  });
};


Word.prototype.printInfo = function() {
  		console.log(this.blanks);
  }
// Testing print the word
// var newWord = new Word(this.blanks);

// newWord.printInfo();

module.exports = Word;