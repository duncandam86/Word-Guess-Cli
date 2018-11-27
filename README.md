# Word-Guess-Cli

## Github link: 
* *https://github.com/duncandam86/Word-Guess-Cli*

## Overview Description

* This app is a node version of Word Guess Game that was previously developed using html, css and javascript.

* This app used two different constructors. The index.js runs the actual game with dependency on the Word.js constructor, which also depends on the Letter.js constructor

    1. A random country's name will generated once the game starts. The user will have 15 guesses to guess the name of the country
            * Example: https://github.com/duncandam86/Liri-node-app/blob/master/assests/images/Concert-this%20lady%20gaga.png
         

    2. `node liri.js spotify-this-song '<song name here>'`
        * This will show the information about the song in your terminal/bash window.
            * Example: https://github.com/duncandam86/Liri-node-app/blob/master/assests/images/Spotify-this-song%20applause.png
        * If the `<song name her>` is empty, information about  "the sign by ace of base" will be populated in the terminal.
            * Example: https://github.com/duncandam86/Liri-node-app/blob/master/assests/images/Spotify-this-song%20empty.png
    
    3. `node liri.js movie-this '<movie name here>'`
        * This will output the information about the movie to your terminal/bash window.
            * Example: https://github.com/duncandam86/Liri-node-app/blob/master/assests/images/Movie-this%20A%20start%20is%20born.png
        * If the `<movie name her>` is empty, information about "Mr.NoBody" will be populated in the terminal
            * Example: https://github.com/duncandam86/Liri-node-app/blob/master/assests/images/Movie-this%20empty.png

    4. `node liri.js do-what-it-says`
        * LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
        * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
            * Example: https://github.com/duncandam86/Liri-node-app/blob/master/assests/images/Do-what-it-says.png

* In addition to logging the data to your terminal/bash window, the data are also added to a .txt file called `log.txt`.

## Technical Requirements:
* Javascripts
* Node.js
* Packages:
  * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
  * [Request](https://www.npmjs.com/package/request)
  * [Moment](https://www.npmjs.com/package/moment)
  * [DotEnv](https://www.npmjs.com/package/dotenv)  
  * [fs](https://www.npmjs.com/package/fs)

