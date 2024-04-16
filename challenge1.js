//** Ask the user to enter their name and their favourite number. The computer will then greet the user by name and their favourite number is the same as the computer, it will output a message saying "that's my favourite number as well".  
const readline = require("readline-sync");
let favNum = 7;
let username = readline.question("What is your name?");
let userNum = readline.question("What is your favourite number?");
console.log(`Hello ${username}.`);

//** console.log("Hello" + username) - You can also use this output to get the same outcome.

if (favNum == userNum) {
    console.log(`That's my favourite number as well`);
}