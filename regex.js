// const validWholeNumberRegEx = /^[0-9]+$/;
// console.log(validWholeNumberRegEx.test(456))  //we are testing which ones are whole numbers 
// console.log(validWholeNumberRegEx.test("4")) // this output does represent a whole number
// console.log(validWholeNumberRegEx.test(4.4))
// console.log(validWholeNumberRegEx.test("error"))
// const readline = require("readline-sync");
// function validInput(input){
//     const AtoZAndSpaceRegex = /^[A-Za-z]+$/;
//     return AtoZAndSpaceRegex.test(input)
// }
// while (true) {
//     userInput = readline.question("Please enter alpha characters only:")
//     if (validInput(userInput)) {
//         console.log("Thank you. Please continue.");
//         break;
//     }
//     else{
//         console.log("Incorrect input.")
//     }
// }

//sample's 
const validWholeNumberRegEx = /^[0-9]+$/;
const validPositiveWholeDecimalNumber = /^(?:\d+|\d*\.\d+)$/;
const validAlphabeticString = /^[A-Za-z]+$/;
 

// console.log(validWholeNumberRegEx.test(456))
// console.log(validPositiveWholeDecimalNumber.test(456))

// Create three functions that check specific pieces of data.
// e.g. 1. A name; 2. An age; 3. A height.
// let personName = "123abc"   // should return false;
// let personAge = 15.5 // should this be allowed?
// let personHeight = "blah blah blah" // should this be allowed?

const readline = require("readline-sync")

function firstName() {   //this is declaring the function
    let userInput = readline.question("What is your first name?")
    return validAlphabeticString.test(userInput) //this is where you declare the variable
}     
console.log(firstName())

function age() {   //this is declaring the function
    let userInput = readline.question("What is your age?")
    return validWholeNumberRegEx.test(userInput) //this is where you declare the variable
}     
console.log(age())

function checkHeight() {
    let userInput= readline.question("Please enter your height? ")
    return (validPositiveWholeDecimalNumber.test(inputH))
} console.log(checkHeight())