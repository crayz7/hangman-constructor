var Letter = function() {
	this.value = value;
	this.show = false;
	if (this.value == ' ') 
		this.show = true;
  }

Letter.prototype.printInfo = function() {
	if (this.show) {
		return this.value;
	}
	return "_ ";
}

module.exports = Letter;

//push and splice to replace correct letter guessed