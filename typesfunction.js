//simple function
function add1(a,b,c) {
    let sum = a+b+c
    console.log(`The sum of three numbers is ${sum}`);
}
add1(1,2,3);

//Function Expression
let add2 = function(a,b,c) {
    let sum = a+b+c
    console.log(`The sum of three numbers is ${sum}`);
}; 
add2(1,2,3);

//Arrow Functions
let add3 = (a,b,c) => console.log(`The sum of three numbers is ${a+b+c}`);
add3(1,2,3);

//IIFE - Immidiately Ivocked Function expression
(function(a,b,c) {
    let sum = a+b+c;
    console.log(`The sum of three numbers is ${sum}`);
})(1,2,3);   // -> Autonomus function