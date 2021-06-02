
// Declare a variable using let inside a function. Add that same variable in another function and see what happens.

// console print secound variable
function count() {
    let x = 50;
    console.log(count);
}

function count() {
    let y = 50;
    console.log(count);
}

// Now declare a variable using var in a block and try reassigning the value to that variable in another block and see if it throws an error or not.

// no error found console print secound X = 20 value
var x = 10;
var x = 20;
console.log(x);

// Create a global variable and try using that variable in another function and see if you're able to access that variable.

// i am able to access global variable in another function.
let ifpass = true;

function  score() {
    console.log(ifpass);
}