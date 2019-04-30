function Letter (char) {
    this.char = char;
    this.guessed = false;
    if(this.char === " "){
        this.guessed = true;
    }
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
    if(guess === this.char){
        this.guessed = true;
        return true;
    }
    else return false;;
}

module.exports = Letter;