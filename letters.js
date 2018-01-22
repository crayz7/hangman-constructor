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

module.exports = Letter;