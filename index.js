//require Word and Letter and packages
const Word = require("./Word");
const inquirer = require("inquirer");
const chalk = require("chalk");

//global variables for games
let remainingGuesses = 16;
let randomCountry = " ";
let countryWord = " ";
let randomNumber = 0;


let countryList = ["afghanistan", "albania", "algeria", "andorra", "angola", "antigua-and-barbuda",
    "argentina", "armenia", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados",
    "belarus", "belgium", "belize", "benin", "bhutan", "bolivia", "bosnia-and-herzegovina", "botswana", "brazil",
    "brunei", "bulgaria", "burkina-faso", "burundi", "cambodia", "cameroon", "canada",
    "cape-verde", "central-african-republic", "chad", "chile", "china", "colombia", "comoros", "congo",
    "democratic-republic-of-congo", "costa-rica", "croatia", "cuba", "cyprus", "czech-republic",
    "denmark", "djibouti", "dominica", "dominican-republic",
    "east-timor", "ecuador", "egypt", "el-salvador", "equatorial-guinea", "eritrea", "estonia", "ethiopia",
    "fiji", "finland", "france",
    "gabon", "gambia", "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea", "guinea-bissau",
    "guyana", "haiti", "honduras", "hungary", "iceland", "india", 'indonesia', 'iran', 'iraq',
    'ireland', 'israel', 'italy', 'ivory-coast', 'jamaica', 'japan', 'jordan',
    'kazakhstan', 'kenya', 'kiribati',
    'north-korea', 'south-korea',
    'kosovo', 'kuwait', 'kyrgyzstan',
    'laos', 'latvia', 'lebanon', 'lesotho', 'liberia', 'libya', 'liechtenstein', 'lithuania', 'luxembourg',
    'macedonia', 'madagascar', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'marshall-islands',
    'mauritania', 'mauritius', 'mexico', 'micronesia', 'moldova', 'monaco', 'mongolia', 'montenegro',
    'morocco', 'mozambique', 'myanmar', 'namibia', 'nauru', 'nepal', 'netherlands', 'new-zealand', 'nicaragua',
    'niger', 'nigeria', 'norway', 'oman',
    'pakistan', 'palau', 'panama', 'papua-new-guinea', 'paraguay', 'peru', 'philippines', 'poland',
    'portugal', 'qatar', 'romania', 'russia', 'rwanda',
    'saint-kitts-and-nevis', 'saint-lucia', 'saint-vincent-and-the-grenadines', 'samoa',
    'san-marino', 'saotome-and-principe', 'saudi-arabia', 'senegal', 'serbia', 'seychelles',
    'sierra-leone', 'singapore', 'slovakia',
    'slovenia', 'solomon-islands', 'somalia', 'south-africa', 'south-sudan', 'spain', 'sri-lanka',
    'sudan', 'suriname', 'swaziland', 'sweden', 'switzerland', 'syria', 'taiwan', 'tajikistan',
    'tanzania', 'thailand', 'togo', 'tonga', 'trinidad-and-tobago', 'tunisia', 'turkey', 'turkmenistan',
    'tuvalu', 'uganda', 'ukraine', 'united-arab-emirates', 'united-kingdom', 'united-states',
    'uruguay', 'uzbekistan', 'vanuatu', 'vatican-city', 'venezuela', 'vietnam', 'yemen', 'zambia', 'zimbabwe'];



console.log(chalk.red("Welcome to Word Guess Game - Country Edition"));
console.log(chalk.blue("You will guess a country's name"));


//Startgame funciton
function startGame() {
    //generate random number 
    randomNumber = Math.floor(Math.random() * countryList.length);
    //console.log (randomNumber)
    //pick a random country from the country list
    randomCountry = countryList[randomNumber];
    console.log (randomCountry);

    //generate new countryWord from the word constructor of the random country's name
    countryWord = new Word(randomCountry);
    console.log(countryWord);

    //display country Word in string using displayWordinString method
    countryWord.makeNewWord();

    if (randomNumber > -1) {
        countryList.splice(randomNumber, 1);
    }
    console.log(chalk.cyan("You will have 16 guesses"));
    //call userInput
    userInput()
}
// userInput of a guess (letter)
function userInput() {
    if (remainingGuesses < 16) {
        console.log(countryWord.makeNewWord());
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: chalk.red("Please enter a letter and press enter")
            }
        ]).then(function (input) {
            checkGuess(input)
        });
    }
    else {
        console.log(chalk.bgRed("Sorry, you ran out of guesses"));
        console.log(chalk.blue(`The answer is: ${countryWord}`));
        remainingGuesses = 16;
        randomCountry = " ";
        countryWord = " ";
    }
}
// this function is to check if the user input is correct of not
function checkGuess(input){
    if
}

// call stargame
startGame();