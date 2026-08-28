
//functions
function add() {
    let c = 10 + 10
    console.log(c)
}

add()

//function 2
function square(value) {
    return value*value;
}
console.log(square(5));

function circle(value) {
    let area = Math.PI * value *value;
    let perimeter = 2 * Math.PI * value;
    console.log(`Pertimeter : ${perimeter}`)
    console.log(`Area : ${area}`)
}
circle(5);

function simpleInterest(principle, time, rate) {
    return (principle * time * rate)/100;
}
console.log(simpleInterest(100, 3, 5));


//4 types of functions

//1
function rec1(length , breath) {
    console.log(length * breath);
}
rec1(5,6);
 
function rec2(length, breath) {
    return length*breath;
}
console.log(rec2(5,6))

