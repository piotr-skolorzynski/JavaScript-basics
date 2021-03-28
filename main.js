// constructor function

const Car = function (maxspeed, driver) { //constructor function we start with capital letter
    this.maxspeed = maxspeed;
    this.driver = driver;
    this.drive = function (speed, time) {
        console.log(`I travelled ${speed * time} km`);
    };
    this.logDriver = function () {
        console.log(`The driver name is ${this.driver}`);
    }
};

//creating object using constructor

const myCar = new Car(70, "Piotr");

console.log(myCar.maxspeed);
console.log(myCar.driver);
myCar.drive(55, 6);
myCar.logDriver();

const myCar2 = new Car(120, "James Bond");
console.log(myCar2.maxspeed);
console.log(myCar2.driver);
myCar2.drive(115, 3);
myCar2.logDriver();