//Array Declaration 2 types

//using []
let arr1 = [1,2,3,4]

//using () -> constructor
let arr2 = new Array(1,2,3,4,5)

for(let n of arr2) {
    console.log(n);
}

// //adding in end
// arr2.push(4,5,6)
// //adding at beggining
// arr2.unshift(-1,0)
// // remove from endd only one element
// arr2.pop()
// //remove from beggining only one element
// arr2.shift()

//to change whatever we need use slice
//arr.splice(start index, deletecount, item1, item2)

// to delete multiple Element
arr2.splice(2,2);

//to add element at particular index
arr2.splice(2,0,9,8)

//splice
arr2.slice(2,5)
console.log(arr2);


let arr3 = ["Apple", "orange", "mango"];
//sorting and searching

console.log(arr3.includes("Apple"));
console.log(arr3.sort());
console.log(arr3.reverse())
console.log(arr3.indexOf("Apple"))