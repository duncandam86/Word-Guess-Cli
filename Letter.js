 // constructor Letter
var Letter = function (letter){
    //string value to store character for the letter
    this.letter = letter;
    //boolean value that store if character has been guessed
    this.isGuessed = false;
    //function output 
    this.output = function(){
        if (this.isGuessed === true){
            console.log(letter);
            return this.letter;
            
        }
        else if (this.isGuessed === false){
            console.log("this letter has not been guessed");
            return "_";

        }
        else if (this.isGuessed === " "){
            console.log("type a letter")
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