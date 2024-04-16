console.log("task4")

//Use a loop to print the numbers between 1 and 1000 that are divisible by 3 and 4.

for(let i = 1; i <=15; i++){
    let calc = i%3; //use the modulus - when the modulus is 0 we know that the remainder is 0 which means that it is a whole number
    if (calc == 0) {
        console.log(`${i} divisible by 3 = ${calc}`)
    }
   
    calc = i%4;
    if (calc == 0) {
        console.log(`${i} divisible by 4 = ${calc}`)
    }
}