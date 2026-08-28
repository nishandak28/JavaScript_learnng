a = "Nishand";
console.log(a, typeof a); // String Nishand

// JavaScript loosely typed
let b = 3.16;
const pi = 3.14;
console.log(typeof b, b);

// String - "", '', ``
let str = `ankit`;
console.log(str, typeof str);

// My name is Ankit aged around 10, pi value is 3.14
console.log("My name is " + str + " aged around " + a + ", pi value is " + pi);
console.log("My name is ", str); // one space

// ES6 string literals - ${varname} = value
console.log(`My name is ${str} aged around ${a}, pi value is ${pi}`);

// Boolean true or false
let isvalid = false;
console.log(typeof isvalid, isvalid);

//undefined
let name;
console.log(name)

//null
let paymentType = null;
console.log(paymentType)

//infinity
console.log(10/0)

//bingint
let bi = 100n
console.log(bi, typeof bi)

//symbol
let smb = Symbol("alice")
console.log(smb, typeof smb)

//Array
let arr = [1,2,3]
console.log(arr[2]) //particular element
console.log(arr) //entire array

//object
let person = {
    name:"nishand", //key value pair
    age:18
};
console.log(person) //entire object
console.log(person.name) //specific object element
console.log(Object.keys(person)) // keys in object
console.log(Object.values(person)) // values in object
