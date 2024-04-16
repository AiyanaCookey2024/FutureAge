console.log( Math.min(10,20,15,99,1,20))

function minMJ(num1, num2){

    if (num1 < num2){
        console.log("got here")
        return num1
    }
    return num2 //send this back and take this with you 
}

let v = minMJ(100,200)