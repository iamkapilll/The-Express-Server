const figlet = require('figlet');
const colors = require('colors');

figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    // Apply the color directly to the figlet output
    console.log(data.red);
});
