//High order fuction a function takes another function as an argument

function order(p , r, s) {
    console.log("The order is received");
    p();
    r();
    s();
}

// the below function is called call back function
function prepare() {
    console.log("The order is preparing");
}

function ready() {
    console.log("The order is ready to be served");
}

function serve() {
    console.log("The order is served to customer");
}


//  ******* Might be forgetten by the developer which order it should be *******//
// order();
// prepare();
// ready();
// serve();

order(prepare, ready, serve);


//Inbuild HOF

let n = [1,2,3,4,5,6,7];

let mul = n.map(num => num*2);
console.log(mul);

let even = n.filter(num => num%2 == 0);
console.log(even);

let sum = n.reduce((sum, num) => sum += num);
console.log(sum);