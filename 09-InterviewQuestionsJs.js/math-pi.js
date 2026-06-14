//------------------------------------------ About Advance JavaScript =========================================

//Interview Question - Is it possible to change the value of Math.PI, Justify the answer? 
//Math.PI is immutable (cannot change its value nor modify it). JS maintains its integrity throughout the applications, as its a mathematical/global constant.
//Soln: we can create our own object and copy Math.PI property. There we can change the value

/**
 * Below gives error - Cannot redefine property: PI 
 * As Math.PI is immutable
 * Object.defineProperty(Math, "PI", {
    value: 4
});

 */

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

//Output
/**
 * {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
 */
// console.log(descriptor);

// const mynewobject = Object.create(null)

const chai = {
    name: 'Ginger Tea',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("Chai nahi bani");
    }
}

//Below gives output as 'undefined'
//getOwnPropertyDescriptor() - gives description of a property(here we are passing, object - chai). Hence, output is undefined
console.log(Object.getOwnPropertyDescriptor(chai));

console.log(Object.getOwnPropertyDescriptor(chai, "price"));

/**
 * defineProperty()
 * Adds a property to an object, or modifies attributes of an existing property.

@param o — Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
 */
Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true    //property is iterable(true) and non-iterable(false)
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
    
}