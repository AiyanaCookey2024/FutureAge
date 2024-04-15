const readline = require("readline-sync");
let userInput = readline.question("Please enter a number:");
if (userInput > 0) {
    console.log(`The number is positive.`);
} else if (userInput < 0) {
    console.log(`The number is negative`);
} else {
    console.log(`The number is zero`);
}