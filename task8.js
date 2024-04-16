//Write a function that takes an integer as a parameter 
//and returns the difference between the integer’s cube and its square.
// console.log(c)
//console.log(s)

function cubeSquareDiff(int){
    let difference = 0
    let c = int ** 3
    let s = int ** 2
    difference = c - s
   
    console.log("you got here")
    return difference
}

let ans = cubeSquareDiff(5)
console.log("The diff is " + ans)

//OR function cubeSquareDiff(int){
    //RETURN (int ** 3) - (int ** 2)