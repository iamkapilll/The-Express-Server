// In the file where you're using 'math.js'
const math = require('./math');   // Importing 'math.js' file

// console.log(math.add(2,5));                 // Printing the imported 'math.add' object
// console.log(math.pi);              // Output: 3.14159
// console.log(math.square(4)); 



const cats = require('./shelter'); // Require the 'shelter' module that the 'index.js' file exports form the entire 'shelter' directory


console.log("REQUIRED AN ENTIRE DIRECTORY!!!", cats);


