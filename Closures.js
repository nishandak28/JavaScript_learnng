//Understand lexical environment to understand this Closures

function outer(b) {
    var a = b;
    return function inner() {
        console.log(a);
    }
}

//returns the address of inner func for that instance of outer
let a = outer(5);
let b = outer(6);

//prints the address or function  
console.log(a);
console.log(b);

//calls that methods and prints the value
a();
b();