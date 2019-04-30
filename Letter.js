function Letter (char) {
    this.char = char;
    this.guessed = false;
}

Letter.prototype.toString = function(){
    if(this.guessed) {
        console.log(this.char);
        return this.char;
    }
    else {
        console.log("_");
        return "_";
    } 
}

Letter.prototype.guessCheck = function(guess){
    if(guess === this.char) return this.guessed = true;
    else return;
}

module.exports = Letter;