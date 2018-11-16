//require from letter.js
let Letter = require("./Letter");

// new Word constructor with a newWord object
var Word = function (newWord) {
    //array of new letter 
    this.newLetterArr = [];
    //each letter in the newWord
    for (i = 0; i < newWord.length; i++){
        //new Letter was created using Letter constructor
        let newLetter = new Letter(newWord[i]);
        //push the new letter in the new Letter arr
        this.newLetterArr.push(newLetter);

    }
    //function that returns a string representing the word
    this.displayWordinString= function(){
        
    }
}



