const figlet = require('figlet')

const colors = require('colors');

figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data.rainbow);
  });


//What is the purpose of the npm init command?
//   The npm init command is used to create a package.json file for your Node.js project. This file is essential because it keeps track of your project's dependencies, scripts, and other metadata.

// When you run npm init, it prompts you to provide information about your project, such as:

// name: The name of your project.
// version: The version of your project (e.g., 1.0.0).
// description: A short description of your project.
// entry point: The main file that will be executed (usually index.js).
// test command: The command used to run tests (if any).
// repository: The URL of your project's source code repository (e.g., GitHub).
// keywords: Keywords that describe your project (optional).
// author: The author of the project.
// license: The project's license (e.g., MIT).