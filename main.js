// Date object

let myDate = new Date();
console.log(myDate);

let myPastDate = new Date(1545, 11, 2, 9, 35, 25) //year, month (from 0 to 11), day, hours, minutes, seconds, 

let myFutureDate = new Date(2515, 0, 31);

console.log(myPastDate);
console.log(myFutureDate);

//some methods

let birthday = new Date(1985, 0, 15, 11, 15, 25);
let birthday2 = new Date(1985, 0, 15, 11, 15, 25);

//get the mont of the date (0 - 11)
console.log(birthday.getMonth());

//get the full year (YYYY)
console.log(birthday.getFullYear());

//get the date of the month (1 - 31)
console.log(birthday.getDate());

//get the day of the week (0-6)
console.log(birthday.getDay());

//get the hour of the date (0-23)
console.log(birthday.getHours());

//get the number of miliseconds since 1st Jan 1970
console.log(birthday.getTime());

if (birthday == birthday2){
    console.log('birtdays are equal');
} else {
    console.log('birthdays are not equal');
} //are not equal because are diffrent objects

if (birthday.getTime() == birthday2.getTime()){
    console.log('birtdays are equal');
} else {
    console.log('birthdays are not equal');
} //are equal because we are comparing two the same numbers