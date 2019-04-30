function Letter (char) {
    this.char = char;
    this.guessed = false;
}

Letter.prototype.toString = function(){
    if(this.guessed) {
        return this.char;
    }
    else {
        return "_";
    } 
}

Letter.prototype.guessCheck = function(guess){
    if(guess === this.char) return this.guessed = true;
    else return;
}

module.exports = Letter;