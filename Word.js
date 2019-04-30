const Letter = require("./Letter.js");

function Word(word) {
    this.wordArr = [];
    this.arr = word.split("");
    this.arr.forEach(element => {
        const letter = new Letter(element)
        this.wordArr.push(letter);
    });
}

Word.prototype.toString = function () {
    return str = this.wordArr.join(" ");
}

Word.prototype.guess = function (char) {
    this.wordArr.forEach(ele => {
        ele.guessCheck(char);
    });
}

module.exports = Word;