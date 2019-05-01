const Word = require("./Word.js");
const chalk = require("chalk");
const inquirer = require("inquirer");
let guesses = 10;
var computerChoice;

let wordList = [];
let usedWords = [];

wordList.push(new Word("jurassic park"), new Word("star wars"), new Word("avengers"),new Word("akira"),  new Word("wizards"));

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
            if (computerChoice.toString().indexOf(response.letter.toLowerCase()) !== -1) {
                console.log("\n" + computerChoice.toString() + "\n");
                console.log(chalk.green("\nCORRECT!!!\n"));
                wordGuessPrompt();
            }
            else {
                console.log("\n" + computerChoice.toString() + "\n");
                console.log(chalk.red("\nINCORRECT!!!"));
                guesses--;
                console.log(`\n${guesses} guesses remaining!!!\n`);
                wordGuessPrompt();
            }
        });
    }
    else if(wordList.length === 0){
        console.log("GAME OVER!!!"); 
        console.log("ALL WORDS DONE!!!"); 
    }
    else if(guesses === 0){
        console.log("\nAll out of guesses! Next word!");
        guesses = 10;
        randomNoRepeat(wordList);
        console.log("\n" + computerChoice.toString() + "\n");
        wordGuessPrompt();
        }
    else{
        console.log("\nYou got it right! next word");
        guesses = 10;
        randomNoRepeat(wordList);
        console.log("\n" + computerChoice.toString() + "\n");
        wordGuessPrompt();
        }
    }

//game functionality
randomNoRepeat(wordList);
console.log("\n" + computerChoice.toString() + "\n");
wordGuessPrompt();


