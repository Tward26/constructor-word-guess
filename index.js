const Word = require("./Word.js");
const inquirer = require("inquirer");
let guesses = 10;
var computerChoice;

let wordList = [];
let usedWords = [];

const word1 = new Word("jurassic park");
const word2 = new Word("star wars");
const word3 = new Word("avengers");
const word4 = new Word("akira");
const word5 = new Word("wizards");
wordList.push(word1, word2, word3, word4, word5);

function randomNoRepeat(arr) {
    if (arr.length === 0) {
        // arr.splice(0, arr.length, ...usedWords);
        // usedWords = [];
        return false;
    }
    computerChoice = arr[Math.floor(Math.random() * arr.length)];
    var index = arr.indexOf(computerChoice);
    arr.splice(index, 1);
    usedWords.push(computerChoice);
    return computerChoice;
}

function wordGuessPrompt() {
    if ((computerChoice.toString().indexOf("_") !== -1) && (guesses != 0)) {
        inquirer.prompt([
            {
                message: "Guess a letter!",
                name: "letter",
                validate: function (inputtxt) {
                    var letters = /^[A-Za-z]+$/;
                    if ((inputtxt.match(letters)) && (inputtxt.length === 1)) {
                        return true;
                    }
                    return false;
                }
            }
        ]).then(function (response) {
            computerChoice.guess(response.letter)
            if (computerChoice.toString().indexOf(response.letter) !== -1) {
                console.log("\n" + computerChoice.toString() + "\n");
                console.log("\nCORRECT!!!\n");
                wordGuessPrompt();
            }
            else {
                console.log("\n" + computerChoice.toString() + "\n");
                console.log("\nINCORRECT!!!");
                guesses--;
                console.log(`\n${guesses} guesses remaining!!!\n`);
                wordGuessPrompt();
            }
        });
    }
    else if(guesses === 0){
        if(wordList.length === 0){
            console.log("GAME OVER!!!"); 
            console.log("ALL WORDS DONE!!!"); 
        }
        else{
        console.log("\nAll out of guesses! Next word!");
        guesses = 10;
        randomNoRepeat(wordList);
        console.log("\n" + computerChoice.toString() + "\n");
        wordGuessPrompt();
        }
    }
    else {
        if(wordList.length === 0){
            console.log("GAME OVER!!!"); 
            console.log("ALL WORDS DONE!!!"); 
        }
        else{
        console.log("\nYou got it right! next word");
        guesses = 10;
        randomNoRepeat(wordList);
        console.log("\n" + computerChoice.toString() + "\n");
        wordGuessPrompt();
        }
    }

}



//game functionality
randomNoRepeat(wordList);
console.log("\n" + computerChoice.toString() + "\n");
wordGuessPrompt();


