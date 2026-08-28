console.log(1 + "2" + 3); //123

console.log(1 + 2 + "3"); //33

console.log("5" - 2); //3
console.log("5" + 2); //52

console.log(0 == false); //true
console.log(0 === false); //false

let a = 5;
console.log(a++); //5
console.log(a); //6

let b = 5;
console.log(++b); //6

let x = 5;
let y = x++ + ++x; //5+7 = 12
console.log(y);

console.log(true + true); //2
console.log(true + false);//1

console.log([] == false); //true

console.log("" == 0); //true

console.log(5 && 10); // 10 checks first num and return sencond num if true

console.log(0 || 100); //100

console.log(!"hello"); //false hello is consitered as boolean
console.log(!0); //true

console.log("10" * "2"); //20 * acts only on  numbers

console.log("10" / 2); //5

console.log("hello" * 2); 

console.log(typeof NaN);

console.log([] + []);

console.log([] + {});
console.log({} + []);

let c = "5";
let d = 2;
console.log(c - d + c); //35

console.log([] == ![]);// compares adress so true

console.log(typeof null); //object

console.log([] == 0); //true

console.log([1,2] + [3,4]);

console.log("2" > "12");

console.log(2 > "12");

console.log(Boolean("false"));

console.log(Boolean(""));

console.log(Boolean(""));

console.log(100 / "10");

console.log(true == "1");

console.log(false == "0");

console.log(false === "0");

console.log(1 < 2 < 3);

console.log(3 > 2 > 1);

console.log(+"10");

console.log(+"hello");

let p = 10;
console.log(p += 5);

let q = 10;
console.log(q *= 2);

console.log(2 ** 3);

console.log(typeof typeof 1);

console.log([] instanceof Array);

console.log({} instanceof Object);

console.log([] == "");

console.log([0] == 0);