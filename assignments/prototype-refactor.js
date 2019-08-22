// /* 

// Prototype Refactor

// 1. Copy and paste your code or the solution from yesterday

class Human{
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = []
    }

    greet() {
        return `Hi, my name is ${this.name} , and i am ${this.age}`
    }

    eatingEdibles(fruits) {
        this.stomach.push(fruits);
    }
    poop() {

        if (this.stomach.length > 0) {

            this.stomach = []
        };

    }
}

class Car {
    constructor(name, make) {
        this.name = name;
        this.make = make;
        this.odometer = 0;
        this.hasCarCrashed = false;
    }

    drive(miles) {


        if (this.hasCarCrashed === true) {

            return `I crashed at ${this.odometer}`
        }
        this.odometer += miles;

    }
    crashed() {
        this.hasCarCrashed = true;
    }
    repair() {
        if (this.hasCarCrashed === true) {

            this.hasCarCrashed = false

        }
    }
}
const Vehicle = new Car();

class Child extends Human{
    constructor(name, age, play) {
        super(name, age);
        this.favoriteGame = play
    };

}
let thomas = new Child('Tom', 5, 'football');

class Dogs {
    constructor(name, breed, color) {
        this.name = name;
        this.breed = breed;
        this.color = color;

    };

    dogsCard(dogsCard) {
        return `${this.name} is a ${this.color} ${this.breed}`
    }
};

const jackie = new Dogs("jackie", "german-shepherd", "brown");
const bingo = new Dogs("bingo", "pitbull", "black");
console.log(jackie);
console.log(jackie.dogsCard());
console.log(bingo.dogsCard());



class Nee {
    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(firstName, lastName) {
        return `${this.firstName} ${this.lastName}`;
    }


    getMaritalName(newLastName) {
        this.lastName = newLastName;
    }
}
let mary = new Nee('Mary', 'poppins');

console.log(mary.getFullName());








// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

// */
