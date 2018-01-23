<<<<<<< HEAD
var Word = require("./word.js");

var Letter = function(value) {
	console.log(Word);
	this.value = value;
	this.show = false;
	if (this.value == ' '){
		this.show = true;
	}

}

Letter.prototype.printInfo = function() {
	if (this.show = true) {
		console.log(this.value);
	} else {
	console.log("_");
 }
}

Letter.prototype.printInfo();

=======
var Word = require("./word.js");

function Letter(value) {
	this.value = value;
	this.show = false;
	if (this.value == ' '){
		this.show = true;
	}
}

Letter.prototype.printInfo = function() {
	if (this.show = true) {
		console.log(this.value);
	} else {
	console.log("__");
  }
}

Letter.prototype.printInfo();

>>>>>>> 5834c926ff3a095602a20fae92eb435b554816a8
module.exports = Letter;