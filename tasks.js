
//Use a loop to print out the 7 times table up to 12 x 7 //
const readline = require("readline-sync");

let table = readline.question("Provide value: ");

//let table = userValue;
for(let i = 1; i <= 12; i++ ) {
    // i++ increment for example increment by 1
    let value = i * table;
    //console.log(i + "x 7 = " + value)
    console.log(`${i} x ${table} = ${value}`)
//table will represent the whole table and you can select what you can multiply it by 
}



