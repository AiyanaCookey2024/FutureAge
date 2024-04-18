 const library = [
     {
        title:'The Road Ahead',
        author: 'Bill Gates',
       isLoaned: true
    },
  {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        isLoaned: true
    },
    {
        title: 'Mokingjay: The Final Book of the Hunger Games',
       author: 'Suzanne Collins',
       isLoaned: false 
  }
    ];
    const readline = require("readline-sync");
    var userInput = readline.question("Please enter book name");

    for (let i=0; i < library.length; i++){
     let searchbook = `'${userInput}';`;  
       if (library[i].title) {
           console.log("We have this in stock" + searchbook);
        } else {
           console.log("We do not have this in stock " + searchbook);
        }
  
   }
   
let bookfound = false
for (let i = 0; i < library.length; i++) {
if (library[i].title === userInput) {
  console.log("Book found: " + userInput);
        bookfound = true
 }
     }
      if(bookfound === false){
         console.log("Book not found.")
     }

let words = "A few random words";
words = words.split("o")

console.log(words)
//    // you this if you want to split 

// const month = "September"
// console.log(month.substring(0 , 4));

let days = " Monday, Tuesday, Wedensday, Thursday, Friday";
days = days.split(",");
console.log(days.reverse().join(","));

let complete = "Bob"