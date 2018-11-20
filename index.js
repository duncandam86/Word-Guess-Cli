//require Word and Letter and packages
const Word = require("./Word");
const inquirer = require("inquirer");
const chalk = require("chalk");

//global variables for games
let guesses = 0;
let randomCountry = " ";
let countryWord = " ";
let randomNumber = 0;

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
    'morocco', 'mozambique', 'myanmar', 'namibia', 'nauru', 'nepal', 'netherlands', 'new-zealand', 'nicaragua',
    'niger', 'nigeria', 'norway', 'oman',
    'pakistan', 'palau', 'panama', 'papua-new-guinea', 'paraguay', 'peru', 'philippines', 'poland',
    'portugal', 'qatar', 'romania', 'russia', 'rwanda',
    'saint kitts and nevis', 'saint lucia', 'saint vincent and the grenadines', 'samoa',
    'san marino', 'saotome and principe', 'saudi arabia', 'senegal', 'serbia', 'seychelles',
    'sierra leone', 'singapore', 'slovakia',
    'slovenia', 'solomon islands', 'somalia', 'south africa', 'south sudan', 'spain', 'srilanka',
    'sudan', 'suriname', 'swaziland', 'sweden', 'switzerland', 'syria', 'taiwan', 'tajikistan',
    'tanzania', 'thailand', 'togo', 'tonga', 'trinidad and tobago', 'tunisia', 'turkey', 'turkmenistan',
    'tuvalu', 'uganda', 'ukraine', 'united arab emirates', 'united kingdom', 'united states',
    'uruguay', 'uzbekistan', 'vanuatu', 'vatican city', 'venezuela', 'vietnam', 'yemen', 'zambia', 'zimbabwe'];


console.log(chalk.red("Welcome to Word Guess Game - Country Edition"));
console.log(chalk.blue("You will guess a country's name"));


//Startgame function
function startGame() {
    //generate random number 
    randomNumber = Math.floor(Math.random() * countryList.length);
    //console.log (randomNumber)
    //pick a random country from the country list
    randomCountry = countryList[randomNumber];
    // console.log(randomCountry);
    //generate new countryWord from the word constructor of the random country's name
    countryWord = new Word(randomCountry);
    // console.log(countryWord);
    
    // let stringRandomCountry = randomCountry.split("");
    // console.log(stringRandomCountry)

    //display country Word in string using displayWordinString method
    countryWord.makeNewWord();
    
    console.log(countryWord.displayWordinString())

    console.log(chalk.cyan("You will have 15 guesses"));
    //call userInput
    userInput()
}
// userInput of a guess (letter)
function userInput() {
    if (guesses < 15) {
        // console.log(countryWord.makeNewWord());
        inquirer.prompt([
            {
                type: "guess",
                name: "letter",
                message: "Please enter a letter and press enter"
            }
        ]).then(function (input) {
            checkGuess(input)
        });
    }
    else {
        console.log(chalk.bgRed("Sorry, you ran out of guesses"));
        console.log(chalk.blue(`The answer is: ${chalk.red(randomCountry)}`));
        guesses = 0;
        randomNumber = 0;
        randomCountry = " ";
        countryWord = " ";
        startGame();
    }
}
// this function is to check if the user input is correct of not
function checkGuess(input) {
    if (input.letter.length === 1) {
        let checkedLetter = input.letter.toLowerCase();
        countryWord.guessedLetter(checkedLetter);
        
        let displayedWord = countryWord.displayWordinString();

        if (displayedWord == countryWord.displayWordinString()) {
            console.log(countryWord.displayWordinString());
            guesses++;
            console.log(chalk.blue(`You have ${15 - guesses} guesses left`));
            userInput();
        }
        else{
            correctGuess()
        }
    }

    else {
        console.log("Please enter only one letter at a time");
        userInput();
    }
}
    
// correct guess function
// function correctGuess() {
   

//     if (randomCountry === countryWord.displayWordinString()) {
//         // console.log(countryWord.displayWordinString());
//         console.log(chalk.bgred("You win"));
//         countryWord = "";
//         randomCountry = "";
//         randomNumber = 0;
//         guesses = 0;
//         startGame();
//     }
//     else {
//         userInput();
//     }
// }



// call stargame
startGame();