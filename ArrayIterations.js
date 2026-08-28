//just to iterate
let arr1 = ["nibi", "naveen", "praveen", "prathiv"]
arr1.forEach(nm => console.log(nm));

//returns new array with modification

let arr2 = [1,2,3,4,5];
arr2 = arr2.map(num => num*10);
console.log(arr2);

//returns new array with condition

let arr3 = [1,2,3,4,5];
arr3 = arr3.filter(num => num%2 === 0);
console.log(arr3);

//reducing tha whole array ex: summing all elements

let arr4 = [1,2,3,4,5];
let sum = arr4.reduce((sum,num) => sum+num);
console.log(sum);

//concatinating two arrays
let arr5 = ["red" , "yellow", "red"];
let arr6 = [1 , 2, 3, 4];
let newarr = arr5.concat(arr6);
console.log(newarr)

//joing all the elements in the array
let arr7 = ["Hi", "Hello", "how", "are", "you"];
let joined = arr7.join(" - ");
console.log(joined)

//destruct - Unpacking
let nums =[2,3,4,5];
let [first, second] = nums;
console.log(first);
console.log(second);
