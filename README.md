# Word-Guess-Cli

## Github link: 
* *https://github.com/duncandam86/Word-Guess-Cli*

## Overview Description

* This app is a node version of Word Guess Game that was previously developed using html, css and javascript.

* This app used two different constructors. The index.js runs the actual game with dependency on the Word.js constructor, which also depends on the Letter.js constructor

    1. A random country's name will generated once the game starts. The user will have 15 guesses to guess the name of the country
        * Example: https://github.com/duncandam86/Word-Guess-Cli/blob/master/images/Beginning%20of%20the%20game.png
         
    2. Prompt user to guess a letter using inquirer 
        * Example:
        https://github.com/duncandam86/Word-Guess-Cli/blob/master/images/During%20the%20game.png
    
    3. If letter has been guessed, alert to user that the letter has been guessed. Only incorrect letter was counted as a guess, correct letter and duplicated letter will be be counted as guesses.
        * Example:
        https://github.com/duncandam86/Word-Guess-Cli/blob/master/images/Alert%20to%20tell%20user%20that%20the%20letter%20has%20been%20guessed.png
         
    4. If the user guessed the word correctly under 15 guesses, they win. Otherwise, they lose the game. At the end of the game, user will be asked to either play a new game or not
        * Example: https://github.com/duncandam86/Word-Guess-Cli/blob/master/images/End%20of%20game%20when%20you%20win.png

    5. If the user answers yes, a new game will start. If the user answers no, it will return to the terminal window.
        * Example:
        https://github.com/duncandam86/Word-Guess-Cli/blob/master/images/Prompting%20for%20new%20game.png

* In addition to inquirer, another npm called chalk was used to add color to terminal texts.

## Technical Requirements:
* Javascripts
* Node.js
* Packages:
  * [inquiere](https://www.npmjs.com/package/inquirer)
  * [chalk](https://www.npmjs.com/package/chalk)

