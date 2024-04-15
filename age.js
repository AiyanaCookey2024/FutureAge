const readline = require("readline-sync");
let userAge = readline.question("Please enter your age:")
let currentYear = 2024;
let futureYear = 2028;
let userAgeNum = parseInt(userAge);
let futureAge = (futureYear - currentYear) + userAgeNum;  // 4 + "21"
console.log(`${futureAge}`);


    //" hello ${var} yyy"

