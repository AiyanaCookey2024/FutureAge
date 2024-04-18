const dog = {
    dogName : "Spot",
    dogBreed : "Jack Russell",
    dogAge : 4,
    coatColour : ["Brown", "White"],
    barkType :"Yap",
    dogBark : function() {
        return `${this.barkType} ${this.barkType}!`;
    }
};

console.log(dog.dogBark());

