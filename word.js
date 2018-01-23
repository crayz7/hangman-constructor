<<<<<<< HEAD
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

=======
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

>>>>>>> 5834c926ff3a095602a20fae92eb435b554816a8
module.exports = Word;