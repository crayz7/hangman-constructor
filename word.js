// Constructor function for creating Word objects
var Word = function() {
  // holds all of our words
  this.wordBank = ["austin", "longhorns", "football", "burntorange", "hookem"];
  
  // random word
  this.wordToGuess = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];

  this.wordArray = this.wordToGuess.split("");
  
};

Word.prototype.printInfo = function() {
  		console.log(this.wordArray);
  }

var newWord = new Word(this.wordArray);

newWord.printInfo();

module.exports = Word;