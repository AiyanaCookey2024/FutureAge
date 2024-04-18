const library = [ //anything within the square bracket is always an array
{
    title:'The Road Ahead', // The title, author and isLoaned is represented as the key
    author: 'Bill Gates', //the key can be name,location etc.
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

for (let i=0; i < library.length; i++){ //this is a for loop 
    let book = `'${library[i].title}' by '${library[i].author}';`;
    if (library[i].isLoaned) {
        console.log("Out on loan: " + book);
    } else {
        console.log("On the shelf: " + book);
    }
    
}