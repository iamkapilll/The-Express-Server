const jokes = require("give-me-a-joke");

const colors = require("colors");


// To get a random dad joke
jokes.getRandomDadJoke (function(joke) {
     console.log(joke.rainbow);
});     



// THESE IS THE CODE FOR THE JOKE GENERATOR WITH COLOR WITH ADDING THE COLOR NAME TO THE JOKEWITH THE HELP OF COLORS PACKAGE

// var colors = require('colors');
 
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass
 