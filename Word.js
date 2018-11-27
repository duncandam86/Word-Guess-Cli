//require from letter.js
let Letter = require("./Letter");

// new Word constructor with a newWord object
let Word = function (correctWord) {
    this.correctWord = correctWord;
    //array of new letter 
    this.newLetterArr = [];
    //each letter in the newWord
    this.makeNewWord = function () {
        for (var i = 0; i < correctWord.length; i++) {
            //newLetter object was created using Letter constructor
            let newLetter = new Letter(correctWord[i]);
            //push the newletter object in the newLetterArr
            this.newLetterArr.push(newLetter);
        }
    }
    //function that returns a string representing the word
    this.displayWordinString = function () {
        //display output array
        this.outputArr = [];
        //for each letter in the newLetterArry
        for (var j = 0; j < this.newLetterArr.length; j++) {
            // call the output method from letter.js and return either letter or underscore
            let outputLetter = this.newLetterArr[j].output();
            //push the outputLetter into the outputArr
            this.outputArr.push(outputLetter);
        }
        return this.outputArr.join(" ");

    }
    //function that take a character as an argument
    this.guessedLetter = function (letter) {
        for (var k = 0; k < this.newLetterArr.length; k++) {
            //passed the letter through the checkLetter method in letter.js
            this.newLetterArr[k].checkLetter(letter);
        }
    }
}
// Export the letter.js module
module.exports = Word;


