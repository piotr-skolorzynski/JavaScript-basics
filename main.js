// creating objects

let myCar = new Object();
//adding properties
myCar.maxSpeed = 50;
myCar.driver = "Piotr";

console.log(myCar.driver); // Piotr

//adding methods

myCar.drive = function () {
    console.log('now driving');
};

//calling method drive on object myCar
myCar.drive();

//another method to create object
const myCar2 = {
    maxSpeed: 70,
    driver: "Magda",
    drive: function (speed, time) {
        console.log(`I travelled ${speed * time} km`);
    }
};

console.log(myCar2.maxSpeed); //70
console.log(myCar2.driver); //Magda
myCar2.drive(30, 2); //I travelled 60 km