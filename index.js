//require Word and Letter and packages
const Word = require("./Word");
const inquirer = require("inquirer");
const chalk = require("chalk");

//global variables for games
const countryList = ["afghanistan", "albania", "algeria", "andorra", "angola", "antigua and barbuda",
    "argentina", "armenia", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados",
    "belarus", "belgium", "belize", "benin", "bhutan", "bolivia", "bosnia and herzegovina", "botswana", "brazil",
    "brunei", "bulgaria", "burkina faso", "burundi", "cambodia", "cameroon", "canada",
    "cape verde", "central african republic", "chad", "chile", "china", "colombia", "comoros", "congo",
    "democratic republic of congo", "costa rica", "croatia", "cuba", "cyprus", "czech republic",
    "denmark", "djibouti", "dominica", "dominican republic",
    "east timor", "ecuador", "egypt", "el salvador", "equatorial guinea", "eritrea", "estonia", "ethiopia",
    "fiji", "finland", "france",
    "gabon", "gambia", "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea", "guinea bissau",
    "guyana", "haiti", "honduras", "hungary", "iceland", "india", 'indonesia', 'iran', 'iraq',
    'ireland', 'israel', 'italy', 'ivory coast', 'jamaica', 'japan', 'jordan',
    'kazakhstan', 'kenya', 'kiribati',
    'north korea', 'south korea',
    'kosovo', 'kuwait', 'kyrgyzstan',
    'laos', 'latvia', 'lebanon', 'lesotho', 'liberia', 'libya', 'liechtenstein', 'lithuania', 'luxembourg',
    'macedonia', 'madagascar', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'marshall islands',
    'mauritania', 'mauritius', 'mexico', 'micronesia', 'moldova', 'monaco', 'mongolia', 'montenegro',
    'morocco', 'mozambique', 'myanmar', 'namibia', 'nauru', 'nepal', 'netherlands', 'newzealand', 'nicaragua',
    'niger', 'nigeria', 'norway', 'oman',
    'pakistan', 'palau', 'panama', 'papua new guinea', 'paraguay', 'peru', 'philippines', 'poland',
    'portugal', 'qatar', 'romania', 'russia', 'rwanda',
    'saint kitts and nevis', 'saint lucia', 'saint vincent and the grenadines', 'samoa',
    'san marino', 'saotome and principe', 'saudi arabia', 'senegal', 'serbia', 'seychelles',
    'sierra leone', 'singapore', 'slovakia',
    'slovenia', 'solomon islands', 'somalia', 'south africa', 'south sudan', 'spain', 'srilanka',
    'sudan', 'suriname', 'swaziland', 'sweden', 'switzerland', 'syria', 'taiwan', 'tajikistan',
    'tanzania', 'thailand', 'togo', 'tonga', 'trinidad and tobago', 'tunisia', 'turkey', 'turkmenistan',
    'tuvalu', 'uganda', 'ukraine', 'united arab emirates', 'united kingdom', 'united states',
    'uruguay', 'uzbekistan', 'vanuatu', 'vatican city', 'venezuela', 'vietnam', 'yemen', 'zambia', 'zimbabwe'];

//generate randome countryWord
let countryWord = new Word(countryList[Math.floor(Math.random() * countryList.length)]);
countryWord.makeNewWord();


let guesses = 0;

let guessesSoFar = [];

//Welcome to game
console.log(chalk.red("Welcome to Word Guess Game - Country Edition"));
console.log(chalk.blue("Hint: You will guess a country's name"));
console.log(chalk.cyan("You will have 15 guesses"));

//Startgame function
function startGame() {
    inquirer.prompt([
        {
            prefix: " ",
            name: "letter",
            message: "\n Word: " + chalk.blue(countryWord.displayWordinString()) +
                "\n Remaining Guesses: " + chalk.magenta.bold(15 - guesses) +
                "\n Already guessed letters: " + chalk.red(guessesSoFar.join(" ")) +
                "\n Guess a letter:"
        }
    ]).then(function (input) {
        // validate user input
        // if input is blank
        if (input.letter === " ") {
            console.log("Please type a letter and hit enter");
            return startGame()
        }
        //if more than one letters are entered at the same time
        else if (input.letter.length > 1) {
            console.log(chalk.red("Please enter only one letter at a time"));
            return startGame()
        }
        // if the letter has already been guessed
        else if (guessesSoFar.includes(input.letter)) {
            console.log(chalk.yellow("You already guessed this letter, please guess a different letter"));
            return startGame();
        };

        //if the guessed letter wasn't part of the countryWord then increase the guess count
        if (!countryWord.correctWord.includes(input.letter)) {
            guesses++;
        }
        //push guessed letter in guessesSoFar array
        guessesSoFar.push(input.letter);

        //loop through the country Word to check in the guessed letter in the word
        for (var i = 0; i < countryWord.newLetterArr.length; i++) {
            countryWord.newLetterArr[i].checkLetter(input.letter);
        };

        //if the whole word is guessed and it's the same as the country word that was chosen => win

        if (countryWord.displayWordinString().replace(/ /g,"") === countryWord.correctWord.replace(/ /g,"")){
            endGame("win");
            return;
        }
        
        //If all guesses are used => loss
        if (guesses === 15) {
            endGame("loss");
            return;
        }
        startGame()
    });
}

//endGame and reset
//create an endGame function that passes through an object
function endGame(outcome) {
    //if the object is win => prompt win
    if (outcome === "win") {
        console.log(chalk.blue.bold("You won!"));
        console.log(chalk.yellow("Your guess is: ") + chalk.red(countryWord.correctWord.toLowerCase()));
    }
    // if not => loss
    else {
        console.log(chalk.red.bold("You lost!"));
        console.log(chalk.yellow("The correct word is: ") + chalk.red(countryWord.correctWord.toLowerCase()));
    }

    // reset game with new word, guess and empty guessesSoFar array
    countryWord = new Word(countryList[Math.floor(Math.random() * countryList.length)]);
    countryWord.makeNewWord();
    guesses = 0;
    guessesSoFar = [];

    // prompt user to see if they want to play again
    inquirer.prompt([
        {
            message: "Would you like to play again?",
            name: "confirm",
            type: "confirm"
        }
    ]).then(function (res) {
        if (res.confirm) {
            console.log(chalk.cyan("Ok! Populating a new country's name...."));
            startGame();
        }
        else {
            console.log(chalk.blue("Ok! good bye"));
            return;
        }
    })
}

// call stargame
startGame();