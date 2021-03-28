// strings

let myString = 'I\'m a "fun" string';
console.log(myString);
console.log(myString.length);

//methods on string
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf("string")); // gives 12, because we count from 0 
console.log(myString.indexOf('ninja')); // gives -1 if there is no such character or string

let myString2 = 'I\'m a "fun ninja" string';

if (myString2.indexOf('ninja') === -1) {
    console.log('the word ninja is not in the string');
} else {
    console.log('the word ninja starts at position' + (myString2.indexOf('ninja')+1));
}

let string1 = 'abc';
let string2 = 'bcd';
let string3 = 'ABC'

console.log(string1 === string2); //false
console.log(string1 === string3); //false
console.log(string1.toLowerCase() === string3.toLowerCase()); //true