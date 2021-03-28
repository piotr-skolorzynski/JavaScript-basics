// local vs global scope

var foo  = 20; //Global variable

function myFunction () {
    var bar = 10; //local variable
};

function getAverage (a,b) {
    var average = (a+b)/2; //local variable2
    console.log(average);
    return average;
};

var myResult = getAverage(7,11); //global variable

function logResult () {
    console.log(`the average is ${myResult} inside the function`);    
}

logResult();