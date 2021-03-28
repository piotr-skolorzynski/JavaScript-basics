// arrays

//creating array
let myArray = [];

myArray[0] = 25;
console.log(myArray[0]); // 25

//adding values
myArray[1] = 35;

myArray[2] = true;

myArray[3] = 'hello';

console.log(myArray); // [25, 35, true, "hello"]

// updating values
myArray[2] = false;
console.log(myArray); // [25, 35, false, "hello"]

//another array creation
let myArray2 = [10,20,"hi",false];

//other method
let myArray3 = new Array();

let myArray4 = new Array(5); //creats new Array with 5 epmty slots 

//properties and methods

console.log(myArray2.length); // 4 

console.log(myArray2.sort()); // [10, 20, false, "hi"]
console.log(myArray2.reverse()); // ["hi", false, 20, 10]

// to see more visit MDN site