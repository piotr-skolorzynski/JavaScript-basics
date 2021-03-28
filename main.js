//  NaN - not a number

let a = '7';
let b = 5;

console.log(a+b); // string '75'

console.log(a*b); //number 35

let c = 'apple';

console.log(b*c); //NaN usefull to inform that some variable isn't a number dispite the fact it should

//how to protect

if (isNaN(c)) {
    console.log('that int even a number, thickie');
} else {
    console.log(`meaning of life is ${a*b}`);
}