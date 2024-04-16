const readline = require("readline-sync")

let firstYear = 10.5 //representing first and second year
let after = 4

let userInput = readlineSync.question("What is your dogs age?")
let dogAge = parseInt(userInput); //** We are turning this from a string to an integer//

if (dogAge <= 2 && dogAge > 0) { //if between 1 and 2
    console.log(`1Dog age is ${dogAge * firstYear}`)
}else if(dogAge <= 0){ // if 0 or less (negative)
    console.log("Dog age is 0")
}
else{
    console.log(`2Dog age is ${21 + ((dogAge -2)* after)}`)
}
