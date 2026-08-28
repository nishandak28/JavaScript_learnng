//Overloading

function add(a, b) {
    console.log(a + b);
}

function add() {
    console.log(10 + 10);
}

//function that takes any number of input ...
function add(...numbers) {
    let sum = 0;
    for(let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(add(10))
console.log(add(10, 20))
console.log(add(10, 20, 30, 40))