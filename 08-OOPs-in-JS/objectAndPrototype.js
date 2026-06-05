function multipleOf5(num) {
    this.num = num;
    return num*5;
}

multipleOf5.power = 2

console.log(multipleOf5(5));

//below code shows function is a function and object too!!
console.log(multipleOf5.power);
console.log(multipleOf5.prototype);

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

//Creating custom prototypal properties for a function/constructor function 
createUser.prototype.increment = function() {
   //here, incrementing the current object's (or current instance's) score value
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`Score of ${this.score}`);    
}

//Until, we dont use new keyword, chai and tea won't be able to access the custom properties we added. So new is necessary. 
//Because this custom properties are defined outside the actual constructor function. And we are trying to inject it in the prototype itself.
//Hence, without new below object reference unable to access it

/**
 * ---------------- by Chai aur code -> new keyword functionality -------------------
 Here's what happens behind the scenes when the new keyword is used:
 
 - A new object is created: The new keyword initiates the creation of a new Javascript object.

 - A prototype is linked: The newly created object gets linked to the prototype of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

 - The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value.

 - The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
 */
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

console.log(chai);
chai.increment();
chai.printMe();
console.log(tea);
tea.increment();
tea.printMe();



