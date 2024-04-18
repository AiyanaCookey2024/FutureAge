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

for (let i=0; i < library.length; i++){
    let book = `'${library[i].title}' by '${library[i].author}';`;
    if (library[i].isLoaned) {
        console.log("Out on loan: " + book);
    } else {
        console.log("On the shelf: " + book);
    }
    
}