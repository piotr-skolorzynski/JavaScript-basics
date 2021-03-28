// keyword THIS

const myCar2 = {
    maxSpeed: 70,
    driver: "Magda",
    drive: function (speed, time) {
        console.log(`I travelled ${speed * time} km`);
    },
    test: function () {
        console.log(this); 
    },
    logDriver: function () {
        console.log(`driver name is ${this.driver}`);
    }
};

console.log(myCar2.maxSpeed); //70
console.log(myCar2.driver); //Magda
myCar2.drive(30, 2); //I travelled 60 km
myCar2.test(); //shows object myCar2 - its properties and methods
myCar2.logDriver();