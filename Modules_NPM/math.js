// In 'math.js' file
const add = (x, y) => x + y;       // A function that adds two numbers
const pi = 3.14159;                 // A constant variable storing the value of pi
const square = x => x * x;          // A function that returns the square of a number

// module.exports = "hello";           // Exporting a string ("hello") instead of the functions or variables


// module.exports = { add, pi, square };

// same this as above

// module.exports.add = add;
// module.exports.pi = pi;
// module.exports.square = square;

//we can also do this:

const math = {
    add : add,  
    pi : pi,
    square : square
}

module.exports = math;