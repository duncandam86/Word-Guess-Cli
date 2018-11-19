 // constructor Letter
var Letter = function (letter){
    //string value to store character for the letter
    this.letter = letter;
    //boolean value that store if character has been guessed
    this.isGuessed = false;
    //function output 
    this.output = function(){
        //if the letter has been guessed
        if (this.isGuessed === true){
            //return a the letter
            console.log(letter);
            return this.letter;
            
        }
        // if the letter has not been guessed
        else{
            console.log("Has not been guessed");
            //return underscore
            return "_";

        }
    } 
    // function take character as an argument and check it against the exisiting letter in word
    
    this.checkLetter = function(guessedCharacter){
        if (guessedCharacter === this.letter){
            this.isGuessed = true;
            console.log("Your guess is correct!")
        }
    }
}   
// Export the letter.js module
module.exports = Letter;