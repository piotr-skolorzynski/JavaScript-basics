//  functions

//function declaration
// function getAverage (a,b) {
//     let average = (a+b)/2;
//     console.log(average);
// }

// //calling function
// getAverage(7,12);

// if we want function to return value we use command return and assign result to variable

function getAverage (a,b) {
    let average = (a+b)/2;
    console.log(average);
    return average;
}

let myResult = getAverage(7,8);
console.log(`the average is ${myResult}`);