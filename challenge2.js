const readline = require("readline-sync")
let randNum = Math.floor(Math.random()*100+1);

console.log("Random number picked: "+ randNum ) //we know thyat we are going to get 1, we do not want this to go below 1- Math floor rounds it down to the nearest value 

//inputNum = parseInt(inputNum);
let count = 0;
let inputNum = "";

do {
    inputNum = readline.question("Please enter a number between 1 and 100: ")
    count++;
    if (randNum ==inputNum) { //==if the value on the left can be the value of teh right then commit it, but if you say === we cannot have a string outcome and a integer outcome as they are not t echnically seen as exactly the same
//parseInt converts the string to an integer value randNum === parseInt(inputNum))
    //console.log("Congratulations")
    } else {
    //it will run this code if the numbers are not the same
    // you can remove the if else statement above because the below has already mentioned all the values 
    console.log("Not the same")
    }if (inputNum > randNum){
    console.log("The value is too high")
    }
    if (inputNum < randNum){
    console.log("The value is too low")
    }

}
while (randNum != inputNum)
console.log("Well done, you did it in " + count)