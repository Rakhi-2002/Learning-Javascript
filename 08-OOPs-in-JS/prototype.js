//Examples to understand Prototypes

// let myName = "'Rakhi  '";
// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

//factory functions: default functions used for CRUD operations

//declaring a function at Object level
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

//declaring a function at Array level
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
// heroPower.hitesh();

myHeros.hitesh();
myHeros.heyHitesh();

//gives error as heyHitesh() function is declared at Array level (bottom-level) and not at Object level
// heroPower.heyHitesh();   


/**
 * Inheritance
 */

const User = {
    name: "Chai",
    email: "chail@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'JS assignments',
    fullTime: true,
    __proto__: TeachingSupport
}

//with __proto__ : it allows Teacher to access all properties from User
Teacher.__proto__ = User

//modern syntax
//Qs - what are the properties and method comes under latest JS Syntax

//Sets the prototype of a specified object o to object proto or null. Returns the object o
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsernm = "ChaiAurCode    ";

String.prototype.trueLength = function(){
    console.log(`${this}`); //this - ChaiAurCode
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsernm.trueLength()

"Rani".trueLength();    //here, this refers to - Rani
"Rakhi  ".trueLength();     //here, this refers to - Rakhi

function Car(brand) {
    this.brand = brand;

    this.start = function() {
        console.log("Started");
    };
}

const car1 = new Car("Toyota");
const car2 = new Car("Honda");
const car3 = new Car("BMW");

console.log(car1.start === car2.start); //gives false as both start instances are unique


/**
 * Understanding With and Without Prototype object behaviour in JS
 * Objects with Prototype
 */

function Car1(brand) {
    this.brand = brand;
}

Car1.prototype.start = function() {
    console.log("Started");
};

const cars1 = new Car1("Toyota");
const cars2 = new Car1("Honda");
const cars3 = new Car1("BMW");

console.log(cars1.start === cars2.start);     //gives true as start is now a Shared method defined in Object's Prototype