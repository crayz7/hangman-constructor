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

module.exports = Letter;